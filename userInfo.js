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

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}

// Example usage
const numbers = [9, 0, 6, 46, 87];
const processedNumbers = processArray(numbers); 
const strings = ["hello", "world", "these", "are", "texts"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);

const originalNames = ["Tilly", "Princess", "Martin", "Kate", "Laura"];
const modifiedNames = ["TILLY", "princess", "MARTIN", "kate", "Laura"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(processedNumbers); 
console.log(formattedStrings); 
console.log(userProfiles);