const btmMenu = $('.header__btn-menu');
const btnClose = $('.header__btn-menu-close');
const navigationList = $('.header__navigation');
const modalBtn = $('.header__button');
const modalWindow = $('.modal');
const closeWindow = $('.modal__btn-close')

btmMenu.click(function(){

});

// $(document).ready(function() {
//   function checkScreenWidth() {
//     if ($(window).width() <= 590) {
//       if (navigationList.is(':visible')) {
//         $('.header__btn-border').show();
//       } else {
//         $('.header__btn-border').hide();
//       }
//     } else {
//       $('.header__btn-border').hide();
//     }
//   }

//   checkScreenWidth();

//   $(window).resize(function() {
//     checkScreenWidth();
//   });

//   btmMenu.click(function() {
//     $(this).toggleClass('header__btn-menu-close');
//     navigationList.slideToggle(300, function() {
//       checkScreenWidth();
//     });
//   });

//   btnClose.click(function() {
//     navigationList.slideUp(300, function() {
//       checkScreenWidth();
//     });
//     btmMenu.removeClass('header__btn-menu-close');
//   });

//   modalBtn.click(function() {
//     modalWindow.slideToggle(300);
//   });

//   closeWindow.click(function() {
//     modalWindow.slideUp(300);
//   });

//   $(document).click(function(event) {
//     if (!$(event.target).closest(navigationList).length && !$(event.target).is(btmMenu)) {
//       navigationList.slideUp(300, function() {
//         checkScreenWidth();
//       });
//       btmMenu.removeClass('header__btn-menu-close');
//     }

//     if (!$(event.target).closest(modalWindow).length && !$(event.target).is(modalBtn)) {
//       modalWindow.slideUp(300);
//     }
//   });
// });