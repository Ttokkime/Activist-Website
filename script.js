/* .js files add interaction to your website */

var generateFact = document.getElementById("generate-fact");
var factText = document.getElementById("fact-text");

if (generateFact != null) {
  generateFact.addEventListener('click', onGenerateFactClick);
}


function onGenerateFactClick()
{
var quoteArray = ["More than half of employed black women reported experiencing some form of gender discrimination at work, compared to 40 percent of white and hispanic women.","Over one-third of women in a 2018 survey reported being sexually harassed at work.","The majority of incidents involving workplace harassment go unreported.","Discriminatory acts include demotion, docked pay, and verbal or physical abuse"];

var randomIndexValue = Math.random() * 4;
//returns random decimal from 0 - 3
var arrayIndex = Math.floor(randomIndexValue);
factText.innerHTML = quoteArray[arrayIndex];

}