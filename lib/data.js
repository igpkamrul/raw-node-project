/*
 * Title: Data related
 * Description: handle data
 * Author: Kamrul Haider Chowdhury
 * Date: 08/24/2022
 *
 */

// dependencies
const fs = require("fs");
const path = require("path");

// module scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, "/../.data/");

// creating data file
lib.create = (dir, file, data, callback) => {
  // Open file to write
  fs.open(`${lib.basedir + dir}/${file}.json`, "wx", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      // convert data to string
      const stringData = JSON.stringify(data);

      // write data
      fs.writeFile(fileDescriptor, stringData, (err) => {
        if (!err) {
        } else {
          fs.close(fileDescriptor, (err) => {
            if (!err) {
              callback(false);
            } else {
              callback("error closing the new file");
            }
          });
        }
      });
    } else {
      callback(err);
    }
  });
};

// read a file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf8", (err, data) => {
    callback(err, data);
  });
};

// update data
lib.update = (dir, file, data, callback) => {
  // open the file
  fs.open(`${lib.basedir + dir}/${file}.json`, "r+", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      // convert the data to string
      const stringData = JSON.stringify(data);

      //   truncate the file
      fs.ftruncate(fileDescriptor, (err) => {
        if (!err) {
          // write the file and close it
          fs.writeFile(fileDescriptor, stringData, (err) => {
            if (!err) {
              // close the file
              fs.close(fileDescriptor, (err) => {
                if (!err) {
                  callback("false");
                } else {
                  callback(err);
                }
              });
            } else {
              callback(err);
            }
          });
        } else {
          callback(err);
        }
      });
    } else {
      console.log(err);
    }
  });
};

// delete existing file
lib.delete = (dir, file, callback) => {
  fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
    if (!err) {
      callback("false");
    } else {
      callback(err);
    }
  });
};
module.exports = lib;
