/**
 * =========================================================================
 * BACKEND GOOGLE APPS SCRIPT (Code.gs)
 * Katalog Produk Digital & Aset Kreatif V5.1 - 3D Pro
 * =========================================================================
 * 
 * Panduan Pemasangan:
 * 1. Buka Google Sheets baru atau yang sudah ada (tempat menyimpan database).
 * 2. Klik menu 'Ekstensi' (Extensions) > 'Apps Script'.
 * 3. Hapus kode bawaan di 'Code.gs' dan ganti dengan seluruh kode di bawah ini.
 * 4. Tambahkan file HTML baru dengan nama 'Index' (klik tombol '+' > HTML),
 *    lalu tempelkan seluruh isi dari file 'katalog_3d_pro.html'.
 * 5. Jalankan fungsi 'setupDatabase()' satu kali untuk membuat sheet & header otomatis.
 * 6. Klik 'Terapkan' (Deploy) > 'Penerapan Baru' (New Deployment) > Pilih jenis 'Aplikasi Web' (Web App):
 *    - Jalankan sebagai: 'Saya' (Me)
 *    - Siapa yang memiliki akses: 'Siapa saja' (Anyone)
 * 7. Klik 'Terapkan' (Deploy) dan salin URL Web App yang dihasilkan.
 */

// =========================================================================
// 1. WEB APP ENTRY POINT
// =========================================================================
function doGet(e) {
  // Jika dipanggil dari Vercel atau Web Eksternal via Fetch API JSON:
  if (e && e.parameter && e.parameter.action === 'getData') {
    var data = getInitialData();
    return ContentService.createTextOutput(JSON.stringify(data))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Jika dibuka langsung sebagai Google Apps Script Web App:
  var output = HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Katalog Produk Digital & Aset Kreatif V5.1 - 3D Pro')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return output;
}

// =========================================================================
// 2. HELPER SPREADSHEET
// =========================================================================
function getSpreadsheet() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

// =========================================================================
// 3. INISIALISASI DATABASE & SHEET
// =========================================================================
function setupDatabase() {
  var ss = getSpreadsheet();
  
  var schemas = {
    'Products': [
      'ID_Produk', 'Nama_Produk', 'Kategori_ID', 'Merek', 'Harga_Base', 
      'Deskripsi', 'Demo_URL', 'Tipe_Lisensi', 'Stok', 'Status_Stok', 
      'Media_URLs_JSON', 'Spesifikasi_JSON', 'Rating_Avg', 'Total_View', 
      'Total_Wishlist', 'Created_At', 'Lynk_URL'
    ],
    'Categories': [
      'Kategori_ID', 'Nama_Kategori', 'Parent_ID', 'Icon_URL'
    ],
    'App_Config': [
      'Param_Name', 'Param_Value'
    ]
  };

  for (var sheetName in schemas) {
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(schemas[sheetName]);
      // Format header
      sheet.getRange(1, 1, 1, schemas[sheetName].length)
        .setFontWeight('bold')
        .setBackground('#0f172a')
        .setFontColor('#38bdf8');
      sheet.setFrozenRows(1);
    }
  }

  // Inisialisasi Kategori Bawaan jika kosong
  var catSheet = ss.getSheetByName('Categories');
  if (catSheet.getLastRow() <= 1) {
    catSheet.appendRow(['ALL', 'Semua Kategori', '', 'fa-layer-group']);
    catSheet.appendRow(['CAT_CODE', 'GAS Web App & Mentoring', '', 'fa-code']);
    catSheet.appendRow(['CAT_DESIGN', 'Desain & Template', '', 'fa-palette']);
    catSheet.appendRow(['CAT_EBOOK', 'E-Book & Kursus', '', 'fa-book-open']);
    catSheet.appendRow(['CAT_SAAS', 'Software & SaaS', '', 'fa-key']);
  }

  // Inisialisasi Config Bawaan jika kosong
  var configSheet = ss.getSheetByName('App_Config');
  if (configSheet.getLastRow() <= 1) {
    configSheet.appendRow(['Store_Name', 'DIGITALHUB 3D PRO']);
    configSheet.appendRow(['WhatsApp_Number', '6282213105761']);
    configSheet.appendRow(['Default_Lynk_URL', 'https://lynk.id']);
    configSheet.appendRow(['Admin_Password', 'dadan123']);
  }

  return { status: 'success', message: 'Database dan Sheet berhasil disiapkan!' };
}

// =========================================================================
// 4. MENGAMBIL SELURUH DATA AWAL (GET INITIAL DATA)
// =========================================================================
function getInitialData() {
  try {
    var ss = getSpreadsheet();
    setupDatabase(); // Pastikan sheet sudah ada

    // 1. Baca Config
    var configSheet = ss.getSheetByName('App_Config');
    var configData = configSheet.getDataRange().getValues();
    var config = {};
    for (var i = 1; i < configData.length; i++) {
      if (configData[i][0]) {
        config[configData[i][0]] = configData[i][1];
      }
    }
    // Pastikan nomor WhatsApp default jika belum ada
    if (!config['WhatsApp_Number']) {
      config['WhatsApp_Number'] = '6282213105761';
    }

    // 2. Baca Kategori
    var catSheet = ss.getSheetByName('Categories');
    var catData = catSheet.getDataRange().getValues();
    var categories = [];
    if (catData.length > 1) {
      var catHeaders = catData[0];
      for (var c = 1; c < catData.length; c++) {
        var row = catData[c];
        if (!row[0]) continue;
        var catObj = {};
        for (var h = 0; h < catHeaders.length; h++) {
          catObj[catHeaders[h]] = row[h];
        }
        categories.push(catObj);
      }
    }

    // 3. Baca Produk
    var prodSheet = ss.getSheetByName('Products');
    var prodData = prodSheet.getDataRange().getValues();
    var products = [];
    if (prodData.length > 1) {
      var prodHeaders = prodData[0];
      for (var p = 1; p < prodData.length; p++) {
        var pRow = prodData[p];
        if (!pRow[0]) continue;
        var pObj = {};
        for (var ph = 0; ph < prodHeaders.length; ph++) {
          pObj[prodHeaders[ph]] = pRow[ph];
        }
        products.push(pObj);
      }
    }

    return {
      status: 'success',
      products: products,
      categories: categories,
      config: config
    };
  } catch (err) {
    return {
      status: 'error',
      message: err.toString()
    };
  }
}

