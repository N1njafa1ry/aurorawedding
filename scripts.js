// Unified togglePopup function
function togglePopup(contentId, btn) {
    const allPopups = document.querySelectorAll('.popup-content');
    const header = document.querySelector('.header');
    let activeContent = null;

    // Hide all popups
    allPopups.forEach(popup => {
        if (popup.id === contentId) {
            activeContent = popup;
        } else {
            popup.style.display = 'none';
            popup.classList.remove('active');
        }
    });

    // Toggle the active state of the clicked popup
    if (activeContent) {
        const isActive = activeContent.classList.contains('active');
        if (isActive) {
            activeContent.style.display = 'none';
            activeContent.classList.remove('active');
            header.classList.remove('white-bg');
        } else {
            activeContent.style.display = 'block';
            activeContent.classList.add('active');
            header.classList.add('white-bg');
        }
    }
}

// Image modal functions
let slideIndex = 1;

function showImage(srcArray, index = 1) {
    const modal = document.getElementById('imageModal');
    const modalSlides = document.getElementById('modalSlides');
    
    modalSlides.innerHTML = ''; // Clear existing images

    srcArray.forEach(src => {
        let img = document.createElement('img');
        img.src = src;
        img.classList.add('modal-slide');
        modalSlides.appendChild(img);
    });

    modal.style.display = "block";
    slideIndex = index + 1; // Set current slide index to the clicked image
    showSlide(slideIndex); // Display the initial image
}

function slideImage(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName('modal-slide');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function closeImage() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}
