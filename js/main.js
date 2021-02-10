 $(function(){

   $(".menu, .header").on("click", "a", function (event) {

     event.preventDefault();

     var id = $(this).attr('href'),

       top = $(id).offset().top;

     $('body,html').animate({ scrollTop: top }, 1500);
   });

    $('.menu__btn').click(function(event){
      $('.menu__btn,.menu__list').toggleClass('active')
    });

 $('.slider__inner').slick({
    dots: false,
    arrows: true,
    prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
     responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  });
 });



  $(".slider__inner").on("afterChange", function(event, slick, currentSlide, nextSlide){
     $(".slider__info-count--now").text(currentSlide + 1);
 });