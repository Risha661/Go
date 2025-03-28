const btmMenu = $('.header__btn-menu');
const btnClose = $('.header__btn-menu-close');
const navigationList = $('.header__navigation');
const modalBtn = $('.header__button');
const modalWindow = $('.modal');
const closeWindow = $('.modal__btn-close')

btmMenu.click(function() {
  $(this).toggleClass('header__btn-menu-close');
  navigationList.slideToggle(300);
});

btnClose.click(function() {
  navigationList.slideUp(300);
  btmMenu.removeClass('header__btn-menu-close');
});

modalBtn.click(function() {
  modalWindow.slideToggle(300);
});

closeWindow.click(function() {
  modalWindow.slideUp(300);
});

$(document).click(function(event) {
  if (!$(event.target).closest(navigationList).length && !$(event.target).is(btmMenu)) {
    navigationList.slideUp(300);
  }
});

$(document).click(function(event) {
  if (!$(event.target).closest(modalWindow).length && !$(event.target).is(modalBtn)) {
    modalWindow.slideUp(300);
  }
});