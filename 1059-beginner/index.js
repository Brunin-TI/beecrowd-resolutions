const printEvenNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i]);
    }
  }
};
const arrayNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
printEvenNumbers(arrayNumbers);
