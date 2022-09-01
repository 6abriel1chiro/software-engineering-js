function getLanguage() {
  let  e = document.getElementById("select-language");
  let value = e.value;
  //var text = e.options[e.selectedIndex].text;}
  return value;
}

export default getLanguage;
