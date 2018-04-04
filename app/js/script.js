// слайдер
(function () {
  var radioButtons = document.getElementsByName('gallery-button'),
    sliderPreviousButton = document.querySelector('.slider__button--previous'),
    sliderNextButton = document.querySelector('.slider__button--next'),
    slidedBlock = document.querySelector('.product__slider'),
    modal = document.querySelector('.modal'),
    setSlider = function (offset) {
      var images = slidedBlock.querySelectorAll('.slider__item');
      for (var i = 0, current_index; i < radioButtons.length; ++i) {
        if (radioButtons[i].checked) {
          current_index = (radioButtons.length + i + offset) % radioButtons.length;
          offset = 0;
          radioButtons[current_index].checked = true;
          images[current_index].classList.remove('slider__item--hidden');
        }
        if (current_index !== i) {
          images[i].classList.add('slider__item--hidden');
        }
      }
    };
  for (var i = 0; i < radioButtons.length; ++i) {
    radioButtons[i].addEventListener('change', function () {
      setSlider(0);
    });
  }

  var openModal = function (window) { // Появление формы
    var button = document.querySelectorAll('.button');
    button.forEach(function (item) {
      item.addEventListener('click', function () {
        if(window.classList.contains('hidden')) {
          window.classList.remove('hidden');
        }
      })
    })

    document.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        closeModal(modal);
      }
    });

    document.addEventListener('click', function (evt) {
      var target = evt.target;
      if(target.classList.contains('cross')) {
        closeModal(modal);
      };
    });
  }

  var closeModal = function (window) { // уход формы
    if (!window.classList.contains('hidden')) {
      window.classList.add('hidden');
    }
  };

  openModal(modal);
  sliderPreviousButton.addEventListener('click', function () {
    setSlider(-1);
  });
  sliderNextButton.addEventListener('click', function () {
    setSlider(1);
  });
})();


