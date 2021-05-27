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
const parss = document.getElementsByTagName("p");

const h1 = document.querySelector("main > section > h1");
const img = document.querySelector("section > article > img");
const span = document.querySelectorAll("span");
