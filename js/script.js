const btmMenu = $('.header__btn-menu');
const btnClose = $('.header__btn-menu-close');
const navigationList = $('.header__navigation');

btmMenu.click(function() {
  $(this).toggleClass('header__btn-menu-close');
  navigationList.slideToggle(300);
});

btnClose.click(function() {
  navigationList.slideUp(300);
  btmMenu.removeClass('header__btn-menu-close');
});

// const modalBtn = $('.header__button');
// modalBtn.click(fuction() {
//   $('.modal').show();
// });