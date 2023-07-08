//  Khansa Tahu Tuna Pacitan ©2023

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
  
  // h5 dan judul produk
  const nama = document.createElement("h5");
  nama.classList.add("card-title");
  nama.textContent = produk.nama;
  cardBody.appendChild(nama);

// deskripsi produk
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
                                       
