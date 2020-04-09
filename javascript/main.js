function openNav() {
    var menu = document.getElementById("sidemenu");
    menu.classList.add("active");
}

function closeNav() {
    var menu = document.getElementById("sidemenu");
    menu.classList.remove("active");
}

var slideIndex = 1;

        showImage(slideIndex);

        function plusIndex(n) {
            showImage(slideIndex += n);
        }

        function currentSlide(n) {
            showImage(slideIndex = n);
        }

        function showImage(n) {
            var slide = document.getElementsByClassName("slides");
            var dots = document.getElementsByClassName("dots");

            if (n > slide.length) { slideIndex = 1};
            if (n < 1) { slideIndex = slide.length};

            for (var i = 0; i < slide.length; i++) {
                slide[i].style.display = "none";
            };
            slide[slideIndex-1].style.display = "block";

            for (var i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" slide_active","");
            };

            dots[slideIndex-1].className += " slide_active";            

        }

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dots");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slide_active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " slide_active";
    setTimeout(showSlides, 7000);
  }