//javascript events

function clickevent() {
  alert("To travel is to live....Happy travelling");
}

function mouseoverevent() {
  alert("Welcome to SkyHigh Tours and Travels");
}

window.onload = onload();
function onload() {
  alert("The page is loading");
}

function mousedown() {
  alert("More features and facilities coming soon!");
}

function move() {
  alert("Return to home page");
}

function keydownevent() {
  alert("Pressed a key");
}
//dialog boxe
function Func() {
  var txt;
  if (confirm("Are you sure that you want to submit ?")) {
    alert((txt = "submitted!"));
  } else {
    alert((txt = "You pressed Cancel!"));
  }
  document.getElementById("submit").innerHTML = txt;
}

function Func1() {
  var txt;
  if (window.confirm("Are you sure you want to submit the form?")) {
    alert((txt = "submitted!"));
  } else {
    alert((txt = "You pressed Cancel!"));
  }
  document.getElementById("submit").innerHTML = txt;
}

var person = prompt("Dear Hodophile ...enter your name", "");

if (person != null) {
  alert("Hello " + person + "... Wishing you a great day ahead!");
}
//page redirect
function page_redirect() {
  window.location = " https://en.wikipedia.org/wiki/India";
}
//DOM
function mOver(obj) {
  obj.innerHTML = "click me";
}

function mOut(obj) {
  obj.innerHTML = "register";
}

function mDown(obj) {
  obj.innerHTML = "Book a Tour";
}

function mUp(obj) {
  obj.innerHTML = "click me";
}

function upperCase1() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function upperCase2() {
  const x = document.getElementById("lname");
  x.value = x.value.toUpperCase();
}

id.addEventListener("click", myFunction);

function myFunction() {
  alert("Hello World!");
}

//cookie

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}
