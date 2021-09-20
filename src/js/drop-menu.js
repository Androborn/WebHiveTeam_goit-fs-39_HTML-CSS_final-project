(() => {
  const refs = {
    openModalBtn: document.querySelector('[drop-menu-open]'),
    closeModalBtn: document.querySelector('body'),
    modal: document.querySelector('[drop-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function closeModal(e) {
    e.stopPropagation();
    refs.openModalBtn.classList.remove('site-nav__select--dropdown');
    refs.modal.classList.remove('drop-menu--is-open');
  }
  function toggleModal(e) {
     e.stopPropagation();
    refs.openModalBtn.classList.toggle('site-nav__select--dropdown');
    refs.modal.classList.toggle('drop-menu--is-open');
  }
})();
