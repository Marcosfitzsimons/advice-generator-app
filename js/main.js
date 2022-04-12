let btn = document.querySelector(".icon-dice-container");

const fetchAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Api connection problem");
    }
    const data = await res.json();
    return data.slip;
  } catch (err) {
    console.log(err);
  }
};

const setAdvice = async () => {
  let advice = await fetchAdvice();
  let id = document.querySelector(".advice-id");
  let adviceText = document.querySelector(".advice-text");

  id.textContent = `ADVICE #${advice.id}`;
  adviceText.textContent = `❝${advice.advice}❞`;
};

btn.addEventListener("click", setAdvice);
setAdvice();

// asd
