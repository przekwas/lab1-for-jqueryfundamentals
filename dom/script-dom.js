
//making my life easier
let body = document.body;

//create a button, text, and make it alert the page 
let alertButton = document.createElement("button");
let alertButtonText = document.createTextNode("1) DOM Alert Message Button");
alertButton.appendChild(alertButtonText);
body.appendChild(alertButton);
alertButton.addEventListener("click", function () {
    alert("The DOM alert button works!");
})

//get the button made inb index-dom.html, get the message written under it, and make it appear in an alert window
let textButton = document.getElementById("text-button");

textButton.addEventListener("click", function () {
    let textButtonMessage = document.getElementById("text-box").value;
    alert(textButtonMessage);
})

//get the div with id "box" from the html and style it into a red square
let divBox = document.getElementById("box");
divBox.style.backgroundColor = "red";
divBox.style.height = "50px";
divBox.style.width = "50px";
divBox.style.border = "5px solid black";
let divBoxText = document.createTextNode("3)");
divBox.appendChild(divBoxText);

//makes the div#box have a mouseover effect to change its bg color
divBox.addEventListener("mouseover", function () {
    divBox.style.backgroundColor = "green";
})
//makes the div#box have a mouseout effect to go back to original bg color
divBox.addEventListener("mouseout", function () {
    divBox.style.backgroundColor = "red";
})

//create a paragraph, a message, append it to the paragraph and style it
let paragraphText = document.createElement("p");
let paragraphTextMessage = document.createTextNode("4) This paragraph will randomly change colors when clicked, ooooooooh!");
paragraphText.appendChild(paragraphTextMessage);
paragraphText.style.fontSize = "2em";
body.appendChild(paragraphText);

//makes the paragraph change to a random color upon click
paragraphText.addEventListener("click", function () {
    //generate 3 random numbers between 0-255 for rgb values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //puts the 3 values into a rgb(r,g,b) string
    let randomRGB = "rgb(" + r + "," + g + "," + b + ")";
    //applies the bg color as a random rgb color to the paragraph
    paragraphText.style.color = randomRGB;
})

//creates a button and creates an empty div to the page
let spanButton = document.createElement("button");
let spanButtonText = document.createTextNode("5) Span my name to the empty div!");
spanButton.appendChild(spanButtonText);
body.appendChild(spanButton);
let nameDiv = document.createElement("div");
body.appendChild(nameDiv);

//spans my name to the empty div on button click
spanButton.addEventListener("click", function () {
    let myNameSpan = document.createElement("span");
    let myName = document.createTextNode("Luke Przekwas");
    myNameSpan.appendChild(myName);
    nameDiv.appendChild(myNameSpan);
})

//creates an array, defines the button from html, the list, and makes a list item 
let myFriendArray = ["Audrey", "Yzerman", "Apollo", "Fox", "Falco", "Marth", "Captain Falcon", "Sheik", "Jigglypuff", "Peach"];
let friendButton = document.getElementById("my-friend-button");
let myFriendList = document.getElementById("my-friend-list");

//makes the button add my friends to the ul in the html page
friendButton.addEventListener("click", function () {
    for(let i = 0; i < myFriendArray.length; i++) {
        let myFriendListItem = document.createElement("li");
        let currentFriend = document.createTextNode(myFriendArray[i])
        myFriendListItem.appendChild(currentFriend)
        myFriendList.appendChild(myFriendListItem);
    }
})