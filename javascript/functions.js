'use strict'

let correctAnswers = 0
let incorrectAnswers = 0

let rand_num1 = 0
let rand_num2 = 0

const getRandomIntNumerInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumerInRange(1, 10)
    rand_num2 = getRandomIntNumerInRange(1, 10)
    document.querySelector('#num1').textContent = rand_num1
    document.querySelector('#num2').textContent = rand_num2
}

const checkAnswer = () => {
    const userAnswer = Number(document.querySelector('#answer').value)
    const correctAnswer = rand_num1 + rand_num2

    if (userAnswer === correctAnswer) {
        correctAnswers++
        alert("Oikein")
    } else {
        incorrectAnswers++
        alert("Väärin")
    }

    document.querySelector('#correct').textContent = correctAnswers
    document.querySelector('#incorrect').textContent = incorrectAnswers

    randomizeNumbers()
    document.querySelector('#answer').value = ''
}


document.addEventListener('DOMContentLoaded', () => {
    randomizeNumbers()

    document.querySelector('#calculate').addEventListener('click', checkAnswer)
})
