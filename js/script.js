const btmMenu = $('.header__btn-menu');
const btnClose = $('.header__btn-menu-close');
const navigationList = $('.header__navigation');

btmMenu.click(function() {
  $(this).toggleClass('header__btn-menu-close');
  navigationList.toggle();
});

btnClose.click(function() {
  navigationList.hide();
  btmMenu.removeClass('header__btn-menu-close');
});

// const modalBtn = $('.header__button');
// modalBtn.click(fuction() {
//   $('.modal').show();
// });