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

function setMessage(text) {
    defaultIncomingConf.text = text;
}

/**
 * dooray message Send
 *
 * @param {string} serviceUrl
 * @param {string} text
 * @param {string} etc ( botName, botIconImage, {list} attachments )
 */
Dooray.prototype.send = async function(serviceUrl, text, /* optional */ ...etc) {
    if(Array.isArray(etc)) {
        for(let i = 0; i < etc.length; i++) {
            if(i === 0) defaultIncomingConf["botName"]      = etc[i];
            if(i === 1) defaultIncomingConf["botIconImage"] = etc[i];
            if(i === 2) defaultIncomingConf["botIconImage"] = etc[i];
            if(i === 3) defaultIncomingConf["attachments"]  = Array.isArray(etc[i]) ? etc[i] : [];
        }
    }

    setMessage(text);
    initHttpConf(serviceUrl);

    await axios.request(httpConf);
}

/**
 * dooray message Send
 *
 * @param {string} serviceUrl
 * @param {string} text
 * @param callback or etc ( botName, botIconImage, {list} attachments )
 * @param callback
 */
Dooray.prototype.sendCallback = function(serviceUrl, text, /* optional */ etc, callback) {
    if(Array.isArray(etc)) {
        for(let i = 0; i < etc.length; i++) {
            if(i === 0) defaultIncomingConf["botName"]      = etc[i];
            if(i === 1) defaultIncomingConf["botIconImage"] = etc[i];
            if(i === 2) defaultIncomingConf["botIconImage"] = etc[i];
            if(i === 3) defaultIncomingConf["attachments"]  = Array.isArray(etc[i]) ? etc[i] : [];
        }
    }
    else {
        callback = etc;
    }

    setMessage(text);
    initHttpConf(serviceUrl);

    axios.request(httpConf)
    .then(function(response) {
        console.log("none");
        return callback();
    }, function(error){
        console.log("error :: ");
        return callback(error);
    });
}

module.exports = Dooray;
module.exports.default = Dooray;