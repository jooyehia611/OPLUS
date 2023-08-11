const sliders = [...document.querySelectorAll(".slider__container")];
const sliderControlPrev = [...document.querySelectorAll(".slider__control.prev")];
const sliderControlNext = [...document.querySelectorAll(".slider__control.next")];

sliders.forEach((slider, i) => {
  let isDragStart = false,
      isDragging = false,
      isSlide = false,
      prevPageX,
      prevScrollLeft,
      positionDiff;

  const sliderItem = slider.querySelector(".slider__item");
  var isMultislide = (slider.dataset.multislide === 'true');

  sliderControlPrev[i].addEventListener('click', () => {
    if (isSlide) return;
    isSlide = true;
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    slider.scrollLeft += -slideWidth;
    setTimeout(function(){ isSlide = false; }, 700);
  });

  sliderControlNext[i].addEventListener('click', () => {
    if (isSlide) return;
    isSlide = true;
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth ;
    slider.scrollLeft += slideWidth;
    setTimeout(function(){ isSlide = false; }, 700);
  });

  function autoSlide() {
    if(slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 || slider.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff);
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    let valDifference = slideWidth - positionDiff;
    if(slider.scrollLeft > prevScrollLeft) {
        return slider.scrollLeft += positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
    }
    slider.scrollLeft -= positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
  }

  function dragStart(e) {
    if (isSlide) return;
    isSlide = true;
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
    setTimeout(function(){ isSlide = false; }, 700);
  }

  function dragging(e) {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
  }

  function dragStop() {
    isDragStart = false;
    slider.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
  }

  slider.addEventListener("", autoSlide);
  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("touchstart", dragStart);
  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("touchmove", dragging);
  slider.addEventListener("mouseup", dragStop);
  slider.addEventListener("touchend", dragStop);
  slider.addEventListener("mouseleave", dragStop);
});









var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}






let i=2;


$(document).ready(function(){
var radius = 200;
var fields = $('.itemDot');
var container = $('.dotCircle');
var width = container.width();
radius = width/2.5;

var height = container.height();
var angle = 0, step = (2*Math.PI) / fields.length;
fields.each(function() {
var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
if(window.console) {
console.log($(this).text(), x, y);
}

$(this).css({
left: x + 'px',
top: y + 'px'
});
angle += step;
});


$('.itemDot').click(function(){

var dataTab= $(this).data("tab");
$('.itemDot').removeClass('active');
$(this).addClass('active');
$('.CirItem').removeClass('active');
$( '.CirItem'+ dataTab).addClass('active');
i=dataTab;

$('.dotCircle').css({
"transform":"rotate("+(360-(i-1)*36)+"deg)",
"transition":"2s"
});
$('.itemDot').css({
"transform":"rotate("+((i-1)*36)+"deg)",
"transition":"1s"
});


});

setInterval(function(){
var dataTab= $('.itemDot.active').data("tab");
if(dataTab>6||i>6){
dataTab=1;
i=1;
}
$('.itemDot').removeClass('active');
$('[data-tab="'+i+'"]').addClass('active');
$('.CirItem').removeClass('active');
$( '.CirItem'+i).addClass('active');
i++;


$('.dotCircle').css({
"transform":"rotate("+(360-(i-2)*36)+"deg)",
"transition":"2s"
});
$('.itemDot').css({
"transform":"rotate("+((i-2)*36)+"deg)",
"transition":"1s"
});

}, 5000);

});













//
// Tabs Toggler
//

(function ($) {
    // Variables
    const $tabLink = $('#tabs-section .tab-link');
    const $tabBody = $('#tabs-section .tab-body');
    let timerOpacity;
  
    // Toggle Class
    const init = () => {
      // Menu Click
      $tabLink.off('click').on('click', function (e) {
        // Prevent Default
        e.preventDefault();
        e.stopPropagation();
  
        // Clear Timers
        window.clearTimeout(timerOpacity);
  
        // Toggle Class Logic
        // Remove Active Classes
        $tabLink.removeClass('active ');
        $tabBody.removeClass('active ');
        $tabBody.removeClass('active-content');
  
        // Add Active Classes
        $(this).addClass('active');
        $($(this).attr('href')).addClass('active');
  
        // Opacity Transition Class
        timerOpacity = setTimeout(() => {
          $($(this).attr('href')).addClass('active-content');
        }, 50);
      });
    };
  
    // Document Ready
    $(function () {
      init();
    });
  })(jQuery);
