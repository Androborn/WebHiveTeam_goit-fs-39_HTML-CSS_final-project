(() => {
  const refs = {
    openModalBtn: document.querySelector('[phone-list-open]'),
    closeModalBtn: document.querySelector('body'),
    modal: document.querySelector('[phone-list]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function toggleModal(e) {
    e.stopPropagation();
    refs.modal.classList.toggle('header__contacts--mobile--is-open');
  }
  function closeModal(e) {
    e.stopPropagation();
    refs.modal.classList.remove('header__contacts--mobile--is-open');
  }
})();
