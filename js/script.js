//  Khansa Tahu Tuna Pacitan ©2023


// Dewi buat data produk

// Data Produk
const produkData = [
  {
    gambar: "gambar/tahu-tuna.jpg",
    nama: "Tahu Tuna",
    deskripsi: "Frozen Food Tahu Tuna",
    harga: "Rp 13.000",
    deskripsiURL: "https://wa.me/p/5673611506025850/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Tahu%20tuna%20",
  },
  {
    gambar: "gambar/pangsit-tuna.jpg",
    nama: "Pangsit Tuna",
    deskripsi: "Frozen Food Pangsit Tuna",
    harga: "Rp 11.000",
    deskripsiURL: "https://wa.me/p/5647503478679232/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Pangsit%20tuna%20",
  },
  {
    gambar: "gambar/otak-tuna.jpg",
    nama: "Otak Otak Tuna",
    deskripsi: "Frozen Food Otak Otak Tuna",
    harga: "Rp 11.000",
    deskripsiURL: "https://wa.me/p/5614716848577397/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Otak%20otak%20tuna%20",
  },
  {
    gambar: "gambar/dimsum.jpg",
    nama: "Dimsum Tuna",
    deskripsi: "Olahan Ikan Tuna Dimsum",
    harga: "Rp 11.000",
    deskripsiURL: "https://wa.me/p/5575005669251092/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Dimsum%20tuna%20",
  },
  {
    gambar: "gambar/kripik1.jpg",
    nama: "Kripik Singkong",
    deskripsi: "Kripik singkong singosari",
    harga: "Rp 9.000",
    deskripsiURL: "https://wa.me/p/5673611506025850/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Kripik%20Singkong%20",
  },
  {
    gambar: "gambar/kripik2.jpg",
    nama: "Kripik",
    deskripsi: "Kripik original gurih",
    harga: "Rp 9.000",
    deskripsiURL: "https://wa.me/p/5647503478679232/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Pangsit%20tuna%20",
  },
  {
    gambar: "gambar/kripik3.jpg",
    nama: "Kripik Pisang",
    deskripsi: "Kripik Pisang",
    harga: "Rp 9.000",
    deskripsiURL: "https://wa.me/p/5614716848577397/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Otak%20otak%20tuna%20",
  },
  {
    gambar: "gambar/kripik4.jpg",
    nama: "Kripik Hitam Manis",
    deskripsi: "Kripik hitam manis dan gurih",
    harga: "Rp 9.000",
    deskripsiURL: "https://wa.me/p/8389760447762966/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Kripik%20hitam%20manis%20",
  },
  {
    gambar: "gambar/sale1.jpg",
    nama: "Sale",
    deskripsi: "Sale",
    harga: "Rp 12.000",
    deskripsiURL: "https://wa.me/p/5673611506025850/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Tahu%20tuna%20",
  },
  {
    gambar: "gambar/sale2.jpg",
    nama: "Sale",
    deskripsi: "Sale",
    harga: "Rp 45.000",
    deskripsiURL: "https://wa.me/p/5647503478679232/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Pangsit%20tuna%20",
  },
  {
    gambar: "gambar/sale3.jpg",
    nama: "Sale",
    deskripsi: "Sale",
    harga: "Rp 55.000",
    deskripsiURL: "https://wa.me/p/5614716848577397/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Otak%20otak%20tuna%20",
  },
  {
    gambar: "gambar/sale4.jpg",
    nama: "Sale Goreng",
    deskripsi: "Sale Pisang Gulung",
    harga: "Rp 12.000",
    deskripsiURL: "https://wa.me/p/5056227287762966/6285755867237",
    beliURL:
      "https://wa.me/+6285755867237?text=Halo%20kak%20Khansa%2C%20saya%20ingin%20memesan%20Sale%20pisang%20gulung. ",
  },
];

// Andhika | Buat Fungsi


// Mengisi data produk ke dalam card
const cardContainer = document.getElementById("cardContainer");

produkData.forEach((produk) => {
  // Membuat elemen card
  const cardCol = document.createElement("div");
  cardCol.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card");

  // Menambahkan gambar
  const gambar = document.createElement("img");
  gambar.src = produk.gambar;
  gambar.classList.add("card-img-top");
  gambar.alt = "foto " + produk.nama;
  card.appendChild(gambar);

  // Menambahkan konten card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const nama = document.createElement("h5");
  nama.classList.add("card-title");
  nama.textContent = produk.nama;
  cardBody.appendChild(nama);

  const deskripsi = document.createElement("p");
  deskripsi.classList.add("card-text");
  deskripsi.textContent = produk.deskripsi;
  cardBody.appendChild(deskripsi);

  const harga = document.createElement("p");
  harga.classList.add("text-secondary");
  harga.textContent = "Harga : " + produk.harga;
  cardBody.appendChild(harga);

  const deskripsiBtn = document.createElement("a");
  deskripsiBtn.classList.add("text-center", "btn", "btn-light");
  deskripsiBtn.href = produk.deskripsiURL;
  deskripsiBtn.textContent = "Lihat Deskripsi";
  cardBody.appendChild(deskripsiBtn);

  const beliBtn = document.createElement("a");
  beliBtn.classList.add("text-center", "btn", "btn-dark");
  beliBtn.href = produk.beliURL;
  beliBtn.textContent = "Beli";
  cardBody.appendChild(beliBtn);

  card.appendChild(cardBody);
  cardCol.appendChild(card);
  cardContainer.appendChild(cardCol);
});
                                       
