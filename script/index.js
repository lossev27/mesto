//кнопки
const profileEditBtn = document.querySelector(".profil__edit");
const popupCloseBtnsArray = document.querySelectorAll(".popup__close");
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
// const popupOpen = document.querySelector('.popup_open');

//функция открытия картинки
function openImage(title, imageUrl) {
  togglePopup(popupImage);
  popupImg.src = imageUrl;
  popupImgDescription.textContent = title;
  popupImg.alt = `фото ${title}`;
}

//функция тогл-попап, открывает или закрывает попап
function togglePopup(popup) {
  popup.classList.toggle("popup_open");
  if (popup.classList.contains("popup_open")) {
    document.addEventListener("keydown", closePopupEsc);
    document.addEventListener("click", overlayClose);
  } else {
    document.removeEventListener("keydown", closePopupEsc);
    document.removeEventListener("click", overlayClose);
  }
}

//функция закрытия popup по нажатию Esc
function closePopupEsc(e) {
  if (e.key === "Escape") {
    const popupOpen = document.querySelector(".popup_open");
    togglePopup(popupOpen);
  }
}

// Функция закрытия по оверлей
const overlayClose = function (e) {
  if (e.target.classList.contains("popup_open")) {
    togglePopup(e.target);
  }
};

//закрытие любого попапа по иконке крестик
popupCloseBtnsArray.forEach((btnClose) => {
  btnClose.addEventListener("click", (e) => {
    togglePopup(e.target.closest(".popup"));
  });
});

// Открытие окна редактирования профиля c передачей инпутов в форму
function openEditPopup() {
  togglePopup(popupEditProfile);
  nameInput.value = profilName.textContent;
  jobInput.value = profilJob.textContent;
}
profileEditBtn.addEventListener("click", openEditPopup);

//отправка текста при сабмите
function handleFormEditProfileSubmit(event) {
  event.preventDefault();
  profilName.textContent = nameInput.value;
  profilJob.textContent = jobInput.value;
  togglePopup(popupEditProfile);
}
formEditProfile.addEventListener("submit", handleFormEditProfileSubmit);

//клонирование и заполнения шаблона
const postTemplate = document.querySelector("#template-card").content;
const elements = document.querySelector(".cards");

function createCard(name, link) {
  const element = postTemplate.querySelector(".card").cloneNode(true);
  const elementImg = element.querySelector(".card__image");
  const elemetTitle = element.querySelector(".card__tiltle");
  const buttonLike = element.querySelector(".card__icon-heart");
  const buttonDeleteCard = element.querySelector(".card__button-delete");
  elementImg.src = link;
  elementImg.alt = `фото ${name}`;
  elemetTitle.textContent = name;
  buttonLike.addEventListener("click", handleClickLike);
  buttonDeleteCard.addEventListener("click", deleteCard);
  elementImg.addEventListener("click", () => openImage(name, link));
  return element;
}

//функция добавления карточки
function addCard(name, link) {
  elements.prepend(createCard(name, link));
}
//пробежим циклом и наполним шаблон присвоив значения из масива
initialCards.forEach((item) => {
  addCard(item.name, item.link);
});

//функция удаления карточки
function deleteCard(e) {
  const card = e.target.closest(".card");
  card.remove();
}

//открытие попапа добавления карточки
const cardsAddButton = document.querySelector(".profil__add-button");
cardsAddButton.addEventListener("click", () => {
  togglePopup(popupCreateCard);
});

//функция получает имя и адрес картинки, передает как аргумент в addCard
function createCardFormSubmit(event) {
  event.preventDefault();
  addCard(cardName.value, cardLink.value);
  togglePopup(popupCreateCard);
  formCreateCard.reset();
}

formCreateCard.addEventListener("submit", createCardFormSubmit);

//кнопка лайк, слушатель события накидываем в момент рендеренга карточки
function handleClickLike(e) {
  e.target.classList.toggle("card__icon-heart_active");
}
