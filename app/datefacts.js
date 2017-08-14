const timeFacts = require('moment');
console.log("It is " + timeFacts().format('dddd LL, LTS') + ".")
console.log("It is the " + timeFacts().dayOfYear() + "th day of the year.")
