(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[gallery-overlay-open]'),
    closeModalBtn: document.querySelector('[gallery-overlay-close]'),
    modal: document.querySelector('[gallery-overlay]'),
  };
  for (const el of refs.openModalBtns) {
    el.addEventListener('click', toggleModal);
  }
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('gallery-overlay__is-hidden');
  }
})();
