const appScreen = document.querySelector(`.app .main`);
const templates = document.querySelector(`#templates`).content;

let welcomeScreen = templates.querySelector(`.main--welcome`);
let artistScreen = templates.querySelector(`.main--level-artist`);
let genreScreen = templates.querySelector(`.main--level-genre`);
let resultScreens = templates.querySelectorAll(`.main--result`);

let orderedScreens = [welcomeScreen, artistScreen, genreScreen].concat([...resultScreens]);

const LEFT_ARROW_KEY = 37;
const RIGHT_ARROW_KEY = 39;

let currentWindowNum = 0;

const showScreen = function (number) {
  if (appScreen.children[0]) {
    appScreen.removeChild(appScreen.children[0]);
  }
  appScreen.appendChild(orderedScreens[number]);
};

const changeScreen = function (event) {
  event.preventDefault();

  if (event.altKey && event.keyCode === LEFT_ARROW_KEY) {
    currentWindowNum = currentWindowNum > 0 ? (currentWindowNum - 1) : 0;
    showScreen(currentWindowNum);
  }
  if (event.altKey && event.keyCode === RIGHT_ARROW_KEY) {
    currentWindowNum = currentWindowNum < orderedScreens.length - 1 ? (currentWindowNum + 1) : orderedScreens.length - 1;
    showScreen(currentWindowNum);
  }
};

showScreen(currentWindowNum);

document.addEventListener(`keydown`, changeScreen);
