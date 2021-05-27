"use strict";

const [firstBtn] = document.getElementsByTagName("button");

function alertWithMessage() {
  alert("Congratulations!");
}

firstBtn.addEventListener("click", alertWithMessage);
/////
const p = document.getElementById("unique");
/////
const test = document.getElementsByClassName("test");
/////////

const par = document.querySelector("article > p"); // Возвращает один элемент
const pars = document.querySelectorAll("p");
const pars = document.getElementsByTagName("p");
