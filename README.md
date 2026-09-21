# Etalase — Curated Modern E-Commerce Catalog

Website katalog produk yang dirancang dengan estetika **Modern Dark Mode** yang bersih, futuristik, dan kontras tinggi (*slate dark UI dengan aksen neon Violet/Purple & ambient glow*). Dibangun menggunakan **HTML5**, **Tailwind CSS (via CDN)**, dan **Vanilla JavaScript (murni)**.

![Etalase Preview](https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80)

---

## 🌟 Desain Baru & Fitur Unggulan

1. **Tema Modern Dark Mode dengan Aksen Violet / Purple**:
   - **Latar Belakang Eksklusif**: Warna dasar deep dark (`#07090e` / slate-950) dipadukan dengan radial mesh light halus bernuansa violet/purple.
   - **Header / Navbar Glassmorphism**: Semi-transparan dengan efek `backdrop-blur` pekat dan border halus berpendar ungu.
   - **Kartu Produk Estetik (`rounded-2xl`)**: Background kartu bernuansa slate gelap lembut (`bg-slate-900/90`), bayangan lembut (*soft dark shadow*), sudut lengkung `rounded-2xl`, serta efek pendar (*violet hover ambient glow*) saat disentuh atau disorot kursor.
   - **Tombol Aksi Berkontras Tinggi (Mobile Popping)**: Tombol Lynk.id (*vivid gradient violet-purple*) dan tombol TikTok (*dark neon cyan border*) dirancang sangat kontras dan mencolok di layar smartphone/HP.

2. **Dukungan Multi-Platform (Produk Digital Lynk.id & TikTok Affiliate)**:
   - **Produk Digital (Lynk.id)**: Dilengkapi badge label *"Digital"* dan tombol *"Beli di Lynk.id"* dengan gradien violet khas. Saat diklik, tautan langsung terbuka di tab baru (`target="_blank"`).
   - **Affiliate TikTok Shop**: Dilengkapi badge label *"TikTok Affiliate"* dengan ikon TikTok dan tombol *"Beli di TikTok"* bergaya dark modern. Tautan affiliate langsung terbuka di tab baru (`target="_blank"`).
   - **Filter Platform Cepat**: Tab filter interaktif di bagian atas (*Semua Platform*, *Produk Digital (Lynk.id)*, dan *TikTok Affiliate*) untuk kemudahan kurasi pengunjung.
   - **Form Tambah & Edit Fleksibel**: Pilihan platform dropdown dan input field tautan pembelian (*URL Lynk.id / TikTok*) di form tambah dan edit produk.

3. **Pemesanan via WhatsApp Khusus Produk Digital (Direct Transfer / QRIS)**:
   - **Tombol WhatsApp Hijau Eksklusif**: Setiap produk digital dilengkapi tombol **"Beli via WhatsApp"** langsung pada kartu produk dan modal detail produk.
   - **Format Pesan Otomatis (Auto-Generated)**: Saat tombol diklik, WhatsApp langsung terbuka dengan pesan rapi mencakup nama produk digital, harga terformat rupiah, dan permohonan nomor rekening/QRIS untuk transfer langsung.
   - **Nomor WhatsApp Dinamis**: Nomor WhatsApp tujuan dapat diubah kapan saja di menu **Pengaturan Toko** tanpa harus mengubah kode.

4. **Pengaturan Nama Toko / Branding (White-Label)**:
   - Akses mandiri melalui tombol **"Pengaturan Toko"** di Navbar, Filter bar, Footer, dan tab navigasi Admin.
   - Mengubah Nama Toko/Brand, Slogan, dan Deskripsi Toko secara instan dengan pratinjau langsung (*Live Preview*).
   - Memperbarui Navbar, Footer, dan judul browser (`document.title`) secara otomatis dan tersimpan di `localStorage` (`storeName`, `storeTagline`, `storeDescription`).

4. **Pengaturan Ganti Password Admin**:
   - Menu pengaturan ganti kata sandi diakses melalui tombol **"Ganti Password"** (Navbar, Filter, Footer, dan Tab Admin).
   - Dilengkapi validasi kata sandi saat ini, verifikasi kata sandi baru (minimal 4 karakter), konfirmasi kata sandi, dan tombol intip/sembunyikan sandi (*show/hide eye toggle*).
   - Disimpan secara dinamis di `localStorage` (`adminPassword`), dengan opsi **"Reset Default"** kembali ke `dadan123`.

5. **Mode Administrator (Akses Aman)**:
   - Tombol diskret **"Login Admin"** di bagian footer (petunjuk password telah disembunyikan untuk menjaga privasi).
   - **Password Bawaan Awal**: `xxxxxxxx` (dapat diubah kapan saja di menu Ganti Password).
   - **Mode Pengunjung (Bawaan)**: Tombol "+ Tambah Produk", "Edit", "Hapus", dan "Reset Bawaan" tersembunyi sepenuhnya sehingga antarmuka tetap bersih dan rapi.
   - **Mode Admin (Aktif)**: Menampilkan tombol "+ Tambah Produk", "Pengaturan Toko", "Ganti Password", tombol "Edit" dan "Hapus" pada setiap kartu dan pop-up detail produk, serta tombol "Mode Admin (Keluar)" di footer.

6. **Keranjang Belanja Interaktif (Cart Drawer)**:
   - Slide-over drawer dari kanan dengan efek blur lembut.
   - Tombol cepat tambah ke keranjang pada setiap kartu produk dan detail modal.
   - Indikator progres **Gratis Ongkir** dinamis (ambang batas Rp 300.000).
   - Kontrol kuantitas (`-` / `+`), tombol hapus, dan subtotal/total otomatis.
   - Simulasi alur Checkout lengkap dengan pembuatan nomor pesanan (*Order ID*).

7. **Penyimpanan Permanen (LocalStorage)**:
   - Seluruh data produk kustom, hasil edit, platform Lynk.id / TikTok, nama toko/branding, kata sandi admin, dan keranjang belanja tersimpan secara otomatis dan aman di browser.
   - Kompatibel penuh dengan data sebelumnya.

---

## 📁 Struktur File

```
katalog-produk/
│
├── index.html       # Antarmuka semantik, styling Tailwind CDN, modal, drawer, dan footer
├── styles.css       # Custom stylesheet, efek glassmorphism, ambient glow, dan scrollbar
├── app.js           # Logika aplikasi, state management, filter/search/sort, cart, dan mode admin
└── README.md        # Dokumentasi resmi proyek
```

---

## 🚀 Cara Menjalankan

Anda dapat langsung membuka file tanpa instalasi build tool tambahan:

### Cara 1: Langsung Buka di Browser
Cukup klik ganda (double-click) file **`index.html`** di File Explorer, atau buka di Google Chrome, Microsoft Edge, Firefox, Safari, dll.

### Cara 2: Menjalankan dengan Local Server
Jalankan server lokal dengan Python:
```bash
python -m http.server 3000
```
Lalu buka browser di: `http://localhost:3000`
