// Quick Question #1
// What does the following code return?
new Set([1,1,2,2,3,4]) // Set(4) {1, 2, 3, 4}

// Quick Question #2
// What does the following code return?
[...new Set("referee")].join("") // 'ref'

// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); 

//Map(2) {Array(3) => true, Array(3) => false}

// ## **hasDuplicate**

// Write a function called hasDuplicate which accepts an 
// array and returns true or false if that array contains a duplicate


function hasDuplicate(array) {
    let uniqueElements = new Set();

    for (let element of array) {
        if (uniqueElements.has(element)) {
            return true; 
        }
        uniqueElements.add(element);
    }

    return false;
}


// ## **vowelCount**

// Write a function called vowelCount which accepts a string and returns 
// a map where the keys are numbers and the values are the count of the vowels in the string.


function vowelCount(str) {
    const counts = new Map();
    const vowels = new Set('aeiouAEIOU');

    for (let char of str) {
        if (vowels.has(char)) {
            counts.set(char, counts.has(char) ? counts.get(char) + 1 : 1);
        }
    }

    return counts;
}