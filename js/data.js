/**
 * SERJAFAN - Centralized Configuration & Data Source
 * Official Contact & Services Data
 */

export const CONFIG = {
  appName: "SERJAFAN",
  tagline: "Butuh Jasa? SERJAFAN Aja!",
  subtagline: "Semua kebutuhan jasa, lebih mudah dalam satu tempat.",
  location: "Kota Padang, Sumatera Barat",
  whatsappNumber: "6283813045178", // Format Internasional (+6283813045178)
  whatsappDisplay: "083813045178",
  instagramUsername: "serba_jasa_fan",
  instagramUrl: "https://instagram.com/serba_jasa_fan",
  minPrice: 3000,
  domain: "serjafan.com"
};

export const POPULAR_SERVICES = [
  {
    id: "mengetik-populer",
    title: "Jasa Mengetik",
    icon: "⌨️",
    badge: "Mulai Rp3.000/halaman",
    startingPrice: 3000,
    unit: "halaman",
    desc: "Ketik teks biasa, tulisan tangan, foto/scan, transkrip audio dengan format rapi.",
    category: "mengetik",
    serviceKey: "Jasa Mengetik"
  },
  {
    id: "ppt-populer",
    title: "Jasa PowerPoint",
    icon: "📊",
    badge: "Mulai Rp5.000/slide",
    startingPrice: 5000,
    unit: "slide",
    desc: "Desain presentasi menarik, visual modern, infografis & animasi siap presentasi.",
    category: "powerpoint",
    serviceKey: "Jasa PowerPoint"
  },
  {
    id: "tugas-sd-populer",
    title: "Bantuan Tugas SD",
    icon: "📚",
    badge: "Mulai Rp15.000/tugas",
    startingPrice: 15000,
    unit: "tugas",
    desc: "Bantuan belajar dan penyelesaian tugas sekolah dasar untuk berbagai mata pelajaran.",
    category: "pendidikan",
    serviceKey: "Bantuan Tugas SD"
  },
  {
    id: "tugas-smp-populer",
    title: "Bantuan Tugas SMP",
    icon: "📖",
    badge: "Mulai Rp20.000/tugas",
    startingPrice: 20000,
    unit: "tugas",
    desc: "Bimbingan dan pengerjaan tugas tingkat SMP dengan penjelasan yang mudah dipahami.",
    category: "pendidikan",
    serviceKey: "Bantuan Tugas SMP"
  },
  {
    id: "tugas-sma-populer",
    title: "Bantuan Tugas SMA/SMK",
    icon: "🎓",
    badge: "Mulai Rp25.000/tugas",
    startingPrice: 25000,
    unit: "tugas",
    desc: "Penyelesaian tugas SMA/SMK meliputi eksakta, sosial, akuntansi, dan pemrograman dasar.",
    category: "pendidikan",
    serviceKey: "Bantuan Tugas SMA/SMK"
  },
  {
    id: "tugas-kuliah-populer",
    title: "Bantuan Akademik Kuliah",
    icon: "🎓",
    badge: "Mulai Rp35.000/tugas",
    startingPrice: 35000,
    unit: "tugas",
    desc: "Review materi, pengolahan data Excel dasar, statistik dasar, dan pemrograman pengantar.",
    category: "pendidikan",
    serviceKey: "Bantuan Akademik Kuliah"
  }
];

