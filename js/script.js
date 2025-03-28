const btmMenu = $('.header__btn-menu');
btmMenu.click(function() {
  $(this).toggleClass('header__active-menu');
});

const modalBtn = $('.header__button');
modalBtn.click