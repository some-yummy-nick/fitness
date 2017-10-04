$(document).ready(function(){
  (function() {
    var hamburger = document.querySelector(".js-hamburger");
    var menu = document.querySelector(".js-menu");

    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      menu.classList.toggle("active");
    })

  })();
});
