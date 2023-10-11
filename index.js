import './style.css'


const sentences = ['4x Alimosho Basketball champion', '1x Lagos Basketball league champion', '4x female MVP', '2x Academy Division MVP', '1x Coach of the year' ]

let wordIndex = 0
let charIndex = 0
let isDeleting = false
let dynamicText = document.querySelector('#sentence')

const typeEffect =() => {
    const currentWord = sentences[wordIndex]
    const currentChar = currentWord.substring(0, charIndex)
    dynamicText.textContent = currentChar
 

    if (!isDeleting && charIndex < currentWord.length) {
        //if the condition is true, type the next character
        charIndex ++;
        setTimeout(typeEffect, 50)
    }else if (isDeleting && charIndex > 0){
        //If condition is true, remove the previous character
        charIndex--
        setTimeout(typeEffect, 50)
    }else{
        //if the word is deleted, switch to the next
        isDeleting = !isDeleting
        wordIndex = !isDeleting ? (wordIndex + 1) % sentences.length : wordIndex
        setTimeout(typeEffect, 1200)
    }
}

typeEffect()