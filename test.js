//Unique Characters

const sampleString1 = "repeated letters"
const sampleString2 = "should"
const sampleString3 = "setters and getters"
const sampleString4 = "wonderful"

function uniqueLetters(str) {
    let uniqueLetter = ""
    let stringToTest = ""
    for(let i = 0; i < str.length; i++) {
      uniqueLetter = str[i]
    //   console.log(uniqueLetter)
      stringToTest = str.replace(uniqueLetter, "")
    //   console.log(stringToTest)
      if(stringToTest.includes(uniqueLetter)) {
          return false
      }
    }
    return true
}

console.log(uniqueLetters(sampleString1))
console.log(uniqueLetters(sampleString2))
console.log(uniqueLetters(sampleString3))
console.log(uniqueLetters(sampleString4))

//Sum Zero

let testArr = [1, 2, 3, -2]
let testArr2 = [2, 3, 5, 7, 9]
let testArr3 = [-3, 10, 3, -5]

function includesSumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i]+arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

console.log(includesSumZero(testArr))
console.log(includesSumZero(testArr2))
console.log(includesSumZero(testArr3))