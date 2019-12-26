import {input, secret, attempt} from './numberguessing';
import '../styles/index.scss';

const output = document.getElementById("main");
let stream = '';

const appendOutput = (string) => {
  stream = `${stream}${'<br />'}${string}`;
};

( () => {
  console.log(secret);
  input();

  const result = `Result is:  ${secret} and number of attempts are/is : ${attempt}`;
  appendOutput(result);

  output.innerHTML = stream;


})();

