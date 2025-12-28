let aud1 = new Audio("./28.mp3");
let aud2 = new Audio("./29.mp3");
let aud3 = new Audio("./30.mp3");
let aud5 = new Audio("./31.mp3");
let aud6 = new Audio("./32.mp3");
let aud7 = new Audio("./33.mp3");
let aud9 = new Audio("./37.mp3");
let aud10 = new Audio("./41.mp3");
let aud16 = new Audio("./42.mp3");
let aud17 = new Audio("./43.mp3");
let aud18 = new Audio("./44.mp3");
let aud8 = new Audio("./45.mp3");
let aud4 = new Audio("./46.mp3");

let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");
let E = document.querySelector("#E");
let F = document.querySelector("#F");
let G = document.querySelector("#G");
let H = document.querySelector("#H");
let I = document.querySelector("#I");
let J = document.querySelector("#J");
let k = document.querySelector('#k')

// let flag = 0;

addEventListener("keydown", function (dets) {
  if (dets.code === "KeyA") {
    aud1.play();
    aud1.currentTime = 0;
    A.style.scale = "0.98";
    A.style.opacity = '0.5'
  } else if (dets.code === "KeyB") {
    aud2.play();
    aud2.currentTime = 0;
    B.style.scale = "0.98";
    B.style.opacity = "0.5";
  } else if (dets.code === "KeyC") {
    aud3.play();
    aud3.currentTime = 0;
    C.style.scale = "0.98";
    C.style.opacity = "0.5";
  } else if (dets.code === "KeyD") {
    aud4.play();
    aud4.currentTime = 0;
    D.style.scale = "0.98";
    D.style.opacity = "0.5";
  } else if (dets.code === "KeyE") {
    aud5.play();
    aud5.currentTime = 0;
    E.style.scale = "0.98";
    E.style.opacity = "0.5";
  } else if (dets.code === "KeyF") {
    aud6.play();
    aud6.currentTime = 0;
    F.style.scale = "0.98";
    F.style.opacity = "0.5";
  } else if (dets.code === "KeyG") {
    aud7.play();
    aud7.currentTime = 0;
    G.style.scale = "0.98";
    G.style.opacity = "0.5";
  } else if (dets.code === "KeyH") {
    aud8.play();
    aud8.currentTime = 0;
    H.style.scale = "0.98";
    H.style.opacity = "0.5";
  } else if (dets.code === "KeyI") {
    aud9.play();
    aud9.currentTime = 0;
    I.style.scale = "0.98";
    I.style.opacity = "0.5";
  } else if (dets.code === "KeyJ") {
    aud10.play();
    aud10.currentTime = 0;
    J.style.scale = "0.98";
    J.style.opacity = "0.5";
  } else if (dets.code === "KeyK") {
    aud16.play();
    aud16.currentTime = 0;
    k.style.scale = "0.98";
    k.style.backgroundColor = "red";
  }
});

addEventListener("keyup", function () {
  A.style.scale = "1";
  A.style.opacity = "1";
  B.style.scale = "1";
  B.style.opacity = "1";
  C.style.scale = "1";
  C.style.opacity = "1";
  D.style.scale = "1";
  D.style.opacity = "1";
  E.style.scale = "1";
  E.style.opacity = "1";
  F.style.scale = "1";
  F.style.opacity = "1";
  G.style.scale = "1";
  G.style.opacity = "1";
  H.style.scale = "1";
  H.style.opacity = "1";
  I.style.scale = "1";
  I.style.opacity = "1";
  J.style.scale = "1";
  J.style.opacity = "1";
  k.style.scale = "1";
  k.style.opacity = "1";
  k.style.backgroundColor = "#000";
});
