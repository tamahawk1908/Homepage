console.log("Hey!, Hi!, Hello!")

let buttonOne = document.querySelector(".js-buttonOne");
let header = document.querySelector(".js-header");
buttonOne.addEventListener("click", () => {

    header.remove()
    buttonOne.remove()

});
let buttonTwo= document.querySelector(".js-buttonTwo");
let picture = document.querySelector(".js-picture");
buttonTwo.addEventListener("click", () => {

    picture.remove()
    buttonTwo.remove()
});

let buttonThree = document.querySelector(".js-buttonThree");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName")
buttonThree.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "light" : "dark";
    
});