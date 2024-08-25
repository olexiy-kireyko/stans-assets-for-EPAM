(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    firstHerobgBtn: document.querySelector("[data-hero-firstbg]"),
    // Додати атрибут data-modal-close на кнопку закриття
    secondHerobgBtn: document.querySelector("[data-hero-secondbg]"),
    thirdHerobgBtn: document.querySelector("[data-hero-thirdbg]"),
    // Додати атрибут data-modal на бекдроп модалки
    herobg: document.querySelector("[data-hero-bg]"),
  };

  refs.firstHerobgBtn.addEventListener("click", toggleHerobg23);
  refs.secondHerobgBtn.addEventListener("click", toggleHerobg13);
  refs.thirdHerobgBtn.addEventListener("click", toggleHerobg12);

  function toggleHerobg23() {
    refs.herobg.classList.add("first-bg");
    refs.herobg.classList.remove("second-bg");
    refs.herobg.classList.remove("third-bg");
    refs.firstHerobgBtn.classList.add("is-checked");
    refs.secondHerobgBtn.classList.remove("is-checked");
    refs.thirdHerobgBtn.classList.remove("is-checked");
  }
  function toggleHerobg13() {
    refs.herobg.classList.remove("first-bg");
    refs.herobg.classList.add("second-bg");
    refs.herobg.classList.remove("third-bg");
    refs.firstHerobgBtn.classList.remove("is-checked");
    refs.secondHerobgBtn.classList.add("is-checked");
    refs.thirdHerobgBtn.classList.remove("is-checked");
  }
  function toggleHerobg12() {
    refs.herobg.classList.remove("first-bg");
    refs.herobg.classList.remove("second-bg");
    refs.herobg.classList.add("third-bg");
    refs.firstHerobgBtn.classList.remove("is-checked");
    refs.secondHerobgBtn.classList.remove("is-checked");
    refs.thirdHerobgBtn.classList.add("is-checked");
  }
})();
