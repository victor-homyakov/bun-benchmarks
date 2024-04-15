/**
 * This is a benchmark for parsing a line of text with buffer statistics.
 *
 * The article: https://habr.com/ru/companies/tensor/articles/534340/
 *
 * The example of log file is taken from
 * https://gist.githubusercontent.com/Kilor/8c4fee60a94073c1accc6bdd167e9990/raw/8b2918e5eb55c1e61034e80adb10554551434718/buffers.txt
 */

// To avoid slowdown from GC, run node with the following keys:
// --expose-gc --initial-old-space-size=1024

const fs = require("fs");
//const heapdump = require('heapdump');

const buffers = fs.readFileSync("buffers.txt").toString().split("\n");

const parse0 = (line) => {
  return {};
};

const parse1 = (line) => {
  let rv = {};
  line
    .slice("Buffers: ".length) // constant prefix
    .split(", ")
    .forEach((part) => {
      // 'shared ..., local ..., temp ...' => ['shared ...', 'local ...', 'temp ...']
      let [kind, ...pairs] = part.split(" "); // 'shared hit=1 read=2' => ['shared', ['hit=1', 'read=2']]
      pairs.forEach((pair) => {
        let [type, val] = pair.split("="); // 'hit=1' => ['hit', '1']
        rv[`${kind}-${type}`] = Number(val); // ['shared-hit'] = 1
      });
    });
  return rv;
};

const buffersRE2 =
  /^Buffers:(?:,? shared(?: hit=(\d+))?(?: read=(\d+))?(?: dirtied=(\d+))?(?: written=(\d+))?)?(?:,? local(?: hit=(\d+))?(?: read=(\d+))?(?: dirtied=(\d+))?(?: written=(\d+))?)?(?:,? temp(?: read=(\d+))?(?: written=(\d+))?)?$/;
const buffersKeys2 = [
  "shared-hit",
  "shared-read",
  "shared-dirtied",
  "shared-written",
  "local-hit",
  "local-read",
  "local-dirtied",
  "local-written",
  "temp-read",
  "temp-written",
];
const parse2 = (line) =>
  line
    .match(buffersRE2)
    .slice(1) // match[0] contains the whole string, we don't need it
    .reduce(
      (rv, val, idx) => (
        val !== undefined && (rv[buffersKeys2[idx]] = Number(val)), rv
      ),
      {}
    );

const buffersRE3 =
  /^Buffers:(?:,? shared(?: hit=(\d+))?(?: read=(\d+))?(?: dirtied=(\d+))?(?: written=(\d+))?)?(?:,? local(?: hit=(\d+))?(?: read=(\d+))?(?: dirtied=(\d+))?(?: written=(\d+))?)?(?:,? temp(?: read=(\d+))?(?: written=(\d+))?)?$/;
const buffersKeys3 = [
  "dummy",
  "shared-hit",
  "shared-read",
  "shared-dirtied",
  "shared-written",
  "local-hit",
  "local-read",
  "local-dirtied",
  "local-written",
  "temp-read",
  "temp-written",
];
const parse3 = (line) => {
  const rv = {};
  const match = line.match(buffersRE3);
  for (let i = 1, len = match.length; i < len; i++) {
    const val = match[i];
    if (val !== undefined) {
      rv[buffersKeys3[i]] = Number(val);
    }
  }
  return rv;
};

const buffersKeys4 = [
  "shared-hit",
  "shared-read",
  "shared-dirtied",
  "shared-written",
  "local-hit",
  "local-read",
  "local-dirtied",
  "local-written",
  "temp-hit",
  "temp-read",
  "temp-dirtied",
  "temp-written",
];
const parse4 = (line) => {
  let rv = {};
  let state;
  for (let off = 9 /*'Buffers: '*/, ln = line.length; off < ln; ) {
    if (state === undefined) {
      switch (line.charCodeAt(off)) {
        case 0x73: // s = shared
          state = 0;
          off += 7;
          break;
        case 0x6c: // l = local
          state = 4;
          off += 6;
          break;
        case 0x74: // t = temp
          state = 8;
          off += 5;
          break;
      }
    } else {
      let key;
      switch (line.charCodeAt(off)) {
        case 0x68: // h = hit
          key = 0;
          off += 4;
          break;
        case 0x72: // r = read
          key = 1;
          off += 5;
          break;
        case 0x64: // d = dirtied
          key = 2;
          off += 8;
          break;
        case 0x77: // w = written
          key = 3;
          off += 8;
          break;
      }
      let sp = line.indexOf(" ", off);
      let eos = sp == -1 || line.charCodeAt(sp - 1) == 0x2c; // ','
      //let val = Number(line.slice(off, sp == -1 ? undefined : sp - (eos ? 1 : 0)));
      let val = 0;
      for (
        let i = off, lim = sp == -1 ? line.length : sp - (eos ? 1 : 0);
        i < lim;
        i++
      ) {
        val *= 10;
        val += line.charCodeAt(i) - 0x30; // '0'
      }
      rv[buffersKeys4[state + key]] = val;
      if (sp == -1) {
        break;
      } else {
        off = sp + 1;
      }
      if (eos) {
        state = undefined;
      }
    }
  }
  return rv;
};

let noGcWarned = false;
function measure(parseBuffers) {
  if (global.gc) {
    global.gc();
  } else if (!noGcWarned) {
    noGcWarned = true;
    console.log("no global.gc detected");
  }

  // memory before the test
  //heapdump.writeSnapshot();

  let bh = 0;

  const hrb = process.hrtime();
  for (let line of buffers) {
    let obj = parseBuffers(line);
    bh += Object.keys(obj);
  }
  const hre = process.hrtime(hrb);

  // memory after the test
  //heapdump.writeSnapshot();

  if (Math.random() > 1) {
    console.log(bh);
  }

  // Time in ms
  return Math.round(hre[0] * 1e3 + hre[1] / 1e6);
}

const tests = [
  ["parse0", parse0],
  ["parse1", parse1],
  ["parse2", parse2],
  ["parse3", parse3],
  ["parse4", parse4],
];

const WARMUP_COUNT = 3;
const MEASURE_COUNT = 20;

for (let i = 0; i < WARMUP_COUNT + MEASURE_COUNT; i++) {
  for (const test of tests) {
    test.push(measure(test[1]));
  }
}

console.log("Times, ms");
for (const test of tests) {
  const times = test.slice(WARMUP_COUNT);
  const sorted = times.slice().sort((a, b) => a - b);
  const med = sorted[times.length >> 1];
  console.log(test[0], "min:", sorted[0], "med:", med, times.join(" "));
}