export const ALL_SERVICES = [
  {
    id: "jasa-mengetik",
    title: "Jasa Mengetik",
    category: "mengetik",
    categoryLabel: "Mengetik",
    icon: "⌨️",
    summary: "Pengetikan dokumen dengan format rapi dan sesuai kebutuhan Anda.",
    startFrom: 3000,
    items: [
      { name: "Ketik teks biasa", price: "Rp3.000", unit: "halaman", note: "Format standar dokumen" },
      { name: "Ketik tulisan tangan", price: "Rp5.000", unit: "halaman", note: "Catatan/buku tulisan tangan" },
      { name: "Ketik dari foto/scan", price: "Rp4.000", unit: "halaman", note: "Foto jelas/dokumen fisik" },
      { name: "Ketik + format Word", price: "Rp6.000", unit: "halaman", note: "Margin, font & spacing rapi" },
      { name: "PDF → Word", price: "Rp4.000", unit: "halaman", note: "Konversi & perapihan tata letak" },
      { name: "Transkrip audio", price: "Rp10.000", unit: "10 menit", note: "Rekaman suara/wawancara" }
    ],
    buttonText: "Pesan Jasa Mengetik",
    serviceKey: "Jasa Mengetik"
  },
  {
    id: "jasa-powerpoint",
    title: "Jasa PowerPoint",
    category: "powerpoint",
    categoryLabel: "PowerPoint",
    icon: "📊",
    summary: "Pembuatan slide presentasi modern, estetik, dan komunikatif.",
    startFrom: 5000,
    items: [
      { name: "PPT Basic", price: "Rp5.000", unit: "slide", note: "Desain clean & terstruktur" },
      { name: "PPT Standard", price: "Rp8.000", unit: "slide", note: "Desain visual + icon modern" },
      { name: "PPT Premium", price: "Rp12.000", unit: "slide", note: "Custom animasi & infografis" },
      { name: "Cover PPT", price: "Rp15.000", unit: "desain", note: "Desain judul eksklusif" },
      { name: "Revisi minor", price: "Gratis 1×", unit: "revisi", note: "Perubahan teks/warna minor" },
      { name: "Revisi tambahan", price: "Rp10.000", unit: "revisi", note: "Perubahan tata letak besar" }
    ],
    buttonText: "Pesan PowerPoint",
    serviceKey: "Jasa PowerPoint"
  },
  {
    id: "bantuan-tugas-sd",
    title: "Bantuan Tugas SD",
    category: "pendidikan",
    categoryLabel: "Pendidikan",
    icon: "📚",
    summary: "Bantuan belajar dan tugas sekolah dasar semua mata pelajaran.",
    startFrom: 15000,
    items: [
      { name: "Ringan", price: "Rp15.000", unit: "tugas", note: "Tugas ringkas 1-5 soal" },
      { name: "Sedang", price: "Rp25.000", unit: "tugas", note: "Tugas lembar kerja / rangkuman" },
      { name: "Kompleks", price: "Rp40.000", unit: "tugas", note: "Proyek / materi tematik lengkap" }
    ],
    buttonText: "Pesan Bantuan Tugas SD",
    serviceKey: "Bantuan Tugas SD"
  },
  {
    id: "bantuan-tugas-smp",
    title: "Bantuan Tugas SMP",
    category: "pendidikan",
    categoryLabel: "Pendidikan",
    icon: "📖",
    summary: "Bimbingan tugas SMP untuk Matematika, IPA, IPS, Bahasa, dan lainnya.",
    startFrom: 20000,
    items: [
      { name: "Ringan", price: "Rp20.000", unit: "tugas", note: "Tugas soal singkat / PR harian" },
      { name: "Sedang", price: "Rp35.000", unit: "tugas", note: "Makalah mini / analisis bacaan" },
      { name: "Kompleks", price: "Rp50.000", unit: "tugas", note: "Tugas proyek / soal bertingkat" }
    ],
    buttonText: "Pesan Bantuan Tugas SMP",
    serviceKey: "Bantuan Tugas SMP"
  },
  {
    id: "bantuan-tugas-sma",
    title: "Bantuan Tugas SMA / SMK",
    category: "pendidikan",
    categoryLabel: "Pendidikan",
    icon: "🎓",
    summary: "Penyelesaian tugas SMA/SMK rumpun IPA, IPS, Bahasa, dan Kejuruan.",
    startFrom: 25000,
    items: [
      { name: "Ringan", price: "Rp25.000", unit: "tugas", note: "Latihan soal / lembar kerja" },
      { name: "Sedang", price: "Rp40.000", unit: "tugas", note: "Makalah / resume materi" },
      { name: "Kompleks", price: "Rp60.000", unit: "tugas", note: "Laporan praktikum / analisis" },
      { name: "Akuntansi dasar", price: "Rp35.000", unit: "tugas", note: "Jurnal & buku besar sederhana" },
      { name: "Pemrograman dasar", price: "Rp40.000", unit: "tugas", note: "Logika coding dasar / HTML / C++" }
    ],
    buttonText: "Pesan Bantuan Tugas SMA/SMK",
    serviceKey: "Bantuan Tugas SMA/SMK"
  },
  {
    id: "bantuan-akademik-kuliah",
    title: "Bantuan Akademik Kuliah",
    category: "pendidikan",
    categoryLabel: "Pendidikan",
    icon: "🎓",
    summary: "Dukungan akademik tugas kuliah, pengolahan data, dan format dokumen.",
    startFrom: 35000,
    items: [
      { name: "Tugas ringan", price: "Rp35.000", unit: "tugas", note: "Resume jurnal / essay pendek" },
      { name: "Tugas sedang", price: "Rp50.000", unit: "tugas", note: "Makalah terstruktur & review" },
      { name: "Tugas kompleks", price: "Rp75.000", unit: "tugas", note: "Analisis studi kasus & laporan" },
      { name: "Excel dasar", price: "Rp25.000", unit: "pekerjaan", note: "Formula & tabel data dasar" },
      { name: "Statistik dasar", price: "Rp40.000", unit: "tugas", note: "Deskriptif, mean, grafik data" },
      { name: "Pemrograman dasar", price: "Rp50.000", unit: "tugas", note: "Tugas coding pengantar / algoritma" }
    ],
    buttonText: "Pesan Bantuan Akademik",
    serviceKey: "Bantuan Akademik Kuliah"
  },
  {
    id: "jasa-dokumen",
    title: "Jasa Dokumen",
    category: "dokumen",
    categoryLabel: "Dokumen",
    icon: "📄",
    summary: "Perapihan format dokumen Word, pembuatan daftar isi, dan layout rapi.",
    startFrom: 10000,
    items: [
      { name: "Format Word", price: "Rp10.000", unit: "dokumen", note: "Perapihan margin, style & heading" },
      { name: "Daftar isi otomatis", price: "Rp15.000", unit: "dokumen", note: "TOC, daftar tabel & gambar otomatis" },
      { name: "Tabel sederhana", price: "Rp15.000", unit: "tabel", note: "Penyusunan & penataan tabel data" }
    ],
    buttonText: "Pesan Jasa Dokumen",
    serviceKey: "Jasa Dokumen"
  },
  {
    id: "jasa-excel",
    title: "Jasa Excel",
    category: "excel",
    categoryLabel: "Excel",
    icon: "📈",
    summary: "Penyusunan spreadsheet, perapihan data tabel, dan rumus dasar.",
    startFrom: 25000,
    items: [
      { name: "Excel sederhana", price: "Rp25.000", unit: "file", note: "Formula SUM/AVERAGE/IF & formatting" }
    ],
    buttonText: "Pesan Jasa Excel",
    serviceKey: "Jasa Excel"
  },
  {
    id: "jasa-desain",
    title: "Jasa Desain",
    category: "desain",
    categoryLabel: "Desain",
    icon: "🎨",
    summary: "Desain visual menarik untuk cover tugas, poster promosi, dan flyer.",
    startFrom: 10000,
    items: [
      { name: "Cover tugas", price: "Rp10.000", unit: "desain", note: "Cover tugas / makalah estetik" },
      { name: "Poster/Flyer", price: "Rp25.000", unit: "desain", note: "Poster edukasi, event, atau UMKM" }
    ],
    buttonText: "Pesan Jasa Desain",
    serviceKey: "Jasa Desain"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Apakah harga bisa berubah?",
    answer: "Harga yang ditampilkan merupakan harga mulai. Harga final dikonfirmasi berdasarkan detail pekerjaan seperti jumlah halaman, jumlah soal, tingkat kesulitan, dan deadline yang Anda minta."
  },
  {
    question: "Bagaimana cara memesan?",
    answer: "Pilih layanan yang Anda butuhkan, kemudian klik tombol 'Pesan Sekarang' atau 'Pesan via WhatsApp'. Anda akan langsung diarahkan ke WhatsApp resmi SERJAFAN dengan template pesan otomatis."
  },
  {
    question: "Apakah bisa mengirim file?",
    answer: "Ya, sangat bisa! Detail instruksi, foto catatan, file Word, PDF, rekaman suara, atau materi pendukung dapat dikirimkan langsung melalui chat WhatsApp kami."
  },
  {
    question: "Apakah ada layanan express?",
    answer: "Ya, tersedia layanan express untuk kebutuhan mendesak: tambahan +30% untuk deadline < 24 jam dan +50% untuk deadline < 6 jam (dihitung dari harga normal setelah detail dikonfirmasi)."
  },
  {
    question: "Apakah SERJAFAN melayani Kota Padang?",
    answer: "Ya! SERJAFAN fokus melayani kebutuhan pelajar, mahasiswa, dan masyarakat umum di Kota Padang, Sumatera Barat, serta dapat melayani pemesanan digital secara online."
  },
  {
    question: "Apakah SERJAFAN melayani skripsi?",
    answer: "Belum. SERJAFAN saat ini belum melayani penelitian, skripsi, dan sidang demi menjaga integritas akademik. Kami hanya membantu pengetikan, formatting, review materi, dan tugas latihan yang diperbolehkan."
  }
];

export const TERMS_CONDITIONS = [
  "Harga yang tertera merupakan harga mulai (start from).",
  "Harga final dikonfirmasi dan disepakati sebelum pengerjaan dimulai.",
  "Harga dapat menyesuaikan tingkat kesulitan dan volume materi.",
  "Deadline express memiliki biaya tambahan (+30% <24 jam, +50% <6 jam).",
  "Revisi mengikuti ketentuan masing-masing layanan (gratis 1x revisi minor).",
  "File dan identitas pelanggan dijamin 100% kerahasiaannya.",
  "Pelanggan wajib memberikan instruksi, materi, dan file yang jelas.",
  "Waktu pengerjaan menyesuaikan antrean dan tingkat kesulitan materi.",
  "Layanan pendidikan ditujukan untuk bantuan belajar, pengetikan, review, format, pengolahan materi/data, dan bantuan tugas yang diperbolehkan.",
  "SERJAFAN belum melayani penelitian, skripsi, dan sidang tugas akhir.",
  "SERJAFAN tidak melayani ujian atau menggantikan pelanggan dalam pekerjaan yang wajib dikerjakan secara mandiri."
];
