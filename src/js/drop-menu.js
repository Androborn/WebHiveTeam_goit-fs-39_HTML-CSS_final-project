(() => {
  const refs = {
    openModalBtn: document.querySelector('[drop-menu-open]'),
    closeModalBtn: document.querySelector('body'),
    modal: document.querySelector('[drop-menu]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal(e) {
    e.stopPropagation();
    refs.openModalBtn.classList.add('site-nav__select--dropdown');
    refs.modal.classList.add('drop-menu--is-open');
  }
  function closeModal(e) {
    e.stopPropagation();
    refs.openModalBtn.classList.remove('site-nav__select--dropdown');
    refs.modal.classList.remove('drop-menu--is-open');
  }
})();
