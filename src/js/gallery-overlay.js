(() => {
  const refs = {
    body: document.querySelector('body'),
    openModalBtns: document.querySelectorAll(
      '[gallery-overlay-open]',
    ),
    closeModalBtn: document.querySelector('[gallery-overlay-close]'),
    modal: document.querySelector('[gallery-overlay]'),
  };
  for (const el of refs.openModalBtns) {
    el.addEventListener('click', toggleModal);
  }
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('gallery-overlay-is-open');
  }
})();
