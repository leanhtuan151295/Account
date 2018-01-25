var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;

var account = mongoose.Schema({
    "username": { type: String, required: true },
    "password": { type: String, required: true },
    "group": { type: ObjectId, required: true ,ref :'group'},
    "fullname": { type: String },
    "phone": { type: String },
    "email": { type: String },
    "active": { type: Boolean, required: true }

}, { collection: 'Account' })

var group = mongoose.Schema({
    "name": { type: String, required: true },
    "description": { type: String },
    "permissions": { type: Object },
    "active": { type: Boolean, required: true }
}, { collection: 'Group' })

module.exports.account = mongoose.model('account', account);
module.exports.group = mongoose.model('group', group);