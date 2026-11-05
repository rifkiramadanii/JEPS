# 📚 JEPS (Journal of Education and Praxis) - Frontend React

Repositori ini berisi *source code* untuk antarmuka (*frontend*) publik dari **Journal of Education and Praxis (JEPS)**, sebuah jurnal ilmiah akses terbuka yang diterbitkan oleh **Penerbit Sakata Cendekia**. 

Proyek ini dibangun untuk menggantikan tampilan standar bawaan Open Journal Systems (OJS) dengan antarmuka yang lebih modern, cepat (berbasis SPA - *Single Page Application*), dan ramah seluler (*mobile-friendly*), sambil tetap menarik data publikasi secara *real-time* dari *backend* OJS melalui REST API.

## 🎨 Tema & Desain
Website ini mengusung tema **Warm and Earthy Minimal** yang dirancang khusus untuk memberikan kenyamanan membaca literatur akademik dalam durasi panjang:
*   **Background:** `#FAF9F6` (Alabaster / Warm White)
*   **Secondary:** `#E6E1DA` (Soft Greige)
*   **Text & Anchors:** `#222222` (Deep Charcoal)
*   **Accent:** `#C07F63` (Terracotta)

## 🛠️ Teknologi yang Digunakan
*   **Framework:** [React JS](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/) (Super cepat untuk *development* dan *bundling*)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Routing:** [React Router v6](https://reactrouter.com/)
*   **HTTP Client:** [Axios](https://axios-http.com/) (Untuk mengambil data dari OJS REST API)
*   **Icons:** [Lucide React](https://lucide.dev/)

## 📑 Struktur Halaman
1.  **Homepage (`/`)**: Hero section, statistik jurnal, pratinjau edisi terkini, dan *Call for Papers*.
2.  **About (`/about`)**: Informasi jurnal, *Focus and Scope*, Kebijakan *Open Access*, dan *Peer Review*.
3.  **Current Issue (`/current`)**: Daftar lengkap artikel pada edisi/volume terbaru yang sedang berjalan.
4.  **Archives (`/archives`)**: Direktori seluruh edisi jurnal lampau.
5.  **Article Detail (`/article/:id`)**: Halaman khusus untuk membaca abstrak, metadata artikel, dan fitur *How to Cite* terintegrasi.
6.  **Editorial Team (`/editorial`)**: Susunan dewan redaksi JEPS.
7.  **Author Guidelines (`/guidelines`)**: Panduan penulisan naskah, APC, dan tombol unduh *Template* Artikel (.docx).
8.  **Publication Process (`/process`)**: Alur visual (*timeline*) proses penerbitan naskah dari tahap *submission* hingga terbit.
9.  **Privacy Statement (`/privacy`)**: Kebijakan perlindungan data penulis dan pengguna.
10. **Contact (`/contact`)**: Informasi alamat surel dan lokasi Penerbit Sakata Cendekia.

## 🚀 Panduan Instalasi & Pengembangan

### 1. Kebutuhan Sistem (Prerequisites)
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru) dan `npm` di komputer Anda.

### 2. Kloning Repositori
```bash
git clone https://github.com/username-anda/jeps-frontend.git
cd jeps-frontend
```

### 3. Instalasi Dependencies
```bash
npm install
```

### 4. Konfigurasi Environment Variables
Buat sebuah file bernama `.env` di *root folder* proyek (sejajar dengan `package.json`), lalu tambahkan URL API OJS Anda:
```env
VITE_OJS_API_URL=https://jeps.j-psc.com/index.php/jeps/api/v1
```

### 5. Jalankan Server Development
```bash
npm run dev
```
Buka browser Anda dan akses `http://localhost:5173` untuk melihat hasilnya.

## 🔗 Integrasi dengan OJS REST API
Karena *frontend* React dan *backend* OJS berjalan di sistem atau domain yang terpisah, Anda **WAJIB** mengatur kebijakan CORS (*Cross-Origin Resource Sharing*) pada server OJS Anda agar React diizinkan untuk menarik data (menghindari error `CORS policy`).

Hubungi administrator server OJS Anda untuk menambahkan konfigurasi *header* yang mengizinkan *origin* domain *frontend* ini.

## 📦 Panduan Deployment (Build)
Untuk memublikasikan website ini ke *production* (misalnya di Vercel, Hostinger, atau layanan *hosting* lainnya), jalankan perintah:
```bash
npm run build
```
Perintah ini akan menghasilkan folder `dist/` yang berisi file HTML, CSS, dan JS statis yang sudah dioptimasi. Anda tinggal mengunggah folder `dist/` tersebut ke *hosting* Anda.

**Catatan untuk SPA Hosting:**
Pastikan server/hosting Anda diarahkan untuk selalu mengembalikan file `index.html` untuk setiap rute yang diminta (konfigurasi *rewrite rules*) agar `react-router-dom` dapat bekerja dengan benar.

---
**© 2026 Penerbit Sakata Cendekia.** Didedikasikan untuk memajukan pendidikan melalui publikasi ilmiah yang berkualitas.