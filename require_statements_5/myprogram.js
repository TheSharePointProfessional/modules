const myModule1 = require('./dog')
const myModule2 = require('./cat')
const myModule3 = require('./randomValue')(myModule1,myModule2)
console.log(myModule3)