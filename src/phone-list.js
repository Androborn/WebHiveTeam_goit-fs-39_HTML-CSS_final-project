(() => {
  const refs = {
    openModalBtn: document.querySelector('[phone-list-open]'),
    closeModalBtn: document.querySelector('body'),
    modal: document.querySelector('[phone-list]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal(e) {
    e.stopPropagation();
    refs.modal.classList.add('header__contacts--mobile--is-open');
  }
  function closeModal(e) {
    e.stopPropagation();
    refs.modal.classList.remove('header__contacts--mobile--is-open');
  }
})();
