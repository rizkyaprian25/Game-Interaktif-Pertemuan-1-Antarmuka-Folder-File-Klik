# Prompt: Game Interaktif Pertemuan 1 — Antarmuka, Folder & File

Konteks realistis dulu: dengan 39 siswa dan 1 laptop, kalau tiap siswa maju satu-satu pegang laptop, jatahnya sekitar **2 menit/siswa**. 39 siswa x 2 menit = 78 menit hanya untuk giliran — jadi ini praktis akan memakan HAMPIR SELURUH waktu kegiatan inti (60 menit) dan bahkan lebih. Supaya tetap muat, game harus didesain sebagai **1 tantangan super singkat, padat, dan self-contained per siswa** (bukan babak berjenjang yang harus diselesaikan berurutan oleh 1 orang), dan siswa yang belum maju harus tetap terlibat aktif (menonton di layar + mengisi lembar prediksi/skor) supaya kelas tidak ribut menunggu.

Berikut prompt siap pakai (bisa kamu tempel ke Claude/AI lain untuk generate gamenya sebagai file HTML satu-file):

---

## PROMPT

Buatkan saya sebuah game edukasi interaktif berbasis HTML/CSS/JavaScript (satu file, tanpa dependency eksternal, jalan offline di browser) untuk kelas Informatika SMP Kelas 7, dengan spesifikasi berikut:

**Judul tema**: "Misi Detektif Digital: Rapikan Markas Data"

**Tujuan pembelajaran yang harus tercapai**:
1. Siswa mampu mengenali objek-objek pada antarmuka pengguna grafis (GUI) — ikon, jendela, taskbar, tombol.
2. Siswa mampu memahami konsep dan urutan logis mengelola folder & file: membuat, menyalin, memindah, mengubah nama, menghapus.

**Kondisi kelas (WAJIB disesuaikan dengan ini)**:
- 39 siswa, MAJU SATU PER SATU secara individual ke depan memegang laptop (bukan berkelompok).
- Setiap siswa hanya dapat jatah **maksimal 2 menit** memegang laptop — jadi setiap sesi/ronde permainan harus bisa TUNTAS dalam waktu itu (idealnya cukup untuk 3-5 tantangan cepat, bukan 4 babak panjang).
- Hanya ADA 1 laptop, ditampilkan lewat proyektor ke seluruh kelas, jadi 38 siswa lain yang belum giliran harus tetap menonton layar besar sambil ikut terlibat (bukan cuma diam nunggu).
- Total waktu tersedia 90-100 menit, dan game ini HANYA untuk sesi "Kegiatan Inti"; realistanya guru TIDAK BISA memberi giliran ke 39 siswa satu-satu dalam satu pertemuan (78 menit hanya utk giliran + belum termasuk transisi antar siswa). Maka bangun game dengan opsi mode ganda:
  - **Mode "Kontestan Kilat"**: dipanggil hanya sebagian siswa secara acak/undian tiap pertemuan (misal 10-12 orang random per sesi, sisanya dapat giliran di pertemuan berikutnya/sesi lain) — ini mode utama yang realistis untuk 1x pertemuan.
  - **Mode "Tonton & Tebak"** untuk siswa yang belum giliran: sebelum kontestan di depan menjawab, seluruh kelas (dari bangku) ikut menebak jawaban di kertas kecil/angkat tangan, lalu dicocokkan — supaya tetap aktif berpikir walau tidak pegang laptop.
- Siswa masih sangat awam dengan laptop, jadi visual harus besar, jelas, warna kontras tinggi, teks minim, ikon familiar (folder, file, tempat sampah, dsb mirip Windows/File Explorer asli), dan interaksi harus SANGAT sederhana (klik besar / drag simpel) supaya bisa selesai dalam 2 menit walau siswa gugup/baru pertama pegang laptop.

