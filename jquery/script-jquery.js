//making my life easier
let body = $("body");

//creates a button that will alert a nice message
let alertButton = $("<button>1) JQuery Alert Message Button</button>");
alertButton.prependTo(body);
alertButton.click(function () {
    alert("The JQuery Alert Button Works!");
})

//get the id of the button, and on click make it spit out the value of the text input field
let textButton = $("#text-button");
textButton.click(function () {
    let textButtonMessage = $("#text-box").val();
    alert(textButtonMessage);
})

//style the blank div in the html file
let boxDiv = $("#box").css({
    "border": "5px solid black",
    "height": "50px",
    "width": "50px",
    "background-color": "red"
});

//add the objective number to the styled div
let boxDivText = $("<p>3)</p>");
boxDivText.appendTo(boxDiv);

//mouseover for the box to change bg color 
boxDiv.mouseover(function () {
    boxDiv.css({"background-color": "green"});
})

//mouseout for the box to change back to original bg color
boxDiv.mouseout(function () {
    boxDiv.css({"background-color": "red"});
})

//make a paragraph with some styled text and put it on the page
let paragraphText = $("<p>4) This paragraph will randomly change colors when clicked, ooooooooh!</p>")
paragraphText.css({"font-size": "2em"});
paragraphText.appendTo(body);

//clicking the paragraph will make it change to a random color
paragraphText.click(function () {
    //generate 3 random numbers between 0-255 for rgb values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //puts the 3 values into a rgb(r,g,b) string
    let randomRGB = "rgb(" + r + "," + g + "," + b + ")";
    //applies the bg color as a random rgb color to the paragraph
    paragraphText.css({"color": randomRGB});
})

//adds a button and an empty div to the body
let spanButton = $("<button>5) Span my name to the empty div!</button>");
spanButton.appendTo(body);
let nameDiv = $("<div></div>")
nameDiv.appendTo(body);
let myNameSpan = $("<span>Luke Przekwas</span>");

//click to add myNameSpan to the empty div
spanButton.click(function () {
    myNameSpan.appendTo(nameDiv);
})

//create an array, assign the button and friend list id's
let myFriendArray = ["Audrey", "Yzerman", "Apollo", "Fox", "Falco", "Marth", "Captain Falcon", "Sheik", "Jigglypuff", "Peach"];
let myFriendButton = $("#my-friend-button");
let myFriendList = $("#my-friend-list");

//makes the button add the array to the list as li's when clicked
myFriendButton.click(function () {
    for (let i = 0; i < myFriendArray.length; i++) {
        let myCurrentFriend = $("<li>" + myFriendArray[i]+ "</li>");
        myCurrentFriend.appendTo(myFriendList);
    }
})






