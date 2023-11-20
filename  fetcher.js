const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

console.log(`Attempting to download from ${url}...`);

request(url, (error, response, body) => {
  if (error) {
    console.error('Error making HTTP request:', error);
    return;
  }

  console.log(`Received response. Writing to file ${filePath}...`);

  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});
