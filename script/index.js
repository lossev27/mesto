let btnProfilEdit = document.querySelector('.profil__edit');
let btnPopupClose = document.querySelector('.popup__close')
let btnSubmitForm = document.querySelector('.form__submit-button');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let form = document.querySelector('.form');
let profilName = document.querySelector('.profil__name');
let profilJob = document.querySelector('.profil__job');

function tooglePopup () {
if (!popup.classList.contains('popup_open')) {
  nameInput.value = profilName.textContent;
  jobInput.value = profilJob.textContent;
}
  popup.classList.toggle('popup_open');
}

function formSubmitHandler (event) {
  event.preventDefault();
  profilName.textContent = nameInput.value;
  profilJob.textContent = jobInput.value;
  tooglePopup();
}

btnProfilEdit.addEventListener('click', tooglePopup);
btnPopupClose.addEventListener('click', tooglePopup);
form.addEventListener('submit', formSubmitHandler);
