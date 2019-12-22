const result = document.getElementById("result");
const stop = () => {
        result.innerHTML = randomnumber;
        window.stop();
        exit(-1);
};
const random = () => {
    return Math.floor(Math.random() * 100);
};
const randomnumber = random();
const input = () => {
    let number = prompt("Enter any number between 0 & 100");
    if (isNaN(number) || (number < 0 || number > 100)) {
        input();
    }
    if (randomnumber == number) {
        stop();
    } else {
        check(number);
    }
};
const check = (num) => {
    while (num > randomnumber && num != randomnumber) {
        let number = -1;
        while (isNaN(number) || number < 0 || number > 100) {
            number = prompt("Please enter number less than " + num);

            if (!isNaN(number) && number >= 0 && number <= 100) {
                num = number;
            }
        }
        if (num == randomnumber) {
            stop();
        }
    }
    while (num < randomnumber && num != randomnumber) {
        let number = -1;
        while (isNaN(number) || number < 0 || number > 100) {
            number = prompt("Please enter number greater than " + num);

            if (!isNaN(number) && number >= 0 && number <= 100) {
                num = number;
            }

            if (num == randomnumber) {
                stop();
            }
        }
        if (num != randomnumber) {
            check(num);
        }
    }
};
export {
    stop,
    random,
    input,
    check,
    randomnumber
};