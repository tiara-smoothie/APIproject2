const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function() {
    let filterValue = searchInput.value.toLowerCase();
    let cards = document.querySelectorAll("#librarylist .col-md-6");
    cards.forEach(function(card) {
        let title = card.querySelector("h6").innerText.toLowerCase();

        if (title.indexOf(filterValue) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    })
})






// // File: api.js

// const searchInput = document.getElementById('searchInput');
// const searchButton = document.getElementById('searchButton'); // Tangkap tombolnya!

// // Kita buat fungsinya dulu
// function lakukanPencarian() {
//     let filterValue = searchInput.value.toLowerCase();
//     let cards = document.querySelectorAll('#librarylist .col-md-6');
//     let ketemu = false;

//     // Kalau kosong, jangan lakukan apa-apa
//     if (filterValue === "") {
//         return; 
//     }

//     // Cek kartu satu per satu
//     for (let card of cards) {
//         let title = card.querySelector('h6').innerText.toLowerCase();
        
//         // Kalau judul kartu mengandung kata yang diketik
//         if (title.includes(filterValue)) {
            
//             // 1. Layar otomatis meluncur ke kartu ini
//             card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
//             // 2. Beri efek highlight sementara di kartunya (biar kelihatan yang mana)
//             let kotakKartu = card.querySelector('.card-perpus');
//             kotakKartu.style.transition = "all 0.5s";
//             kotakKartu.style.transform = "scale(1.05)"; // Membesar sedikit
//             kotakKartu.style.boxShadow = "0 0 15px rgba(88, 24, 31, 0.5)"; // Bayangan maroon
            
//             // Kembalikan ke ukuran normal setelah 1,5 detik
//             setTimeout(() => {
//                 kotakKartu.style.transform = "scale(1)";
//                 kotakKartu.style.boxShadow = "none";
//             }, 1500);
            
//             ketemu = true;
//             // 3. Berhenti mencari kartu lain di bawahnya
//             break; 
//         }
//     }

//     // Kalau ternyata perpustakaan yang dicari gak ada di daftar 19 aliansi
//     if (!ketemu) {
//         alert("Yah, perpustakaan yang kamu cari tidak ditemukan.");
//     }
// }

// // AKSI 1: Jalankan fungsi di atas kalau TOMBOL DIKLIK
// searchButton.addEventListener('click', lakukanPencarian);

// // AKSI 2: Jalankan fungsi di atas kalau user tekan "ENTER" di keyboard laptop
// searchInput.addEventListener('keypress', function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault(); // Biar halaman gak refresh
//         lakukanPencarian();
//     }
// });