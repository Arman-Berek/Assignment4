var first = document.querySelector(".firstButton");
var second = document.querySelector(".secondButton");
var text = document.querySelector(".text");

first.onclick = function() {
    text.innerText = "I'm right";
}

second.onclick = function() {
    text.innerText = "No, I'm right";
}