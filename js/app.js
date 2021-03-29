'use strict';
let userName = prompt('Please enter your name');
   console.log('User enter his/her name');

let firstQuestion = prompt('Am I a doctor? (Yes/No or Y/N)');
 switch(firstQuestion.toUpperCase()){
   case 'YES':
   case 'Y':
       console.log("user said yes");
       break;
   
    case 'NO': 
    case 'N':
      console.log('user said no');
      break;
 
    default:
         console.log('please enter Yes or No');
        break;
   }

let secondQuestion = prompt('Am I happy? (Yes/No or Y/N)');
 switch(secondQuestion.toUpperCase()){
   case 'YES':
   case 'Y':
       console.log("user said yes");
       break;
   
    case 'NO': 
    case 'N':
      console.log('user said no');
      break;
 
    default:
         console.log('please enter Yes or No');
        break;
   }

let thirdQuestion = prompt('Am I from Jordan? (Yes/No or Y/N)');
   switch(thirdQuestion.toUpperCase()){
     case 'YES':
     case 'Y':
         console.log("user said yes");
         break;
     
      case 'NO': 
      case 'N':
        console.log('user said no');
        break;
   
      default:
           console.log('please enter Yes or No');
          break;
     }

let fourthQuestion = prompt('Am I studying Software development? (Yes/No or Y/N)');
     switch(fourthQuestion.toUpperCase()){
       case 'YES':
       case 'Y':
           console.log("user said yes");
           break;
       
        case 'NO': 
        case 'N':
          console.log('user said no');
          break;
     
        default:
             console.log('please enter Yes or No');
            break;
       }

let fifthQuestion = prompt('Do you think am I know how to write JS code? (Yes/No or Y/N)');
       switch(fifthQuestion.toUpperCase()){
         case 'YES':
         case 'Y':
             console.log("user said yes");
             break;
         
          case 'NO': 
          case 'N':
            console.log('user said no');
            break;
       
          default:
               console.log('please enter Yes or No');
              break;
         }
  
alert('Welcome to the site  ' + userName + '\n'+
    'Am I a doctor? ' +firstQuestion + '\n'+
    'Am I happy? ' +secondQuestion + '\n'+
    'Am I from Jordan? ' +thirdQuestion + '\n'+
    'Am I studying Software development?  ' +fourthQuestion + '\n'+
    'Do you think am I know how to write JS code? ' +fifthQuestion + '\n');