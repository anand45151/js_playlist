const fs = require('fs');
/**
 * 
 * 
 * this is the syntax Syncc....... for writing to a file in node js
 */

// fs.writeFileSync('output.txt', 'Hello, World!', 'utf8');


/**
 * 
 * this is the syntax ASyncc....... for writing to a file in node js
 */

/*fs.read('output.txt', 'Hello, World!', 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File written successfully.');
    }
});
*/


const res = fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File read successfully.');
        console.log('File content:', data);
    }
});

