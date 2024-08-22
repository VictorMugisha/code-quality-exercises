function calculateAverage(numbersArray = []) {
    const sumOfNumbers =
        numbersArray.reduce(
            (accumulator, element) => accumulator + element,
            numbersArray[0]
        )
    const numberOfElements = numbersArray.length
    const average = sumOfNumbers / numberOfElements
    return average
}