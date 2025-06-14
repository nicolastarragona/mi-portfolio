const gallery = document.getElementById("gallery");

const images = [
  // NACHO
  { src: "img/IMG_8315.jpg", category: "nacho" },
  { src: "img/IMG_8356.jpg", category: "nacho" },
  { src: "img/nachos-792.jpg", category: "nacho" },
  { src: "img/nachos-790.jpg", category: "nacho" },
  { src: "img/nachos-900.jpg", category: "nacho" },
  { src: "img/nachos-475.jpg", category: "nacho" },
  { src: "img/nachos-566.jpg", category: "nacho" },
  { src: "img/nachos-697.jpg", category: "nacho" },
  { src: "img/nachos-577.jpg", category: "nacho" },
  { src: "img/nachos-687.jpg", category: "nacho" },

  // TECHO
  { src: "img/DSC05138.jpg", category: "techo" },
  { src: "img/DSC05292.jpg", category: "techo" },
  { src: "img/DSC05362.jpg", category: "techo" },
  { src: "img/DSC05174.jpg", category: "techo" }
];

let currentIndex = 0;
let currentGallery = [];

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const leftNav = document.querySelector(".nav.left");
const rightNav = document.querySelector(".nav.right");

function showGallery(filteredCategory = null) {
  gallery.innerHTML = "";

  currentGallery = filteredCategory
    ? images.filter(img => img.category === filteredCategory)
    : images;

  currentGallery.forEach((img, index) => {
    const imageElement = document.createElement("img");
    imageElement.src = img.src;
    imageElement.alt = "";
    imageElement.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(imageElement);
  });
}

function filterGallery(category) {
  showGallery(category);
}

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = currentGallery[currentIndex].src;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  lightboxImg.src = currentGallery[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  lightboxImg.src = currentGallery[currentIndex].src;
}

closeBtn.addEventListener("click", closeLightbox);
rightNav.addEventListener("click", nextImage);
leftNav.addEventListener("click", prevImage);

// Mostrar todo al cargar
showGallery();