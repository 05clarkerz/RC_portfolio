document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav_links ul");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("hamburger--open");
    });
});

var btn = document.getElementById('btn');
var productDesign = document.getElementById('productDesign');
var visualDesign = document.getElementById('visualDesign');
var toggleBtns = document.getElementsByClassName('toggle_btn');

function leftClick() {
    btn.style.left = '0';
    productDesign.style.display = 'block';
    visualDesign.style.display = 'none';
    toggleBtns[0].style.color = 'black'; // Active button text color
    toggleBtns[1].style.color = 'white'; // Inactive button text color
}

function rightClick() {
    btn.style.left = '50%';
    productDesign.style.display = 'none';
    visualDesign.style.display = 'block';
    toggleBtns[0].style.color = 'white'; // Inactive button text color
    toggleBtns[1].style.color = 'black'; // Active button text color
}

// Set initial state
leftClick();

// Accordion 

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.accordion-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const content = this.nextElementSibling.nextElementSibling;
            if (this.checked) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
});

document.addEventListener('scroll', function() {
    const image = document.querySelector('.case_image1');
    const imagePosition = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the image is in the viewport
    if (imagePosition.top < windowHeight && imagePosition.bottom >= 0) {
      image.classList.add('in-view');
    } else {
      image.classList.remove('in-view');
    }
  });