$(document).ready(function() {

  function openNav() {
    document.getElementById("navCont").style.display = "block";
    document.getElementById("navbar").style.display = "grid";
  }

  function closeNav() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("navCont").style.display = "none";
  }

  function closeHamburger() {
    document.getElementById("hamburger").style.display = 'none';
  }

  function openHamburger() {
    document.getElementById("hamburger").style.display = 'block';
  }

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
  });

  //  Small Screen display/hide nav menu

  $('#hamburger').on('click', function(e) {
    openNav();
    closeHamburger();
  });

  $('.nav-links').on('click', function(e) {
    // console.log('Click .navlinks')
    // console.log($(window).width());
    let winWidth = $(window).width();

    if (winWidth < 800) {
      closeNav();
      openHamburger();
    }
  });


  // handles Navbar disappearing if navclosed on smaller
  //browser width and resized to larger
  $(window).resize(function() {
    let windowWidth = $(window).width();

    if (windowWidth > 800) {
      openNav();
    } else {
      closeNav();
    }
  });


  // Word Rotator
  let words = ["Web Developer", "Spatial Analyst", "Lifelong Learner", "GIS Administrator"];
  let element = $('#role');
  let currentword = -1;

  window.setInterval(function(){
    currentword++;
    if (currentword > words.length-1) currentword = 0;
    element.text(words[currentword]);
    // console.log(element.text() + 'Currentword: '+currentword);
  }, 4000);


});
