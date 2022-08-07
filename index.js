const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

const titleCased = () => {
    //separates each line and then isolates each word on each line
    return tutorials.map((line) => {
        const words = line.split(' ');
        const capWords = words.map((words) =>
            words.charAt(0).toUpperCase() + words.slice(1)
        )
            .join(' ');
        return capWords
    })
}

console.log(titleCased(tutorials))


// function titleCased() {
//     return tutorials
//         .split(' ').map(word => {
//             return word.charAt(0).toUpperCase() +
//                 word.slice(1).toLowerCase();
//         })
//         .join(' ');

// }




// function titleCased(tutorials) {
//     let newTitleCasedArray = tutorials.toLowerCase()
//     newTitleCasedArray.map(function (word) {
//         return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//     return newTitleCasedArray
// }

// console.log(titleCased(tutorials))


// const testString = 'what does the this keyword mean?'.split(' ')

// function titleCased(tutorials) {
//     return tutorials.toLowerCase().map(function (word) {
//         return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
// }

// let lowerCaseString = testString.toLowerCase()
// lowerCaseString.map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
// }).join(' ');



// let upperCaseString = testString.toUpperCase()
// console.log(upperCaseString)
