$(document).ready(function() {

  // Add smooth Scrolling to nav menu
  $(".nav-links").on('click', function(e) {

    if (this.hash !== "") {
      e.preventDefault();

      let hash = this.hash;
      console.log(hash)
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000)
    }
  }); //  End of Smmoth Scrolling area

  // Add Scroll to top button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollTopBtn").style.display = "none";
    }
  }

  $('#scrollTopBtn').on('click', () => {
    $('html,body').animate({scrollTop:0}, 1500);
    //document.body.scrollTop = 0;
    //document.documentElement.scrollTop = 0;
  });

})
