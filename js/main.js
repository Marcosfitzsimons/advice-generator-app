const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  let id = document.querySelector(".advice-id");
  let adviceText = document.querySelector(".advice-text");

  id.innerHTML = `#${data.slip.id}`;
  adviceText.innerHTML = `❝${data.slip.advice}❞`;
};

let btn = document.querySelector(".icon-dice-container");

btn.addEventListener("click", fetchAdvice);
