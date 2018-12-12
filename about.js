$(document).ready(function() {

  var slideIndex = 1
  var slideshowTime = 5000
  var slidefadeTime = 300

  var intervalId = setInterval(slideshow, slideshowTime)


  $('.slideshow-image').click(function() {
    clearInterval(intervalId)
    $('.slideshow-image').addClass('slideshow-zoom')
    $('.slideshow-overlay').fadeIn(slidefadeTime)
  } )

  $('.slideshow-overlay').click(function() {
    $('.slideshow-overlay').fadeOut(slidefadeTime)
    $('.slideshow-image').removeClass('slideshow-zoom')
    intervalId = setInterval(slideshow, slideshowTime)
  } )

  function slideshow() {
    $('.slideshow-image').fadeOut(slidefadeTime)
    $('.slideshow-image').eq(slideIndex).delay(slidefadeTime).fadeIn(slidefadeTime)
    slideIndex = slideIndex + 1
    if (slideIndex == 5) {
      slideIndex = 0
    }
  }


} )
