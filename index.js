var welcome = document.getElementById("welcome");
var submit = document.getElementById("submit");
var main = document.getElementById("main");
var question = document.getElementById("question");

function initComponents() {
    console.log("TEST")
    document.getElementById("submit").addEventListener("click", closeWelcome)
}

function closeWelcome() {
    var name = document.getElementById("enter").value;
    welcome.style.width = "0";
    submit.style.display = "none";
    main.style.display = "";
    question.innerHTML = "Hello, " + name + "!";
}

function changeImage(event) {
    let classes = event.srcElement.classList
    let imageName = classes[1]
    document.getElementById("pic").src = `slike/${imageName}.png`
}

initComponents()

let imageChangerElements = Array.from(document.getElementsByClassName("imageChanger"))

imageChangerElements.map((element) => {
    element.addEventListener("click", changeImage)
})
