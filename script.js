let eltC1 = document.getElementById("c1");
let eltC2 = document.getElementById("c2");
let eltC3 = document.getElementById("c3");
let eltC4 = document.getElementById("c4");
let eltC5 = document.getElementById("c5");
let eltC6 = document.getElementById("c6");
let eltC7 = document.getElementById("c7");
let eltC8 = document.getElementById("c8");
let eltC9 = document.getElementById("c9");
let eltC10 = document.getElementById("c10");
let eltC11 = document.getElementById("c11");
let eltC12 = document.getElementById("c12");
let eltC13 = document.getElementById("c13");
let eltC14 = document.getElementById("c14");
let eltC15 = document.getElementById("c15");
let eltC16 = document.getElementById("c16");
let eltC17 = document.getElementById("c17");
let eltC18 = document.getElementById("c18");
let eltC19 = document.getElementById("c19");

eltC1.addEventListener("click", changeColor, false);
eltC2.addEventListener("click", changeColor, false);
eltC3.addEventListener("click", changeColor, false);
eltC4.addEventListener("click", changeColor, false);
eltC5.addEventListener("click", changeColor, false);
eltC6.addEventListener("click", changeColor, false);
eltC7.addEventListener("click", changeColor, false);
eltC8.addEventListener("click", changeColor, false);
eltC9.addEventListener("click", changeColor, false);
eltC10.addEventListener("click", changeColor, false);
eltC11.addEventListener("click", changeColor, false);
eltC12.addEventListener("click", changeColor, false);
eltC13.addEventListener("click", changeColor, false);
eltC14.addEventListener("click", changeColor, false);
eltC15.addEventListener("click", changeColor, false);
eltC16.addEventListener("click", changeColor, false);
eltC17.addEventListener("click", changeColor, false);
eltC18.addEventListener("click", changeColor, false);
eltC19.addEventListener("click", changeColor, false);

function  changeColor(){
  if(this.classList.contains("red")){
    this.classList.add("white");
    this.classList.remove("red");
  }
  else if(this.classList.contains("blue")){
    this.classList.add("red");
    this.classList.remove("blue");
  }
  else if(this.classList.contains("yellow")){
    this.classList.add("blue");
    this.classList.remove("yellow");
  }
  else if(this.classList.contains("white")){
    this.classList.add("yellow");
    this.classList.remove("white");
  }
}
