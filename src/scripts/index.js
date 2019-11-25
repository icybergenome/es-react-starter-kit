import '../styles/index.scss';
import {outP} from './rander-calculator.js';

const output = document.getElementById("main");
let stream = '';

function appendOutput(string) {
  stream = `${stream}${'<br />'}${string}`;
}

( () => {
  const string = "Here's the output: ";
  appendOutput(string);
  appendOutput(outP);

  output.innerHTML = stream;
  
})();

