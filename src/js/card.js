import { generateRandomNumber } from "./helpers/generateRandomNumber";
import { modal } from "./modal";

export const createCard = (id, { title, desc, img, imgAltText }) => {
  const btnId = `btn_${id}`;
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
        <button id='${btnId}' class="btn">Button</button>
      </div>
  `;
  document.querySelector(".container").insertAdjacentHTML("beforeend", html);

  const btn = document.querySelector(`#${btnId}`);
  btn.addEventListener("click", () => {
    localStorage.setItem(
      `${btnId}`,
      parseInt(localStorage.getItem(`${btnId}`)) + 1 || 1
    );
    modal(`${btnId}`);
  });
};
