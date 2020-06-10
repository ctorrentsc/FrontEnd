"use strict";

// --------------------------------------------------  VALIDACIÓ DE FORMULARI  --------------------------------------------------------
 // Seleccionem els camps a validar fora la funció validateForm() atès que les mateixes var tb serveixen per a 
 // les funcions addeventListener que hi ha després.
var username = document.forms["loginForm"]["user_name_login"];//No posem .value ! Ho posem a les condicions.
var surname = document.forms["loginForm"]["user_surname_login"];
var email = document.forms["loginForm"]["user_mail_login"]; 
var phoneNum = document.forms["loginForm"]["user_phone"];
var password1 = document.forms["loginForm"]["user_password"]; 
var password2 = document.forms["loginForm"]["confirm_password"]; 
var avisLegal = document.forms["loginForm"]["user_legacy"];

// Error display objects per on sortiran els missatges d'error
var errorName_login = document.getElementById("errorName_login");
var errorSurname_login = document.getElementById("errorSurname_login");
var errorEmail_login = document.getElementById("errorEmail_login");
var errorPhone_login = document.getElementById("errorPhone_login");
var errorPassword1_login = document.getElementById("errorPassword1_login");
var errorPassword2_login = document.getElementById("errorPassword2_login");
var errorCheck2_login = document.getElementById("errorCheck2_login");

// variable per a tot el form
var formLogin = document.getElementById("myForm");

  

function validateForm(){  //  -------- Comença la Funció que cridem des del Form onsubmit ---------
  console.log("FUNCIONA"); // comprovo que el .js funciona en enviar el form

  let acumErrors = 0; // Comptador d'errors

  // validació per a comprovar que els camps no són buits.
  if(username.value == "" || username.value.length < 3){ 
    errorName_login.innerHTML = "Siusplau, ompliu el camp amb un nom de mínim 3 caràcters";
    username.classList.remove("borderOrange");
    username.classList.add("invalid");
    acumErrors++;
  } 

  if(surname.value == ""){
    errorSurname_login.innerHTML = "Siusplau, ompliu el camp.";
    surname.classList.remove("borderOrange");
    surname.classList.add("invalid");
    acumErrors++;
  }

  if(email.value == ""){
    errorEmail_login.innerHTML = "Siusplau, ompliu el camp.";
    email.classList.remove("borderOrange");
    email.classList.add("invalid");
    acumErrors++;
  } else if(!verificarMail(email.value)){ // format invalid també si no es compleix la regex
    errorEmail_login.innerHTML = "L'adreça de correu no té un format correcte";
    email.classList.remove("borderOrange");
    email.classList.add("invalid");
    acumErrors++;
  }

  if(phoneNum.value == "" || phoneNum.value.length > 15){
    errorPhone_login.innerHTML = "Siusplau, ompliu el camp.";
    phoneNum.classList.remove("borderOrange");
    phoneNum.classList.add("invalid");
    acumErrors++;
  } else if(!verificarTel(phoneNum.value)){ // format invalid també si no es compleix la regex
    errorPhone_login.innerHTML = "El telèfon no té un format correcte";
    phoneNum.classList.remove("borderOrange");
    phoneNum.classList.add("invalid");
    acumErrors++;
  }

  if(password1.value == ""){
    errorPassword1_login.innerHTML = "Siusplau, ompliu el camp.";
    password1.classList.remove("borderOrange");
    password1.classList.add("invalid");
    acumErrors++;
  } else if(!verificarPassw1(password1.value)){  // format invalid també si no es compleix la regex
    errorPassword1_login.innerHTML = "La contrasenya no té el format correcte";
    password1.classList.remove("borderOrange");
    password1.classList.add("invalid");
    acumErrors++;

  }

  if(password2.value == "" || password2.value != password1.value){
    errorPassword2_login.innerHTML = "Cal que aquest camp i l'anterior siguin iguals";
    password2.classList.remove("borderOrange");
    password2.classList.add("invalid");
    acumErrors++;
  } 

  if(!avisLegal.checked){
    errorCheck2_login.innerHTML = "Siusplau, accepteu la política de privacitat.";
    document.getElementById("warning").classList.add("invalid_check");  // El format invalid el tindran les paraules "política de privacitat"
    acumErrors++;
  }

  if (acumErrors > 0){
    alert("Hi ha camps que cal omplir/corregir")
    return false;
  } else {
    alert("Les dades s'han enviat correctament");
    return true;
  }
}  // -------- Acaba la Funció que cridem des del Form onsubmit ---------


// AddEventListeners per a tot al form i per al checkbox en concret.

formLogin.addEventListener('blur', campsOk, true); // true = capturing propagation: the outer most element's event is handled 
                                                      // first and then the inner. 
      function campsOk(){
        if(event.target.value != ""){
          event.target.classList.remove("invalid");
          event.target.classList.add("borderOrange");
          return true;
        }
      }


avisLegal.addEventListener("blur", policyOk, true); // Amb aquest event traiem la class invalid de les paraules "política de privacitat"
                                                    // A dif de la resta d'inputs, en aquest no traiem la class invalid al event.target, és a dir, a l'element q dispara el event que seria el checkbox.
      function policyOk(){
        if(avisLegal.checked){
          document.getElementById("warning").classList.remove("invalid_check");
          return true;
        }
      }


// Funcions regex mail, tf i password


function verificarMail() {
  let email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
  if (email_regex.test(email.value)) {
    return true;
    } else {
    return false;
    }
}

  // validar tel que comença en 6 o 7 o 9 i que pot portar prefix +0034 d'Spain 
  // después de començar per 6, 7, 8 o 9 ha de tenir 8 xifres més
function verificarTel() {
  let tel_regex = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;

  if (phoneNum.value.length < 15 && tel_regex.test(phoneNum.value)) {
      return true;
      } else {
      return false;
      }
  }

  function verificarPassw1() {	
    // Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit.
    let password_regex = /^(?=.*\d).{4,8}$/;
  
    if (password_regex.test(password1.value)) {
        return true;
        } else {
        return false;
        }
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

