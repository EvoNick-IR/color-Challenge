////////////////////Elements gets From document////////////////////

const originBox = document.querySelector("#originBox");
const userBox = document.querySelector("#userBox");
const colorR = document.getElementById("colorR");
const userRT = document.getElementById("colUserTR");
const colorG = document.getElementById("colorG");
const userGT = document.getElementById("colUserTG");
const colorB = document.getElementById("colorB");
const userBT = document.getElementById("colUserTB");
const check = document.getElementById("check");
const checkR = document.getElementById("r");
const checkG = document.getElementById("g");
const checkB = document.getElementById("b");
const score = document.getElementById("score");
const turn = document.getElementById("turn");
const bestP = document.getElementById("bestP");
const condition = document.getElementById("condition");
const start = document.getElementById("start");

////////////////////Elements gets From document////////////////////

//////////////////origin colors///////////////////

function randomColor() {
  return parseInt(Math.floor(Math.random() * 255));
}

//////////////////origin colors//////////////////////

/////////////// ui range numbers /////////////////////
userRT.innerHTML = colorR.value;
userGT.innerHTML = colorG.value;
userBT.innerHTML = colorB.value;

function changeColor() {
  let red = colorR.value;
  let green = colorG.value;
  let blue = colorB.value;
  let color = "rgb(" + red + "," + green + "," + blue + ")";
  userBox.style.backgroundColor = color;
  userRT.innerHTML = red;
  userGT.innerHTML = green;
  userBT.innerHTML = blue;
}

colorR.addEventListener("input", changeColor);
colorG.addEventListener("input", changeColor);
colorB.addEventListener("input", changeColor);

/////////////// ui range numbers /////////////////////

/////////////// game play /////////////////////
let newScore = 0;
let turnRem = 0;
turn.innerHTML = turnRem;

check.addEventListener("click", () => {
  let red = parseInt(colorR.value);
  let green = parseInt(colorG.value);
  let blue = parseInt(colorB.value);

  condition.style.fontSize = "32px";
  condition.innerHTML = "Try Again";

  if (red - orgRed >= -5 && red - orgRed <= 5) {
    checkR.style.backgroundColor = "green";
  }
  if (green - orgGreen >= -5 && green - orgGreen <= 5) {
    checkG.style.backgroundColor = "green";
  }
  if (blue - orgBlue >= -5 && blue - orgBlue <= 5) {
    checkB.style.backgroundColor = "green";
  }

  if (
    red - orgRed >= -5 &&
    red - orgRed <= 5 &&
    green - orgGreen >= -5 &&
    green - orgGreen <= 5 &&
    blue - orgBlue >= -5 &&
    blue - orgBlue <= 5 &&
    turnRem >= 0
  ) {
    newScore++;
    orgRed = randomColor();
    orgGreen = randomColor();
    orgBlue = randomColor();
    originBox.style.backgroundColor = `rgb(${orgRed},${orgGreen},${orgBlue})`;
    console.log(
      "red: " + orgRed + "  green: " + orgGreen + "  blue: " + orgBlue
    );
    condition.style.fontSize = "20px";
    condition.innerHTML = "So Good";
    checkR.style.backgroundColor = "#cf2d2d";
    checkG.style.backgroundColor = "#cf2d2d";
    checkB.style.backgroundColor = "#cf2d2d";
    turnRem = 5;
  } else if (turnRem <= 0) {
    condition.style.fontSize = "18px";
    condition.innerHTML = "You Lose . Hit The Start Button To Try At First";
    newScore = 0;
    start.classList.remove("hide");
    start.classList.add("show");
    check.classList.remove("show");
    check.classList.add("hide");
    beforeInter = setInterval(beforeStart, 500);
    checkR.style.backgroundColor = "#aaaaaa";
    checkG.style.backgroundColor = "#aaaaaa";
    checkB.style.backgroundColor = "#aaaaaa";
  } else {
    turnRem--;
  }

  score.innerHTML = newScore;
  turn.innerHTML = turnRem;
});

//////////////////Game Play//////////////////////

//////////////////Game Starts//////////////////////
start.addEventListener("click", () => {
  turnRem = 5;
  turn.innerHTML = turnRem;
  clearInterval(beforeInter);
  start.classList.remove("show");
  start.classList.add("hide");
  check.classList.remove("hide");
  check.classList.add("show");
  changeColor();
  orgRed = randomColor();
  orgGreen = randomColor();
  orgBlue = randomColor();
  originBox.style.backgroundColor = `rgb(${orgRed},${orgGreen},${orgBlue})`;
  console.log("red: " + orgRed + "  green: " + orgGreen + "  blue: " + orgBlue);

  condition.style.fontSize = "12px";
  condition.innerHTML =
    " Start Whith Draging The RGB Sliders To Match The Color Of The Left Box To The Right One, Then click On Check";
  checkR.style.backgroundColor = "#cf2d2d";
  checkG.style.backgroundColor = "#cf2d2d";
  checkB.style.backgroundColor = "#cf2d2d";
});

//////////////////Game Starts//////////////////////

//////////////////Before Game Starts//////////////////////
function beforeStart() {
  let orgRed = randomColor();
  let orgGreen = randomColor();
  let orgBlue = randomColor();
  let userRed = randomColor();
  let userGreen = randomColor();
  let userBlue = randomColor();
  originBox.style.backgroundColor = `rgb(${orgRed},${orgGreen},${orgBlue})`;
  userBox.style.backgroundColor = `rgb(${userRed},${userGreen},${userBlue})`;
}

beforeEnter = setInterval(beforeStart, 500);

//////////////////Before Game Starts//////////////////////
