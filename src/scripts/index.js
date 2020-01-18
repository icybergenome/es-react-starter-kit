import '../styles/index.scss';

const output = document.getElementById("main");
let stream = '';

function appendOutput(string) {
  stream = `${stream}${'<br />'}${string}`;
}

( () => {
  const string = "Here's the output: ";
  appendOutput(string);

  output.innerHTML = stream;
})();

import dice from './diceroller';
