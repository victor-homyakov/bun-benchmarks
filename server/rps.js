let countPrev = 0;
let count = 0;

const REPORT_TIME_MS = 5000;

setInterval(() => {
  const rps = Math.round((count - countPrev) / (REPORT_TIME_MS / 1000));
  if (rps > 0) {
    console.log("Requests:", count, "per second:", rps);
  }
  countPrev = count;
}, REPORT_TIME_MS);

function incrementRequestCount() {
  count++;
}

module.exports = { incrementRequestCount };
