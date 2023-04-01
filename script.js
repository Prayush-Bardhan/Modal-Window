'use strict';

const modal = document.querySelector('.modal');
//console.log(modal);

const overlay = document.querySelector('.overlay');
//console.log(overlay);

const btnCloseModal = document.querySelector('.close-modal');
//console.log(btnCloseModal);

const btnOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnOpenModal);

const openModalWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModalWindow);
}

btnCloseModal.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModalWindow();
    }
  }
});
