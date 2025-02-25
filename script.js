let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Tutup navbar saat klik di luar area menu
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

let textElement = document.getElementById("changing-text");
let texts = ["Fotographer", "Videographer", "Editor"];
let index = 0;

function changeText() {
    // Tambahkan kelas 'hidden' untuk efek fade out
    textElement.classList.add("hidden");

    setTimeout(() => {
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];

        // Hilangkan kelas 'hidden' untuk efek fade in
        textElement.classList.remove("hidden");
    }, 500); // Ganti teks setelah animasi fade out selesai (0.5 detik)
}

setInterval(changeText, 3000);