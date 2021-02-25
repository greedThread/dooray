const axios = require('axios');

let defaultService = "incoming";
let defaultIncomingConf;
let httpConf;

/**
 * Create a new instance of dooray
 *
 * @param {String} serviceName
 */
function Dooray(serviceName) {
    if (serviceName === "incoming") {
        defaultService = serviceName;
    }

    defaultIncomingConf = {
        "botName": "MyBot",
        "botIconImage": "https://static.dooray.com/static_images/dooray-bot.png",
        "text":"Node.js dooray! Library"
    }

    httpConf = {
        method   : "POST",
        headers  : {"content-type": "application/json"},
        data     : "",
        url      : "",
        // data : JSON.stringify(sendData) + " " + serviceUrl
        // url      : serviceUrl,
    }
}

function initHttpConf(serviceUrl) {
    httpConf.url   = serviceUrl;
    httpConf.data = JSON.stringify(defaultIncomingConf) + " " + serviceUrl;
}

function setMessage(text, ...etc) {
    defaultIncomingConf.text = text;
}

/**
 * dooray message Send
 *
 * @param {string} serviceUrl
 * @param {string} text
 * @param {string} etc ( botName, botIconImage, {list} attachments )
 */
Dooray.prototype.send = async function(serviceUrl, text, ...etc) {
    if(Array.isArray(etc)) {
        for(let i = 0; i < etc.length; i++) {
            if(i === 0) defaultIncomingConf["botName"]      = etc[i];
            if(i === 1) defaultIncomingConf["botIconImage"] = etc[i];
            if(i === 2) defaultIncomingConf["botIconImage"] = etc[i];
            if(i === 3) defaultIncomingConf["attachments"]  = Array.isArray(etc[i]) ? etc[i] : [];
        }
    }

    setMessage(text, ...etc);
    initHttpConf(serviceUrl);

    await axios.request(httpConf);
}

module.exports = Dooray;
module.exports.default = Dooray;