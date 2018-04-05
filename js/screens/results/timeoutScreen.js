import {getElementFromTemplate, showTemplate} from '../../utils';
import welcome from '../welcomeScreen';

const timeoutModule = getElementFromTemplate(`
 <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`);
const replayBtn = timeoutModule.querySelector(`.main-replay`);

replayBtn.addEventListener(`click`, () => {
  showTemplate(welcome);
});

export default timeoutModule;