(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openServicesBtn: document.querySelector("[data-services-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeServicesBtn: document.querySelector("[data-services-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    services: document.querySelector("[data-services]"),
    svg: document.querySelector("[data-svg]"),
  };

  refs.openServicesBtn.addEventListener("click", toggleServices);
  refs.closeServicesBtn.addEventListener("click", deleteServices);

  function toggleServices() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.services.classList.toggle("is-open");
    refs.svg.classList.toggle("is-open");
  }

  function deleteServices() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.services.classList.remove("is-open");
    refs.svg.classList.remove("is-open");
  }
})();
