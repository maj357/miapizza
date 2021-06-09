$(document).ready(function () {

  // Модальное окно входа (кнопка "ВХОД")
  $(document).ready(function () {
    $('.log_btn').on('click', function (event) {
      event.preventDefault();
      $('.popup').fadeIn();
    });
    $('.popup-close').on('click', function (event) {
      event.preventDefault();
      $('.popup').fadeOut();
    });
  });

  // Закрытие модальных окон через 'esc'
  $(document).on('keydown', function (event) {
    if (event.keyCode == 27) {
      $('.popup').fadeOut();
    }
  });

  // Плавный скролл для ссылок по якорям
  $("a.scrlpizza").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  $("a.scrlpizza-mob").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  $("a.scrlcontact").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  // Планый скролл для лого в топ экрана
  $('.header-logo-image').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
  });

  $('.mobile-logo-menu').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
  });

  $('.logo').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
  });
});

// Анимация картинки из черного в цветное
$("img.grey").hover(
  function () {
    $(this).stop().animate({
      "opacity": "0"
    }, "100");
  },
  function () {
    $(this).stop().animate({
      "opacity": "1"
    }, "100");
  });

// Бургер-меню кнопка
$('.mob-btn').on('click', function (event) {
  event.preventDefault();
  $(this).toggleClass('mob-btn_active');
  $('.main-menu-list').toggleClass('main-menu-list_active');
});

// Мобильное меню
$('.mob-btn').on('click', function (event) {
  event.preventDefault();
  $('.mobile-menu').toggleClass('mobile-menu_active');
});

$('.log_btn').on('click', function (event) {
  event.preventDefault();
  $('mob-btn_active').toggleClass('mob-btn');
  $('.main-menu-list_active').hide();
  $('.mobile-menu_active').hide();
  $('.popup-content').toggleClass('popup-content_active');
});

$('.popup-close').on('click', function (event) {
  $('.popup-content').removeClass('.popup-content_active');
  $('.main-menu-list_active').show();
  $('.mobile-menu_active').show();
});

// Уменьшение при скроле вниз + возврат
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("image_scrl").style.width = "7rem";
    document.getElementById("header_scrl").style.height = "11rem";
    document.getElementById("main-menu_scrl").style.marginTop = "-6.5rem";
    document.getElementById("num_scrl-one").style.fontSize = "1.5rem";
    document.getElementById("num_scrl-two").style.fontSize = "1.5rem";
    document.getElementById("num_scrl-tree").style.fontSize = "1.5rem";
    document.getElementById("num_scrl-four").style.fontSize = "1.5rem";
    document.getElementById("num_scrl-five").style.fontSize = "1.5rem";
    if (document.body.clientWidth < 769) {
      document.getElementById("mob_logo").style.marginTop = "-19rem";
      document.getElementById("mob_logo").style.width = "11rem";
      document.getElementById("mob_btn").style.marginTop = "-11rem";
    }
    if (document.body.clientWidth < 415) {
      document.getElementById("mob_logo").style.marginTop = "-7rem";
      document.getElementById("mob_logo").style.width = "10rem";
      document.getElementById("mob_btn").style.marginTop = "-3rem";
      document.getElementById("to_home_btn").style.marginTop = "-3rem";
    }
    if (document.body.clientWidth < 321) {
      document.getElementById("mob_logo").style.marginTop = "-7rem";
      document.getElementById("mob_logo").style.width = "10rem";
      document.getElementById("mob_btn").style.marginTop = "-3rem";
    }
  } else {
    document.getElementById("image_scrl").style.width = "12rem";
    document.getElementById("header_scrl").style.height = "16.5rem";
    document.getElementById("main-menu_scrl").style.marginTop = "-1rem";
    document.getElementById("num_scrl-one").style.fontSize = "2.5rem";
    document.getElementById("num_scrl-two").style.fontSize = "2.5rem";
    document.getElementById("num_scrl-tree").style.fontSize = "2.5rem";
    document.getElementById("num_scrl-four").style.fontSize = "2.5rem";
    document.getElementById("num_scrl-five").style.fontSize = "2.5rem";
    if (document.body.clientWidth < 769) {
      document.getElementById("mob_logo").style.marginTop = "-10rem";
      document.getElementById("mob_logo").style.width = "13rem";
      document.getElementById("mob_btn").style.marginTop = "-8rem";
    }
    if (document.body.clientWidth < 415) {
      document.getElementById("mob_logo").style.marginTop = "-7rem";
      document.getElementById("mob_logo").style.width = "13rem";
      document.getElementById("mob_btn").style.marginTop = "0rem";
      document.getElementById("to_home_btn").style.marginTop = "0rem";
    }
    if (document.body.clientWidth < 321) {
      document.getElementById("mob_logo").style.marginTop = "-5rem";
      document.getElementById("mob_logo").style.width = "11rem";
      // document.getElementById("mob_btn").style.marginTop = "6rem";
      document.getElementById("header_scrl").style.height = "14rem";
    }
  }
}