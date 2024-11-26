console.log("Welcome to jQuery");

/*
JS vs jQuery

js ... document.getElementById("results");
jquery ... $("#result");

js ... document.getElementsByTagName("p");
jquery ... $("p");

js ... document.getElementsByClassName("text");
jquery ... $(".text");
*/

// ID SELECTORS
//let redParagraph = document.getElementById("red");
let redParagraph = $("#red").css("background", "red").css("color", "white");
console.log("my red paragraph ", redParagraph);

let blueParaph = $("#blue")
  .css("background", "blue")
  .css("color", "white");

// CLASS SELECTORS
let myParagraphWithBorder = $(".with-border");

myParagraphWithBorder.css("border", "5px dashed yellow");

myParagraphWithBorder.click(function(){
  console.log("Clicked");

  $(this).addClass("bg-gray");
});

// TAG SELECTORS
let paragraphs = $("p");
paragraphs.css("cursor", "pointer");


// SIMPLE AND COMMON FUNCTION
function register() {
  console.log("Registering Function");

  let testEntry = $("#testInput").val();
  $("#results").append(`<li>${testEntry}</li>`);

  $("#testInput").val(""); //clear input
}

// EVENTS
$("#btnRegister").on("click", register);

// SIMPLE AND COMMON FUNCTION
function clickMe() {
  console.log("ClickMe btn");

  $("p:first").hide();
  $("p:last").css("border", "5px solid skyblue")
}

$("#newBtn").on("click", clickMe);

// ANIMATIONS
function showName() {
  $("#user-name").slideDown();
}

function hideName() {
  $("#user-name").slideUp(1500);
}