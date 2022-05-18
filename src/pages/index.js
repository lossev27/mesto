import { Card } from "../script/Card.js";
import { FormValidator } from "../script/FormValidator.js";
import {
  initialCards,
  profileEditBtn,
  nameInput,
  jobInput,
  formCreateCard,
  popupEditProfile,
  popupCreateCard,
  cardsAddButton,
  validationConfig,
} from "../src/utils/constans.js";

import { selectors } from "../src/utils/constans.js";

import { Section } from "../script/Section.js";
import { PopupWithImage } from "../script/PopupWithImage.js";
import { PopupWithForm } from "../script/PopupWithForm.js";
import { UserInfo } from "../script/UserInfo.js";

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      section.addItem(prependCard(item.name, item.link));
    },
  },
  selectors.listCard
);

section.renderItems();

const userInfo = new UserInfo({
  profilNameSelector: selectors.profileName,
  profilJobSelector: selectors.profileJob,
});

const editProfilePopup = new PopupWithForm(".popup_type_edit-profile", {
  submitCallBack: (item) => {
    userInfo.setUserInfo(item.name, item.userjob);
  },
});

profileEditBtn.addEventListener("click", () => {
  validatePopupEditProfile.resetValidation();
  const { profilName, profilJob } = userInfo.getUserInfo();
  nameInput.value = profilName;
  jobInput.value = profilJob;
  editProfilePopup.open();
});

editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(".popup_type_create-card", {
  submitCallBack: (item) => {
    submitCard(item.name, item.link);
  },
});

function submitCard(name, link) {
  section.addItem(prependCard(name, link));
}

cardsAddButton.addEventListener("click", () => {
  addCardPopup.open();

  validatePopupCreateCard.resetValidation();
  formCreateCard.reset();
});

addCardPopup.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_type_image");

popupWithImage.setEventListeners();

//открытиe картинки
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

function prependCard(name, link) {
  const card = new Card(name, link, "#template-card", handleCardClick);
  card.createCard();
  card._setEventListeners();
  return card.render();
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
