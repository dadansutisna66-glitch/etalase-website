/**
 * Etalase - Modern & Curated E-Commerce Product Catalog
 * Vanilla JavaScript (ES6+) with Glassmorphism & LocalStorage Persistence
 */

// ==========================================
// 1. DATA DUMMY PRODUK (12 Item Terkurasi)
// ==========================================
const PRODUCTS = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling",
    category: "Elektronik",
    platform: "tiktok",
    buyUrl: "https://vt.tiktok.com/ZS2xSonyANC",
    price: 4999000,
    rating: 4.9,
    reviews: 248,
    stock: 12,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80"
    ],
    description: "Headphone nirkabel premium dengan teknologi peredam kebisingan industri terbaik (ANC). Menghadirkan kualitas audio Hi-Res luar biasa, panggilan ultra-jernih dengan 4 mikrofon beamforming, serta daya tahan baterai hingga 30 jam dengan pengisian daya super cepat.",
    specs: ["Active Noise Cancelling", "Baterai 30 Jam", "Bluetooth 5.2", "Hi-Res Audio LDAC", "Voice Assistant Support"]
  },
  {
    id: 2,
    name: "Apple Watch Series 9 GPS 45mm Midnight",
    category: "Elektronik",
    platform: "tiktok",
    buyUrl: "https://vt.tiktok.com/ZS2xAppleWatch",
    price: 6499000,
    rating: 4.8,
    reviews: 185,
    stock: 8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80"
    ],
    description: "Smartwatch paling bertenaga dengan chip S9 SiP baru. Nikmati interaksi sentuh ajaib Double Tap tanpa menyentuh layar, layar Always-On Retina yang lebih terang hingga 2000 nits, serta pemantau kesehatan tingkat lanjut termasuk sensor EKG dan oksigen darah.",
    specs: ["Layar Always-On 2000 nits", "Chip Apple S9 SiP", "Sensor EKG & SpO2", "Water Resistant 50m", "Fast Charging"]
  },
  {
    id: 3,
    name: "Template Notion Life & Finance Mastery OS",
    category: "Elektronik",
    platform: "lynkid",
    buyUrl: "https://lynk.id/etalase/notion-mastery-os",
    price: 89000,
    rating: 4.9,
    reviews: 312,
    stock: 999,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
    ],
    description: "Template Notion komprehensif all-in-one untuk mengatur seluruh aspek kehidupan: manajemen keuangan harian, tracking kebiasaan (habit tracker), target tahunan, hingga manajemen proyek kerja harian secara estetis dan otomatis.",
    specs: ["Akses Seumur Hidup", "Sinkronisasi Otomatis", "Gratis Update Mendatang", "Panduan Video Lengkap", "Dukungan Komunitas"]
  },
  {
    id: 4,
    name: "Master AI Prompt Engineering & ChatGPT Playbook",
    category: "Elektronik",
    platform: "lynkid",
    buyUrl: "https://lynk.id/etalase/ai-prompts-guide",
    price: 129000,
    rating: 5.0,
    reviews: 178,
    stock: 999,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
    ],
    description: "Buku panduan digital lengkap berisi 500+ template prompt teruji untuk meningkatkan produktivitas 10x lipat, automasi kerja, copywriting penjualan, dan analisis data dengan ChatGPT, Claude, dan Gemini AI.",
    specs: ["Format PDF & Notion", "500+ Mega Prompts Siap Pakai", "Studi Kasus Nyata", "Bonus Cheat Sheet", "Lisensi Penggunaan Pribadi"]
  },
  {
    id: 5,
    name: "Keychron K2 Pro Wireless Mechanical Keyboard RGB",
    category: "Elektronik",
    platform: "tiktok",
    buyUrl: "https://vt.tiktok.com/ZS2xKeychronK2",
    price: 1350000,
    rating: 4.9,
    reviews: 142,
    stock: 15,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80"
    ],
    description: "Keyboard mekanikal nirkabel kustom 75% dengan dukungan QMK/VIA. Dilengkapi hot-swappable switch, peredam busa ganda akustik lembut, keycap PBT double-shot tahan aus, dan koneksi multi-device hingga 3 perangkat via Bluetooth atau kabel USB-C.",
    specs: ["Layout 75% Compact", "Hot-Swappable Switch", "RGB Backlight 22 Mode", "Baterai 4000mAh", "Support Mac & Windows"]
  },
  {
    id: 6,
    name: "Jaket Denim Vintage Oversized Classic Blue",
    category: "Pakaian",
    platform: "tiktok",
    buyUrl: "https://vt.tiktok.com/ZS2xDenimJkt",
    price: 389000,
    rating: 4.7,
    reviews: 94,
    stock: 20,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80",
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80"
    ],
    description: "Jaket denim berpotongan oversized retro yang nyaman untuk berbagai gaya streetwear harian. Terbuat dari katun denim 14oz non-stretch premium dengan proses washed vintage autentik, kancing logam antik, dan saku fungsional.",
    specs: ["Bahan Katun Denim 14oz", "Fitting Oversized Unisex", "Vintage Stone Wash", "4 Saku Fungsional", "Tahan Lama"]
  },
  {
    id: 7,
    name: "100+ Cinematic Lightroom Mobile & Desktop Presets",
    category: "Aksesoris",
    platform: "lynkid",
    buyUrl: "https://lynk.id/etalase/cinematic-presets",
    price: 75000,
    rating: 4.9,
    reviews: 245,
    stock: 999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80"
    ],
    description: "Koleksi 100+ preset filter warna sinematik profesional untuk Lightroom Mobile & PC. Hadirkan nuansa film Kodak, moody portrait, dan clean aesthetic hanya dalam 1-klik untuk konten Instagram dan TikTok Anda.",
    specs: ["1-Click Editing", "Support iOS, Android & PC", "File DNG & XMP", "Panduan Instalasi Instan", "Free Future Updates"]
  },
  {
    id: 8,
    name: "Kemeja Pria Casual Linen Slim Fit Broken White",
    category: "Pakaian",
    platform: "tiktok",
    buyUrl: "https://vt.tiktok.com/ZS2xLinenShirt",
    price: 279000,
    rating: 4.8,
    reviews: 110,
    stock: 25,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80"
    ],
    description: "Kemeja lengan panjang berbahan campuran katun linen alami yang sejuk, ringan, dan bernapas. Memberikan kesan elegan kasual yang pas untuk suasana semi-formal, liburan akhir pekan, maupun kerja di kantor.",
    specs: ["Bahan Premium Natural Linen", "Potongan Slim Fit Modern", "Kerah Shanghai Minimalis", "Lembut & Tidak Gerah", "Jahitan Rapi Presisi"]
  },
  {
    id: 9,
    name: "Figma UI/UX Starter Kit Design System & SaaS Dashboard",
    category: "Elektronik",
    platform: "lynkid",
    buyUrl: "https://lynk.id/etalase/figma-ui-kit",
    price: 189000,
    rating: 4.8,
    reviews: 92,
    stock: 999,
    image: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=800&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ],
    description: "Design system terlengkap dengan 200+ komponen autolayout, dark/light mode, token warna, typography, dan template dashboard SaaS modern siap export untuk mempercepat alur desain aplikasi Anda.",
    specs: ["File Asli Figma .FIG", "200+ Komponen Auto-Layout", "Dark & Light Mode Ready", "Variant & Token Variables", "Commercial License"]
  },
  {
    id: 10,
    name: "Summer Floral Midi Dress Bohemian Chic",
    category: "Pakaian",
    platform: "tiktok",
    buyUrl: "https://vt.tiktok.com/ZS2xSummerDress",
    price: 349000,
    rating: 4.9,
    reviews: 86,
    stock: 14,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80"
    ],
    description: "Gaun midi dengan motif bunga segar dan siluet A-line yang flowy. Dilengkapi potongan kerah V feminin, lengan serut fleksibel, dan tali pinggang yang mempertegas lekuk anggun. Cocok untuk piknik, pesta kebun, dan liburan tropis.",
    specs: ["Bahan Rayon Viscose Adem", "Motif Floral Printing Halus", "Tali Pinggang Serut", "Panjang Midi Dress", "Tidak Menerawang"]
  },
  {
    id: 11,
    name: "Sepatu Sneakers Streetwear High-Top Black White",
    category: "Sepatu",
    platform: "tiktok",
    buyUrl: "https://vt.tiktok.com/ZS2xSneakers",
    price: 599000,
    rating: 4.7,
    reviews: 167,
    stock: 16,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&q=80"
    ],
    description: "Sneakers siluet high-top ikonik yang menggabungkan kenyamanan sol bantalan empuk dengan desain streetwear kekinian. Upper kulit sintetis premium dan canvas kokoh dengan outsole karet vulkanisir anti selip.",
    specs: ["Model High-Top Sneakers", "Upper Suede & Leather Synth", "Outsole Rubber Anti-Slip", "Insole Memory Foam Empuk", "Tersedia Ukuran 39 - 44"]
  },
  {
    id: 12,
    name: "E-Book Roadmap Cuan TikTok Affiliate & Live Streaming",
    category: "Aksesoris",
    platform: "lynkid",
    buyUrl: "https://lynk.id/etalase/tiktok-affiliate-playbook",
    price: 99000,
    rating: 4.9,
    reviews: 160,
    stock: 999,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
    ],
    description: "Formula langkah demi langkah membangun omzet jutaan rupiah dari TikTok Affiliate dari nol tanpa harus tampil wajah di depan kamera. Membedah algoritma video FYP, riset produk winning, dan teknik live streaming konversi tinggi.",
    specs: ["Format E-Book Interaktif", "Checklist Harian Konten FYP", "Formula Hook & Script Video", "Grup Diskusi Telegram", "Update Materi Berkala"]
  }
];

