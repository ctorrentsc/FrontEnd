"use strict";

// --------------------------------------------------  VALIDACIÓ NEWSLETTER  --------------------------------------------------------

// Variables dels inputs
var name_nws = document.getElementById("name_nws");
var email_nws = document.getElementById("email_nws");

// ADDEVENTLISTENERS que comproven el format introduit als inputs en sortir d'aquests
name_nws.addEventListener("change", verificarNom, true); // EVENTS CHANGE QUE COMPROVEN EL FORMAT EN SORTIR DE L'INPUT
email_nws.addEventListener("change", verificarMail, true);

function validateNewsletter(){ // FUNCIÓ DE VALIDACIÓ que cridem en fer submit
  console.log("FUNCIONA");  // comprovo que el .js funciona en enviar el form

  let acumErrors = 0;

  if(name_nws.value == ""){ // VALIDEM SI EL CAMP ÉS BUIT
    document.getElementById("errorName_nws").innerHTML = "Siusplau, ompliu el camp.";
    name_nws.style.border = "2px solid red";
    acumErrors++;
  }

  if(email_nws.value == ""){  // VALIDEM SI EL CAMP ÉS BUIT
    document.getElementById("errorEmail_nws").innerHTML = "Siusplau, ompliu el camp.";
    email_nws.style.border = "2px solid red";
    acumErrors++;
  }

  if (acumErrors > 0){  // COMPTADOR D'ERRORS
    return false;
  } else {
    return true;
  }
} // FINAL FUNCIÓ VALIDACIÓ

// -------- FUNCIONS DE VERIFICACIÓ DE FORMAT PER A ADDEVENTLISTENER --------------

function verificarNom() {
  if (name_nws.value != "") {
   name_nws.style.border = "2px solid rgb(54, 159, 167)";
   document.getElementById("errorName_nws").innerHTML = "";
   return true;
  }
}

function verificarMail() {
    let email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      
    if (email_nws.value != "" && email_regex.test(email_nws.value)) {
      email_nws.style.border = "2px solid rgb(54, 159, 167)";
      document.getElementById("errorEmail_nws").innerHTML = "";
      return true;
      } else {
        email_nws.style.border = "2px solid red";
        document.getElementById("errorEmail_nws").innerHTML = "Siusplau, comprova que el format del correu sigui correcte";
        return false;
      }
  }

  function enviatOK(){
    if(validateNewsletter() && verificarNom() && verificarMail()){
      alert("Les dades s'han enviat correctament");
    }
    return true;
  }