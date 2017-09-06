var ClozeCard = require("./ClozeCard.js");
//var basic = require("./basic.json");


function BasicCard (front, back) {
  if(this instanceof BasicCard) {
  this.front = front
  this.back = back
  }
  else {
    return new BasicCard(front, back)
  }
};


//Test BasicCard
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

 console.log(firstPresident.back);
 console.log(firstPresident.front);
//console.log(firstPresident);

module.exports = BasicCard;
//When I use the terminal to access the console.log events in this file, why does ClozeCard.js run first?