// ==========================================
// 2. STATE APLIKASI
// ==========================================
const state = {
  products: [...PRODUCTS],
  cart: [],
  activeCategory: "Semua",
  activePlatform: "all", // 'all' | 'lynkid' | 'tiktok'
  searchQuery: "",
  sortBy: "recommended",
  modalProduct: null,
  modalSelectedImage: 0,
  modalQty: 1,
  isAdmin: false,
  storeName: "Etalase",
  storeTagline: "Concept Store",
  storeWhatsapp: "6282213105761",
  storeDescription: "Platform katalog belanja terkurasi dengan antarmuka modern, interaktif, dan terpercaya untuk gaya hidup modern."
};

// ==========================================
// 3. UTILITY FUNCTIONS
// ==========================================
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}

function renderStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let starsHtml = '';

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fa-solid fa-star text-amber-400"></i>';
  }
  if (hasHalfStar) {
    starsHtml += '<i class="fa-solid fa-star-half-stroke text-amber-400"></i>';
  }
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="fa-regular fa-star text-slate-300"></i>';
  }
  return starsHtml;
}

// Translucent & Glassmorphic Category Badge Styling for Dark Theme
function getCategoryBadgeColor(category) {
  switch (category.toLowerCase()) {
    case 'elektronik':
      return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
    case 'pakaian':
      return 'bg-violet-500/15 text-violet-300 border-violet-500/30';
    case 'aksesoris':
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    case 'sepatu':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
    default:
      return 'bg-slate-700/40 text-slate-300 border-slate-600/40';
  }
}

// Modern Toast Notification with Dark Glassmorphism
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  
  const icon = type === 'success' 
    ? '<i class="fa-solid fa-circle-check text-emerald-400 text-base"></i>' 
    : '<i class="fa-solid fa-circle-info text-purple-400 text-base"></i>';

  toast.className = 'toast-item pointer-events-auto flex items-center gap-3 bg-slate-900/95 backdrop-blur-xl text-slate-100 px-4 sm:px-5 py-3.5 rounded-2xl shadow-2xl shadow-black/60 border border-slate-700/80 text-xs sm:text-sm font-semibold';
  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
    }, 280);
  }, 3200);
}

// ==========================================
// 4. STORAGE (LOCALSTORAGE PERSISTENCE)
// ==========================================
// Mendukung key 'etalase_products' dan kompatibel mundur dengan 'katalogku_products'
function loadProductsFromStorage() {
  try {
    const saved = localStorage.getItem('etalase_products') || localStorage.getItem('katalogku_products');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        state.products = parsed.map(item => {
          const isLynkDefault = item.platform === 'lynkid' || 
            (!item.platform && item.name && (item.name.includes('Notion') || item.name.includes('AI') || item.name.includes('Presets') || item.name.includes('Figma') || item.name.includes('E-Book')));
          const platform = item.platform || (isLynkDefault ? 'lynkid' : 'tiktok');
          const buyUrl = item.buyUrl || (platform === 'lynkid' ? 'https://lynk.id' : 'https://www.tiktok.com');
          return {
            ...item,
            platform,
            buyUrl
          };
        });
        return;
      }
    }
  } catch (e) {
    console.error('Gagal memuat produk dari storage:', e);
  }
  state.products = JSON.parse(JSON.stringify(PRODUCTS));
  saveProductsToStorage();
}

function saveProductsToStorage() {
  try {
    const serialized = JSON.stringify(state.products);
    localStorage.setItem('etalase_products', serialized);
    localStorage.setItem('katalogku_products', serialized);
  } catch (e) {
    console.error('Gagal menyimpan produk ke storage:', e);
  }
}

window.restoreDefaultProducts = function() {
  if (confirm("Pulihkan seluruh katalog ke 12 produk awal bawaan Etalase? Perubahan kustom akan direset.")) {
    state.products = JSON.parse(JSON.stringify(PRODUCTS));
    saveProductsToStorage();
    renderPlatformPills();
    renderCategoryPills();
    renderProducts();
    updateCartUI();
    showToast("Seluruh koleksi produk berhasil dipulihkan ke data awal!", "info");
  }
};

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('etalase_cart') || localStorage.getItem('katalogku_cart');
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Gagal memuat keranjang dari storage:', e);
    state.cart = [];
  }
}

function saveCartToStorage() {
  try {
    const serialized = JSON.stringify(state.cart);
    localStorage.setItem('etalase_cart', serialized);
    localStorage.setItem('katalogku_cart', serialized);
  } catch (e) {
    console.error('Gagal menyimpan keranjang ke storage:', e);
  }
}

// ==========================================
// 4B. PENGATURAN TOKO / BRANDING (WHITE-LABEL)
// ==========================================
function loadStoreSettings() {
  try {
    const savedName = localStorage.getItem('storeName');
    const savedTagline = localStorage.getItem('storeTagline');
    const savedWhatsapp = localStorage.getItem('storeWhatsapp');
    const savedDesc = localStorage.getItem('storeDescription');

    if (savedName) state.storeName = savedName;
    if (savedTagline) state.storeTagline = savedTagline;
    if (savedWhatsapp && savedWhatsapp !== '6281234567890') {
      state.storeWhatsapp = savedWhatsapp;
    } else {
      state.storeWhatsapp = '6282213105761';
      localStorage.setItem('storeWhatsapp', '6282213105761');
    }
    if (savedDesc) state.storeDescription = savedDesc;
  } catch (e) {
    console.error('Gagal memuat pengaturan toko dari storage:', e);
  }
  applyStoreSettings();
}

function applyStoreSettings() {
  const name = state.storeName || 'Etalase';
  const tagline = state.storeTagline || 'Concept Store';
  const desc = state.storeDescription || 'Platform katalog belanja terkurasi dengan antarmuka modern, interaktif, dan terpercaya untuk gaya hidup modern.';

  // 1. Judul halaman browser (document.title)
  document.title = `${name} — ${tagline}`;

  // 2. Teks Logo/Brand di bagian Header/Navbar
  const navBrandName = document.getElementById('navbarBrandName');
  if (navBrandName) navBrandName.textContent = name;
  const navBrandTagline = document.getElementById('navbarBrandTagline');
  if (navBrandTagline) navBrandTagline.textContent = tagline;

  // 3. Teks Brand & Copyright di bagian Footer
  const footerBrandName = document.getElementById('footerBrandName');
  if (footerBrandName) footerBrandName.textContent = name;
  const footerBrandDesc = document.getElementById('footerBrandDesc');
  if (footerBrandDesc) footerBrandDesc.textContent = desc;
  const footerCopyright = document.getElementById('footerCopyright');
  if (footerCopyright) footerCopyright.innerHTML = `&copy; 2026 ${name}. Seluruh Hak Cipta Dilindungi.`;

  // 4. Update preview di dalam modal pengaturan toko jika ada
  const previewName = document.getElementById('previewStoreName');
  if (previewName) previewName.textContent = name;
  const previewTagline = document.getElementById('previewStoreTagline');
  if (previewTagline) previewTagline.textContent = tagline;
}

function saveStoreSettings(name, tagline, whatsapp, desc) {
  try {
    state.storeName = name;
    state.storeTagline = tagline;
    state.storeWhatsapp = whatsapp;
    state.storeDescription = desc;

    localStorage.setItem('storeName', name);
    localStorage.setItem('storeTagline', tagline);
    localStorage.setItem('storeWhatsapp', whatsapp);
    localStorage.setItem('storeDescription', desc);

    applyStoreSettings();
    renderProducts();
    showToast(`Pengaturan toko berhasil diperbarui menjadi "${name}"! ✨`, 'success');
  } catch (e) {
    console.error('Gagal menyimpan pengaturan toko ke storage:', e);
    showToast('Terjadi kesalahan saat menyimpan pengaturan toko', 'info');
  }
}

function resetStoreSettingsToDefault() {
  if (confirm("Kembalikan nama toko dan branding ke default 'Etalase'?")) {
    const defaultName = 'Etalase';
    const defaultTagline = 'Concept Store';
    const defaultWhatsapp = '6282213105761';
    const defaultDesc = 'Platform katalog belanja terkurasi dengan antarmuka modern, interaktif, dan terpercaya untuk gaya hidup modern.';

    saveStoreSettings(defaultName, defaultTagline, defaultWhatsapp, defaultDesc);

    const inputName = document.getElementById('inputStoreName');
    const inputTagline = document.getElementById('inputStoreTagline');
    const inputWhatsapp = document.getElementById('inputStoreWhatsapp');
    const inputDesc = document.getElementById('inputStoreDesc');

    if (inputName) inputName.value = defaultName;
    if (inputTagline) inputTagline.value = defaultTagline;
    if (inputWhatsapp) inputWhatsapp.value = defaultWhatsapp;
    if (inputDesc) inputDesc.value = defaultDesc;
  }
}

