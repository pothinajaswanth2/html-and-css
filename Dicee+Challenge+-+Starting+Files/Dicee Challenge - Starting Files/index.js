var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImgSrc = "images/" + randomDiceImg;

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "player 2 wins"
}
else
{
    document.querySelector("h1").innerHTML = " Draws"
}

console.log(randomImgSrc2);
