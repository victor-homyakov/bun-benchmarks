// "@discoveryjs/json-ext": "0.5.7"
const { stringifyStream } = require('@discoveryjs/json-ext');

/*
// pipe into a console
stringifyStream(data).pipe(process.stdout);

// pipe into a file
stringifyStream(data).pipe(fs.createWriteStream('path/to/file.json'));

// pipe into a stream
stringifyStream(data).pipe(writableStream);

// wrapping into a Promise
new Promise((resolve, reject) => {
    stringifyStream(data)
        .on('error', reject)
        .pipe(stream)
        .on('error', reject)
        .on('finish', resolve);
});

// handle events
stringifyStream(data)
    .on('data', chunk => console.log(chunk))
    .on('error', error => console.error(error))
    .on('finish', () => console.log('DONE!'));
*/

/**
 * @param {Object} json
 * @param {WritableStream} stream
 */
function stringify(json, stream) {
    // stringifyStream(json).pipe(process.stdout);
    stringifyStream(json).pipe(stream);
}

module.exports = { stringify };
