let appScreen = document.querySelector(`.app .main`);
let templates = document.querySelector(`#templates`).content;
let screens = templates.querySelectorAll(`.main`);

const LEFT_ARROW_KEY = 37;
const RIGHT_ARROW_KEY = 39;

let currentWindowNum = 0;

let showScreen = function (number) {
  appScreen.innerHTML = ``;
  appScreen.appendChild(screens[number]);
};

let changeScreen = function (e) {
  e.preventDefault();
  if (e.altKey && e.keyCode === LEFT_ARROW_KEY) {
    currentWindowNum = (currentWindowNum > 0) ? (currentWindowNum - 1) : 0;
    showScreen(currentWindowNum);
  }
  if (e.altKey && e.keyCode === RIGHT_ARROW_KEY) {
    currentWindowNum = (currentWindowNum < screens.length - 1) ? (currentWindowNum + 1) : screens.length - 1;
    showScreen(currentWindowNum);
  }
};

showScreen(currentWindowNum);

document.addEventListener(`keydown`, changeScreen);