function getStoreWhatsapp() {
  return state.storeWhatsapp || localStorage.getItem('storeWhatsapp') || '6282213105761';
}

function getWhatsAppBuyUrl(product) {
  let phone = getStoreWhatsapp().replace(/[^0-9]/g, '');
  if (phone.startsWith('0')) {
    phone = '62' + phone.substring(1);
  }
  const storeName = state.storeName || 'Etalase';
  const priceFormatted = formatRupiah(product.price);
  const message = `Halo Admin ${storeName} 👋\n\nSaya tertarik untuk memesan Produk Digital berikut:\n📦 Nama Produk : ${product.name}\n💰 Harga       : ${priceFormatted}\n🏷️ Kategori    : Produk Digital\n\nMohon informasi nomor rekening / QRIS untuk pembayaran serta link unduhan/akses produknya ya. Terima kasih! 🙏`;
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

// ==========================================
// 4C. ADMIN PASSWORD MANAGEMENT
// ==========================================
function getAdminPassword() {
  return localStorage.getItem('adminPassword') || localStorage.getItem('etalase_admin_password') || 'dadan123';
}

function setAdminPassword(newPassword) {
  try {
    localStorage.setItem('adminPassword', newPassword);
    localStorage.setItem('etalase_admin_password', newPassword);
  } catch (e) {
    console.error('Gagal menyimpan password admin ke storage:', e);
  }
}

// ==========================================
// 5. RENDER PLATFORM & CATEGORY TABS
// ==========================================
function renderPlatformPills() {
  const container = document.getElementById('platformContainer');
  if (!container) return;

  const platforms = [
    { id: 'all', label: 'Semua Platform', icon: 'fa-solid fa-layer-group' },
    { id: 'lynkid', label: 'Produk Digital (Lynk.id)', icon: 'fa-solid fa-cloud-arrow-down' },
    { id: 'tiktok', label: 'TikTok Affiliate', icon: 'fa-brands fa-tiktok' }
  ];

  container.innerHTML = platforms.map(p => {
    const isActive = state.activePlatform === p.id;
    let activeStyle = '';

    if (isActive) {
      if (p.id === 'lynkid') {
        activeStyle = 'bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-600/30 font-bold border border-purple-400';
      } else if (p.id === 'tiktok') {
        activeStyle = 'bg-slate-950 text-white shadow-lg shadow-black/50 font-bold border border-slate-700';
      } else {
        activeStyle = 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-600/30 font-bold border border-purple-400';
      }
    } else {
      activeStyle = 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-semibold';
    }

    return `
      <button 
        type="button" 
        onclick="selectPlatform('${p.id}')" 
        class="platform-pill px-3.5 sm:px-4 py-2 rounded-2xl text-xs whitespace-nowrap transition-all duration-200 active:scale-95 flex items-center gap-2 ${activeStyle}"
      >
        <i class="${p.icon} ${p.id === 'tiktok' && isActive ? 'text-cyan-400' : ''} text-xs"></i>
        <span>${p.label}</span>
      </button>
    `;
  }).join('');
}

window.selectPlatform = function(platform) {
  state.activePlatform = platform;
  renderPlatformPills();
  renderProducts();
};

function renderCategoryPills() {
  const categories = ["Semua", "Elektronik", "Pakaian", "Aksesoris", "Sepatu"];
  const container = document.getElementById('categoriesContainer');

  container.innerHTML = categories.map(cat => {
    const isActive = state.activeCategory === cat;
    const activeClasses = isActive 
      ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-600/30 font-bold border border-purple-400/40' 
      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800/80 hover:border-slate-700 font-medium';

    return `
      <button 
        type="button" 
        onclick="selectCategory('${cat}')" 
        class="category-pill px-4 sm:px-5 py-2 rounded-2xl text-xs sm:text-sm whitespace-nowrap transition-all duration-200 active:scale-95 ${activeClasses}"
      >
        ${cat}
      </button>
    `;
  }).join('');
}

window.selectCategory = function(cat) {
  state.activeCategory = cat;
  renderCategoryPills();
  renderProducts();
};

// ==========================================
// 6. FILTER, SORT & RENDER PRODUCTS
// ==========================================
function getFilteredAndSortedProducts() {
  let list = [...state.products];

  // 1. Filter Platform (Semua, Lynk.id Digital, TikTok Affiliate)
  if (state.activePlatform !== 'all') {
    list = list.filter(item => item.platform === state.activePlatform);
  }

  // 2. Filter Kategori
  if (state.activeCategory !== 'Semua') {
    list = list.filter(item => item.category.toLowerCase() === state.activeCategory.toLowerCase());
  }

  // 3. Pencarian Nama & Deskripsi
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  }

  // 3. Pengurutan (Sorting)
  switch (state.sortBy) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      list.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'rating-desc':
      list.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return list;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const countIndicator = document.getElementById('productCount');

  const filtered = getFilteredAndSortedProducts();
  countIndicator.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(product => {
    const badgeColor = getCategoryBadgeColor(product.category);
    const isTikTok = product.platform === 'tiktok';

    const platformBadgeHtml = isTikTok ? `
      <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wide bg-slate-950/90 backdrop-blur-md text-white border border-slate-700/80 shadow-xs flex items-center gap-1">
        <i class="fa-brands fa-tiktok text-cyan-400 text-[10px]"></i> TikTok Affiliate
      </span>
    ` : `
      <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wide bg-gradient-to-r from-violet-600 to-purple-600 backdrop-blur-md text-white border border-purple-400/50 shadow-xs flex items-center gap-1">
        <i class="fa-solid fa-cloud-arrow-down text-violet-200 text-[10px]"></i> Digital
      </span>
    `;

    return `
      <article class="product-card group bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-lg shadow-black/40 hover:border-purple-500/50 hover:shadow-purple-900/20 transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
        <div>
          <!-- Thumbnail Gambar -->
          <div 
            class="product-image-container relative aspect-square overflow-hidden bg-slate-950/60 cursor-pointer"
            onclick="openProductModal(${product.id})"
          >
            <img 
              src="${product.image}" 
              alt="${product.name}" 
              loading="lazy"
              class="w-full h-full object-cover object-center"
            >
            
            <!-- Category & Platform Badges -->
            <div class="absolute top-3 left-3 flex flex-col gap-1 items-start z-10 pointer-events-none">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border glass-badge shadow-xs ${badgeColor}">
                ${product.category}
              </span>
              ${platformBadgeHtml}
            </div>

            ${state.isAdmin ? `
            <!-- Top-Right Floating Actions: Edit & Hapus (Mode Admin) -->
            <div class="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
              <button 
                type="button" 
                onclick="event.stopPropagation(); openEditModal(${product.id})" 
                class="w-8 h-8 rounded-full bg-slate-900/90 backdrop-blur-md hover:bg-amber-500 hover:text-white text-slate-200 shadow-md border border-slate-700/80 flex items-center justify-center transition active:scale-90"
                title="Edit Produk Ini"
              >
                <i class="fa-solid fa-pen-to-square text-xs"></i>
              </button>
              <button 
                type="button" 
                onclick="event.stopPropagation(); deleteProduct(${product.id})" 
                class="w-8 h-8 rounded-full bg-slate-900/90 backdrop-blur-md hover:bg-rose-500 hover:text-white text-slate-200 shadow-md border border-slate-700/80 flex items-center justify-center transition active:scale-90"
                title="Hapus Produk Ini"
              >
                <i class="fa-solid fa-trash-can text-xs"></i>
              </button>
            </div>
            ` : ''}

            <!-- Quick View Overlay -->
            <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg border border-purple-500/40 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <i class="fa-solid fa-eye text-purple-400 mr-1.5"></i> Lihat Detail
              </span>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-5">
            <!-- Rating & Reviews -->
            <div class="flex items-center gap-1.5 mb-2">
              <div class="flex text-xs">${renderStarRating(product.rating)}</div>
              <span class="text-xs font-bold text-slate-200">${product.rating}</span>
              <span class="text-[11px] text-slate-400">(${product.reviews})</span>
            </div>

            <!-- Title -->
            <h3 
              class="font-bold text-white text-sm sm:text-base leading-snug line-clamp-2 hover:text-purple-400 transition cursor-pointer"
              onclick="openProductModal(${product.id})"
              title="${product.name}"
            >
              ${product.name}
            </h3>

            <!-- Price & Quick Add -->
            <div class="mt-3 flex items-center justify-between">
              <span class="text-lg sm:text-xl font-black bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                ${formatRupiah(product.price)}
              </span>
              <button 
                type="button" 
                onclick="event.stopPropagation(); addToCart(${product.id}, 1)" 
                class="w-8 h-8 rounded-xl bg-purple-500/15 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-500 flex items-center justify-center transition active:scale-90 shadow-xs"
                title="Tambah ke Keranjang"
              >
                <i class="fa-solid fa-cart-plus text-xs"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Card Actions -->
        <div class="px-5 pb-5 pt-0 flex flex-col gap-2">
          <div class="grid grid-cols-2 gap-2">
            <button 
              type="button" 
              onclick="openProductModal(${product.id})" 
              class="w-full bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2.5 px-2 rounded-xl border border-slate-700/80 active:scale-95 transition text-center flex items-center justify-center gap-1"
            >
              <i class="fa-regular fa-eye text-xs"></i>
              <span>Detail</span>
            </button>
            ${isTikTok ? `
              <a 
                href="${product.buyUrl || 'https://www.tiktok.com'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                onclick="event.stopPropagation()" 
                class="btn-tiktok w-full text-white text-xs font-bold py-2.5 px-2 rounded-xl active:scale-95 transition flex items-center justify-center gap-1.5 text-center group/btn truncate shadow-md"
                title="Beli di TikTok"
              >
                <i class="fa-brands fa-tiktok text-cyan-400 group-hover/btn:scale-110 transition-transform shrink-0"></i>
                <span class="truncate">Beli di TikTok</span>
              </a>
            ` : `
              <a 
                href="${product.buyUrl || 'https://lynk.id'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                onclick="event.stopPropagation()" 
                class="btn-lynkid w-full text-white text-xs font-bold py-2.5 px-2 rounded-xl active:scale-95 transition flex items-center justify-center gap-1.5 text-center group/btn truncate shadow-md shadow-purple-600/25"
                title="Beli di Lynk.id"
              >
                <i class="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform shrink-0"></i>
                <span class="truncate">Beli di Lynk.id</span>
              </a>
            `}
          </div>

          ${!isTikTok ? `
          <!-- Tombol Beli via WhatsApp (Khusus Produk Digital) -->
          <a 
            href="${getWhatsAppBuyUrl(product)}" 
            target="_blank" 
            rel="noopener noreferrer" 
            onclick="event.stopPropagation()" 
            class="w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl active:scale-95 transition flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40 border border-emerald-400/40 text-center group/wa"
            title="Beli via WhatsApp (Transfer Langsung / QRIS)"
          >
            <i class="fa-brands fa-whatsapp text-base text-emerald-100 group-hover/wa:scale-110 transition-transform"></i>
            <span>Beli via WhatsApp</span>
          </a>
          ` : ''}

          ${state.isAdmin ? `
          <div class="grid grid-cols-2 gap-2">
            <button 
              type="button" 
              onclick="event.stopPropagation(); openEditModal(${product.id})" 
              class="w-full bg-amber-950/50 hover:bg-amber-900/60 text-amber-300 text-xs font-semibold py-1.5 px-2 rounded-xl border border-amber-800/60 active:scale-95 transition flex items-center justify-center gap-1 text-center"
            >
              <i class="fa-solid fa-pen-to-square text-[10px]"></i>
              <span>Edit</span>
            </button>
            <button 
              type="button" 
              onclick="event.stopPropagation(); deleteProduct(${product.id})" 
              class="w-full bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 text-xs font-semibold py-1.5 px-2 rounded-xl border border-rose-800/60 active:scale-95 transition flex items-center justify-center gap-1 text-center"
            >
              <i class="fa-solid fa-trash-can text-[10px]"></i>
              <span>Hapus</span>
            </button>
          </div>
          ` : ''}
        </div>

      </article>
    `;
  }).join('');
}

