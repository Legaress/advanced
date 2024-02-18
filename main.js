import javascriptLogo from './javascript.svg';
import { asyncAwait2Component } from './src/concepts/07-async-await';
import './style.css';
import viteLogo from '/vite.svg';
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`;

const divCard = document.querySelector('.card');
//environmentsComponent(divCard);
//callbacksComponent(divCard);
//promisesComponent(divCard);
//promiseRaceComponent(divCard);
// asyncComponent(divCard);
// asyncAwaitComponent(divCard);
asyncAwait2Component(divCard);

