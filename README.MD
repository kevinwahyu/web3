## Deskripsi

Proyek ini adalah situs modifikasi untuk SMK Negeri 1 Cerme, sebuah sekolah menengah kejuruan di Indonesia. Situs web ini dirancang untuk memberikan informasi lengkap tentang sekolah, termasuk program akademik, berita terkini, galeri, staf, dan informasi kontak. Dengan antarmuka yang responsif dan modern, situs ini memanfaatkan teknologi web terkini untuk memastikan pengalaman pengguna yang optimal di berbagai perangkat.

Situs web ini mencakup beberapa halaman utama:

- **Home**: Halaman utama dengan carousel hero, berita terbaru, dan navigasi.
- **About**: Informasi tentang sejarah sekolah, visi, misi, dan program-program yang ditawarkan.
- **Academics**: Detail lengkap tentang berbagai jurusan seperti Teknik Instalasi Tenaga Listrik, Teknik Komputer dan Jaringan, dan lainnya.
- **Contact**: Formulir kontak dengan integrasi Google Maps dan reCAPTCHA untuk keamanan.

Proyek ini dibangun menggunakan HTML, CSS, dan Bootstrap untuk desain responsif, serta integrasi dengan Google Maps API untuk peta lokasi dan reCAPTCHA API untuk validasi formulir.

## Fitur

- **Desain Responsif**: Menggunakan Bootstrap untuk memastikan kompatibilitas di desktop, tablet, dan mobile.
- **Navigasi Dinamis**: Navbar dengan efek scroll dan dropdown untuk menu akademik.
- **Integrasi Google Maps**: Menampilkan lokasi sekolah secara interaktif pada halaman Contact.
- **Formulir Kontak Aman**: Menggunakan reCAPTCHA untuk mencegah spam dan bot.
- **Konten Statis**: Halaman-halaman dengan informasi sekolah yang mudah diakses dan diperbarui.
- **Footer Informatif**: Berisi tautan cepat, informasi kontak, dan tautan media sosial.

## Teknologi yang Digunakan

- **HTML5**: Struktur dasar halaman web.
- **CSS3**: Styling kustom untuk tampilan yang menarik.
- **Bootstrap 5**: Framework CSS untuk desain responsif dan komponen UI.
- **Google Maps API**: Untuk menampilkan peta lokasi sekolah.
- **reCAPTCHA API**: Untuk validasi formulir kontak dan pencegahan spam.
- **JavaScript**: Untuk interaktivitas, seperti efek scroll navbar dan inisialisasi peta.

## Instalasi

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1. **Kloning Repositori**:

   ```
   git clone https://github.com/kevinwahyu/web3.git
   cd smk-cerme-website
   ```

2. **Persiapan File**:

   - Pastikan semua file HTML, CSS, dan JavaScript berada di direktori yang benar.
   - Unduh dan sertakan file Bootstrap dari CDN atau folder lokal (seperti yang ada di `bootstrap/`).

3. **Konfigurasi API Keys**:

   - **Google Maps API**: Dapatkan API key dari [Google Cloud Console](https://console.cloud.google.com/). Ganti placeholder `ISI_DENGAN_API_KEY_KAMU` di file `contact.html` dengan API key Anda.
   - **reCAPTCHA API**: Dapatkan site key dan secret key dari [Google reCAPTCHA](https://www.google.com/recaptcha/admin). Ganti placeholder `ISI_DENGAN_SITE_KEY_KAMU` di file `contact.html` dengan site key Anda. Untuk backend (jika ada), konfigurasikan secret key di `reCAPTCHA/index.php`.

4. **Jalankan Server Lokal**:
   - Gunakan ekstensi Live Server di Visual Studio Code, atau jalankan server sederhana dengan Python:
     ```
     python -m http.server 8000
     ```
   - Buka browser dan akses `http://localhost:8000` untuk melihat situs web.

## Penggunaan

1. **Navigasi Situs**: Gunakan navbar untuk berpindah antar halaman. Pada halaman Academics, klik dropdown untuk melompat ke bagian jurusan tertentu.
2. **Formulir Kontak**: Di halaman Contact, isi formulir dan selesaikan reCAPTCHA sebelum mengirim. Pesan akan diproses oleh backend (jika dikonfigurasi).
3. **Peta Lokasi**: Pada halaman Contact, peta Google Maps akan menampilkan lokasi sekolah secara otomatis setelah API key dikonfigurasi.
4. **Kustomisasi**: Edit file HTML dan CSS untuk menambahkan konten baru atau mengubah desain. Pastikan untuk memperbarui path gambar dan tautan sesuai kebutuhan.

## Lisensi

Proyek ini dilisensikan di bawah [KevinWahyu](LICENSE). Anda bebas menggunakan, memodifikasi, dan mendistribusikan kode ini dengan syarat menyertakan atribusi asli.

## Kontribusi

Kontribusi sangat diterima! Jika Anda ingin berkontribusi:

1. Fork repositori ini.
2. Buat branch baru untuk fitur atau perbaikan Anda.
3. Lakukan commit perubahan.
4. Buat pull request dengan deskripsi yang jelas.

Untuk pertanyaan atau dukungan, silakan hubungi tim pengembang melalui email di lorem@gmail.com.

---

**Catatan**: Pastikan untuk mengganti placeholder API keys dengan keys yang valid sebelum men-deploy situs ke production untuk menghindari error. Jika Anda mengalami masalah dengan integrasi API, periksa dokumentasi resmi Google untuk panduan lebih lanjut.
