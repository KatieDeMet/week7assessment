const sampleString1 = "repeated letters"
const sampleString2 = "should"

function uniqueLetters(str) {
    let uniqueLetter = ""
    for(let i = 0; i < str.length; i++) {
      uniqueLetter = str[i]
      console.log(uniqueLetter)
      str.replace("s", "t")
      console.log(str)
      if(str.includes(uniqueLetter)) {
          return false
      }
    }
    return true
}

// console.log(uniqueLetters(sampleString1))
console.log(uniqueLetters(sampleString2))
console.log(sampleString2.replace("s", "t"))

//could not get .replace to work