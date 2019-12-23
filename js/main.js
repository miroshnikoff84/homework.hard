/*document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible')
  };
  

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.classList.toggle('modal--visible');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27 && ('modal--visible')) {
      modal.classList.remove('modal--visible');
    }
  });
});
*/

$(document).ready(function () {
    var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
    
    modalBtn.on('click', function () {
      modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
      modal.toggleClass('modal--visible');
    });
  

  $('body').append('<a href="#" class="hero__scroll-top" title="Вверх"></a>');

  $(function() {
  $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function() {
    if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
    else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function() {
    $("html, body").animate({scrollTop: 0}, "slow")
    })
  }
  });

  $(function() {
    $(".hero__scroll-top").scrollToTop();
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() +10);
  bullets.css('left', prev.width() + 10);

  new WOW().init();

  // Валидация модальной формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения
    errorElement: "div",
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  });

  // Валидация footer__form
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект
      userQuestion: {
        required: true,
        minlength: 5,
        maxlength: 30
      }
    }, // сообщения
    errorElement: "div",
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Заполните поле",
      userQuestion: {
        required: "Заполните поле",
      }
    }
  });

  // Валидация control__form

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
    }, // сообщения
    errorElement: "div",
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле"
      }
    }
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "+7(___) ___-__-__" });

  // создание яндекс каты

  // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    // ymaps.ready(init);
    // function init(){
    //     // Создание карты.
    //     var myMap = new ymaps.Map("map", {
    //         // Координаты центра карты.
    //         // Порядок по умолчанию: «широта, долгота».
    //         // Чтобы не определять координаты центра карты вручную,
    //         // воспользуйтесь инструментом Определение координат.
    //         center: [55.76, 37.64],
    //         // Уровень масштабирования. Допустимые значения:
    //         // от 0 (весь мир) до 19.
    //         zoom: 7
    //     });
    // }
  
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [47.244734, 39.723227],
      zoom: 15
    }, {
      searchControlProvider: 'yandex#search'
    }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наш офис',
        balloonContent: 'Вход со двора'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/location.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });      

    myMap.geoObjects
        .add(myPlacemark);
  });
});
