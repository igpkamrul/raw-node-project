/*
 * Title: utilities
 * Description: utilities
 * Author: Kamrul Haider Chowdhury
 * Date: 08/24/22
 *
 */

// dependencies

// module scaffolding
const crypto = require("crypto");
const utilities = {};
const environments = require("./environments");

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
// hashing
utilities.hash = (str) => {
  if (typeof str === "string" && str.length > 0) {
    const hash = crypto
      .createHmac("sha256", environments.secretKey)
      .update(str)
      .digest("hex");
    return hash;
  } else {
    return false;
  }
};

// export module
module.exports = utilities;
