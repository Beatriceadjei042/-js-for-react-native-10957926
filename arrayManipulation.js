function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number;
        } else {
            return number * 3;
        }
    });
}

function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

const numbers = [16, 44, 94, 5, 18];
const processedNumbers = processArray(numbers); 
const strings = ["hello", "world", "this", "is", "test"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(processedNumbers); 
console.log(formattedStrings); 