// ==========================================
// 7. PRODUCT DETAIL MODAL LOGIC
// ==========================================
window.openProductModal = function(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.modalProduct = product;
  state.modalSelectedImage = 0;
  state.modalQty = 1;

  document.getElementById('modalProductTitle').textContent = product.name;
  document.getElementById('modalProductPrice').textContent = formatRupiah(product.price);
  document.getElementById('modalProductStock').innerHTML = `<i class="fa-solid fa-check text-xs mr-1 text-emerald-400"></i> Stok Tersedia: ${product.stock} pcs`;
  document.getElementById('modalProductDesc').textContent = product.description;
  
  const catBadge = document.getElementById('modalCategoryBadge');
  if (catBadge) {
    catBadge.textContent = product.category;
    catBadge.className = `glass-badge text-xs font-bold px-3 py-1 rounded-full shadow-sm border ${getCategoryBadgeColor(product.category)}`;
  }

  const isTikTok = product.platform === 'tiktok';
  const modalPlatformBadge = document.getElementById('modalPlatformBadge');
  if (modalPlatformBadge) {
    if (isTikTok) {
      modalPlatformBadge.className = 'text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 bg-slate-950 text-white border border-slate-700';
      modalPlatformBadge.innerHTML = '<i class="fa-brands fa-tiktok text-cyan-400"></i> TikTok Affiliate';
    } else {
      modalPlatformBadge.className = 'text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white border border-purple-400/50';
      modalPlatformBadge.innerHTML = '<i class="fa-solid fa-cloud-arrow-down text-violet-200"></i> Digital';
    }
  }

  const externalBuyBtn = document.getElementById('modalExternalBuyBtn');
  const externalBuyText = document.getElementById('modalExternalBuyText');
  const externalBuyIcon = document.getElementById('modalExternalBuyIcon');
  if (externalBuyBtn) {
    externalBuyBtn.href = product.buyUrl || (isTikTok ? 'https://www.tiktok.com' : 'https://lynk.id');
    if (isTikTok) {
      externalBuyBtn.className = 'btn-tiktok flex items-center justify-center gap-2 text-white text-sm font-bold py-3 px-4 rounded-xl shadow-lg active:scale-95 transition';
      if (externalBuyText) externalBuyText.textContent = 'Beli di TikTok';
      if (externalBuyIcon) externalBuyIcon.className = 'fa-brands fa-tiktok text-sm text-cyan-400';
    } else {
      externalBuyBtn.className = 'btn-lynkid flex items-center justify-center gap-2 text-white text-sm font-bold py-3 px-4 rounded-xl shadow-lg shadow-purple-600/30 active:scale-95 transition';
      if (externalBuyText) externalBuyText.textContent = 'Beli di Lynk.id';
      if (externalBuyIcon) externalBuyIcon.className = 'fa-solid fa-arrow-up-right-from-square text-xs';
    }
  }

  const waBuyBtn = document.getElementById('modalWhatsAppBuyBtn');
  if (waBuyBtn) {
    if (!isTikTok) {
      waBuyBtn.href = getWhatsAppBuyUrl(product);
      waBuyBtn.classList.remove('hidden');
    } else {
      waBuyBtn.classList.add('hidden');
    }
  }

  document.getElementById('modalRatingStars').innerHTML = renderStarRating(product.rating);
  document.getElementById('modalRatingScore').textContent = product.rating;
  document.getElementById('modalReviewsCount').textContent = `(${product.reviews} Ulasan)`;

  const mainImg = document.getElementById('modalMainImage');
  mainImg.src = product.gallery[0] || product.image;

  const thumbsContainer = document.getElementById('modalThumbnails');
  thumbsContainer.innerHTML = product.gallery.map((imgUrl, idx) => `
    <button 
      type="button"
      onclick="setModalMainImage('${imgUrl}', ${idx})" 
      class="thumbnail-btn w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${idx === 0 ? 'border-purple-500 shadow-md shadow-purple-500/30 opacity-100' : 'border-slate-800 opacity-60 hover:opacity-100'}"
      id="modalThumb-${idx}"
    >
      <img src="${imgUrl}" alt="${product.name} thumb ${idx + 1}" class="w-full h-full object-cover">
    </button>
  `).join('');

  const specsContainer = document.getElementById('modalProductSpecs');
  specsContainer.innerHTML = product.specs.map(spec => `
    <span class="inline-flex items-center gap-1.5 bg-slate-800/90 text-slate-200 px-3 py-1 rounded-xl border border-slate-700 font-medium">
      <i class="fa-solid fa-circle-check text-purple-400 text-[10px]"></i>
      ${spec}
    </span>
  `).join('');

  document.getElementById('modalQtyInput').value = 1;

  const modalAdmin = document.getElementById('modalAdminActionsContainer');
  if (modalAdmin) {
    if (state.isAdmin) {
      modalAdmin.classList.remove('hidden');
    } else {
      modalAdmin.classList.add('hidden');
    }
  }

  const modal = document.getElementById('productModal');
  const backdrop = document.getElementById('modalBackdrop');
  const card = document.getElementById('modalCard');

  modal.classList.remove('hidden');
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    card.classList.remove('opacity-0', 'scale-95');
    card.classList.add('opacity-100', 'scale-100');
  }, 10);

  document.body.style.overflow = 'hidden';
};

window.setModalMainImage = function(imgUrl, index) {
  const mainImg = document.getElementById('modalMainImage');
  mainImg.style.opacity = '0.5';
  setTimeout(() => {
    mainImg.src = imgUrl;
    mainImg.style.opacity = '1';
  }, 150);

  if (state.modalProduct && state.modalProduct.gallery) {
    state.modalProduct.gallery.forEach((_, i) => {
      const thumb = document.getElementById(`modalThumb-${i}`);
      if (thumb) {
        if (i === index) {
          thumb.className = 'thumbnail-btn w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all shrink-0 border-purple-500 shadow-md shadow-purple-500/30 opacity-100';
        } else {
          thumb.className = 'thumbnail-btn w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all shrink-0 border-slate-800 opacity-60 hover:opacity-100';
        }
      }
    });
  }
};

