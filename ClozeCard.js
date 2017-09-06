var BasicCard = require("./BasicCard.js");
//var basic = require("basic.json");

function ClozeCard(text, cloze) {
  if(this instanceof ClozeCard) {
  this.fullText = text
  this.partial = text.replace(cloze, "...")
  this.cloze = cloze
  //logs an error when the cloze deletion doesn't appear in the text
  if(this.fullText.includes(this.cloze)) {
   console.log(fullText);
  }
  else {
    var errorMessage = "Your full text does not contain your cloze deletion."
      console.log (errorMessage);
  }
  }
  else{
    return new ClozeCard(text, cloze)
  }
};

//Test ClozeCard
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "tom");

console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.fullText);


module.exports = ClozeCard;
