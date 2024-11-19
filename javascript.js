
   // Menambahkan event listener untuk scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    // Jika halaman digulir lebih dari 50px, tambahkan class 'scrolled'
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Fungsi untuk toggle menu hamburger
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');  // Menangkap elemen nav-links
    const menuIcon = document.querySelector('.menu-icon');  // Menangkap elemen menu-icon

    // Toggle class 'active' pada navLinks dan menuIcon untuk menunjukkan/menyembunyikan menu
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

    function toggleMenu() {
        // Ambil elemen dengan class 'nav-links' dan toggle class 'active'
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');  // Menampilkan atau menyembunyikan menu

        // Ambil elemen dengan class 'menu-icon' dan toggle class 'active'
        const menuIcon = document.querySelector('.menu-icon');
        menuIcon.classList.toggle('active');  // Mengubah tampilan hamburger menjadi X saat diklik
    }
    
// Fungsi untuk menambahkan kelas 'scrolled' ketika pengguna menggulir
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");

    // Jika scroll lebih dari 50px dari atas, tambahkan kelas 'scrolled'
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