window.closeProductModal = function() {
  const modal = document.getElementById('productModal');
  const backdrop = document.getElementById('modalBackdrop');
  const card = document.getElementById('modalCard');

  backdrop.classList.remove('opacity-100');
  backdrop.classList.add('opacity-0');
  card.classList.remove('opacity-100', 'scale-100');
  card.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
};

// ==========================================
// 8. EDIT & DELETE PRODUCT LOGIC
// ==========================================
window.openEditModal = function(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('editProductId').value = product.id;
  document.getElementById('editProductName').value = product.name;
  const platformSelect = document.getElementById('editProductPlatform');
  if (platformSelect) platformSelect.value = product.platform || 'lynkid';
  const buyUrlInput = document.getElementById('editProductBuyUrl');
  if (buyUrlInput) buyUrlInput.value = product.buyUrl || '';
  document.getElementById('editProductCategory').value = product.category;
  document.getElementById('editProductPrice').value = product.price;
  document.getElementById('editProductImage').value = product.image;
  document.getElementById('editImagePreview').src = product.image;
  document.getElementById('editProductDesc').value = product.description;

  const modal = document.getElementById('editProductModal');
  const backdrop = document.getElementById('editModalBackdrop');
  const card = document.getElementById('editModalCard');

  modal.classList.remove('hidden');
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    card.classList.remove('opacity-0', 'scale-95');
    card.classList.add('opacity-100', 'scale-100');
  }, 10);

  document.body.style.overflow = 'hidden';
};

window.closeEditModal = function() {
  const modal = document.getElementById('editProductModal');
  const backdrop = document.getElementById('editModalBackdrop');
  const card = document.getElementById('editModalCard');

  backdrop.classList.remove('opacity-100');
  backdrop.classList.add('opacity-0');
  card.classList.remove('opacity-100', 'scale-100');
  card.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    modal.classList.add('hidden');
    const detailModal = document.getElementById('productModal');
    if (detailModal.classList.contains('hidden')) {
      document.body.style.overflow = '';
    }
  }, 250);
};

window.deleteProduct = function(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const konfirmasi = confirm(`Hapus koleksi "${product.name}" secara permanen?`);
  if (!konfirmasi) return;

  state.products = state.products.filter(p => p.id !== productId);
  saveProductsToStorage();

  const inCart = state.cart.some(item => item.id === productId);
  if (inCart) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
  }

  if (state.modalProduct && state.modalProduct.id === productId) {
    closeProductModal();
  }

  renderProducts();
  showToast(`Produk "${product.name}" berhasil dihapus dari Etalase!`, 'info');
};

// ==========================================
// 9. MODE ADMIN & TAMBAH PRODUK BARU
// ==========================================
function loadAdminState() {
  state.isAdmin = (localStorage.getItem('etalase_admin') || localStorage.getItem('katalogku_admin')) === 'true';
  updateAdminUI();
}

function updateAdminUI() {
  const adminElements = document.querySelectorAll('.admin-only');
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');

  if (state.isAdmin) {
    adminElements.forEach(el => el.classList.remove('hidden'));
    if (adminLoginBtn) adminLoginBtn.classList.add('hidden');
    if (adminLogoutBtn) adminLogoutBtn.classList.remove('hidden');
  } else {
    adminElements.forEach(el => el.classList.add('hidden'));
    if (adminLoginBtn) adminLoginBtn.classList.remove('hidden');
    if (adminLogoutBtn) adminLogoutBtn.classList.add('hidden');
  }
}

window.openAdminLoginModal = function() {
  const modal = document.getElementById('adminLoginModal');
  const backdrop = document.getElementById('adminLoginBackdrop');
  const card = document.getElementById('adminLoginCard');
  const passwordInput = document.getElementById('adminPasswordInput');
  const errorAlert = document.getElementById('adminLoginError');

  passwordInput.value = '';
  errorAlert.classList.add('hidden');

  modal.classList.remove('hidden');
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    card.classList.remove('opacity-0', 'scale-95');
    card.classList.add('opacity-100', 'scale-100');
    passwordInput.focus();
  }, 10);

  document.body.style.overflow = 'hidden';
};

window.closeAdminLoginModal = function() {
  const modal = document.getElementById('adminLoginModal');
  const backdrop = document.getElementById('adminLoginBackdrop');
  const card = document.getElementById('adminLoginCard');

  backdrop.classList.remove('opacity-100');
  backdrop.classList.add('opacity-0');
  card.classList.remove('opacity-100', 'scale-100');
  card.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
};

window.handleAdminLogin = function(password) {
  if (password === getAdminPassword()) {
    state.isAdmin = true;
    localStorage.setItem('etalase_admin', 'true');
    localStorage.setItem('katalogku_admin', 'true');
    closeAdminLoginModal();
    updateAdminUI();
    renderProducts();
    showToast('Mode Admin aktif! Tombol pengatur produk telah terbuka. 🛡️', 'success');
  } else {
    const errorAlert = document.getElementById('adminLoginError');
    errorAlert.classList.remove('hidden');
    const passwordInput = document.getElementById('adminPasswordInput');
    passwordInput.classList.add('border-rose-500');
    passwordInput.focus();
    setTimeout(() => {
      passwordInput.classList.remove('border-rose-500');
    }, 1500);
  }
};

window.handleAdminLogout = function() {
  if (confirm("Keluar dari Mode Admin Etalase?")) {
    state.isAdmin = false;
    localStorage.removeItem('etalase_admin');
    localStorage.removeItem('katalogku_admin');
    updateAdminUI();
    renderProducts();
    const modalAdmin = document.getElementById('modalAdminActionsContainer');
    if (modalAdmin) modalAdmin.classList.add('hidden');
    showToast('Anda telah keluar dari Mode Admin.', 'info');
  }
};

// Modal Tambah Produk Baru
window.openAddProductModal = function() {
  if (!state.isAdmin) {
    openAdminLoginModal();
    return;
  }
  const modal = document.getElementById('addProductModal');
  const backdrop = document.getElementById('addProductBackdrop');
  const card = document.getElementById('addProductCard');

  document.getElementById('addProductForm').reset();
  document.getElementById('addImagePreview').src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80";

  modal.classList.remove('hidden');
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    card.classList.remove('opacity-0', 'scale-95');
    card.classList.add('opacity-100', 'scale-100');
    document.getElementById('addProductName').focus();
  }, 10);

  document.body.style.overflow = 'hidden';
};

window.closeAddProductModal = function() {
  const modal = document.getElementById('addProductModal');
  const backdrop = document.getElementById('addProductBackdrop');
  const card = document.getElementById('addProductCard');

  backdrop.classList.remove('opacity-100');
  backdrop.classList.add('opacity-0');
  card.classList.remove('opacity-100', 'scale-100');
  card.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
};

// Modal Pengaturan Toko (White-Label)
window.openStoreSettingsModal = function() {
  if (!state.isAdmin) {
    openAdminLoginModal();
    return;
  }

  // Isi form dengan nilai yang sedang aktif
  const inputName = document.getElementById('inputStoreName');
  const inputTagline = document.getElementById('inputStoreTagline');
  const inputWhatsapp = document.getElementById('inputStoreWhatsapp');
  const inputDesc = document.getElementById('inputStoreDesc');

  if (inputName) inputName.value = state.storeName || 'Etalase';
  if (inputTagline) inputTagline.value = state.storeTagline || 'Concept Store';
  if (inputWhatsapp) inputWhatsapp.value = state.storeWhatsapp || '082213105761';
  if (inputDesc) inputDesc.value = state.storeDescription || '';

  // Update box preview
  const previewName = document.getElementById('previewStoreName');
  if (previewName) previewName.textContent = state.storeName || 'Etalase';
  const previewTagline = document.getElementById('previewStoreTagline');
  if (previewTagline) previewTagline.textContent = state.storeTagline || 'Concept Store';

  const modal = document.getElementById('storeSettingsModal');
  const backdrop = document.getElementById('storeSettingsBackdrop');
  const card = document.getElementById('storeSettingsCard');

  modal.classList.remove('hidden');
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    card.classList.remove('opacity-0', 'scale-95');
    card.classList.add('opacity-100', 'scale-100');
    if (inputName) inputName.focus();
  }, 10);

  document.body.style.overflow = 'hidden';
};

window.closeStoreSettingsModal = function() {
  const modal = document.getElementById('storeSettingsModal');
  const backdrop = document.getElementById('storeSettingsBackdrop');
  const card = document.getElementById('storeSettingsCard');

  backdrop.classList.remove('opacity-100');
  backdrop.classList.add('opacity-0');
  card.classList.remove('opacity-100', 'scale-100');
  card.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
};

