var moment = require("moment");

console.log(moment().format());

console.log(moment());

// January 1st 1970 @ 12:00 am -> 0
// January 1st 1970 @ 12:01 am -> 60

var now = moment();
console.log("Current Timestamp : ", now.unix());

var timestamp = 1490386653;
var currentMoment = moment.unix(timestamp);
console.log("Current moment : ", currentMoment.format());

var current = moment();
console.log("Current Timestamp : ",current.format("MMM D, YY @ h:mm a"));

// JAnuary 3rd, 2017 @ 12:13 AM
console.log("Current Timestamp : ",current.format("MMMM Do, YYYY @ h:mm A"));

