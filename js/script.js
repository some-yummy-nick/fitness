$(document).ready(function(){
  (function() {
    var hamburger = document.querySelector(".js-hamburger");
    var menu = document.querySelector(".js-menu");

    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      menu.classList.toggle("active");
    })

  })();

  (function() {
	  $('.variable-width').slick({
		  arrows: true,
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 3,
		  centerMode: false,
		  variableWidth: true,
		  responsive: [{
			  breakpoint: 1024,
			  settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				  infinite: true,
				  dots: false
			  }
		  }, {
			  breakpoint: 600,
			  settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2
			  }
		  }, {
			  breakpoint: 480,
			  settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
			  }
		  }]
	  });
  })();

  (function() {
	  // плавное перемещение страницы к нужному блоку
	  $(".js-mouse").click(function () {
		  elementClick = $(this).attr("href");
		  destination = $(elementClick).offset().top;
		  $("body,html").animate({scrollTop: destination}, 800);

	  });
  })();
});

