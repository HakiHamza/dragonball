class saiyans {
  constructor(name, age, ultimateTechnique) {
    this.name = name;
    this.age = age;
    this.ultimateTechnique = ultimateTechnique;
  }

  info() {
    return this.name + " fucked you up";
  }
}

function changebase() {
  document.getElementById("videoChanger").src = "./images/base.mp4";
  document.getElementById("attackText").innerHTML = "BASEFORM";
}

function changessOne() {
  document.getElementById("videoChanger").src = "./images/ss1.mp4";
}

function changessTwo() {
  document.getElementById("videoChanger").src = "./images/ss2.mp4";
}

function changessThree() {
  document.getElementById("videoChanger").src = "./images/ss3.mp4";
}

function changeText() {
  document.getElementById("attackText").innerHTML = "KAMEHAMEHA!!!!!";
  document.getElementById("imageChanger").src = "images/kamehameha.png";
}

const goku = new saiyans("goku");
console.log(goku.info("goku"));
