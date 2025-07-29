const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const leftNav = document.querySelector(".nav.left");
const rightNav = document.querySelector(".nav.right");

let currentIndex = 0;
let currentImages = Array.from(galleryImages);

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  lightboxImg.src = currentImages[currentIndex].src;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex].src;
}

closeBtn.addEventListener("click", closeLightbox);
rightNav.addEventListener("click", nextImage);
leftNav.addEventListener("click", prevImage);