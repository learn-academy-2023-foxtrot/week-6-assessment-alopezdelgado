// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("capitalizeObject", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(capitalizeObject(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// GOOD Failure:  ReferenceError: capitalizeObject is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: capitalizeObject
// input: array of objects 
// output: array with each object out of the object, in a sentence, capitalized where it needs to be.
// process: use .map to iterate through the array and do string interpolation to each one, split to turn the array into a string, then a second .map to iterate through the string and turn the character at index 0 to upper case then use concantenation to add the uppercase character to the rest of the word because we are going to slice the word at index one. Finally, turn the string back to an array using .join and finish the string interpolation 

const capitalizeObject = (array) => {

  return array.map(array => `${array.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} is ${array.occupation}.`);
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remaindersCubed", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(remaindersCubed(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(remaindersCubed(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// GOOD Failure:  ReferenceError: remaindersCubed is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: remainersCubed
// input: array 
// output: array 
// process: first i will declare a variable remainders so that i can return it later. then i am going to use hof filter to filter through each element in the array and use type of to make sure they are numbers, then each number will go through a map hof and get the remainders of each  number divided by 3 then i will return the variable remainders. 

const remaindersCubed = (mixedArray) => {
  const remainders = mixedArray.filter((element) => typeof element === 'number').map((number) => number % 3);
  return remainders;
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// GOOD Failure: ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: sumCubed
// input: array 
// output: number
// process: i will iterate through the array using a for loop, but first im going to assign a variable sum to equal zero where we will store the cubed numbers and later sum them, inside the for loop i will create a variable called cube that will cube each value in the array and then i will add it to the sum variable and return sum outside of the for loop so it iterates through the whole array. 

const sumCubed = (array) => {
  let sum = 0 
  for (let i = 0; i < array.length; i++) {
    const cube = array[i] ** 3 
    sum += cube 
  }
  return sum
}
