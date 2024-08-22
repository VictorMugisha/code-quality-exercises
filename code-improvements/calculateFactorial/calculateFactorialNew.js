function calculateFactorial(number) {
    if (number === 1 || number === 0) return 1;
    
    // Calculating factorial if number is not 1 on 0
    let factorial = 1;
    let realNumber = 1;
    while (realNumber <= number) {
        factorial *= realNumber;
        realNumber += 1;
    }

    return factorial;
}