// Modal Ganti Password Admin
window.openChangePasswordModal = function() {
  if (!state.isAdmin) {
    openAdminLoginModal();
    return;
  }

  const form = document.getElementById('changePasswordForm');
  if (form) form.reset();

  const errBox = document.getElementById('changePasswordError');
  if (errBox) errBox.classList.add('hidden');

  // Reset input password visibility ke mode tersembunyi
  const inputs = ['currentAdminPassword', 'newAdminPassword', 'confirmAdminPassword'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.type = 'password';
  });
  document.querySelectorAll('#changePasswordModal .toggle-password-btn i').forEach(icon => {
    icon.className = 'fa-solid fa-eye text-xs';
  });

  const modal = document.getElementById('changePasswordModal');
  const backdrop = document.getElementById('changePasswordBackdrop');
  const card = document.getElementById('changePasswordCard');

  modal.classList.remove('hidden');
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    card.classList.remove('opacity-0', 'scale-95');
    card.classList.add('opacity-100', 'scale-100');
    const currInput = document.getElementById('currentAdminPassword');
    if (currInput) currInput.focus();
  }, 10);

  document.body.style.overflow = 'hidden';
};

window.closeChangePasswordModal = function() {
  const modal = document.getElementById('changePasswordModal');
  const backdrop = document.getElementById('changePasswordBackdrop');
  const card = document.getElementById('changePasswordCard');

  backdrop.classList.remove('opacity-100');
  backdrop.classList.add('opacity-0');
  card.classList.remove('opacity-100', 'scale-100');
  card.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
};

window.handlePasswordChange = function(currentPassword, newPassword, confirmPassword) {
  const errorAlert = document.getElementById('changePasswordError');
  const errorMsg = document.getElementById('changePasswordErrorMsg');
  const currentSavedPassword = getAdminPassword();

  if (currentPassword !== currentSavedPassword) {
    errorMsg.textContent = 'Kata sandi saat ini tidak sesuai!';
    errorAlert.classList.remove('hidden');
    const input = document.getElementById('currentAdminPassword');
    if (input) {
      input.classList.add('border-rose-500');
      input.focus();
      setTimeout(() => input.classList.remove('border-rose-500'), 2000);
    }
    return false;
  }

  if (!newPassword || newPassword.length < 4) {
    errorMsg.textContent = 'Kata sandi baru minimal 4 karakter!';
    errorAlert.classList.remove('hidden');
    const input = document.getElementById('newAdminPassword');
    if (input) {
      input.classList.add('border-rose-500');
      input.focus();
      setTimeout(() => input.classList.remove('border-rose-500'), 2000);
    }
    return false;
  }

  if (newPassword !== confirmPassword) {
    errorMsg.textContent = 'Konfirmasi kata sandi baru tidak cocok!';
    errorAlert.classList.remove('hidden');
    const input = document.getElementById('confirmAdminPassword');
    if (input) {
      input.classList.add('border-rose-500');
      input.focus();
      setTimeout(() => input.classList.remove('border-rose-500'), 2000);
    }
    return false;
  }

  setAdminPassword(newPassword);
  errorAlert.classList.add('hidden');
  closeChangePasswordModal();
  showToast('Kata sandi admin berhasil diperbarui! 🔑', 'success');
  return true;
};

window.resetAdminPasswordToDefault = function() {
  if (confirm("Kembalikan kata sandi admin ke bawaan ('dadan123')?")) {
    setAdminPassword('dadan123');
    closeChangePasswordModal();
    showToast("Kata sandi admin telah dikembalikan ke bawaan ('dadan123')! 🔑", "info");
  }
};

// ==========================================
// 10. SHOPPING CART LOGIC
// ==========================================
window.addToCart = function(productId, quantity = 1, openDrawer = false) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: productId,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();

  const badge = document.getElementById('cartBadge');
  badge.classList.remove('badge-bump');
  void badge.offsetWidth;
  badge.classList.add('badge-bump');

  showToast(`${product.name} dimasukkan ke keranjang!`);

  if (openDrawer) {
    openCartDrawer();
  }
};

