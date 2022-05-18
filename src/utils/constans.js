export const initialCards = [
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//buttons
export const profileEditBtn = document.querySelector(".profil__edit");
export const cardsAddButton = document.querySelector(".profil__add-button");
//inputs
export const nameInput = document.querySelector(".form__input_type_name");
export const jobInput = document.querySelector(".form__input_type_job");
//forms
export const formCreateCard = document.querySelector("#form-create-card");
//selectors
export const popupImg = document.querySelector(".popup__img");
export const popupImgDescription = document.querySelector(
  ".popup__img-description"
);

// popups
export const popupEditProfile = document.querySelector(
  ".popup_type_edit-profile"
);
export const popupCreateCard = document.querySelector(
  ".popup_type_create-card"
);
export const popupImage = document.querySelector(".popup_type_image");

export const selectors = {
  listCard: ".cards",
  addCardPopup: ".popup_type_create-card",
  editProfilePopup: ".popup_type_edit-profile",
  imagePopup: ".popup_type_image",
  imageElement: ".popup__img",
  imageTitle: ".popup__img-description",
  profileName: ".profil__name",
  profileJob: ".profil__job",
};

export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};
