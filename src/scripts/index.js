import {stop, random, input, check, randomnumber} from './new';
import '../styles/index.scss';

const output = document.getElementById("main");
let stream = '';

const appendOutput = (string) => {
  stream = `${stream}${'<br />'}${string}`;
};

( () => {
  const string = "The random number is: ";
  appendOutput(string);
  const val1ue = document.getElementById("demo");
  output.innerHTML = stream;
  input(); 
})();