window.updateCartQty = function(productId, delta) {
  const index = state.cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  state.cart[index].quantity += delta;

  if (state.cart[index].quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCartToStorage();
  updateCartUI();
};

window.removeFromCart = function(productId) {
  const item = state.products.find(p => p.id === productId);
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
  if (item) {
    showToast(`${item.name} dihapus dari keranjang`, 'info');
  }
};

window.clearCart = function() {
  if (state.cart.length === 0) return;
  if (confirm("Kosongkan keranjang belanja Anda?")) {
    state.cart = [];
    saveCartToStorage();
    updateCartUI();
    showToast("Keranjang belanja berhasil dikosongkan", "info");
  }
};

function updateCartUI() {
  let totalItemsCount = 0;
  let subtotal = 0;

  const cartListContainer = document.getElementById('cartItemsList');
  const cartEmptyState = document.getElementById('cartEmptyState');
  const cartFooter = document.getElementById('cartFooter');

  if (state.cart.length === 0) {
    cartListContainer.innerHTML = '';
    cartEmptyState.classList.remove('hidden');
    cartFooter.classList.add('hidden');
  } else {
    cartEmptyState.classList.add('hidden');
    cartFooter.classList.remove('hidden');

    cartListContainer.innerHTML = state.cart.map(cartItem => {
      const product = state.products.find(p => p.id === cartItem.id);
      if (!product) return '';

      totalItemsCount += cartItem.quantity;
      const itemSubtotal = product.price * cartItem.quantity;
      subtotal += itemSubtotal;

      return `
        <div class="py-4 flex items-center gap-3">
          <div class="w-16 h-16 rounded-2xl bg-slate-950 overflow-hidden shrink-0 border border-slate-800">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
          </div>

          <div class="flex-1 min-w-0">
            <h4 class="text-xs sm:text-sm font-bold text-white hover:text-purple-300 truncate transition" title="${product.name}">
              ${product.name}
            </h4>
            <div class="text-xs font-bold text-purple-400 mt-0.5">
              ${formatRupiah(product.price)}
            </div>

            <div class="flex items-center justify-between mt-2">
              <div class="flex items-center border border-slate-700 rounded-xl bg-slate-800/80 overflow-hidden">
                <button 
                  type="button" 
                  onclick="updateCartQty(${product.id}, -1)" 
                  class="w-6 h-6 flex items-center justify-center text-slate-300 hover:bg-slate-700 text-xs active:scale-95 transition"
                >
                  <i class="fa-solid fa-minus text-[10px]"></i>
                </button>
                <span class="w-7 text-center text-xs font-bold text-white">
                  ${cartItem.quantity}
                </span>
                <button 
                  type="button" 
                  onclick="updateCartQty(${product.id}, 1)" 
                  class="w-6 h-6 flex items-center justify-center text-slate-300 hover:bg-slate-700 text-xs active:scale-95 transition"
                >
                  <i class="fa-solid fa-plus text-[10px]"></i>
                </button>
              </div>

              <button 
                type="button" 
                onclick="removeFromCart(${product.id})" 
                class="text-slate-500 hover:text-rose-400 p-1 transition" 
                title="Hapus barang"
              >
                <i class="fa-regular fa-trash-can text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  document.getElementById('cartBadge').textContent = totalItemsCount;
  document.getElementById('cartTotalItemsCount').textContent = totalItemsCount;

  document.getElementById('cartSubtotal').textContent = formatRupiah(subtotal);
  document.getElementById('cartGrandTotal').textContent = formatRupiah(subtotal);

  // Ambang batas Gratis Ongkir: Rp 300.000
  const shippingThreshold = 300000;
  const progressPercent = Math.min(Math.round((subtotal / shippingThreshold) * 100), 100);
  const progressBar = document.getElementById('shippingProgressBar');
  const progressPercentText = document.getElementById('shippingProgressPercent');
  const shippingNotice = document.getElementById('shippingNotice');

  progressBar.style.width = `${progressPercent}%`;
  progressPercentText.textContent = `${progressPercent}%`;

  if (subtotal >= shippingThreshold) {
    shippingNotice.innerHTML = `<i class="fa-solid fa-bolt text-emerald-400 mr-1"></i> Selamat! Kamu dapat <b>Gratis Ongkir</b> ⚡`;
    progressBar.className = 'bg-gradient-to-r from-emerald-500 to-teal-400 h-1.5 rounded-full transition-all duration-500';
  } else {
    const diff = shippingThreshold - subtotal;
    shippingNotice.innerHTML = `<i class="fa-solid fa-bolt text-purple-400 mr-1"></i> Tambah <b>${formatRupiah(diff)}</b> lagi untuk Gratis Ongkir!`;
    progressBar.className = 'bg-gradient-to-r from-violet-500 to-fuchsia-500 h-1.5 rounded-full transition-all duration-500';
  }
}

window.openCartDrawer = function() {
  const container = document.getElementById('cartDrawerContainer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  const content = document.getElementById('cartDrawerContent');

  container.classList.remove('hidden');
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    content.classList.remove('translate-x-full');
    content.classList.add('translate-x-0');
  }, 10);

  document.body.style.overflow = 'hidden';
};

window.closeCartDrawer = function() {
  const container = document.getElementById('cartDrawerContainer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  const content = document.getElementById('cartDrawerContent');

  backdrop.classList.remove('opacity-100');
  backdrop.classList.add('opacity-0');
  content.classList.remove('translate-x-0');
  content.classList.add('translate-x-full');

  setTimeout(() => {
    container.classList.add('hidden');
    document.body.style.overflow = '';
  }, 300);
};

// ==========================================
// 11. CHECKOUT MODAL FLOW
// ==========================================
window.openCheckoutModal = function() {
  if (state.cart.length === 0) {
    showToast("Keranjang Anda masih kosong!", "info");
    return;
  }

  closeCartDrawer();

  const summaryContainer = document.getElementById('checkoutSummaryItems');
  let totalAmount = 0;

  summaryContainer.innerHTML = state.cart.map(cartItem => {
    const p = state.products.find(item => item.id === cartItem.id);
    if (!p) return '';
    const itemTotal = p.price * cartItem.quantity;
    totalAmount += itemTotal;

    return `
      <div class="py-1.5 flex justify-between items-center">
        <span class="truncate pr-2 text-slate-300">${p.name} <b class="text-purple-400">x${cartItem.quantity}</b></span>
        <span class="font-bold shrink-0 text-white">${formatRupiah(itemTotal)}</span>
      </div>
    `;
  }).join('');

  document.getElementById('checkoutTotalAmount').textContent = formatRupiah(totalAmount);

  document.getElementById('checkoutFormState').classList.remove('hidden');
  document.getElementById('checkoutSuccessState').classList.add('hidden');

  const modal = document.getElementById('checkoutModal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.closeCheckoutModal = function() {
  const modal = document.getElementById('checkoutModal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
};

// ==========================================
// 12. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Muat Status Admin, Pengaturan Toko, Data Produk & Keranjang dari localStorage
  loadAdminState();
  loadStoreSettings();
  loadProductsFromStorage();
  loadCartFromStorage();

  // 2. Render Filter Platform, Kategori & Produk Awal
  renderPlatformPills();
  renderCategoryPills();
  renderProducts();
  updateCartUI();
  updateAdminUI();

  // 3. Search Bar Events (Desktop)
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.trim() !== '') {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    renderProducts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderProducts();
    searchInput.focus();
  });

  // 4. Mobile Search Bar
  const mobileSearchToggle = document.getElementById('mobileSearchToggle');
  const mobileSearchBar = document.getElementById('mobileSearchBar');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const clearMobileSearchBtn = document.getElementById('clearMobileSearchBtn');

  mobileSearchToggle.addEventListener('click', () => {
    mobileSearchBar.classList.toggle('hidden');
    if (!mobileSearchBar.classList.contains('hidden')) {
      mobileSearchInput.focus();
    }
  });

  mobileSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    searchInput.value = e.target.value;
    if (state.searchQuery.trim() !== '') {
      clearMobileSearchBtn.classList.remove('hidden');
    } else {
      clearMobileSearchBtn.classList.add('hidden');
    }
    renderProducts();
  });

  clearMobileSearchBtn.addEventListener('click', () => {
    mobileSearchInput.value = '';
    searchInput.value = '';
    state.searchQuery = '';
    clearMobileSearchBtn.classList.add('hidden');
    renderProducts();
  });

  // 5. Sorting Selector
  const sortSelect = document.getElementById('sortSelect');
  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // 6. Reset Filters Button (on Empty State)
  document.getElementById('resetFiltersBtn').addEventListener('click', () => {
    state.searchQuery = '';
    state.activeCategory = 'Semua';
    state.activePlatform = 'all';
    searchInput.value = '';
    mobileSearchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    clearMobileSearchBtn.classList.add('hidden');
    sortSelect.value = 'recommended';
    state.sortBy = 'recommended';
    renderPlatformPills();
    renderCategoryPills();
    renderProducts();
  });

  // 7. Tombol Pulihkan Produk Bawaan
  const restoreBtn1 = document.getElementById('restoreInitialBtn');
  if (restoreBtn1) restoreBtn1.addEventListener('click', restoreDefaultProducts);

  const restoreBtn2 = document.getElementById('restoreDefaultProductsBtn');
  if (restoreBtn2) restoreBtn2.addEventListener('click', restoreDefaultProducts);

  // 8. Cart Drawer Open & Close
  document.getElementById('openCartBtn').addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn').addEventListener('click', closeCartDrawer);
  document.getElementById('cartDrawerBackdrop').addEventListener('click', closeCartDrawer);
  document.getElementById('cartExploreBtn').addEventListener('click', closeCartDrawer);
  document.getElementById('clearCartBtn').addEventListener('click', clearCart);

  // 9. Modal Detail Listeners
  document.getElementById('closeModalBtn').addEventListener('click', closeProductModal);
  document.getElementById('modalBackdrop').addEventListener('click', closeProductModal);

  // Modal Qty Stepper
  const modalQtyInput = document.getElementById('modalQtyInput');
  document.getElementById('modalQtyMinus').addEventListener('click', () => {
    let val = parseInt(modalQtyInput.value, 10) || 1;
    if (val > 1) {
      val--;
      modalQtyInput.value = val;
      state.modalQty = val;
    }
  });

  document.getElementById('modalQtyPlus').addEventListener('click', () => {
    let val = parseInt(modalQtyInput.value, 10) || 1;
    const maxStock = state.modalProduct ? state.modalProduct.stock : 99;
    if (val < maxStock) {
      val++;
      modalQtyInput.value = val;
      state.modalQty = val;
    }
  });

  // Modal Add to Cart Button
  document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
    if (state.modalProduct) {
      addToCart(state.modalProduct.id, state.modalQty);
      closeProductModal();
    }
  });

  // Modal Buy Now Button
  document.getElementById('modalBuyNowBtn').addEventListener('click', () => {
    if (state.modalProduct) {
      addToCart(state.modalProduct.id, state.modalQty, false);
      closeProductModal();
      openCheckoutModal();
    }
  });

  // Modal Detail: Tombol Edit & Hapus
  document.getElementById('modalEditProductBtn').addEventListener('click', () => {
    if (state.modalProduct) {
      openEditModal(state.modalProduct.id);
    }
  });

  document.getElementById('modalDeleteProductBtn').addEventListener('click', () => {
    if (state.modalProduct) {
      deleteProduct(state.modalProduct.id);
    }
  });

  // 10. Form Edit Produk Listeners
  const editForm = document.getElementById('editProductForm');
  const editImageInput = document.getElementById('editProductImage');
  const editImagePreview = document.getElementById('editImagePreview');

  editImageInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (val) {
      editImagePreview.src = val;
    }
  });

  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById('editProductId').value, 10);
    const product = state.products.find(p => p.id === id);
    if (!product) return;

    const newName = document.getElementById('editProductName').value.trim();
    const newPlatform = document.getElementById('editProductPlatform').value;
    const newBuyUrl = document.getElementById('editProductBuyUrl').value.trim();
    const newCat = document.getElementById('editProductCategory').value;
    const newPrice = parseInt(document.getElementById('editProductPrice').value, 10) || 0;
    const newImage = document.getElementById('editProductImage').value.trim();
    const newDesc = document.getElementById('editProductDesc').value.trim();

    product.name = newName;
    product.platform = newPlatform;
    product.buyUrl = newBuyUrl || (newPlatform === 'lynkid' ? 'https://lynk.id' : 'https://www.tiktok.com');
    product.category = newCat;
    product.price = newPrice;
    product.image = newImage;
    if (product.gallery && product.gallery.length > 0) {
      product.gallery[0] = newImage;
    } else {
      product.gallery = [newImage];
    }
    product.description = newDesc;

    saveProductsToStorage();
    renderProducts();
    updateCartUI();

    if (state.modalProduct && state.modalProduct.id === id) {
      openProductModal(id);
    }

    closeEditModal();
    showToast(`Perubahan produk "${newName}" berhasil disimpan! 🎉`);
  });

  document.getElementById('closeEditModalBtn').addEventListener('click', closeEditModal);
  document.getElementById('cancelEditBtn').addEventListener('click', closeEditModal);
  document.getElementById('editModalBackdrop').addEventListener('click', closeEditModal);

  // 11. Mode Admin Login & Logout Listeners
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  if (adminLoginBtn) adminLoginBtn.addEventListener('click', openAdminLoginModal);

  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  if (adminLogoutBtn) adminLogoutBtn.addEventListener('click', handleAdminLogout);

  document.getElementById('closeAdminLoginBtn').addEventListener('click', closeAdminLoginModal);
  document.getElementById('cancelAdminLoginBtn').addEventListener('click', closeAdminLoginModal);
  document.getElementById('adminLoginBackdrop').addEventListener('click', closeAdminLoginModal);

  const adminLoginForm = document.getElementById('adminLoginForm');
  adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pwd = document.getElementById('adminPasswordInput').value.trim();
    handleAdminLogin(pwd);
  });

  // 12. Modal Tambah Produk Listeners
  const openAddBtn1 = document.getElementById('openAddProductBtn');
  if (openAddBtn1) openAddBtn1.addEventListener('click', openAddProductModal);

  const openAddBtn2 = document.getElementById('adminAddProductBtnFilter');
  if (openAddBtn2) openAddBtn2.addEventListener('click', openAddProductModal);

  document.getElementById('closeAddProductBtn').addEventListener('click', closeAddProductModal);
  document.getElementById('cancelAddProductBtn').addEventListener('click', closeAddProductModal);
  document.getElementById('addProductBackdrop').addEventListener('click', closeAddProductModal);

  const addProductImageInput = document.getElementById('addProductImage');
  const addImagePreview = document.getElementById('addImagePreview');
  addProductImageInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (val) {
      addImagePreview.src = val;
    }
  });

  const addProductForm = document.getElementById('addProductForm');
  addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('addProductName').value.trim();
    const platform = document.getElementById('addProductPlatform').value;
    const buyUrl = document.getElementById('addProductBuyUrl').value.trim();
    const category = document.getElementById('addProductCategory').value;
    const price = parseInt(document.getElementById('addProductPrice').value, 10) || 0;
    const stock = parseInt(document.getElementById('addProductStock').value, 10) || 15;
    const image = document.getElementById('addProductImage').value.trim();
    const desc = document.getElementById('addProductDesc').value.trim();

    const newProduct = {
      id: Date.now(),
      name: name,
      platform: platform,
      buyUrl: buyUrl || (platform === 'lynkid' ? 'https://lynk.id' : 'https://www.tiktok.com'),
      category: category,
      price: price,
      rating: 5.0,
      reviews: 1,
      stock: stock,
      image: image,
      gallery: [
        image,
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
      ],
      description: desc,
      specs: ["Produk Terverifikasi", "100% Original", "Akses / Pengiriman Cepat"]
    };

    state.products.unshift(newProduct);
    saveProductsToStorage();
    renderProducts();
    closeAddProductModal();
    showToast(`Produk "${newProduct.name}" berhasil ditambahkan ke ${state.storeName || 'Etalase'}! 🚀`, 'success');
  });

  // 12B. Pengaturan Toko & Branding Listeners
  const openStoreBtn1 = document.getElementById('openStoreSettingsBtn');
  if (openStoreBtn1) openStoreBtn1.addEventListener('click', openStoreSettingsModal);

  const openStoreBtn2 = document.getElementById('adminStoreSettingsBtnFilter');
  if (openStoreBtn2) openStoreBtn2.addEventListener('click', openStoreSettingsModal);

  const openStoreBtn3 = document.getElementById('adminStoreSettingsBtnFooter');
  if (openStoreBtn3) openStoreBtn3.addEventListener('click', openStoreSettingsModal);

  document.getElementById('closeStoreSettingsBtn').addEventListener('click', closeStoreSettingsModal);
  document.getElementById('cancelStoreSettingsBtn').addEventListener('click', closeStoreSettingsModal);
  document.getElementById('storeSettingsBackdrop').addEventListener('click', closeStoreSettingsModal);
  document.getElementById('resetStoreSettingsBtn').addEventListener('click', resetStoreSettingsToDefault);

  // Tab Switchers antar menu Admin
  const switchToSettings = document.getElementById('switchToStoreSettingsTab');
  if (switchToSettings) {
    switchToSettings.addEventListener('click', () => {
      closeAddProductModal();
      openStoreSettingsModal();
    });
  }

  const switchToAddProduct = document.getElementById('switchToAddProductTab');
  if (switchToAddProduct) {
    switchToAddProduct.addEventListener('click', () => {
      closeStoreSettingsModal();
      openAddProductModal();
    });
  }

  // Live Input Preview in Store Settings
  const inputStoreName = document.getElementById('inputStoreName');
  const inputStoreTagline = document.getElementById('inputStoreTagline');
  const previewStoreName = document.getElementById('previewStoreName');
  const previewStoreTagline = document.getElementById('previewStoreTagline');

  if (inputStoreName) {
    inputStoreName.addEventListener('input', (e) => {
      const val = e.target.value.trim() || 'Nama Toko';
      if (previewStoreName) previewStoreName.textContent = val;
    });
  }

  if (inputStoreTagline) {
    inputStoreTagline.addEventListener('input', (e) => {
      const val = e.target.value.trim() || 'Slogan Toko';
      if (previewStoreTagline) previewStoreTagline.textContent = val;
    });
  }

  // Submit Store Settings Form
  const storeSettingsForm = document.getElementById('storeSettingsForm');
  if (storeSettingsForm) {
    storeSettingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newName = document.getElementById('inputStoreName').value.trim();
      const newTagline = document.getElementById('inputStoreTagline').value.trim();
      const newWhatsapp = document.getElementById('inputStoreWhatsapp').value.trim();
      const newDesc = document.getElementById('inputStoreDesc').value.trim();

      if (!newName) {
        alert("Nama toko/brand tidak boleh kosong!");
        return;
      }

      saveStoreSettings(newName, newTagline, newWhatsapp, newDesc);
      closeStoreSettingsModal();
    });
  }

  // 12C. Ganti Password Listeners & Tab Handlers
  const openPwdBtn1 = document.getElementById('openChangePasswordBtn');
  if (openPwdBtn1) openPwdBtn1.addEventListener('click', openChangePasswordModal);

  const openPwdBtn2 = document.getElementById('adminChangePasswordBtnFilter');
  if (openPwdBtn2) openPwdBtn2.addEventListener('click', openChangePasswordModal);

  const openPwdBtn3 = document.getElementById('adminChangePasswordBtnFooter');
  if (openPwdBtn3) openPwdBtn3.addEventListener('click', openChangePasswordModal);

  const closePwdBtn = document.getElementById('closeChangePasswordBtn');
  if (closePwdBtn) closePwdBtn.addEventListener('click', closeChangePasswordModal);

  const cancelPwdBtn = document.getElementById('cancelChangePasswordBtn');
  if (cancelPwdBtn) cancelPwdBtn.addEventListener('click', closeChangePasswordModal);

  const backdropPwd = document.getElementById('changePasswordBackdrop');
  if (backdropPwd) backdropPwd.addEventListener('click', closeChangePasswordModal);

  const resetPwdBtn = document.getElementById('resetAdminPasswordBtn');
  if (resetPwdBtn) resetPwdBtn.addEventListener('click', resetAdminPasswordToDefault);

  // Switch to Password Tab from Add Product Modal
  const switchToPasswordTab1 = document.getElementById('switchToPasswordTab1');
  if (switchToPasswordTab1) {
    switchToPasswordTab1.addEventListener('click', () => {
      closeAddProductModal();
      openChangePasswordModal();
    });
  }

  // Switch to Password Tab from Store Settings Modal
  const switchToPasswordTab2 = document.getElementById('switchToPasswordTab2');
  if (switchToPasswordTab2) {
    switchToPasswordTab2.addEventListener('click', () => {
      closeStoreSettingsModal();
      openChangePasswordModal();
    });
  }

  // Switch to Add Product from Change Password Modal
  const switchToProductTabFromPwd = document.getElementById('switchToProductTabFromPwd');
  if (switchToProductTabFromPwd) {
    switchToProductTabFromPwd.addEventListener('click', () => {
      closeChangePasswordModal();
      openAddProductModal();
    });
  }

  // Switch to Store Settings from Change Password Modal
  const switchToStoreTabFromPwd = document.getElementById('switchToStoreTabFromPwd');
  if (switchToStoreTabFromPwd) {
    switchToStoreTabFromPwd.addEventListener('click', () => {
      closeChangePasswordModal();
      openStoreSettingsModal();
    });
  }

  // Toggle Password Visibility Eye Buttons
  document.querySelectorAll('.toggle-password-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      const icon = btn.querySelector('i');
      if (input && icon) {
        if (input.type === 'password') {
          input.type = 'text';
          icon.className = 'fa-solid fa-eye-slash text-xs text-purple-400';
        } else {
          input.type = 'password';
          icon.className = 'fa-solid fa-eye text-xs text-slate-400';
        }
      }
    });
  });

  // Submit Change Password Form
  const changePasswordForm = document.getElementById('changePasswordForm');
  if (changePasswordForm) {
    changePasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentPwd = document.getElementById('currentAdminPassword').value;
      const newPwd = document.getElementById('newAdminPassword').value;
      const confirmPwd = document.getElementById('confirmAdminPassword').value;
      handlePasswordChange(currentPwd, newPwd, confirmPwd);
    });
  }

  // 13. Checkout Flow
  document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);
  document.getElementById('closeCheckoutBtn').addEventListener('click', closeCheckoutModal);

  const checkoutForm = document.getElementById('checkoutForm');
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const randomOrderNum = '#ORD-' + Math.floor(10000 + Math.random() * 90000);
    document.getElementById('orderNumberDisplay').textContent = randomOrderNum;

    state.cart = [];
    saveCartToStorage();
    updateCartUI();

    document.getElementById('checkoutFormState').classList.add('hidden');
    document.getElementById('checkoutSuccessState').classList.remove('hidden');
    showToast(`Pesanan Anda berhasil dikonfirmasi di ${state.storeName || 'Etalase'}! 🎉`);
  });

  document.getElementById('finishOrderBtn').addEventListener('click', () => {
    closeCheckoutModal();
  });

  // 14. Global Escape Key Listener for All Modals & Drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAdminLoginModal();
      closeAddProductModal();
      closeStoreSettingsModal();
      closeChangePasswordModal();
      closeEditModal();
      closeProductModal();
      closeCartDrawer();
      closeCheckoutModal();
    }
  });
});
