const adviceId = document.querySelector(".card__advice-id")
const advice = document.querySelector(".card__advice span")
const regenerate = document.querySelector(".card__regenerate")

async function fetchAdvice(){
  const res = await fetch("https://api.adviceslip.com/advice")
  return await res.json()
}

function eventHandler() {
  fetchAdvice()
    .then(res => {
      adviceId.innerText = res.slip.id
      advice.innerText = res.slip.advice
    })
}

regenerate.addEventListener('click',eventHandler);
eventHandler()
