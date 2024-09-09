
function main(){
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber=Math.floor(randomNumber1)+1;
document.getElementById("player1").setAttribute("src", "./images/dice" + randomNumber + ".png");


var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumbers=Math.floor(randomNumber2)+1;
document.getElementById("player2").setAttribute("src", "./images/dice" + randomNumbers + ".png");


if(randomNumber>randomNumbers){
    var play1=document.querySelector("h1")
    play1.innerHTML="Player1 Wins";
}
if(randomNumbers>randomNumber){
    var play2=document.querySelector("h1")
    play2.innerHTML="Player2 Wins";
}
if(randomNumber==randomNumbers){
    var play3=document.querySelector("h1")
    play3.innerHTML="Draw!";
}
}
main();