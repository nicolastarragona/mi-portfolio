// ==========================
// CONFIGURACIÓN DE GALERÍAS
// ==========================
const galleries = {
  nacho: [
    "nachos-01","nachos-02","nachos-03","nachos-04","nachos-05",
    "nachos-06","nachos-07","nachos-08","nachos-09","nachos-10"
  ],
  techo: [
    "techo-01","techo-02","techo-03","techo-04","techo-05","techo-06","techo-07"
  ],
  inescapable: [
    "inescapable-01","inescapable-02","inescapable-03","inescapable-04",
    "inescapable-05","inescapable-06","inescapable-07","inescapable-08",
    "inescapable-09","inescapable-10","inescapable-11"
  ],
  cya: [
    "cya-01","cya-02","cya-03","cya-04","cya-05","cya-06","cya-07",
    "cya-08","cya-09","cya-10","cya-11","cya-12","cya-13","cya-14","cya-15","cya-16","cya-17"
  ],
  parres: [
    "parres-01","parres-02","parres-03","parres-04","parres-05",
    "parres-06","parres-07","parres-09"
  ],
  posthumano: [
    "posthumano-01","posthumano-02","posthumano-03","posthumano-04","posthumano-05"
  ]
};

// ==========================
// VARIABLES GLOBALES
// ==========================
const galleryElement = document.querySelector(".gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const navLeft = document.querySelector(".nav.left");
const navRight = document.querySelector(".nav.right");

let currentIndex = 0;
let currentImages = [];

// ==========================
// INICIALIZAR GALERÍA
// ==========================
if (galleryElement) {
  const galleryId = galleryElement.id.replace("gallery-", "");
  if (galleries[galleryId]) {
    currentImages = galleries[galleryId];
    renderGallery(currentImages);
  }
}

// ==========================
// RENDERIZAR GALERÍA
// ==========================
function renderGallery(images) {
  const fragment = document.createDocumentFragment();

  images.forEach((name, index) => {
    const img = document.createElement("img");
    img.src = `img/${name}-600.webp`;
    img.srcset = `
      img/${name}-600.webp 600w,
      img/${name}-1200.webp 1200w
    `;
    img.sizes = "(max-width: 768px) 90vw, 600px";
    img.alt = `Foto ${name}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.setAttribute("data-aos", "fade-up");

    img.addEventListener("click", () => openLightbox(index));
    fragment.appendChild(img);
  });

  galleryElement.appendChild(fragment);
}

// ==========================
// LIGHTBOX
// ==========================
function openLightbox(index) {
  currentIndex = index;
  updateLightboxImage();
  lightbox.classList.remove("hidden");
  lightboxImg.focus(); // Accesibilidad
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

function updateLightboxImage() {
  lightboxImg.src = `img/${currentImages[currentIndex]}-1200.webp`;
  lightboxImg.alt = `Foto ampliada ${currentIndex + 1}`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateLightboxImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateLightboxImage();
}

// ==========================
// EVENTOS
// ==========================
if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
if (navRight) navRight.addEventListener("click", nextImage);
if (navLeft) navLeft.addEventListener("click", prevImage);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
});