"use strict";

// --------------------------------------------------  VALIDACIÓ DE FORMULARI  --------------------------------------------------------
 // Seleccionem els camps a validar fora la funció validateForm() atès que les mateixes var tb serveixen per a 
 // les funcions addeventListener que hi ha després.
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

  // crides amb addEventListener per a validar en escriure als inputs
  username.addEventListener("change", verificarNom, true);  // change vol dir que es crida l'event en sortir de l'input.
  surname.addEventListener("change", verificarCognom, true); // true = capturing propagation: the outer most element's event is handled 
  email.addEventListener("change", verificarMail, true);      // first and then the inner.  
  phoneNum.addEventListener("change", verificarTel, true);
  password1.addEventListener("change", verificarPassw1, true);
  password2.addEventListener("change", verificarPassw2, true);
  avisLegal.addEventListener("click", verificarPolitica, true);


function validateForm(){  //  -------- Comença la Funció que cridem des del Form onsubmit ---------
  console.log("FUNCIONA"); // comprovo que el .js funciona en enviar el form

  let acumErrors = 0; // Comptador d'errors

  // validació per a comprovar que els camps no són buits.
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

  if(!avisLegal.checked){
    document.getElementById("errorCheck2_login").innerHTML = "Siusplau, accepteu la política de privacitat.";
    document.getElementById("warning").style.color = "red";
    acumErrors++;
  }

  if (acumErrors > 0){
    return false;
  } else {
    return true;
  }
}  // ACABA LA FUNCTION VALIDATE()



// ------------  EVENT HANDLER FUNCTIONS  -------------
function verificarNom() {
  if (username.value != "" && username.value > 3) {
   username.style.border = "2px solid rgb(54, 159, 167)";
   document.getElementById("errorName_login").innerHTML = "";
   return true;
  } else {
    name_nws.style.border = "2px solid red";
    document.getElementById("errorName_nws").innerHTML = "El nom ha de contenir un mínim de 3 caràcters";
    return false;
  }
}

function verificarCognom() {
  if (surname.value != "") {
   surname.style.border = "2px solid rgb(54, 159, 167)";
   document.getElementById("errorSurname_login").innerHTML = "";
   return true;
  }
}

function verificarMail() {
  let email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
  if (email.value != "" && email_regex.test(email.value)) {
    email.style.border = "2px solid rgb(54, 159, 167)";
    document.getElementById("errorEmail_login").innerHTML = "";
    return true;
    } else {
      email.style.border = "2px solid red";
      document.getElementById("errorEmail_login").innerHTML = "Siusplau, comprova que el format del correu sigui correcte";
    }
}

  // validar tel que comença en 6 o 7 o 9 i que pot portar prefix +0034 d'Spain 
  // después de començar per 6, 7, 8 o 9 ha de tenir 8 xifres més
function verificarTel() {
  let tel_regex = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;

  if (phoneNum.value.length < 15 && tel_regex.test(phoneNum.value)) {
      phoneNum.style.border = "2px solid rgb(54, 159, 167)";
      document.getElementById("errorPhone_login").innerHTML = "";
      return true;
      } else {
        phoneNum.style.border = "2px solid red";
        document.getElementById("errorPhone_login").innerHTML = "Siusplau, comprova que el format del telèfon sigui correcte";
      }
  }

  function verificarPassw1() {	
    // Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit.
    let password_regex = /^(?=.*\d).{4,8}$/;
  
    if (password1.value.length < 15 && password_regex.test(password1.value)) {
        password1.style.border = "2px solid rgb(54, 159, 167)";
        document.getElementById("errorPassword1_login").innerHTML = "";
        return true;
        } else {
          password1.style.border = "2px solid red";
          document.getElementById("errorPassword1_login").innerHTML = "Siusplau, comprova que hi ha entre 4 i 8 caràcters amb un d'ells com a mínim que sigui numèric";
        }
    }

    function verificarPassw2() {	
      
      if (password2.value === password1.value) {
          password2.style.border = "2px solid rgb(54, 159, 167)";
          document.getElementById("errorPassword2_login").innerHTML = "";
          return true;
          } else {
            password2.style.border = "2px solid red";
            document.getElementById("errorPassword2_login").innerHTML = "Atenció, aquesta contrasenya no és igual que l'anterior, intenta-ho de nou";
          }
      }

      function verificarPolitica(){
          document.getElementById("errorCheck2_login").innerHTML = "";
          document.getElementById("warning").style.color = "rgb(24, 24, 24)"; 
          return true;      
      }

// ----------  Missatges d'ajuda Tf i Password --------------------------------
  var infoTel = document.getElementById("infoTel");
  var infoPsw = document.getElementById("infoPsw");
  

  infoTel.addEventListener("click", informarTel, true); // En clicar apareix info s/ format tf
  infoPsw.addEventListener("click", informarPsw, true); // En clicar apareix info s/ format contrasenya
  document.addEventListener("click", noInfo, true);  // En clicar a qualsevol lloc desapareixen els missatges anteriors
  

  function informarTel(){ 
    infoTel.innerHTML = "El telèfon ha de començar per 6, 7 o 9 i 8 números més, pot portar prefix +34 o 0034. No deixeu espais en blanc.";
  }

  function informarPsw(){
    infoPsw.innerHTML = "La contrasenya ha d'incloure entre 4 i 8 caràcters i, com a mínim un d'ells, ha de ser un número.";
  }


  function noInfo(){
    infoTel.innerHTML = "&phone;";
    infoPsw.innerHTML = "&bigstar;";   
  }

  // Funció per a confirmar l'enviament 

  function enviatOK(){
    if(validateForm() && verificarNom() && verificarCognom() && verificarMail() && verificarTel() && verificarPassw1() && verificarPassw2() && verificarPolitica()){
      alert("Les dades s'han enviat correctament");
    }
    return true;
  }