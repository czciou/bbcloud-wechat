var WeChatAPI = require('wechat-api');
var nconf = require('nconf');
var api = new WeChatAPI(nconf.get('wechat:appId'), nconf.get('wechat:appSecret'));
module.exports = api;
