"use strict";

function validateForm(){  //Funció que cridem des del Form onsubmit.

  console.log("FUNCIONA");

  var acumErrors = 0;
 
  // Seleccionem els camps a validar

  var username = document.getElementById("name_login");//No posem .value ! Ho posem a les condicions.
  var surname = document.getElementById("surname_login");
  var email = document.getElementById("email_login"); 
  var phoneNum = document.getElementById("phoneNum"); 
  var password1 = document.getElementById("password1"); 
  var password2 = document.getElementById("password2"); 
  var avisLegal = document.getElementById("defaultCheck2");

// +++++  ALTRA MANERA D'AGAFAR ELS INPUTS DE FORM PER L'ATRIBUT name="" +++++
// var name = document.forms["loginForm"]["user_name_login"].value; 
// var surname = document.forms["loginForm"]["user_surname_login"].value;
// var email = document.forms["loginForm"]["user_mail_login"];
// var phoneNum = document.forms["loginForm"]["user_phone"];
// var password1 = document.forms["loginForm"]["user_password"];
// var password2 = document.forms["loginForm"]["confirm_password"];

if(username.value == ""){
  document.getElementById("errorName_login").innerHTML = "Siusplau, ompliu el camp.";
  username.style.border = "2px solid red";
  acumErrors++;
  } 

if(surname.value == ""){
  document.getElementById("errorSurname_login").innerHTML = "Siusplau, ompliu el camp.";
  surname.style.border = "2px solid red";
  acumErrors++;
  }

if(email.value == ""){
  document.getElementById("errorEmail_login").innerHTML = "Siusplau, ompliu el camp.";
  email.style.border = "2px solid red";
  acumErrors++;
  }

if(phoneNum.value == ""){
  document.getElementById("errorPhone_login").innerHTML = "Siusplau, ompliu el camp.";
  phoneNum.style.border = "2px solid red";
  acumErrors++;
  }

if(password1.value == ""){
  document.getElementById("errorPassword1_login").innerHTML = "Siusplau, ompliu el camp.";
  password1.style.border = "2px solid red";
  acumErrors++;
  }

if(password2.value == ""){
  document.getElementById("errorPassword2_login").innerHTML = "Siusplau, ompliu el camp.";
  password2.style.border = "2px solid red";
  acumErrors++;
  }

if(avisLegal.value == ""){
  document.getElementById("errorCheck2_login").innerHTML = "Siusplau, accepteu la política de privacitat.";
  document.getElementById("warning").style.color = "red";
  acumErrors++;
  }

if (acumErrors > 0){
  return false;
}else{
return true;
}
}

// afegim events
// username.addEventListener('change', verificarNom, true);
// surname.addEventListener('change', verificarCognom, true);
// email.addEventListener('change', verificarMail, true);
// phoneNum.addEventListener('change', verificarTel, true);
// password1.addEventListener('change', verificarPsw1, true);
// password2.addEventListener('change', verificarPsw2, true);

// ACABA LA FUNCTION VALIDATE()
// event handler functions
// 
function verificarNom() {
  if (username.value != "") {
   username.style.border = "2px solid turquoise";
   document.getElementById("errorName_login").innerHTML = "";
   return true;
  }
}
// 
// function verificarCognom() {
  // if (surname.value != "") {
  //  surname.style.border = "2px solid turquoise";
  //  document.getElementById("errorSurname_login").innerHTML = "";
  //  return true;
  // }
// }