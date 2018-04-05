export const getElementFromTemplate = (template) => {
  const outerEl = document.createElement(`div`);
  outerEl.innerHTML = template;
  return outerEl.firstElementChild;
};

export const showTemplate = (template) => {
  const appScreen = document.querySelector(`.app .main`);
  if (appScreen.children[0]) {
    appScreen.removeChild(appScreen.children[0]);
  }
  appScreen.appendChild(template);
};
