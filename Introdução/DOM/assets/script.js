const botaoChangeLightMode = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];

function changeLightMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
  botaoChangeLightMode.classList.toggle("dark-mode");
  h1.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
}

function changeText() {
    if(body.classList.contains("dark-mode")){
        botaoChangeLightMode.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return
    }  

    botaoChangeLightMode.innerHTML = "Dark Mode";
    h1.innerHTML = "Light Mode ON";
}

botaoChangeLightMode.addEventListener("click", changeLightMode);
