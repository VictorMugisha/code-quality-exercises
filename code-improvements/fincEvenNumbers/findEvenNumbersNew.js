function findEvenNumbers(numbers = []) {
    // Using filter array higher order method
    const evenNumbers = numbers.filter(
        number => number % 2 === 0
    );
    return evenNumbers;
}