'use strict';
let score = 0;
let userName = prompt('Please enter your name');
console.log('User enter his/her name');

let firstQuestion=null;
function firstQus() {
  
 firstQuestion = prompt('Am I a doctor? (Yes/No or Y/N)');
switch (firstQuestion.toUpperCase()) {
  case 'YES':
  case 'Y':
    console.log("user said yes");
    break;

  case 'NO':
  case 'N':
    console.log('user said no');
    score++;
    break;

  default:
    console.log('please enter Yes or No');
    break;
} return firstQuestion;
}
firstQus();

let secondQuestion=null;
function scdQus() {
 
 secondQuestion = prompt('Am I happy? (Yes/No or Y/N)');
switch (secondQuestion.toUpperCase()) {
  case 'YES':
  case 'Y':
    console.log("user said yes");
    score++;
    break;

  case 'NO':
  case 'N':
    console.log('user said no');
    break;

  default:
    console.log('please enter Yes or No');
    break;
} return secondQuestion;
}
scdQus();

let thirdQuestion=null;
function thrdQus() {

 thirdQuestion = prompt('Am I from Jordan? (Yes/No or Y/N)');
switch (thirdQuestion.toUpperCase()) {
  case 'YES':
  case 'Y':
    console.log("user said yes");
    score++;
    break;

  case 'NO':
  case 'N':
    console.log('user said no');
    break;

  default:
    console.log('please enter Yes or No');
    break;
} return thirdQuestion ;
}
thrdQus();

let fourthQuestion=null;
function fourQus() {
  
 fourthQuestion = prompt('Am I studying Software development? (Yes/No or Y/N)');
switch (fourthQuestion.toUpperCase()) {
  case 'YES':
  case 'Y':
    console.log("user said yes");
    score++;
    break;

  case 'NO':
  case 'N':
    console.log('user said no');
    break;

  default:
    console.log('please enter Yes or No');
    break;
} return fourthQuestion;
}
fourQus();

let fifthQuestion=null;
function fifthQus() {

 fifthQuestion = prompt('Do you think am I know how to write JS code? (Yes/No or Y/N)');
switch (fifthQuestion.toUpperCase()) {
  case 'YES':
  case 'Y':
    console.log("user said yes");
    score++;
    break;

  case 'NO':
  case 'N':
    console.log('user said no');
    break;

  default:
    console.log('please enter Yes or No');
    break;
} return fifthQuestion;
}
fifthQus();

let sixth=null ;
function sixQus() {
  
 sixth = prompt('Can guess my height ?');
  if (sixth < 150) {
    console.log("Too short");
    for (let i = 0 ; i <= 3 && sixth < 150 ;i++){
       sixth = prompt('Can guess my height ?');
       if(sixth < 150){
         console.log('Again');
       }else{
         break;
       }
     }
    

  } else if (sixth > 180) {
    console.log("Too high");
    for (let i = 0 ; i <= 3 && sixth > 180 ;i++){
      sixth = prompt('Can guess my height ?');
      if(sixth > 180){
        console.log('Again');
      }else{
        break;
      }
    }

  } else if (sixth >=150 && sixth <=180) {
    console.log("Right");
    score++;
  }
return sixth;
}
sixQus();

let seventh=null;
function sevQus() {
  
let car = ['ferrari' ,'ford' ,' bmw' , 'audi'];
 seventh = prompt('Which car I like ? Ferrari ,Ford , Bmw , Audi ');
for(let i=0;i<6;i++){
  seventh = prompt('Which car I like ? Ferrari ,Ford , Bmw , Audi ');
  seventh.toUpperCase();
  if(seventh === 'ferrari'||seventh==='bmw'){
      score++;
      alert('Thats Right!!');
      break;
  }else{
      alert('Wrong try again ');
  }
  if(i == 5){
      alert('You lost your attempts');
  }
} return seventh ;
}
sevQus();



alert('Welcome to the site  ' + userName + '\n' +
  'Am I a doctor? ' + firstQuestion + '\n' +
  'Am I happy? ' + secondQuestion + '\n' +
  'Am I from Jordan? ' + thirdQuestion + '\n' +
  'Am I studying Software development?  ' + fourthQuestion + '\n' +
  'Do you think am I know how to write JS code? ' + fifthQuestion + '\n'+
  'Your Final score is  ' + score + "out of 7");