$(document).ready(function(){
    console.log('slick');
    $('.featured-articles').slick({
        slidesToShow: 3,
        slidesToScroll: 3
    });
  });



let slideIndex = 1;

var plusSlide = (m, n, event) => {
    slideIndex += m;
    console.log("HMM");
    var parents = event.target.parentElement;
    console.log(parents.getElementsByClassName("card").length);
    showSlides(slideIndex, n, event);
};

var bla = () => {
    prev = document.querySelectorAll(".prev");
    console.log(typeof(prev));
    prev.forEach(element => {
        element.style.display = "none";
    });
};

var showSlides = (m, n, event) => {
    console.log("Hey");
    let targetParent = event.target.parentElement;
    let i;
    let j;
    var slides = targetParent.getElementsByClassName("card");
    console.log(slides.length);
    let k = slides.length / n;
    prev = targetParent.querySelector(".prev");
    next = targetParent.querySelector(".next");
    
    if (m <= 1) {
        prev.style.display = "none";
        next.style.display = "block";
    }
    else if (m >= k) {
        prev.style.display = "block";
        next.style.display = "none";
    }
    else {
        prev.style.display = "block";
        next.style.display = "block";   
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (j = (m * n) - 1; j > ((m - 1) * n) - 1; j-- ) {
        slides[j].style.display = "block";
        console.log(j);
    }
};