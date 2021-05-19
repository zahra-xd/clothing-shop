var mybutt = document.getElementById('but1');

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', () => {

    var menoo = document.getElementById('meno-head');
    if (window.pageYOffset > 10) {

        menoo.classList.add('menoadd');
    } else {
        menoo.classList.remove('menoadd');
    }
})
window.addEventListener('scroll', () => {

    var menoo1 = document.getElementById('but1');
    if (window.pageYOffset > 280) {

        menoo1.style.display = "block"
    } else {
        menoo1.style.display = "none"
    }
})


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// $(document).ready(function() {
//     $("#ppp").click(function() {
//         $(".ggf").toggleClass("b");
//         $("#kj").hide();
//     });

// });
let bodyy = document.getElementById('mybody');
let rt = document.getElementById('megamenu_level__1');
let cx = document.getElementById('megamenu_mobile_close');

function openNav() {
    cx.style.display = 'block';
    bodyy.style.overflowX = 'hidden';
    bodyy.style.overflowY = "hidden"
    rt.style.display = 'block';

}

function closeNav() {
    var rt = document.getElementById('megamenu_level__1')
    var cx = document.getElementById('megamenu_mobile_close');
    cx.style.display = 'none';
    rt.style.display = 'none';
    bodyy.style.overflowX = 'scroll';
    bodyy.style.overflowY = "scroll"
}

function opendrop() {
    var dd = document.getElementsByClassName('meno-hiver');
    dd.style.display = 'block'
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);
// *****
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
}

///////////////////////////
// console.clear();

document.addEventListener('click', function chnageCount(evt) {
    let counterBtn = evt.target;

    if (!counterBtn.closest('.js-counter-btn')) return;

    let counterInput = counterBtn.closest('.js-counter').
    querySelector('.js-counter-value');


    switch (counterBtn.getAttribute('data-action')) {
        case 'plus':
            counterInput.value = Number(counterInput.value) + 1;
            break;
        case 'minus':
            counterInput.value = Number(counterInput.value);
            if (counterInput.value == 1) {
                return 1
            } else {
                counterInput.value = counterInput.value - 1;
            }
            break;
    }

});

$("#bat-nav").click(function() {
    $("#video-yotob2").hide();

});
$("#bat-nav2").click(function() {
    $("#video-yotob2").show();

});