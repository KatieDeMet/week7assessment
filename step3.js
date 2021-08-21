//Problem 4 - Longest Word
//O(n) time complexity

const arrayOfWords  = ["cherry", "sit", "playground", "onomatopoeia", "goal", "hi", "tubular"]


function find_longest_word(arr) {
    let longestWord = ""
    arr.forEach(word => {
        if(word.length > longestWord.length) {
            longestWord = word
        }
    })
    return longestWord
}

console.log(find_longest_word(arrayOfWords))

//Problem 3 Panagram
// I believe this one is O(n^2)

const sampleSentence1 = "The quick brown fox jumps over the lazy dog."
const sampleSentence2 = "I like cats, but not mice."
const sampleSentence3 = "Pleaze work"
const sampleSentence4 = "Sphinx of black quartz, judge my vow"

function isPangram(sentence) {
    let newSentence = sentence.toLowerCase().replace(/[^a-z]/g, '')
    let alphabetCount = 0
    let incrementor = 0
    for(let i = 97; i <= 122; i++) {
        for(let j = 0; j < newSentence.length; j++) {
            if(newSentence[j].charCodeAt() === i) {
                incrementor = 1
            } 
        }
        if(incrementor) {
            alphabetCount++
            incrementor = 0
        }
    }
    if(alphabetCount === 26) {
        return true
    } else {
        return false
    }
}

console.log(isPangram(sampleSentence1))
console.log(isPangram(sampleSentence2))
console.log(isPangram(sampleSentence3))
console.log(isPangram(sampleSentence4))