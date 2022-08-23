/*
 * Title: Routes
 * Description: Application Routes
 * Author: Kamrul Haider Chowdhury
 * Date: 08/23/22
 *
 */

// dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
