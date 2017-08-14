const timeFacts = require('moment');
const chalk = require('chalk');
let currentSeconds = timeFacts([2017, 8, 14]).isDST()

console.log("It is " + (chalk.blue(timeFacts().format('dddd LL, LTS'))) + ".")
console.log("It is the " + (chalk.magenta(timeFacts().dayOfYear() + "th")) + " day of the year.")

let hours = timeFacts().hours();
let minutes = timeFacts().minutes();
let seconds = timeFacts().seconds();

console.log("It is " + (chalk.cyan((hours*60*60) + (minutes*60) + (seconds))) + " seconds into the day.")

if (currentSeconds === true){
  console.log("It " + (chalk.green("is")) + " during Daylight Savings Time.")

} else {(console.log("It is not during Daylight Savings Time."))

}

let year = timeFacts().year();
let leapYear = timeFacts([year]).isLeapYear();

if (leapYear === false){
  console.log("It " + (chalk.red("is not") + " a leap year"))
}
