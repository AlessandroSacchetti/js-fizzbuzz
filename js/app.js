//console.log('ciao')

//generare un numero casuale da 1-100, determinare 
//se il numero generato è multiplo di 3 allora stampare fizz
//se il numero generato è multiplo di 5 allora stampare buzz
//se il numero generato è multiplo di entrambi allora stampare fizzbuzz
//se non è multiplo di nessuno allora stampare il numero generato

const randomNumber = parseInt(Math.floor(Math.random()*100))
console.log(randomNumber)

const divide3 = randomNumber%3
const divide5 = randomNumber%5
console.log(divide3, divide5)

let fizzBuzz = 0
if (divide3 === 0 && divide5 === 0){
    console.log('FizzBuzz')
    fizzBuzz = 'FizzBuzz'
}  else if (divide5 === 0 && divide3 != 0){
    console.log('buzz')
    fizzBuzz = 'Buzz'
} else if (divide3 === 0 && divide5 != 0){
    console.log('fizz')
    fizzBuzz = 'Fizz'
} else {
    console.log(randomNumber)
    fizzBuzz = randomNumber
}

const result = document.getElementById('fizzbuzzElement')
result.innerHTML = fizzBuzz

console.log(fizzBuzz)
