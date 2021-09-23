//кнопки
const btnProfilEdit = document.querySelector(".profil__edit");
const btnPopupClose = document.querySelectorAll(".popup__close");
//инпуты
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
//формы
const formEditProfile = document.querySelector("#form-edit-profile");
const formCreateCard = document.querySelector("#form-create-card");
//селекторы
const profilName = document.querySelector(".profil__name");
const profilJob = document.querySelector(".profil__job");

// попапы
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupCreateCard = document.querySelector(".popup_type_create-card");
const popupImage = document.querySelector(".popup_type_image");

//функция открытия картинки
function imageOpen(e) {
  tooglePopup(popupImage);
  const popupImg = document.querySelector(".popup__img");
  const popupImgDescription = document.querySelector(".popup__img-description");
  popupImg.src = e.target.src;
  const cardsTitle = e.target.closest(".card").querySelector(".card__tiltle").textContent;
  popupImgDescription.textContent = cardsTitle;
  popupImg.alt = `фото ${cardsTitle}`;
}

//функция тогл-попап, открывает или закрывает попап
function tooglePopup(popup) {
  popup.classList.toggle("popup_open");
}

//закрытие любого попапа по иконке крестик
btnPopupClose.forEach((btnClose) => {
  btnClose.addEventListener("click", (e) => {
    tooglePopup(e.path[2]);
  });
});

// Открытие окна редактирования профиля c передачей инпутов в форму
function openEditPopup() {
  tooglePopup(popupEditProfile);
  nameInput.value = profilName.textContent;
  jobInput.value = profilJob.textContent;
}
btnProfilEdit.addEventListener("click", openEditPopup);

//отправка текста при сабмите
function formSubmitHandler(event) {
  event.preventDefault();
  profilName.textContent = nameInput.value;
  profilJob.textContent = jobInput.value;
  tooglePopup(popupEditProfile);
}
formEditProfile.addEventListener("submit", formSubmitHandler);

//клонирование и заполнения шаблона
const postTemplate = document.querySelector("#template-card").content;
const elements = document.querySelector(".cards");

function addCard(name, link) {
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
  elementImg.addEventListener("click", imageOpen);
  elements.prepend(element);
}

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
  tooglePopup(popupCreateCard);
});

//функция получает имя и адрес картинки, передает как аргумент в addCard
function createCardFormSubmit(event) {
  event.preventDefault();
  const cardName = document.querySelector(".form__input_type_title");
  const cardLink = document.querySelector(".form__input_type_link");
  addCard(cardName.value, cardLink.value);
  tooglePopup(popupCreateCard);
}

formCreateCard.addEventListener("submit", createCardFormSubmit);

//кнопка лайк, слушатель события накидываем в момент рендеренга карточки
function handleClickLike(e) {
  e.target.classList.toggle("card__icon-heart_active");
}
