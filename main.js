const grid = document.querySelector('.grid')
let box = document.querySelectorAll('.box')
let mole = document.querySelectorAll('.mole')
let counte = document.querySelector('.counter')
let changeplaces = setInterval(randombox,1000)
let Score = document.getElementById('score')
let count = 60
let result = 0


let counter = setInterval(()=>{count--},1000)
function randombox(){
    box.forEach(classname=>{
        classname.classList.remove('mole')
    })
    let randomposition = box[Math.floor(Math.random()*9)]
    randomposition.classList.add('mole')
    counte.textContent = `Time: ${count}`
    if(count === 0){
        clearInterval(changeplaces)
        clearInterval(counter)
        alert('GAME OVER!!! your final score:'+ result)
    }
    hitposition = randomposition.id
} 

box.forEach(id=>{
    id.addEventListener('mouseup',()=>{
        if(id.id === hitposition){
            result++
            Score.textContent = `Your Score: ${result}`
        }
       
        
    })
})



