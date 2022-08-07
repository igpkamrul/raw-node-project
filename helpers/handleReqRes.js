/*
 * Title: Handle Request Response
 * Description: Handle Resquest and response
 * Author: Kamrul Haider Chowdhury
 * Date: 08/07/2022
 *
 */
const { StringDecoder } = require('string_decoder');
const url = require('url');

// module scafolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handleing
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end;
        console.log(realData);
        res.end('hello world');
    });
};
module.exports = handler;
