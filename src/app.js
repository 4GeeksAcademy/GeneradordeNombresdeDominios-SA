/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  //write your code here
  let a = combinacion(pronoun, adj, noun);
  list(a);
  console.log("Hello Rigo from the console!");
};

function combinacion(pronoun, adj, noun) {
  console.log(pronoun, adj, noun);
  let nombreDominios = [];
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        nombreDominios.push(pronoun[a] + adj[b] + noun[c]);
      }
    }
  }
  return nombreDominios;
}
function list(dominios) {
  console.log(dominios);
  let ul = document.querySelector(".lista-dominios");
  console.log(ul);
  for (let i = 0; i < dominios.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = dominios[i];
    ul.appendChild(li);
  }
}
