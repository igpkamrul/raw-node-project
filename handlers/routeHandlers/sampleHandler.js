/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Kamrul Haider Chowdhury
 * Date: 08/23/22
 *
 */
// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
