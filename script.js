// Ambil elemen tombol dan pop-up
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');

// Fungsi untuk menampilkan pop-up
function showPopup() {
    popup.style.display = 'flex';
}

// Fungsi untuk menutup pop-up
function closePopup() {
    popup.style.display = 'none';
}

// Menambahkan event listener ke tombol "Tambah ke Keranjang"
addToCartButtons.forEach(button => {
    button.addEventListener('click', showPopup);
});

// Menambahkan event listener ke tombol "Tutup" pada pop-up
closePopupButton.addEventListener('click', closePopup);
