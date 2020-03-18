// include node fs module
var fs = require('fs');


// writeFile function with filename, content and callback function
fs.writeFile('sample.txt', 'Learn Node FS module', function(err) {
  if (err) throw err;
  console.log('File is created successfully.');
});


var data = "\nLearn Node.js with the help of well built Node.js Tutorial.";
// append data to file
fs.appendFile('sample.txt', data, 'utf8',
  // callback function
  function(err) {
    if (err) throw err;
    // if no error
    console.log("Data is appended to file successfully.");
  });

// read file sample.txt
fs.readFile('sample.txt',
  // callback function that is called when reading file is done
  function(err, data) {
    if (err) throw err;
    // data is a buffer containing file content
    console.log(data.toString('utf8'));
  });


fs.rename('sample.txt', 'sample_old.txt', function(err) {
  if (err) throw err;
  console.log('File Renamed.');
});

// delete file named 'sample.txt'
/*
fs.unlink('sample_old.txt', function(err) {
  if (err) throw err;
  // if no error, file has been deleted successfully
  console.log('File deleted!');
});
*/
