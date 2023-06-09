const adviceElement = document.querySelector('.advice');
const btn = document.querySelector('button');
const count = document.querySelector('.count');

let adviceCount = 1;
let advice = '';
const baseURL = 'https://api.adviceslip.com/advice';

async function getAdvice() {
  const response = await fetch(baseURL);
  const data = await response.json();
  adviceElement.textContent = data.slip.advice;
  count.textContent = adviceCount++;
}

getAdvice();

btn.addEventListener('click', getAdvice);