**Mekanika game yang diinginkan**:
- Format "hot seat" bergilir: satu papan judul berisi nama siswa yang sedang giliran + timer countdown 2 menit besar di layar (terlihat jelas dari belakang kelas), dengan bunyi/visual peringatan saat waktu hampir habis.
- Tiap giliran berisi 3-5 tantangan SANGAT singkat & acak (random dari bank soal) yang mewakili keempat sub-materi, contoh:
  - 1 soal kenali ikon/elemen GUI (klik pilihan gambar besar).
  - 1 tantangan simulasi "Buat folder baru & beri nama" (klik tombol, ketik nama, cukup 1 aksi).
  - 1 tantangan simulasi "Pindahkan/salin file ke folder yang benar" (drag-and-drop simpel, 1 file saja).
  - 1 tantangan simulasi "Hapus file yang benar" (dengan 1 jebakan file penting agar melatih ketelitian, bukan asal klik).
- Skor personal siswa itu ditampilkan singkat di akhir giliran (mis. "3 dari 4 benar!") lalu otomatis pindah ke nama siswa berikutnya — TANPA jeda panjang, supaya transisi antar siswa cepat.
- Sediakan halaman "Papan Nama Antrian" yang menampilkan urutan/daftar siswa yang akan maju (hasil undian acak guru sebelumnya, guru tinggal input nama-nama), plus penanda siapa yang sudah/belum dapat giliran.
- Tambahkan panel kecil di layar berisi pertanyaan tebak-tebakan untuk siswa yang menonton dari bangku (opsional guru tampilkan), supaya kelas tetap terlibat saat menunggu.
- Sediakan tombol "Guru: Mulai Giliran / Lewati / Ulangi" untuk kontrol penuh guru atas alur, karena guru yang mengatur siapa maju berikutnya.

**Batasan teknis**:
- HTML tunggal, CSS & JS inline, tanpa perlu internet, tanpa localStorage (state cukup di variabel JS selama sesi).
- Desain kontras tinggi, font besar (minimal 20px untuk soal, lebih besar untuk mode proyektor), warna ramah anak tapi tidak norak.
- Tambahkan halaman "Papan Skor" yang bisa ditampilkan kapan saja guru mau.
- Sertakan 12-15 soal/tantangan total, terbagi rata ke tiap babak.

Setelah game jadi, tolong beri saya juga **panduan singkat cara memandu (fasilitasi) permainan ini di kelas**: berapa siswa realistis yang bisa dapat giliran dalam ~50-60 menit (dengan asumsi 2 menit/siswa + transisi), cara memilih kontestan secara adil (undian), dan cara menjaga 38 siswa lain tetap terlibat & tidak ribut saat menunggu giliran.

---

## Catatan tambahan dari saya (di luar prompt di atas)

Hitungan realistis: 2 menit x 39 siswa = 78 menit HANYA untuk giliran, belum termasuk transisi bolak-balik ke depan kelas (bisa +10-15 menit lagi). Itu sudah melebihi seluruh waktu pertemuan. Jadi dalam 1x pertemuan ini, paling realistis hanya **±15-18 siswa** yang bisa kebagian pegang laptop langsung (dengan asumsi transisi cepat ~30 detik/siswa). Sisanya:
- Bisa diundi lagi di awal Pertemuan 2 (siswa yang belum kebagian, diprioritaskan duluan) — jadi "utang giliran" tercatat, bukan hilang.
- Atau dibuat sesi tambahan di jam istirahat/luar jam pelajaran secara sukarela.

Supaya **semua** siswa tetap aktif "mengelola folder" dengan tangan meski tidak semua kebagian laptop, tambahkan aktivitas unplugged paralel:
- Bagikan kertas berbentuk folder & file (potongan kertas warna) ke tiap siswa/meja.
- Selagi menunggu giliran, siswa menyusun "struktur folder" di atas meja sesuai instruksi lisan guru (mis. "buat folder Tugas, taruh file Matematika & IPA, lalu pindahkan file IPA ke folder baru bernama Ulangan").
- Ini melatih logika folder/file secara fisik untuk SEMUA siswa, sementara giliran laptop di depan jadi puncak/kompetisi yang seru dan jadi sarana asesmen formatif guru.

Kalau kamu mau, aku bisa langsung buatkan game HTML-nya sekarang (bukan cuma promptnya) — mau aku eksekusi?
