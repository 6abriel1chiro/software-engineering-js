import getGender from "./gender";
import getLanguage from "./language";

const name = document.querySelector("#name");
const form = document.querySelector("#name-form");
const div = document.querySelector("#resultado-div");
const label = document.getElementById("label");
const optionMale = document.getElementById("optionMale");
const optionFemale = document.getElementById("optionFemale");

let prefix;

document.getElementById("select-language").addEventListener("change", function() {
  console.log('You selected: ', this.value);


  if (getLanguage() === "espanol"){
    label.innerHTML = "ingrese su nombre: ";
    optionMale.innerHTML="Hombre"
    optionFemale.innerHTML="Mujer"

  }else if (getLanguage() =="english"){
    label.innerHTML = "enter your name: ";
    optionMale.innerHTML="Male"
    optionFemale.innerHTML="Female"
  
  }
});


document.getElementById("select-gender").addEventListener("change", function() {
  console.log('You selected: ', this.value);


  if (getGender() === "male"){
    prefix = "hola estimado ";
  }else if (getGender() =="female"){
    prefix = "hola estimada ";
  }
});




form.addEventListener("submit", (event) => {
  event.preventDefault();

  let userName = name.value;
  let language  = getLanguage();
  console.log(language);

 // const secondNumber = String.parseInt(gender.value);
 
  if (language === "espanol"){
  div.innerHTML = "<p>" + prefix+ userName +  "</p>";
}else if (language =="english"){
  div.innerHTML = "<p>" + "hello " + userName +  "</p>";

}

});
