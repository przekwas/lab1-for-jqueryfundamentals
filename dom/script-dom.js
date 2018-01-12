document.addEventListener("DOMContentLoaded", function () {
    //making my life easier
    let body = document.body;
    
    //create a button, text, and make it alert the page 
    let alertButton = document.createElement("button");
    let alertButtonText = document.createTextNode("DOM Alert Message Button");
    alertButton.appendChild(alertButtonText);
    body.appendChild(alertButton);
    alertButton.addEventListener("click", function () {
        alert("The DOM alert button works!");
    })

    //get the button made inb index-dom.html, get the message written under it, and make it appear in an alert window
    let textButton = document.getElementById("text-button");
    let textButtonMessage = document.getElementById("text-box").textContent;
    textButton.addEventListener("click", function () {
        alert(textButtonMessage);
    })

    //get the div with id "box" from the html and style it into a red square
    let divBox = document.getElementById("box");
    divBox.style.backgroundColor = "red";
    divBox.style.height = "50px";
    divBox.style.width = "50px";
    divBox.style.border = "5px solid black";

    //makes the square have a mouseover effect to add its id
    divBox.addEventListener("mouseover", function () {
        divBox.style.backgroundColor = "green";
    })
    //makes the square have a mouseout effect to remove its id
    divBox.addEventListener("mouseout", function () {
        divBox.style.backgroundColor = "red";
    })

})