// =========================================================================
// 5. SIMPAN / UPDATE PRODUK
// =========================================================================
function saveProduct(product) {
  try {
    var ss = getSpreadsheet();
    var sheet = ss.getSheetByName('Products');
    var data = sheet.getDataRange().getValues();
    var headers = data[0];

    var idColIdx = headers.indexOf('ID_Produk');
    var foundRow = -1;

    for (var i = 1; i < data.length; i++) {
      if (String(data[i][idColIdx]) === String(product.ID_Produk)) {
        foundRow = i + 1;
        break;
      }
    }

    var rowValues = [];
    for (var j = 0; j < headers.length; j++) {
      var h = headers[j];
      var val = product[h] !== undefined ? product[h] : '';
      if (typeof val === 'object') {
        val = JSON.stringify(val);
      }
      rowValues.push(val);
    }

    if (foundRow > 0) {
      // Update baris yang sudah ada
      sheet.getRange(foundRow, 1, 1, rowValues.length).setValues([rowValues]);
    } else {
      // Tambah produk baru
      if (!product.Created_At) {
        rowValues[headers.indexOf('Created_At')] = new Date().toISOString();
      }
      sheet.appendRow(rowValues);
    }

    return { status: 'success', message: 'Produk berhasil disimpan!' };
  } catch (err) {
    return { status: 'error', message: err.toString() };
  }
}

// =========================================================================
// 6. HAPUS PRODUK
// =========================================================================
function deleteProduct(id) {
  try {
    var ss = getSpreadsheet();
    var sheet = ss.getSheetByName('Products');
    var data = sheet.getDataRange().getValues();
    var idColIdx = data[0].indexOf('ID_Produk');

    for (var i = 1; i < data.length; i++) {
      if (String(data[i][idColIdx]) === String(id)) {
        sheet.deleteRow(i + 1);
        return { status: 'success', message: 'Produk berhasil dihapus!' };
      }
    }

    return { status: 'error', message: 'ID Produk tidak ditemukan.' };
  } catch (err) {
    return { status: 'error', message: err.toString() };
  }
}

// =========================================================================
// 7. UPDATE STOK PRODUK
// =========================================================================
function updateStock(id, newStock) {
  try {
    var ss = getSpreadsheet();
    var sheet = ss.getSheetByName('Products');
    var data = sheet.getDataRange().getValues();
    var idColIdx = data[0].indexOf('ID_Produk');
    var stockColIdx = data[0].indexOf('Stok');

    for (var i = 1; i < data.length; i++) {
      if (String(data[i][idColIdx]) === String(id)) {
        sheet.getRange(i + 1, stockColIdx + 1).setValue(newStock);
        return { status: 'success', message: 'Stok berhasil diperbarui!' };
      }
    }

    return { status: 'error', message: 'ID Produk tidak ditemukan.' };
  } catch (err) {
    return { status: 'error', message: err.toString() };
  }
}

// =========================================================================
// 8. SIMPAN PENGATURAN TOKO (CONFIG)
// =========================================================================
function saveConfig(paramName, paramValue) {
  try {
    var ss = getSpreadsheet();
    var sheet = ss.getSheetByName('App_Config');
    var data = sheet.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === paramName) {
        sheet.getRange(i + 1, 2).setValue(paramValue);
        return { status: 'success', message: 'Pengaturan ' + paramName + ' berhasil diperbarui!' };
      }
    }

    // Jika belum ada, tambahkan baris baru
    sheet.appendRow([paramName, paramValue]);
    return { status: 'success', message: 'Pengaturan ' + paramName + ' berhasil disimpan!' };
  } catch (err) {
    return { status: 'error', message: err.toString() };
  }
}

// =========================================================================
// 9. UPLOAD GAMBAR KE GOOGLE DRIVE
// =========================================================================
function uploadProductImage(fileData) {
  try {
    // fileData = { base64: '...', filename: '...', mimeType: '...' }
    var folderName = 'Katalog_Produk_Uploads';
    var folders = DriveApp.getFoldersByName(folderName);
    var targetFolder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);

    var contentType = fileData.mimeType || 'image/jpeg';
    var bytes = Utilities.base64Decode(fileData.base64);
    var blob = Utilities.newBlob(bytes, contentType, fileData.filename || 'asset-upload.jpg');
    
    var file = targetFolder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // Tautan langsung (direct preview image URL)
    var url = 'https://drive.google.com/uc?export=view&id=' + file.getId();
    return { status: 'success', url: url };
  } catch (err) {
    return { status: 'error', message: err.toString() };
  }
}
