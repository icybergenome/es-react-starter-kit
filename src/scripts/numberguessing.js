const random = () => {
    return Math.floor(Math.random() * 100);
};
let attempt = 0;
const calculateattempts = ()=>{
    attempt++; 

};
const secret = random();
const input = (msg) => {
    calculateattempts();
    let number = msg ? prompt(msg) : prompt("Enter any number between 0 & 100");
    number = parseInt(number);
    if (isNaN(number) || (number < 0 || number > 100 || number =="")) {
        input(msg);
    }
    
    if (secret === number) {
        return secret;
    }
    const displaymsg = number>secret ? "Enter number less than " + number : "Enter number greater than " + number;
    input(displaymsg);

};
export {
    input,
    secret,
    attempt
};