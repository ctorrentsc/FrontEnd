"use strict";

// --------------------------------------------------  VALIDACIÓ NEWSLETTER  --------------------------------------------------------

// Variables dels inputs
var name_nws = document.forms["formNews"]["user_name_nws"];  //No posem .value ! Ho posem a les condicions.
var email_nws = document.forms["formNews"]["user_email_nws"];

// Error display objects per on sortiran els missatges d'error
var errorName_nws = document.getElementById("errorName_nws");
var errorEmail_nws = document.getElementById("errorEmail_nws");


function validateNewsletter(){ // ------------ FUNCIÓ DE VALIDACIÓ que cridem en fer submit --------------------
  console.log("FUNCIONA");  // comprovo que el .js funciona en enviar el form

  // variable per a tot el form
  var formNews = document.getElementById("myFormNews");
  let acumErrors = 0;

  if(name_nws.value == ""){ // VALIDEM SI EL CAMP ÉS BUIT
    errorName_nws.innerHTML = "Siusplau, ompliu el camp.";
    name_nws.classList.add("invalid");
    acumErrors++;
  }

  if(email_nws.value == ""){  // VALIDEM SI EL CAMP ÉS BUIT
    errorEmail_nws.innerHTML = "Siusplau, ompliu el camp.";
    email_nws.classList.add("invalid");
    acumErrors++;
  } else if(!verificarMail(email_nws.value)){  // format invalid també si no es compleix la regex
    errorEmail_nws.innerHTML = "L'adreça de correu no té el format correcte";
    email_nws.classList.add("invalid");
    acumErrors++;

  }

  if (acumErrors > 0){
    alert("Hi ha camps que cal omplir/corregir")
    return false;
  } else {
    alert("Les dades s'han enviat correctament");
    return true;
  }
} // ------------ Final FUNCIÓ DE VALIDACIÓ que cridem en fer submit --------------------


// AddEventListeners per a tot el form
if(formNews){
  formNews.addEventListener('blur', campsOk, true); // true = capturing propagation: the outer most element's event is handled 
                                                      // first and then the inner. 
      function campsOk(){
        if(event.target.value != ""){
          event.target.classList.remove("invalid");
          return true;
        }
      }
  } 

// Funció per a regex de mail

  function verificarMail() {
    let email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      
    if (email_regex.test(email_nws.value)) {
      return true;
      } else {
      return false;
      }
  }
  
