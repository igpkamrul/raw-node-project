/*
 * Title: utilities
 * Description: utilities
 * Author: Kamrul Haider Chowdhury
 * Date: 08/24/22
 *
 */

// dependencies

// module scaffolding
const utilities = {};

// parse json string to object
utilities.parseJSON = (jsonString) => {
  let outPut;
  try {
    outPut = JSON.parse(jsonString);
  } catch {
    outPut = {};
  }
  return outPut;
};

// export module
module.exports = environmentToExport;
