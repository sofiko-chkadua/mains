// общая функция 
 function togglePopupPrivacy(modal) {
    modal.classList.toggle("popup_open");
    if (!modal.classList.contains("popup_open")) {
        document.removeEventListener("keyup", keyupHandlerPrivacy);
    }
}


// функция закр по еск
 const keyupHandlerPrivacy = function (e) {
    console.log(123);
    if (e.keyCode == 27) {
        const openModal = document.querySelector(".popup_open");
        togglePopupPrivacy(openModal);
    }
};

 function handleOverlayClickPrivacy(popup, e) {
    if (!e.target.closest(".popup__container")) {
        togglePopupPrivacy(popup);
    }
    document.removeEventListener("keyup", keyupHandlerPrivacy);
  }

  //модалки
const popupMenuPrivacy = document.querySelector(".popup_menu-privacy");

// Кнопки открытия
const openmenuPrivacyPopupButton = document.querySelector(".header__menu-burger-privacy");

// Кнопки закрытия
const menuPrivacyPopupCloseButton = document.querySelector(".popup__closedbutt-privacy");

// подписки открытия
openmenuPrivacyPopupButton.addEventListener("click", function () {
    togglePopupPrivacy(popupMenuPrivacy);
    document.addEventListener("keyup", keyupHandlerPrivacy);
});

// подписки закрытия
menuPrivacyPopupCloseButton.addEventListener("click", function () {
    togglePopupPrivacy(popupMenuPrivacy);
});


// закрытие по оверлэй
popupMenuPrivacy.addEventListener("click", function (e) {
    handleOverlayClickPrivacy(popupMenuPrivacy, e);
});

