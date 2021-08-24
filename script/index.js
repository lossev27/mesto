let btnProfilEdit = document.querySelector('.profil__edit');
let btnPopupClose = document.querySelector('.popup__close')
let btnSubmitForm = document.querySelector('.form__submit-button');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let form = document.querySelector('.form');
let profilName = document.querySelector('.profil__name');
let profilJob = document.querySelector('.profil__job');



function openPopup (event) {
 event.preventDefault();
if (popup.classList.contains('popup__open')) {
  popup.classList.remove('popup__open')
}

profilName.textContent = nameInput.value;
profilJob.textContent = jobInput.value;
popup.classList.toggle('popup__open');

}

btnProfilEdit.addEventListener('click', openPopup);
btnPopupClose.addEventListener('click', openPopup);
form.addEventListener('submit', openPopup);
