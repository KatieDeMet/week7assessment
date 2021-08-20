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
// I believe this one is also O(n) even if it's O(26n)
// was trying to make it more efficient but .includes does not except regex as param

const sampleSentence1 = "The quick brown fox jumps over the lazy dog."
const sampleSentence2 = "I like cats, but not mice."

// const regEx = /^[a-z]/ig

function isPangram(sentence) {
    sentence = sentence.toLowerCase()
    if(sentence.includes('a' && 'b' && 'c' && 'd' && 'e' && 'f' && 'g' && 'h' && 'i' && 'j' && 'k' && 'l' && 'm' && 'n' && 'o' && 'p' && 'q' && 'r' && 's' && 't' && 'u' && 'v' && 'w' && 'x' && 'y' && 'z')) {
        return true
    } else {
        return false
    }
}

console.log(isPangram(sampleSentence1))
console.log(isPangram(sampleSentence2))