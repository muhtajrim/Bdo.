function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

const menuLinks = document.querySelectorAll(".nav-links a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.remove("active");
  });
});

document.addEventListener("click", function (event) {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});

// Seleksi elemen navbar
const navbar = document.getElementById("navbar");

// Fungsi untuk menambahkan atau menghapus kelas 'scrolled'
function handleNavbarScroll() {
  if (window.scrollY > 50) {
    // Jika pengguna menggulir lebih dari 50px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Jalankan fungsi saat pengguna menggulir
window.addEventListener("scroll", handleNavbarScroll);

// Jalankan sekali saat halaman dimuat
document.addEventListener("DOMContentLoaded", handleNavbarScroll);

window.addEventListener("scroll", handleScroll);
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 3000);

let homeSlideIndex = 0;
const homeSlides = document.querySelectorAll(".home-slide");
const dots = document.querySelectorAll(".dot");
const totalHomeSlides = homeSlides.length;

function showHomeSlide(index) {
  // Update slides
  homeSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  homeSlideIndex = index; // Update index
}

function nextHomeSlide() {
  const newIndex = (homeSlideIndex + 1) % totalHomeSlides;
  showHomeSlide(newIndex);
}

function prevHomeSlide() {
  const newIndex = (homeSlideIndex - 1 + totalHomeSlides) % totalHomeSlides;
  showHomeSlide(newIndex);
}

// Tombol navigasi
document.getElementById("home-next").addEventListener("click", nextHomeSlide);
document.getElementById("home-prev").addEventListener("click", prevHomeSlide);

// Klik pada titik navigasi
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-index"));
    showHomeSlide(index);
  });
});

setInterval(nextHomeSlide, 3000);
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-section");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function handleScroll() {
    if (isInViewport(aboutSection)) {
      aboutSection.classList.add("visible");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Jalankan saat halaman pertama kali dimuat
});

// Fungsi untuk memeriksa apakah elemen ada di viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Seleksi semua gambar
const schedulePhotos = document.querySelectorAll(".schedule-photo");

// Fungsi untuk menambahkan class 'visible' jika elemen masuk viewport
function handleScroll() {
  schedulePhotos.forEach((photo) => {
    if (isInViewport(photo)) {
      photo.classList.add("visible");
    }
  });
}

// Jalankan fungsi saat scroll
window.addEventListener("scroll", handleScroll);

// Jalankan sekali saat halaman dimuat
document.addEventListener("DOMContentLoaded", handleScroll);
