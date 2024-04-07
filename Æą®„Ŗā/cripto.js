const input = document.querySelector('.calc-head__input')
const result = document.querySelector('.calc__result')
const btn = document.querySelector('.calc-head__btn')
btn.addEventListener('click', function(){
    let resultCalc = input.value * 65000
   result.textContent = `${resultCalc}`
  })