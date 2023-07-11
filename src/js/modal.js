export const modal = (btn) => {
  let numberOfBtnClick = localStorage.getItem(btn);
  const isResetBtnVisible = numberOfBtnClick > 5;
  const timeOrTimes = numberOfBtnClick < 2 ? "time" : "times";
  const html = `
    <div class="modal">
      <div class="modal__container">
        <button class="close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <p class="modal__title">Alert!</p>
        <p class="modal__desc">
          You have clicked <span>${numberOfBtnClick} ${timeOrTimes}</span> to related button.
        </p>

        ${
          isResetBtnVisible
            ? `<button id="resetCounter" type="button" class="btn">Reset counter</button>`
            : ""
        }
      </div>
    </div>
  `;

  document.querySelector("body").insertAdjacentHTML("beforeend", html);

  const resetBtn = document.querySelector("#resetCounter");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      localStorage.setItem(btn, 0);
      resetBtn.style.display = "none";
    });
  }

  const modalOveerlay = document.querySelector(".modal");
  modalOveerlay.addEventListener("click", (e) => {
    const isOutside = !e.target.closest(".modal__container");
    if (isOutside) modalOveerlay.remove();
  });

  const buttonClose = document.querySelector(".close");
  buttonClose.addEventListener("click", () => {
    modalOveerlay.remove();
  });
};
