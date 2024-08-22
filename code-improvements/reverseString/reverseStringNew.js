function reverseString(string = "") {
    // Make it an array, reverse it and then re-join it into string
    const reversedString = string.split("").reverse().join('');
    return reversedString;
}