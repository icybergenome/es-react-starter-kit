const multiplesFinder = (num) => {
  const multiples = [];
  let multiplesSum = 0;
  for (let i=1; i<num; i++) {
    if (i%3 === 0 || i%5 === 0){
      multiples.push(i);
      multiplesSum += i;
    }
  }
  return { sum: multiplesSum, multiples};
};

console.log('Multiple of 3 or 5::::: ', multiplesFinder(10));