

window.addEventListener("DOMContentLoaded", function () {

  var mySwiper = new Swiper(".swiper-container", {

    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },

    a11y: {
      paginationBulletMessage: 'Переход на слайд {{index}}',
      prevSlideMessage: 'Перейти на предыдущий слайд',
      nextSlideMessage: 'Перейти на следующий слайд',

    },
  });

  $(".how-we-work__list a").on("click", function (e) {
    e.preventDefault();

    let href = $(this).attr("href");

    $(".hidden").removeClass("visible");

    $(href).addClass("visible");
  });

  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content",
      active: false
    });
  });


  document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector(".header-menu").classList.toggle("menu-visible");
  });

  document.querySelector('#button-open').addEventListener('click', function () {
    document.querySelector('.header__form').classList.add('form-visible')
  });

  document.querySelector('#button-close').addEventListener('click', function () {
    document.querySelector('.header__form').classList.remove('form-visible')
  });

  let pageLazyLoad = new LazyLoad({
    elements_selector: "[loading=lazy]",
    use_native: true // ← enables hybrid lazy loading
  });


});



