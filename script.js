"use strict"

const faqItem = document.querySelectorAll(".faq-item")
const faqQuestion = document.querySelectorAll(".question")
const faqAnswer = document.querySelectorAll(".answer")
const arrow = document.querySelectorAll(".arrow")

function addHidden (){
    faqAnswer.forEach(answer => {
        answer.classList.replace("show","hidden")
    })
}

function removeActive (){
    faqQuestion.forEach(question => {
        question.classList.remove("active")
    })
}

function removeRotate (){
    arrow.forEach(arrow => {
        arrow.classList.remove("rotate")
    })
}

faqItem.forEach(main => {
    main.addEventListener("click", () => {
        if(main.children[1].classList.contains("show")){
            addHidden()
            removeActive()
            removeRotate ()
        } else {
            addHidden()
            removeActive()
            removeRotate ()
            main.children[0].children[1].classList.add("rotate")
            main.children[0].classList.add("active")
            main.children[1].classList.add("show")
        }
    })
})