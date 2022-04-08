import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";
import { FormValidator } from "./FormValidator.js";
//кнопки
const profileEditBtn = document.querySelector(".profil__edit");
//инпуты
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const cardName = document.querySelector(".form__input_type_title");
const cardLink = document.querySelector(".form__input_type_link");
//формы
const formEditProfile = document.querySelector("#form-edit-profile");
const formCreateCard = document.querySelector("#form-create-card");
//селекторы
const profilName = document.querySelector(".profil__name");
const profilJob = document.querySelector(".profil__job");
const popupImg = document.querySelector(".popup__img");
const popupImgDescription = document.querySelector(".popup__img-description");

// попапы
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupCreateCard = document.querySelector(".popup_type_create-card");
const popupImage = document.querySelector(".popup_type_image");

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};

//функция открытия картинки
function openImage(title, imageUrl) {
  openPopup(popupImage);
  popupImg.src = imageUrl;
  popupImgDescription.textContent = title;
  popupImg.alt = `фото ${title}`;
}


const openPopup = function (popup) {
  popup.classList.add("popup_open");


  document.addEventListener("keydown", closePopupEsc);
}

const closePopup = function(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", closePopupEsc);
}

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_open')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    });

})

//функция закрытия popup по нажатию Esc
function closePopupEsc(e) {
  if (e.key === "Escape") {
    const popupOpen = document.querySelector(".popup_open");
    closePopup(popupOpen);
  }
}



// Открытие окна редактирования профиля c передачей инпутов в форму
function openEditPopup() {
  openPopup(popupEditProfile);
  nameInput.value = profilName.textContent;
  jobInput.value = profilJob.textContent;
  validatePopupEditProfile.resetValidation();
}
profileEditBtn.addEventListener("click", openEditPopup);

//отправка текста при сабмите
function handleFormEditProfileSubmit(event) {
  event.preventDefault();
  profilName.textContent = nameInput.value;
  profilJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
formEditProfile.addEventListener("submit", handleFormEditProfileSubmit);

const elements = document.querySelector(".cards");

function createCard(name, link) {
  return new Card(name, link, "#template-card", openImage).createCard();
}
//рендеринг карточки
function addCard(name, link) {
  elements.prepend(createCard(name, link));
}

const validatePopupEditProfile = new FormValidator(
  validationConfig,
  popupEditProfile
);
validatePopupEditProfile.enableValidation();


const validatePopupCreateCard = new FormValidator(
  validationConfig,
  popupCreateCard
);

validatePopupCreateCard.enableValidation();


//пробежим циклом и наполним шаблон присвоив значения из маcсива
initialCards.forEach((item) => {
  addCard(item.name, item.link);
});

//открыть попап добавления карточки
const cardsAddButton = document.querySelector(".profil__add-button");
cardsAddButton.addEventListener("click", () => {
  openPopup(popupCreateCard);
  validatePopupCreateCard.resetValidation();
  formCreateCard.reset();
});

//получить имя и адрес картинки, передает как аргумент в addCard
function createCardFormSubmit(event) {
  event.preventDefault();
  addCard(cardName.value, cardLink.value);
  closePopup(popupCreateCard);
}

formCreateCard.addEventListener("submit", createCardFormSubmit);
