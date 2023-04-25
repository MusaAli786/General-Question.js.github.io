let queston1 = document.querySelector('.queston1')
let queston2 = document.querySelector('.queston2')
let queston3 = document.querySelector('.queston3')
let firstButton = document.querySelector('.firstButton')
let secondButton = document.querySelector('.secondButton')
let thirdButton = document.querySelector('.thirdButton')

let firstPara = document.querySelector('.firstPara')
let secondPara = document.querySelector('.secondPara')
let thirdPara = document.querySelector('.thirdPara')

let hidden = document.querySelectorAll('.hidden')


firstButton.addEventListener('click', () => {
    firstPara.classList.toggle("hidden");
    secondPara.classList.add("hidden");
    thirdPara.classList.add("hidden");
})
secondButton.addEventListener('click', () => {
    secondPara.classList.toggle("hidden");
    firstPara.classList.add("hidden");
    thirdPara.classList.add("hidden");
   
})
thirdButton.addEventListener('click', () => {
    thirdPara.classList.toggle("hidden");
    firstPara.classList.add("hidden");
    secondPara.classList.add("hidden");
   
})

