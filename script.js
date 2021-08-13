/* .js files add interaction to your website */
/*define the button in the DOM
var button = document.getElementById("btn");

//add event on click 
button.addEventListener("click", clickAlert);

/* 
This function sends an alert to the user that a click has occurred. 
It requires no input
*/

/*function clickAlert() {
  alert("you clicked on something!");
};*/

var experienceIt = [
  "You've been working from <strong>8am to 5pm on end</strong>, standing up the whole time while waving at passing tourists.",/*0*/
  "Outside on a hot summer saturday afternoon the thermometers <strong>hit 35 °C</strong>. Inside the costume your wearing, coated with fur, temperature  <strong>can easily reach 40°C</strong>.",/*1*/
  "You feel like your whole body is <strong>melting</strong> and you could pass out from heat or exhaustion at any time.",/*2*/]

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFeeling);

function displayFeeling(){
  fact.innerHTML = experienceIt[count];
  count++;
  if (count == experienceIt.length){
    count = 0;
  }
}
