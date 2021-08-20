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