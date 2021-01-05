var email= document.getElementById("email");
var error= document.getElementById("error");
var number= document.getElementById("number");
var pwd= document.getElementById("password");
var box1= document.getElementById("strengthbox1");
var box2= document.getElementById("strengthbox2");
var box3= document.getElementById("strengthbox3");
var img= document.getElementById("img");

  function validate()
  {
     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     var pwdexp= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
     

    if((regexp.test(email.value)) &&  (phoneno.test(number.value)) && (pwdexp.test(pwd.value)))
   {
         
         return true;
     }
     else{
       if(regexp.test(email.value)==false)
       {
         error.innerHTML="Please enter a valid email";
         error.style.color="red";
       return false;
       }
       else if(phoneno.test(number.value)==false)
       {
        error.innerHTML="Please enter a valid number";
        error.style.color="red";
      return false;
       }
       else if(pwdexp.test(pwd.value)==false)
       {
        error.innerHTML="Please enter a valid password";
        error.style.color="red";
      return false;
       }
       
       else
       {
        error.innerHTML="Invalid Credentials";
        error.style.color="red";
      return false;
       }
     } 
 }
 function validpwdon()
 {
  passwordHelpInline.innerHTML="It must contain minimum 8 characters, at least one uppercase, one lower case, and at least one number";
  passwordHelpInline.style.color="red";
 }
 function validpwdof()
 {
  passwordHelpInline.innerHTML="";
 }

function validpwdup()
 {
  if(pwd.value.length>=7)
  {
    box1.style.backgroundColor="green";
    box2.style.backgroundColor="green";
    box3.style.backgroundColor="green";
   
    
  return;
  }
  else if(pwd.value.length>=5 && pwd.value.length<7)
  {
    box1.style.backgroundColor="orange";
    box2.style.backgroundColor="orange";

    


  }
  else{
    box1.style.backgroundColor="red";
    box2.style.backgroundColor="white";
    box3.style.backgroundColor="white";
}

function details()
{
 msg.innerHTML("Your responses have been recorded.");
 msg.style.color="blue";
 return(true);
}




 }

  