(() => {
  const refs = {
    header: document.querySelector('.header'),
    openModalBtn: document.querySelector('[mobile-menu-open]'),
    modal: document.querySelector('[mobile-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.header.classList.toggle('header--mobile-menu-is-open');
    refs.openModalBtn.classList.toggle('hamburger--collapse');
  }
})();
