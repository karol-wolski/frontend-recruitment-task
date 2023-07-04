import { generateRandomNumber } from "./helpers/generateRandomNumber";

export const createCard = ({ title, desc, img, imgAltText }) => {
  const btnId = generateRandomNumber(1, 10000);
  const html = `
    <div class="card">
      <img
        class="card__image"
        src="./images/${img}"
        alt="${imgAltText}"
      />
      <div class="card__container">
        <h2 class="card__title">${title}</h2>
        <p class="card__desc">${desc}</p>
        <button id='btn_${btnId}' class="btn">Button</button>
      </div>
  `;
  document.querySelector(".container").insertAdjacentHTML("beforeend", html);

  const btn = document.querySelector(`#btn_${btnId}`);
  btn.addEventListener("click", () => {
    console.log({ btnId });
  });
};
