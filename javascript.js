
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



    document.addEventListener('DOMContentLoaded', function () {
        const menuIcon = document.querySelector('.menu-icon');
        const navLinks = document.querySelector('.nav-links');
        const navItems = document.querySelectorAll('.nav-links li a'); // Select all menu items

        // Toggle active class for menu and menu icon
        menuIcon.addEventListener('click', function() {
            menuIcon.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Add event listener to close menu when any menu item is clicked
        navItems.forEach(function(item) {
            item.addEventListener('click', function() {
                // Only close the menu if the screen width is smaller than 768px (mobile)
                if (window.innerWidth <= 768) {
                    menuIcon.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
    });

  