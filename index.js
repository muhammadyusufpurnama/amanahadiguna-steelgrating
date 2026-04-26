const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PT. Amanah Adi Guna | Infrastruktur Baja Hilir</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link rel="icon" type="image/png" href="/logo amanah adi guna.png">
        <style>
            html {
                scroll-behavior: smooth;
            }
            .grating-slides {
                transition: opacity 1000ms ease-in-out;
            }
            body {
                font-family: 'Montserrat', 'Rajdhani', sans-serif;
            }
            h1, h2, h3, h4, h5, .font-industrial {
                font-family: 'Rajdhani', 'Montserrat', sans-serif;
                font-weight: 700;
                letter-spacing: 0.5px;
            }
            .industrial-text {
                font-family: 'Rajdhani', monospace;
                font-weight: 600;
                letter-spacing: 1px;
            }
            .bg-manufacture { background-color: #0F3B2C; }
            .bg-manufacture-dark { background-color: #0A2A1F; }
            .bg-manufacture-light { background-color: #1A5A44; }
            .bg-industrial { background-color: #1B4D3E; }
            .text-manufacture { color: #0F3B2C; }
            .border-manufacture { border-color: #0F3B2C; }
            .hover\\:bg-manufacture:hover { background-color: #1A5A44; }
            .industrial-pattern {
                background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A5A44' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            }
            .calculator-card {
                transition: all 0.3s ease;
            }
            .calculator-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
            }
            .price-result {
                background: linear-gradient(135deg, #0F3B2C 0%, #1A5A44 100%);
            }
            input, select {
                transition: all 0.2s ease;
            }
            input:focus, select:focus {
                border-color: #0F3B2C;
                ring: 2px solid #0F3B2C;
            }
            .cart-item {
                transition: all 0.3s ease;
            }
            .cart-item:hover {
                background-color: #f0fdf4;
            }
        </style>
    </head>
    <body class="bg-slate-50 text-slate-900 font-sans industrial-pattern">

        <nav class="fixed w-full z-50 bg-emerald-900/70 backdrop-blur-xl border-b border-emerald-700/50 shadow-2xl">
            <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div class="flex items-center space-x-3">
                    <img src="/logo amanah adi guna.png" alt="Logo PT Amanah Adi Guna" class="h-10 w-auto">
                    <div class="text-xl font-bold text-white tracking-tight text-nowrap industrial-text">
                        AMANAH ADI GUNA
                    </div>
                </div>

                <div class="hidden md:flex space-x-8 font-medium text-white/90">
                    <a href="#home" class="hover:text-white transition-colors duration-300">Beranda</a>
                    <a href="#about" class="hover:text-white transition-colors duration-300">Tentang Kami</a>
                    <a href="#produk" class="hover:text-white transition-colors duration-300">Produk</a>
                    <a href="#calculator" class="hover:text-white transition-colors duration-300">Kalkulator Estimasi</a>
                    <a href="#whyus" class="hover:text-white transition-colors duration-300">Keunggulan</a>
                </div>
            </div>
        </nav>


        <section id="home" class="pt-32 pb-20 px-6 bg-gradient-to-br from-[#0A2A1F] to-[#1A5A44] text-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <h1 class="text-4xl md:text-6xl font-black leading-tight mb-6 industrial-text">
                        Mitra Strategis Pembangunan <span class="text-emerald-300">Infrastruktur Baja</span> Nasional.
                    </h1>
                    <p class="text-lg text-emerald-100 mb-8 max-w-md">
                        Menghadirkan solusi baja hilir kelas dunia dengan komitmen teguh terhadap kualitas, integritas struktural, dan keandalan.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#about" class="bg-white text-manufacture px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition shadow-lg industrial-text">Pelajari Selengkapnya</a>
                        <a href="#contact" class="border-2 border-white/30 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition industrial-text">Hubungi Kami</a>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <div class="relative w-full max-w-md aspect-video bg-slate-800 rounded-lg shadow-2xl border-2 border-emerald-700 flex items-center justify-center overflow-hidden">
                        <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        <span class="text-emerald-300 font-mono text-sm uppercase tracking-widest industrial-text">Amanah Adi Guna Steel</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-manufacture font-bold tracking-widest uppercase text-sm mb-4 industrial-text">Tentang Kami</h2>
                        <h3 class="text-3xl md:text-4xl font-black mb-6 text-slate-800 leading-snug industrial-text">Berdedikasi dalam Penyediaan Material Baja Sejak 2024</h3>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Berdiri pada tanggal 08 Agustus 2024 di Kota Gresik, Jawa Timur, PT. Amanah Adi Guna berspesialisasi dalam penyediaan material infrastruktur baja hilir.
                        </p>
                        <p class="text-slate-600 mb-8 leading-relaxed">
                            Misi kami adalah menjadi mitra strategis pembangunan nasional yang menghadirkan solusi infrastruktur baja kelas dunia melalui komitmen terhadap integritas struktural, 
                            keamanan jalan, dan keberlanjutan lingkungan.
                        </p>
                        <div class="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                            <div>
                                <h4 class="font-black text-manufacture industrial-text">Legalitas Terjamin</h4>
                                <p class="text-sm text-slate-500">Terdaftar resmi di AHU & NIB sejak Agustus 2024.</p>
                            </div>
                            <div>
                                <h4 class="font-black text-manufacture industrial-text">Lokasi Strategis</h4>
                                <p class="text-sm text-slate-500">Berada dipusat wilayah Gresik.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border-2 border-emerald-200 shadow-xl">
                        <h4 class="text-xl font-black mb-6 text-manufacture industrial-text">Informasi Legalitas</h4>
                        <ul class="space-y-4 text-slate-700">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-emerald-600 mt-1 mr-3 text-lg"></i>
                                <span><strong class="industrial-text">Akta Pendirian:</strong> AHU-045746.AH.01.30.Tahun 2024</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-emerald-600 mt-1 mr-3 text-lg"></i>
                                <span><strong class="industrial-text">NIB:</strong> 2208240036555</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-emerald-600 mt-1 mr-3 text-lg"></i>
                                <span><strong class="industrial-text">NPWP:</strong> 0125.7774.3364.2000</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl md:text-4xl font-black text-manufacture mb-4 industrial-text">Our Valued Clients</h2>
                <div class="w-20 h-1.5 bg-emerald-600 mx-auto mb-12 rounded-full"></div>
                
                <p class="text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Kami bangga telah menjalin kemitraan strategis dengan berbagai perusahaan terkemuka untuk mendukung pembangunan infrastruktur yang berkelanjutan.
                </p>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">
                    <div class="client-logo-wrapper p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl">
                        <img src="/pln nusantara power.png" alt="PLN Nusantara Power" class="max-h-16 w-auto object-contain">
                    </div>

                    <div class="client-logo-wrapper p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl">
                        <img src="/pln nusantara power services.png" alt="PLN Nusantara Power Services" class="max-h-16 w-auto object-contain">
                    </div>

                    <div class="client-logo-wrapper p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl">
                        <img src="/jacobis.png" alt="Jacobis" class="max-h-14 w-auto object-contain">
                    </div>

                    <div class="client-logo-wrapper p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl">
                        <img src="/espe.jpg" alt="ESPE" class="max-h-14 w-auto object-contain">
                    </div>
                </div>
            </div>
        </section>

        <section id="calculator" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-manufacture font-black tracking-widest uppercase text-sm mb-4 industrial-text">Estimasi Harga</h2>
                    <h3 class="text-3xl md:text-4xl font-black text-slate-900 industrial-text">Kalkulator Estimasi Biaya Material Baja</h3>
                    <div class="w-20 h-1.5 bg-emerald-600 mx-auto mt-4"></div>
                    <p class="text-slate-600 mt-6 max-w-2xl mx-auto">Pilih produk, tentukan ukuran dan berat, lalu tambahkan ke keranjang</p>
                    <p class="text-emerald-600 text-sm mt-2 font-semibold">* Harga dasar: Rp 75.000 per unit standar (dikalikan dengan koefisien ukuran & berat)</p>
                </div>

                <div class="max-w-6xl mx-auto bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-2xl overflow-hidden border-2 border-emerald-200">
                    <div class="bg-manufacture p-6">
                        <h4 class="text-white text-2xl font-black text-center industrial-text">
                            <i class="fas fa-calculator mr-3"></i> Kalkulator Estimasi Harga
                        </h4>
                    </div>
                    
                    <div class="p-8">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-manufacture font-bold mb-2 industrial-text">Pilih Jenis Produk</label>
                                <select id="product-type" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture bg-white font-semibold">
                                    <option value="grating">Steel Grating</option>
                                    <option value="pole">Pole / Tiang</option>
                                    <option value="guardrail">Guard Rail</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-manufacture font-bold mb-2 industrial-text">Pilih Ukuran</label>
                                <select id="product-size" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture bg-white">
                                    <option value="">Pilih Ukuran</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label class="block text-manufacture font-bold mb-2 industrial-text">Koefisien Ukuran</label>
                                <input type="number" id="size-coefficient" value="1" step="0.1" min="0.1" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture bg-white font-semibold">
                                <p class="text-xs text-slate-400 mt-1">Semakin besar ukuran, semakin besar koefisien (contoh: 1, 1.5, 2, dst)</p>
                            </div>
                            
                            <div>
                                <label class="block text-manufacture font-bold mb-2 industrial-text">Berat (kg)</label>
                                <input type="number" id="weight" value="1" step="0.5" min="0.5" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture bg-white font-semibold">
                                <p class="text-xs text-slate-400 mt-1">Masukkan berat material dalam kilogram</p>
                            </div>
                        </div>

                        <div class="mt-6">
                            <label class="block text-manufacture font-bold mb-2 industrial-text">Jumlah Unit</label>
                            <input type="number" id="quantity" value="1" min="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture bg-white font-semibold">
                        </div>

                        <div class="mt-6 bg-emerald-100 p-4 rounded-lg">
                            <p class="text-manufacture font-bold industrial-text">Informasi Harga:</p>
                            <p class="text-sm text-slate-700">Harga Dasar = Rp 75.000</p>
                            <p class="text-sm text-slate-700">Rumus: <strong class="font-black">Harga Dasar x Koefisien Ukuran x Berat (kg) x Jumlah Unit</strong></p>
                        </div>

                        <button onclick="addToCart()" class="w-full mt-6 bg-manufacture text-white py-3 rounded-lg font-black hover:bg-manufacture-light transition-all duration-300 shadow-lg industrial-text">
                            <i class="fas fa-cart-plus mr-2"></i> Tambahkan ke Keranjang
                        </button>

                        <div class="mt-8">
                            <h5 class="font-black text-manufacture text-lg mb-4 industrial-text">
                                <i class="fas fa-shopping-cart mr-2"></i> Keranjang Belanja Anda
                            </h5>
                            <div id="cart-items" class="space-y-2 max-h-64 overflow-y-auto mb-4">
                                <p class="text-slate-500 text-center py-4">Belum ada item di keranjang</p>
                            </div>
                            <div id="cart-total" class="text-right font-black text-manufacture text-xl hidden">
                                Total: Rp 0
                            </div>
                            <div class="flex gap-4 mt-4">
                                <button onclick="clearCart()" class="flex-1 bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition">
                                    <i class="fas fa-trash mr-2"></i> Kosongkan Keranjang
                                </button>
                                <button onclick="calculateTotalPrice()" class="flex-1 bg-manufacture text-white py-2 rounded-lg font-black hover:bg-manufacture-light transition shadow-lg industrial-text">
                                    <i class="fas fa-chart-line mr-2"></i> Hitung Total Estimasi
                                </button>
                            </div>
                        </div>

                        <div id="price-result" class="mt-8 price-result rounded-xl p-6 text-white hidden">
                            <h5 class="text-xl font-black mb-3 industrial-text text-center">
                                <i class="fas fa-file-invoice-dollar mr-2"></i> Estimasi Biaya
                            </h5>
                            <div class="space-y-2 text-center">
                                <p class="text-3xl font-black" id="total-price">Rp 0</p>
                                <p class="text-sm opacity-90" id="price-breakdown"></p>
                                <p class="text-xs opacity-75 mt-2">*Estimasi belum termasuk pajak dan pengiriman. Harga dapat berubah sewaktu-waktu.</p>
                            </div>
                            <div class="mt-4 flex justify-center">
                                <a href="https://wa.me/6281332222323?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20baja%20dari%20PT.%20Amanah%20Adi%20Guna%2C%20bisa%20minta%20info%20lebih%20lanjut%3F" 
                                   target="_blank" 
                                   class="bg-white text-manufacture px-6 py-2 rounded-lg font-bold hover:bg-emerald-50 transition inline-flex items-center">
                                    <i class="fab fa-whatsapp mr-2 text-[#25D366]"></i> Konsultasi via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="whyus" class="py-24 bg-gradient-to-br from-slate-900 to-manufacture text-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-emerald-300 font-black tracking-widest uppercase text-sm mb-4 industrial-text">Keunggulan Kami</h2>
                    <h3 class="text-3xl md:text-4xl font-black mb-6 industrial-text">Mengapa Memilih PT. Amanah Adi Guna?</h3>
                    <div class="w-20 h-1.5 bg-emerald-500 mx-auto"></div>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                        <div class="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                            <i class="fas fa-box-open text-2xl text-white"></i>
                        </div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Tanpa MOQ</h4>
                        <p class="text-emerald-100 leading-relaxed">
                            Tidak ada minimum order quantity. Kami melayani kebutuhan Anda berapapun jumlahnya, dari skala kecil hingga besar.
                        </p>
                    </div>

                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                        <div class="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                            <i class="fas fa-shipping-fast text-2xl text-white"></i>
                        </div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Pengiriman ke Seluruh Indonesia</h4>
                        <p class="text-emerald-100 leading-relaxed">
                            Jangkauan distribusi yang luas ke seluruh wilayah Indonesia dengan sistem logistik yang terintegrasi dan terpercaya.
                        </p>
                    </div>

                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                        <div class="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                            <i class="fas fa-headset text-2xl text-white"></i>
                        </div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Konsultasi Teknis Gratis</h4>
                        <p class="text-emerald-100 leading-relaxed">
                            Tim ahli kami siap membantu perencanaan dan perhitungan kebutuhan material Anda secara gratis dan profesional.
                        </p>
                    </div>

                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                        <div class="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                            <i class="fas fa-clipboard-list text-2xl text-white"></i>
                        </div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Inspeksi Kualitas untuk Quality Control</h4>
                        <p class="text-emerald-100 leading-relaxed">
                            Setiap produk melalui proses inspeksi kualitas ketat untuk memastikan standar terbaik sebelum sampai ke tangan Anda.
                        </p>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <p class="text-emerald-200 text-lg max-w-3xl mx-auto">
                        <i class="fas fa-quote-left mr-2 text-emerald-400"></i>
                        Dengan memilih PT. Amanah Adi Guna, Anda mendapatkan kemudahan tanpa MOQ, pengiriman ke seluruh Indonesia, 
                        konsultasi teknis gratis, dan jaminan kualitas melalui inspeksi ketat.
                    </p>
                </div>
            </div>
        </section>

        <section id="produk" class="py-24 bg-slate-100 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-manufacture font-black tracking-widest uppercase text-sm mb-4 industrial-text">Katalog Produk</h2>
                    <h3 class="text-3xl md:text-4xl font-black text-slate-900 industrial-text">Spesifikasi Infrastruktur Baja</h3>
                    <div class="w-20 h-1.5 bg-emerald-600 mx-auto mt-4"></div>
                </div>

                <div class="flex flex-wrap justify-center gap-4 mb-10">
                    <button onclick="showProduct('grating')" id="btn-grating" class="product-btn px-6 py-2 rounded-full font-black border-2 border-manufacture transition shadow-md industrial-text">Steel Grating</button>
                    <button onclick="showProduct('pole')" id="btn-pole" class="product-btn px-6 py-2 rounded-full font-black border-2 border-manufacture text-manufacture hover:bg-manufacture hover:text-white transition shadow-md industrial-text">Pole</button>
                    <button onclick="showProduct('guardrail')" id="btn-guardrail" class="product-btn px-6 py-2 rounded-full font-black border-2 border-manufacture text-manufacture hover:bg-manufacture hover:text-white transition shadow-md industrial-text">Guard Rail</button>
                </div>

                <div class="bg-white rounded-3xl shadow-2xl border-2 border-emerald-200 overflow-hidden max-w-5xl mx-auto">
                    
                    <div id="content-grating" class="product-content flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-emerald-100">
                            <div class="relative bg-gradient-to-br from-emerald-50 to-emerald-100 w-full aspect-video rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-emerald-200">
                                <img src="/steel-grating.png" 
                                    id="grating-img-1"
                                    class="grating-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" 
                                    alt="Steel Grating Product">

                                <img src="/steel-grating-spec.png" 
                                    id="grating-img-2"
                                    class="grating-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" 
                                    alt="Steel Grating Spec Diagram">
                            </div>

                            <h4 class="text-2xl font-black text-manufacture mb-4 industrial-text">Steel Grating</h4>
                            <p class="text-slate-600 leading-relaxed">
                                Material ringan dengan daya tahan beban tinggi. Desain ekonomis, anti-selip, serta memastikan sirkulasi udara dan cahaya maksimal. Mudah dipasang dan tahan lama.
                            </p>
                            <div class="mt-10">
                                <a href="https://wa.me/6281332222323?text=halo%20apakah%20benar%20dengan%20PT.%20Amanah%20Adi%20Guna,%20saya%20ingin%20konsultasi%20mengenai%20produk%20steel%20grating%20yang%20ditawarkan" 
                                target="_blank"
                                class="bg-[#25D366] text-white px-8 py-4 rounded-lg font-black hover:bg-green-400 transition inline-flex items-center shadow-lg industrial-text">
                                    <i class="fab fa-whatsapp mr-2 text-xl text-white"></i> Konsultasi via WhatsApp
                                </a>
                            </div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-emerald-50/30 to-white">
                            <h5 class="font-black text-manufacture mb-4 uppercase text-xs tracking-widest industrial-text">Tabel Spesifikasi</h5>
                            <div class="overflow-x-auto">
                                <table class="w-full text-center text-xs border-collapse bg-white rounded-lg overflow-hidden shadow-md" id="grating-spec-table">
                                    <thead>
                                        <tr class="bg-manufacture text-white">
                                            <th class="p-2 border border-emerald-800" rowspan="2">Number of Bearing</th>
                                            <th class="p-2 border border-emerald-800" colspan="3">Nominal Width (mm)</th>
                                        </tr>
                                        <tr class="bg-manufacture-light text-white">
                                            <th class="p-2 border border-emerald-700">30</th>
                                            <th class="p-2 border border-emerald-700">40</th>
                                            <th class="p-2 border border-emerald-700">60</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-slate-600">
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-black bg-emerald-50">3</td>
                                            <td class="p-2 border border-slate-200">-</td>
                                            <td class="p-2 border border-slate-200">-</td>
                                            <td class="p-2 border border-slate-200">125</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-black bg-emerald-50">4</td>
                                            <td class="p-2 border border-slate-200">95</td>
                                            <td class="p-2 border border-slate-200">125</td>
                                            <td class="p-2 border border-slate-200">185</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-black bg-emerald-50">5</td>
                                            <td class="p-2 border border-slate-200">125</td>
                                            <td class="p-2 border border-slate-200">165</td>
                                            <td class="p-2 border border-slate-200">245</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-black bg-emerald-50">6</td>
                                            <td class="p-2 border border-slate-200">155</td>
                                            <td class="p-2 border border-slate-200">205</td>
                                            <td class="p-2 border border-slate-200">305</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-black bg-emerald-50">7</td>
                                            <td class="p-2 border border-slate-200">185</td>
                                            <td class="p-2 border border-slate-200">245</td>
                                            <td class="p-2 border border-slate-200">365</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-black bg-emerald-50">8</td>
                                            <td class="p-2 border border-slate-200">215</td>
                                            <td class="p-2 border border-slate-200">285</td>
                                            <td class="p-2 border border-slate-200">425</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-black bg-emerald-50">9</td>
                                            <td class="p-2 border border-slate-200">245</td>
                                            <td class="p-2 border border-slate-200">325</td>
                                            <td class="p-2 border border-slate-200">485</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-black bg-emerald-50">10</td>
                                            <td class="p-2 border border-slate-200">275</td>
                                            <td class="p-2 border border-slate-200">365</td>
                                            <td class="p-2 border border-slate-200">545</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-black bg-emerald-50">⋮</td>
                                            <td class="p-2 border border-slate-200">⋮</td>
                                            <td class="p-2 border border-slate-200">⋮</td>
                                            <td class="p-2 border border-slate-200">⋮</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-black bg-emerald-50">34</td>
                                            <td class="p-2 border border-slate-200">995</td>
                                            <td class="p-2 border border-slate-200">-</td>
                                            <td class="p-2 border border-slate-200">-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button onclick="openModal()" class="mt-4 w-full py-2 bg-emerald-50 text-manufacture text-xs font-black rounded-lg hover:bg-emerald-100 transition flex items-center justify-center border border-emerald-200">
                                <i class="fas fa-list-ul mr-2"></i> Lihat Selengkapnya (32 Tipe)
                            </button>
                            <p class="mt-4 text-[11px] text-slate-500 italic leading-relaxed">
                                * Data berdasarkan standar teknis PT. Amanah Adi Guna.
                            </p>
                        </div>
                    </div>

                    <div id="content-guardrail" class="product-content hidden flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-emerald-100">
                            <div class="relative bg-gradient-to-br from-emerald-50 to-emerald-100 w-full aspect-video rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-emerald-200">
                                <img src="/guardrail.png" 
                                    class="guardrail-slides absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 opacity-100" 
                                    alt="High Quality Guard Rail Product">

                                <img src="/guardrail-spec.png" 
                                    class="guardrail-slides absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 opacity-0" 
                                    alt="Guard Rail Specification Diagram">
                            </div>

                            <h4 class="text-2xl font-black text-manufacture mb-4 industrial-text">Guard Rail</h4>
                            <p class="text-slate-600 leading-relaxed">
                                Solusi pagar pengaman jalan tol dengan material baja tinggi yang kuat dan fleksibel untuk meminimalisir risiko kecelakaan fatal.
                            </p>
                            <div class="mt-10">
                                <a href="https://wa.me/6281332222323?text=halo%20apakah%20benar%20dengan%20PT.%20Amanah%20Adi%20Guna,%20saya%20ingin%20konsultasi%20mengenai%20produk%20guardrail%20yang%20ditawarkan" 
                                target="_blank"
                                class="bg-[#25D366] text-white px-8 py-4 rounded-lg font-black hover:bg-green-400 transition inline-flex items-center shadow-lg industrial-text">
                                    <i class="fab fa-whatsapp mr-2 text-xl text-white"></i> Konsultasi via WhatsApp
                                </a>
                            </div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-emerald-50/30 to-white">
                            <h5 class="font-black text-manufacture mb-4 uppercase text-xs tracking-widest industrial-text">Tabel SpesifikasiTeknis</h5>
                            <table class="w-full text-xs border-collapse bg-white rounded-lg shadow-md" id="guardrail-spec-table">
                                <thead>
                                    <tr class="bg-manufacture text-white">
                                        <th class="p-2 border border-emerald-800">No. Bag <br><small>Part no.</small></th>
                                        <th class="p-2 border border-emerald-800">Nama Bagian <br><small>Part name</small></th>
                                        <th class="p-2 border border-emerald-800">Ukuran <br><small>Size</small></th>
                                        <th class="p-2 border border-emerald-800">Jumlah <br><small>Quantity</small></th>
                                    </tr>
                                </thead>
                                <tbody class="text-slate-600 text-center">
                                    <tr>
                                        <td class="p-3 border border-slate-200 font-black text-manufacture">1</td>
                                        <td class="p-3 border border-slate-200">W-Beam Section</td>
                                        <td class="p-3 border border-slate-200">312 x 83 x 2.67</td>
                                        <td class="p-3 border border-slate-200">N</td>
                                    </tr>
                                    <tr class="bg-slate-50">
                                        <td class="p-3 border border-slate-200 font-black text-manufacture">2</td>
                                        <td class="p-3 border border-slate-200">Steel Block</td>
                                        <td class="p-3 border border-slate-200">U175 x 75-350 L x t</td>
                                        <td class="p-3 border border-slate-200">2N+1</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border border-slate-200 font-black text-manufacture">3</td>
                                        <td class="p-3 border border-slate-200">Steel Post</td>
                                        <td class="p-3 border border-slate-200">U175 x 75-1800 L x t</td>
                                        <td class="p-3 border border-slate-200">2N+1</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border border-slate-200 font-black text-manufacture">4</td>
                                        <td class="p-3 border border-slate-200">End Block</td>
                                        <td class="p-3 border border-slate-200">410 x 225 x 2.67-700L</td>
                                        <td class="p-3 border border-slate-200">2</td>
                                    </tr>
                                    <tr class="bg-slate-50">
                                        <td class="p-3 border border-slate-200 font-black text-manufacture">5</td>
                                        <td class="p-3 border border-slate-200">Hexagon Bolt</td>
                                        <td class="p-3 border border-slate-200">M16 x 35 (W 5/8"x1 1/4")</td>
                                        <td class="p-3 border border-slate-200">4N+2</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border border-slate-200 font-black text-manufacture">6</td>
                                        <td class="p-3 border border-slate-200">Fastener</td>
                                        <td class="p-3 border border-slate-200">4.5 x 45 x 75</td>
                                        <td class="p-3 border border-slate-200">2N+1</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border border-slate-200 font-black text-manufacture">7</td>
                                        <td class="p-3 border border-slate-200">Splice Bolt</td>
                                        <td class="p-3 border border-slate-200">M16 x 40 (W 5/8"x1 1/4")</td>
                                        <td class="p-3 border border-slate-200">8N+8</td>
                                    </tr>
                                    <tr class="bg-slate-50">
                                        <td class="p-3 border border-slate-200 font-black text-manufacture">8</td>
                                        <td class="p-3 border border-slate-200">Splice Bolt</td>
                                        <td class="p-3 border border-slate-200">M16 x 45 (W 5/8"x1 1/4")</td>
                                        <td class="p-3 border border-slate-200">2N+1</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onclick="openGuardrailModal()" class="mt-4 w-full py-2 bg-emerald-50 text-manufacture text-xs font-black rounded-lg hover:bg-emerald-100 transition flex items-center justify-center border border-emerald-200">
                                <i class="fas fa-expand-arrows-alt mr-2"></i> LIHAT GAMBAR & DETAIL SPESIFIKASI
                            </button>
                            <p class="mt-4 text-[11px] text-slate-500 italic leading-relaxed">
                                * t = 4.5, 5.0, atau 6.0 tergantung kebutuhan proyek.
                            </p>
                        </div>
                    </div>

                    <div id="content-pole" class="product-content hidden flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-emerald-100">
                            <div class="relative bg-gradient-to-br from-emerald-50 to-emerald-100 w-full aspect-video rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-emerald-200">
                                <img src="/pole.png" 
                                    class="pole-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" 
                                    alt="High Quality Pole Product">

                                <img src="/pole-spec.png" 
                                    class="pole-slides absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 opacity-0" 
                                    alt="Pole Specification Diagram">
                            </div>

                            <h4 class="text-2xl font-black text-manufacture mb-4 industrial-text">Pole</h4>
                            <p class="text-slate-600 leading-relaxed">
                                Tiang berstruktur persegi-kerucut yang estetis, kokoh, dan merata di semua sisi. Tahan korosi dengan lapisan galvanis, serta menjamin mutu lewat sertifikasi SNI dan ISO 9001:2008.
                            </p>
                            <div class="mt-10">
                                <a href="https://wa.me/6281332222323?text=halo%20apakah%20benar%20dengan%20PT.%20Amanah%20Adi%20Guna,%20saya%20ingin%20konsultasi%20mengenai%20produk%20pole%20yang%20ditawarkan" 
                                target="_blank"
                                class="bg-[#25D366] text-white px-8 py-4 rounded-lg font-black hover:bg-green-400 transition inline-flex items-center shadow-lg industrial-text">
                                    <i class="fab fa-whatsapp mr-2 text-xl text-white"></i> Konsultasi via WhatsApp
                                </a>
                            </div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-emerald-50/30 to-white">
                            <h5 class="font-black text-manufacture mb-4 uppercase text-xs tracking-widest industrial-text">Tabel Spesifikasi Teknis</h5>
                            <div class="overflow-x-auto">
                                <table class="w-full text-xs border-collapse bg-white rounded-lg shadow-md" id="pole-spec-table">
                                    <thead>
                                        <tr class="bg-manufacture text-white">
                                            <th class="p-2 border border-emerald-800">Tinggi (meter)</th>
                                            <th class="p-2 border border-emerald-800">Bentangan (mm)</th>
                                            <th class="p-2 border border-emerald-800">radius (mm)</th>
                                            <th class="p-2 border border-emerald-800">Tapak <br>(b1xb1xb2) (mm)</th>
                                            <th class="p-2 border border-emerald-800">Angkur <br>(a1xa1xa3) (mm)</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-slate-600">
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-black text-center" rowspan="2">6</td>
                                            <td class="p-2 border border-slate-200 text-center">1500</td>
                                            <td class="p-2 border border-slate-200 text-center">1400</td>
                                            <td class="p-2 border border-slate-200 text-center" rowspan="2">300x300x16</td>
                                            <td class="p-2 border border-slate-200 text-center" rowspan="2">16x500x100</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 text-center">2100</td>
                                            <td class="p-2 border border-slate-200 text-center">1800</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-black text-center" rowspan="2">7</td>
                                            <td class="p-2 border border-slate-200 text-center">1500</td>
                                            <td class="p-2 border border-slate-200 text-center">1400</td>
                                            <td class="p-2 border border-slate-200 text-center" rowspan="2">300x300x16</td>
                                            <td class="p-2 border border-slate-200 text-center" rowspan="2">16x500x100</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 text-center">2100</td>
                                            <td class="p-2 border border-slate-200 text-center">1800</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-black text-center" rowspan="2">8</td>
                                            <td class="p-2 border border-slate-200 text-center">1500</td>
                                            <td class="p-2 border border-slate-200 text-center">1400</td>
                                            <td class="p-2 border border-slate-200 text-center" rowspan="2">300x300x16</td>
                                            <td class="p-2 border border-slate-200 text-center" rowspan="2">19x500x100</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 text-center">2100</td>
                                            <td class="p-2 border border-slate-200 text-center">1800</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-black text-center" rowspan="2">9</td>
                                            <td class="p-2 border border-slate-200 text-center">1500</td>
                                            <td class="p-2 border border-slate-200 text-center">1400</td>
                                            <td class="p-2 border border-slate-200 text-center" rowspan="2">300x300x16</td>
                                            <td class="p-2 border border-slate-200 text-center" rowspan="2">19x500x100</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 text-center">2100</td>
                                            <td class="p-2 border border-slate-200 text-center">1800</td>
                                        </tr>
                                        <tr>
                                            <th class="p-2 border border-slate-200">⋮</th>
                                            <th class="p-2 border border-slate-200">⋮</th>
                                            <th class="p-2 border border-slate-200">⋮</th>
                                            <th class="p-2 border border-slate-200">⋮</th>
                                            <th class="p-2 border border-slate-200">⋮</th>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-black text-center" rowspan="2">15</td>
                                            <td class="p-2 border border-slate-200 text-center">1500</td>
                                            <td class="p-2 border border-slate-200 text-center">1400</td>
                                            <td class="p-2 border border-slate-200 text-center" rowspan="2">400x400x19</td>
                                            <td class="p-2 border border-slate-200 text-center" rowspan="2">22x800x100</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 text-center">2100</td>
                                            <td class="p-2 border border-slate-200 text-center">1800</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button onclick="openPoleModal()" class="mt-4 w-full py-2 bg-emerald-50 text-manufacture text-xs font-black rounded-lg hover:bg-emerald-100 transition flex items-center justify-center border border-emerald-200">
                                <i class="fas fa-expand-arrows-alt mr-2"></i> LIHAT SPESIFIKASI LENGKAP (6m - 15m)
                            </button>
                            <p class="mt-4 text-[11px] text-slate-500 italic leading-relaxed">
                                * Ukuran tiang bisa disesuaikan dengan kebutuhan.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <script>
            const products = ['grating', 'guardrail', 'pole'];
            let currentIndex = 0;
            let autoSlideInterval;

            let cart = [];

            const BASE_PRICE = 75000;

            const productSizeOptions = {
                grating: [
                    { label: "3 Bearing - Width 60mm", value: "3_60", coefficient: 1.0, defaultWeight: 5 },
                    { label: "4 Bearing - Width 30mm", value: "4_30", coefficient: 1.2, defaultWeight: 6 },
                    { label: "4 Bearing - Width 40mm", value: "4_40", coefficient: 1.3, defaultWeight: 6.5 },
                    { label: "4 Bearing - Width 60mm", value: "4_60", coefficient: 1.5, defaultWeight: 7 },
                    { label: "5 Bearing - Width 30mm", value: "5_30", coefficient: 1.8, defaultWeight: 8 },
                    { label: "5 Bearing - Width 40mm", value: "5_40", coefficient: 2.0, defaultWeight: 9 },
                    { label: "5 Bearing - Width 60mm", value: "5_60", coefficient: 2.2, defaultWeight: 10 },
                    { label: "6 Bearing - Width 30mm", value: "6_30", coefficient: 2.5, defaultWeight: 12 },
                    { label: "6 Bearing - Width 40mm", value: "6_40", coefficient: 2.8, defaultWeight: 13 },
                    { label: "6 Bearing - Width 60mm", value: "6_60", coefficient: 3.0, defaultWeight: 14 },
                    { label: "7 Bearing - Width 30mm", value: "7_30", coefficient: 3.5, defaultWeight: 16 },
                    { label: "7 Bearing - Width 40mm", value: "7_40", coefficient: 3.8, defaultWeight: 17 },
                    { label: "7 Bearing - Width 60mm", value: "7_60", coefficient: 4.0, defaultWeight: 18 },
                    { label: "8 Bearing - Width 30mm", value: "8_30", coefficient: 4.5, defaultWeight: 20 },
                    { label: "8 Bearing - Width 40mm", value: "8_40", coefficient: 4.8, defaultWeight: 21 },
                    { label: "8 Bearing - Width 60mm", value: "8_60", coefficient: 5.0, defaultWeight: 22 },
                    { label: "9 Bearing - Width 30mm", value: "9_30", coefficient: 5.5, defaultWeight: 25 },
                    { label: "9 Bearing - Width 40mm", value: "9_40", coefficient: 5.8, defaultWeight: 26 },
                    { label: "9 Bearing - Width 60mm", value: "9_60", coefficient: 6.0, defaultWeight: 27 },
                    { label: "10 Bearing - Width 30mm", value: "10_30", coefficient: 6.5, defaultWeight: 30 },
                    { label: "10 Bearing - Width 40mm", value: "10_40", coefficient: 6.8, defaultWeight: 31 },
                    { label: "10 Bearing - Width 60mm", value: "10_60", coefficient: 7.0, defaultWeight: 32 }
                ],
                pole: [
                    { label: "Tinggi 6m - Bentangan 1500mm", value: "6_1500", coefficient: 8.0, defaultWeight: 50 },
                    { label: "Tinggi 6m - Bentangan 2100mm", value: "6_2100", coefficient: 9.0, defaultWeight: 55 },
                    { label: "Tinggi 7m - Bentangan 1500mm", value: "7_1500", coefficient: 10.0, defaultWeight: 60 },
                    { label: "Tinggi 7m - Bentangan 2100mm", value: "7_2100", coefficient: 11.0, defaultWeight: 65 },
                    { label: "Tinggi 8m - Bentangan 1500mm", value: "8_1500", coefficient: 12.0, defaultWeight: 75 },
                    { label: "Tinggi 8m - Bentangan 2100mm", value: "8_2100", coefficient: 13.0, defaultWeight: 80 },
                    { label: "Tinggi 9m - Bentangan 1500mm", value: "9_1500", coefficient: 15.0, defaultWeight: 90 },
                    { label: "Tinggi 9m - Bentangan 2100mm", value: "9_2100", coefficient: 16.0, defaultWeight: 95 },
                    { label: "Tinggi 10m - Bentangan 1500mm", value: "10_1500", coefficient: 18.0, defaultWeight: 110 },
                    { label: "Tinggi 10m - Bentangan 2100mm", value: "10_2100", coefficient: 19.0, defaultWeight: 115 },
                    { label: "Tinggi 11m - Bentangan 1500mm", value: "11_1500", coefficient: 22.0, defaultWeight: 130 },
                    { label: "Tinggi 11m - Bentangan 2100mm", value: "11_2100", coefficient: 23.0, defaultWeight: 135 },
                    { label: "Tinggi 12m - Bentangan 1500mm", value: "12_1500", coefficient: 25.0, defaultWeight: 150 },
                    { label: "Tinggi 12m - Bentangan 2100mm", value: "12_2100", coefficient: 26.0, defaultWeight: 155 },
                    { label: "Tinggi 13m - Bentangan 1500mm", value: "13_1500", coefficient: 29.0, defaultWeight: 175 },
                    { label: "Tinggi 13m - Bentangan 2100mm", value: "13_2100", coefficient: 30.0, defaultWeight: 180 },
                    { label: "Tinggi 14m - Bentangan 1500mm", value: "14_1500", coefficient: 33.0, defaultWeight: 200 },
                    { label: "Tinggi 14m - Bentangan 2100mm", value: "14_2100", coefficient: 34.0, defaultWeight: 205 },
                    { label: "Tinggi 15m - Bentangan 1500mm", value: "15_1500", coefficient: 38.0, defaultWeight: 230 },
                    { label: "Tinggi 15m - Bentangan 2100mm", value: "15_2100", coefficient: 40.0, defaultWeight: 240 }
                ],
                guardrail: [
                    { label: "Standard W-Beam Section", value: "std_wbeam", coefficient: 2.5, defaultWeight: 15 },
                    { label: "Heavy Duty W-Beam Section", value: "hd_wbeam", coefficient: 4.0, defaultWeight: 25 },
                    { label: "Complete Set (8 parts)", value: "complete_set", coefficient: 15.0, defaultWeight: 85 }
                ]
            };

            function updateSizeOptions() {
                const productType = document.getElementById('product-type').value;
                const sizeSelect = document.getElementById('product-size');
                sizeSelect.innerHTML = '<option value="">Pilih Ukuran</option>';
                
                let options = productSizeOptions[productType] || [];
                
                options.forEach(function(option) {
                    const opt = document.createElement('option');
                    opt.value = option.value;
                    opt.textContent = option.label + ' (Koefisien: ' + option.coefficient + ')';
                    opt.setAttribute('data-coefficient', option.coefficient);
                    opt.setAttribute('data-default-weight', option.defaultWeight);
                    sizeSelect.appendChild(opt);
                });

                sizeSelect.addEventListener('change', function() {
                    const selected = sizeSelect.options[sizeSelect.selectedIndex];
                    if (selected && selected.value) {
                        const defaultWeight = parseFloat(selected.getAttribute('data-default-weight')) || 1;
                        document.getElementById('weight').value = defaultWeight;
                        document.getElementById('size-coefficient').value = parseFloat(selected.getAttribute('data-coefficient')) || 1;
                    }
                });
            }

            function calculateItemPrice() {
                const basePrice = BASE_PRICE;
                const sizeCoeff = parseFloat(document.getElementById('size-coefficient').value) || 1;
                const weight = parseFloat(document.getElementById('weight').value) || 1;
                const quantity = parseInt(document.getElementById('quantity').value) || 1;
                
                return basePrice * sizeCoeff * weight * quantity;
            }

            function addToCart() {
                const productType = document.getElementById('product-type').value;
                const sizeSelect = document.getElementById('product-size');
                const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
                const quantity = parseInt(document.getElementById('quantity').value) || 1;
                const sizeCoeff = parseFloat(document.getElementById('size-coefficient').value) || 1;
                const weight = parseFloat(document.getElementById('weight').value) || 1;
                
                if (!sizeSelect.value) {
                    alert('Silakan pilih ukuran produk terlebih dahulu');
                    return;
                }
                
                const productName = {
                    grating: 'Steel Grating',
                    pole: 'Pole / Tiang',
                    guardrail: 'Guard Rail'
                }[productType];
                
                const sizeLabel = selectedOption.text.split(' (Koefisien')[0];
                const itemPrice = BASE_PRICE * sizeCoeff * weight * quantity;
                
                cart.push({
                    id: Date.now() + Math.random(),
                    productName: productName,
                    size: sizeLabel,
                    quantity: quantity,
                    sizeCoeff: sizeCoeff,
                    weight: weight,
                    unitPrice: BASE_PRICE * sizeCoeff * weight,
                    total: itemPrice
                });
                
                updateCartDisplay();
                
                document.getElementById('quantity').value = '1';
                document.getElementById('weight').value = '1';
                document.getElementById('size-coefficient').value = '1';
                sizeSelect.value = '';
            }
            
            function updateCartDisplay() {
                const cartContainer = document.getElementById('cart-items');
                const cartTotalDiv = document.getElementById('cart-total');
                
                if (cart.length === 0) {
                    cartContainer.innerHTML = '<p class="text-slate-500 text-center py-4">Belum ada item di keranjang</p>';
                    cartTotalDiv.classList.add('hidden');
                    return;
                }
                
                cartTotalDiv.classList.remove('hidden');
                let total = 0;
                let cartHtml = '';
                
                for (let i = 0; i < cart.length; i++) {
                    const item = cart[i];
                    total += item.total;
                    cartHtml += '<div class="cart-item bg-white p-3 rounded-lg border border-emerald-200 flex justify-between items-center">' +
                        '<div>' +
                            '<p class="font-bold text-manufacture">' + item.productName + '</p>' +
                            '<p class="text-xs text-slate-500">Ukuran: ' + item.size + '</p>' +
                            '<p class="text-xs text-slate-500">Berat: ' + item.weight + ' kg | Koefisien: ' + item.sizeCoeff + '</p>' +
                            '<p class="text-xs text-slate-500">Qty: ' + item.quantity + ' unit</p>' +
                        '</div>' +
                        '<div class="text-right">' +
                            '<p class="font-bold text-manufacture">Rp ' + item.total.toLocaleString('id-ID') + '</p>' +
                            '<button onclick="removeFromCart(' + item.id + ')" class="text-red-500 text-xs hover:text-red-700 mt-1"><i class="fas fa-trash"></i> Hapus</button>' +
                        '</div>' +
                    '</div>';
                }
                
                cartContainer.innerHTML = cartHtml;
                document.getElementById('cart-total').innerHTML = 'Total: Rp ' + total.toLocaleString('id-ID');
            }
            
            function removeFromCart(id) {
                cart = cart.filter(function(item) {
                    return item.id !== id;
                });
                updateCartDisplay();
                document.getElementById('price-result').classList.add('hidden');
            }
            
            function clearCart() {
                if (cart.length > 0 && confirm('Yakin ingin mengosongkan keranjang?')) {
                    cart = [];
                    updateCartDisplay();
                    document.getElementById('price-result').classList.add('hidden');
                }
            }
            
            function calculateTotalPrice() {
                if (cart.length === 0) {
                    alert('Keranjang masih kosong. Silakan tambahkan produk terlebih dahulu.');
                    return;
                }
                
                let subtotal = 0;
                let breakdownItems = '';
                
                for (let i = 0; i < cart.length; i++) {
                    const item = cart[i];
                    subtotal += item.total;
                    breakdownItems += item.quantity + 'x ' + item.productName + ' (' + item.size + ') - Berat: ' + item.weight + ' kg<br>';
                }
                
                let totalPrice = subtotal;
                
                document.getElementById('total-price').innerHTML = 'Rp ' + totalPrice.toLocaleString('id-ID');
                document.getElementById('price-breakdown').innerHTML = 
                    breakdownItems + '<br><strong>Subtotal: Rp ' + subtotal.toLocaleString('id-ID') + '</strong>' +
                    '<br><span class="text-xs">*Harga dihitung dari: Rp ' + BASE_PRICE.toLocaleString('id-ID') + ' x Koefisien Ukuran x Berat (kg) x Jumlah Unit</span>';
                document.getElementById('price-result').classList.remove('hidden');
            }

            function showProduct(productId, isManual = false) {
                const content = document.getElementById('content-' + productId);
                if (!content) return;

                currentIndex = products.indexOf(productId);

                document.querySelectorAll('.product-content').forEach(el => el.classList.add('hidden'));
                content.classList.remove('hidden');
                
                document.querySelectorAll('.product-btn').forEach(btn => {
                    btn.classList.remove('bg-manufacture', 'text-white');
                    btn.classList.add('text-manufacture');
                });
                
                const activeBtn = document.getElementById('btn-' + productId);
                if (activeBtn) {
                    activeBtn.classList.add('bg-manufacture', 'text-white');
                    activeBtn.classList.remove('text-manufacture');
                }

                if (isManual) resetAutoSlide();
            }

            function nextProduct() {
                currentIndex = (currentIndex + 1) % products.length;
                showProduct(products[currentIndex], false);
            }

            function startAutoSlide() {
                autoSlideInterval = setInterval(nextProduct, 10000); 
            }

            function resetAutoSlide() {
                clearInterval(autoSlideInterval);
                startAutoSlide();
            }

            function initImageSlideshow(className, intervalTime) {
                let slideIndex = 0;
                const slides = document.querySelectorAll('.' + className);
                
                if (slides.length <= 1) return;

                setInterval(() => {
                    slides[slideIndex].classList.replace('opacity-100', 'opacity-0');
                    slideIndex = (slideIndex + 1) % slides.length;
                    slides[slideIndex].classList.replace('opacity-0', 'opacity-100');
                }, intervalTime);
            }

            document.addEventListener('DOMContentLoaded', () => {
                showProduct('grating');
                startAutoSlide();
                initImageSlideshow('grating-slides', 5000); 
                initImageSlideshow('pole-slides', 5000);
                initImageSlideshow('guardrail-slides', 5000);
                updateSizeOptions();
            });

            document.getElementById('product-type').addEventListener('change', updateSizeOptions);

            const gratingData = [
                { b: 3, w30: "-", w40: "-", w60: 125 },
                { b: 4, w30: 95, w40: 125, w60: 185 },
                { b: 5, w30: 125, w40: 165, w60: 245 },
                { b: 6, w30: 155, w40: 205, w60: 305 },
                { b: 7, w30: 185, w40: 245, w60: 365 },
                { b: 8, w30: 215, w40: 285, w60: 425 },
                { b: 9, w30: 245, w40: 325, w60: 485 },
                { b: 10, w30: 275, w40: 365, w60: 545 },
                { b: 11, w30: 305, w40: 405, w60: 605 },
                { b: 12, w30: 335, w40: 445, w60: 665 },
                { b: 13, w30: 365, w40: 485, w60: 725 },
                { b: 14, w30: 395, w40: 525, w60: 785 },
                { b: 15, w30: 425, w40: 565, w60: 845 },
                { b: 16, w30: 455, w40: 605, w60: 905 },
                { b: 17, w30: 485, w40: 645, w60: 965 },
                { b: 18, w30: 515, w40: 685, w60: 1025 },
                { b: 19, w30: 545, w40: 725, w60: "-" }, 
                { b: 20, w30: 575, w40: 765, w60: "-" },
                { b: 21, w30: 605, w40: 805, w60: "-" },
                { b: 22, w30: 635, w40: 845, w60: "-" },
                { b: 23, w30: 665, w40: 885, w60: "-" },
                { b: 24, w30: 695, w40: 925, w60: "-" },
                { b: 25, w30: 725, w40: 965, w60: "-" },
                { b: 26, w30: 755, w40: 1005, w60: "-" },
                { b: 27, w30: 785, w40: "-", w60: "-" },
                { b: 28, w30: 815, w40: "-", w60: "-" },
                { b: 29, w30: 845, w40: "-", w60: "-" },
                { b: 30, w30: 875, w40: "-", w60: "-" },
                { b: 31, w30: 905, w40: "-", w60: "-" },
                { b: 32, w30: 935, w40: "-", w60: "-" },
                { b: 33, w30: 965, w40: "-", w60: "-" },
                { b: 34, w30: 995, w40: "-", w60: "-" }
            ];

            function openModal() {
                const modalContainer = document.querySelector('#specModal .p-6.overflow-y-auto');
                if (!modalContainer) return;

                document.querySelector('#specModal h3').innerText = 'Spesifikasi Lengkap Steel Grating';

                let contentHtml = '<div class="mb-6 rounded-lg overflow-hidden border border-emerald-200 bg-white shadow-md">' +
                                    '<img src="/steel-grating-spec.png" class="w-full h-auto object-contain" alt="Steel Grating Spec Diagram">' +
                                '</div>';

                contentHtml += '<table class="w-full text-center text-[10px] border-collapse bg-white rounded-lg shadow-md">' +
                    '<thead>' +
                        '<tr class="bg-manufacture text-white">' +
                            '<th class="p-2 border border-emerald-800" rowspan="2">Number of Bearing</th>' +
                            '<th class="p-2 border border-emerald-800" colspan="3">Nominal Width (mm)</th>' +
                        '</table>' +
                        '<tr class="bg-manufacture-light text-white">' +
                            '<th class="p-2 border border-emerald-700">30</th>' +
                            '<th class="p-2 border border-emerald-700">40</th>' +
                            '<th class="p-2 border border-emerald-700">60</th>' +
                        '</tr>' +
                    '</thead>' +
                    '<tbody class="text-slate-600">';

                for (let i = 0; i < gratingData.length; i++) {
                    const item = gratingData[i];
                    const rowClass = (i % 2 === 0) ? 'bg-white' : 'bg-emerald-50';
                    contentHtml += '<tr class="' + rowClass + ' hover:bg-emerald-100">' +
                        '<td class="p-2 border border-slate-200 font-black">' + item.b + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.w30 + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.w40 + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.w60 + '</td>' +
                    '</tr>';
                }

                contentHtml += '</tbody><table>';

                modalContainer.innerHTML = contentHtml;
                document.getElementById('specModal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }

            function closeModal() {
                document.getElementById('specModal').classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
            
            const poleData = [
                { h: 6, b: 1500, r: 1400, tapak: "300 x 300 x 16", angkur: "16 x 500 x 100" },
                { h: 6, b: 2100, r: 1800, tapak: "300 x 300 x 16", angkur: "16 x 500 x 100" },
                { h: 7, b: 1500, r: 1400, tapak: "300 x 300 x 16", angkur: "16 x 500 x 100" },
                { h: 7, b: 2100, r: 1800, tapak: "300 x 300 x 16", angkur: "16 x 500 x 100" },
                { h: 8, b: 1500, r: 1400, tapak: "300 x 300 x 16", angkur: "19 x 500 x 100" },
                { h: 8, b: 2100, r: 1800, tapak: "300 x 300 x 16", angkur: "19 x 500 x 100" },
                { h: 9, b: 1500, r: 1400, tapak: "300 x 300 x 16", angkur: "19 x 500 x 100" },
                { h: 9, b: 2100, r: 1800, tapak: "300 x 300 x 16", angkur: "19 x 500 x 100" },
                { h: 10, b: 1500, r: 1400, tapak: "400 x 400 x 19", angkur: "22 x 600 x 100" },
                { h: 10, b: 2100, r: 1800, tapak: "400 x 400 x 19", angkur: "22 x 600 x 100" },
                { h: 11, b: 1500, r: 1400, tapak: "400 x 400 x 19", angkur: "22 x 600 x 100" },
                { h: 11, b: 2100, r: 1800, tapak: "400 x 400 x 19", angkur: "22 x 600 x 100" },
                { h: 12, b: 1500, r: 1400, tapak: "400 x 400 x 19", angkur: "22 x 600 x 100" },
                { h: 12, b: 2100, r: 1800, tapak: "400 x 400 x 19", angkur: "22 x 600 x 100" },
                { h: 13, b: 1500, r: 1400, tapak: "400 x 400 x 19", angkur: "22 x 600 x 100" },
                { h: 13, b: 2100, r: 1800, tapak: "400 x 400 x 19", angkur: "22 x 600 x 100" },
                { h: 14, b: 1500, r: 1400, tapak: "400 x 400 x 19", angkur: "22 x 700 x 100" },
                { h: 14, b: 2100, r: 1800, tapak: "400 x 400 x 19", angkur: "22 x 700 x 100" },
                { h: 15, b: 1500, r: 1400, tapak: "400 x 400 x 19", angkur: "22 x 800 x 100" },
                { h: 15, b: 2100, r: 1800, tapak: "400 x 400 x 19", angkur: "22 x 800 x 100" }
            ];

            function openPoleModal() {
                const modalContainer = document.querySelector('#specModal .p-6.overflow-y-auto');
                if (!modalContainer) return;

                document.querySelector('#specModal h3').innerText = 'Spesifikasi Lengkap High Quality Pole';

                let contentHtml = '<div class="mb-6 rounded-lg overflow-hidden border border-emerald-200 bg-white shadow-md">' +
                                    '<img src="/pole-spec.png" class="w-full h-auto object-contain" alt="Pole Spec Diagram">' +
                                '</div>';

                contentHtml += '<table class="w-full text-center text-[10px] border-collapse bg-white rounded-lg shadow-md">' +
                    '<thead>' +
                        '<tr class="bg-manufacture text-white">' +
                            '<th class="p-2 border border-emerald-800">Tinggi (meter)</th>' +
                            '<th class="p-2 border border-emerald-800">Bentangan (mm)</th>' +
                            '<th class="p-2 border border-emerald-800">Radius (mm)</th>' +
                            '<th class="p-2 border border-emerald-800">Tapak (b1xb1xb2)(mm)</th>' +
                            '<th class="p-2 border border-emerald-800">Angkur (a1xa2xa3)(mm)</th>' +
                        '</table>' +
                    '</thead>' +
                    '<tbody class="text-slate-600">';

                for (let i = 0; i < poleData.length; i++) {
                    const item = poleData[i];
                    const rowClass = (i % 2 === 0) ? 'bg-white' : 'bg-emerald-50';
                    const isFirstOfGroup = (i % 2 === 0); 

                    contentHtml += '<tr class="' + rowClass + ' hover:bg-emerald-100">';
                    
                    if (isFirstOfGroup) {
                        contentHtml += '<td class="p-2 border border-slate-200 font-black" rowspan="2">' + item.h + '</td>';
                    }

                    contentHtml += '<td class="p-2 border border-slate-200">' + item.b + '</td>';
                    contentHtml += '<td class="p-2 border border-slate-200">' + item.r + '</td>';

                    if (isFirstOfGroup) {
                        contentHtml += '<td class="p-2 border border-slate-200" rowspan="2">' + item.tapak + '</td>';
                        contentHtml += '<td class="p-2 border border-slate-200" rowspan="2">' + item.angkur + '</td>';
                    }
                    contentHtml += '</tr>';
                }

                contentHtml += '</tbody></table>';
                contentHtml += '<p class="mt-4 text-[11px] text-slate-500 italic leading-relaxed">' +
                            '* Ukuran tiang bisa disesuaikan dengan kebutuhan.' +
                            '</p>';

                modalContainer.innerHTML = contentHtml;
                document.getElementById('specModal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }

            function openGuardrailModal() {
                const modalContainer = document.querySelector('#specModal .p-6.overflow-y-auto');
                if (!modalContainer) return;

                document.querySelector('#specModal h3').innerText = 'Spesifikasi Lengkap Guard Rail';

                let contentHtml = '<div class="mb-6">' +
                    '<div class="rounded-lg overflow-hidden border border-emerald-200 bg-white mb-4 shadow-md">' +
                        '<img id="main-guardrail-view" src="/guardrail-spec.png" class="w-full h-auto min-h-[250px] md:min-h-[350px] object-contain p-2 transition-all duration-300">' +
                    '</div>' +
                    '<div class="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">' +
                        '<img src="/guardrail-spec.png" onclick="changeGuardrailView(this)" class="guardrail-thumb h-16 w-24 object-cover border-2 border-manufacture rounded cursor-pointer opacity-100 transition-all">' +
                        '<img src="/guardrail-part1.png" onclick="changeGuardrailView(this)" class="guardrail-thumb h-16 w-24 object-cover border border-slate-200 rounded cursor-pointer opacity-60 hover:opacity-100 transition-all">' +
                        '<img src="/guardrail-part2.png" onclick="changeGuardrailView(this)" class="guardrail-thumb h-16 w-24 object-cover border border-slate-200 rounded cursor-pointer opacity-60 hover:opacity-100 transition-all">' +
                        '<img src="/guardrail-part3.png" onclick="changeGuardrailView(this)" class="guardrail-thumb h-16 w-24 object-cover border border-slate-200 rounded cursor-pointer opacity-60 hover:opacity-100 transition-all">' +
                    '</div>' +
                '</div>';

                contentHtml += '<table class="w-full text-center text-[10px] border-collapse bg-white rounded-lg shadow-md">' +
                    '<thead><tr class="bg-manufacture text-white">' +
                        '<th class="p-2 border border-emerald-800">No. Bagian</th>' +
                        '<th class="p-2 border border-emerald-800">Nama Bagian</th>' +
                        '<th class="p-2 border border-emerald-800">Ukuran (Size)</th>' +
                        '<th class="p-2 border border-emerald-800">Jumlah (Qty)</th>' +
                    '</table></thead>' +
                    '<tbody class="text-slate-600">';

                const guardrailData = [
                    { no: '1', name: 'W-Beam Section', size: '312 x 83 x 2.67', qty: 'N' },
                    { no: '2', name: 'Steel Block', size: 'U175 x 75-350 L x t', qty: '2N+1' },
                    { no: '3', name: 'Steel Post', size: 'U175 x 75-1800 L x t', qty: '2N+1' },
                    { no: '4', name: 'End Block', size: '410 x 225 x 2.67-700L', qty: '2' },
                    { no: '5', name: 'Hexagon Bolt', size: 'M16 x 35', qty: '4N+2' },
                    { no: '6', name: 'Fastener', size: '4.5 x 45 x 75', qty: '2N+1' },
                    { no: '7', name: 'Splice Bolt', size: 'M16 x 40', qty: '8N+8' },
                    { no: '8', name: 'Splice Bolt', size: 'M16 x 45', qty: '2N+1' }
                ];

                for (let i = 0; i < guardrailData.length; i++) {
                    const item = guardrailData[i];
                    const rowClass = (i % 2 === 0) ? 'bg-white' : 'bg-emerald-50';
                    contentHtml += '<tr class="' + rowClass + ' hover:bg-emerald-100">' +
                        '<td class="p-2 border border-slate-200 font-black">' + item.no + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.name + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.size + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.qty + '</td>' +
                    '</tr>';
                }
                contentHtml += '</tbody></table>';
                contentHtml += '<p class="mt-4 text-[11px] text-slate-500 italic leading-relaxed">* t = 4.5, 5.0, atau 6.0 tergantung kebutuhan proyek.</p>';

                modalContainer.innerHTML = contentHtml;
                document.getElementById('specModal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }

            function changeGuardrailView(el) {
                const mainImg = document.getElementById('main-guardrail-view');
                mainImg.style.opacity = '0';
                setTimeout(function() {
                    mainImg.src = el.src;
                    mainImg.style.opacity = '1';
                }, 200);

                const thumbs = document.querySelectorAll('.guardrail-thumb');
                for (let i = 0; i < thumbs.length; i++) {
                    thumbs[i].classList.remove('border-manufacture', 'border-2', 'opacity-100');
                    thumbs[i].classList.add('border-slate-200', 'border', 'opacity-60');
                }
                
                el.classList.remove('border-slate-200', 'border', 'opacity-60');
                el.classList.add('border-manufacture', 'border-2', 'opacity-100');
            }
        </script>

        <style>
            .product-btn.active {
                background-color: #0F3B2C;
                color: white;
            }
        </style>

        <footer class="py-16 border-t border-emerald-800 bg-manufacture-dark">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div class="flex items-center space-x-2 mb-6">
                            <div class="flex items-center space-x-2">
                                <img src="/logo amanah adi guna.png" alt="Logo PT Amanah Adi Guna" class="h-10 w-auto">
                                <div class="text-xl font-black text-white tracking-tight text-nowrap industrial-text">AMANAH ADI GUNA</div>
                            </div>
                        </div>
                        <p class="text-emerald-200 text-sm leading-relaxed">
                            Mitra strategis pembangunan nasional yang menghadirkan solusi infrastruktur baja kelas dunia dengan integritas tinggi.
                        </p>
                    </div>

                    <div>
                        <h4 class="text-white font-black mb-6 uppercase text-xs tracking-widest industrial-text">Navigasi</h4>
                        <ul class="space-y-4">
                            <li><a href="#home" class="text-emerald-200 hover:text-white transition text-sm flex items-center"><i class="fas fa-chevron-right text-[10px] mr-2"></i> Beranda</a></li>
                            <li><a href="#about" class="text-emerald-200 hover:text-white transition text-sm flex items-center"><i class="fas fa-chevron-right text-[10px] mr-2"></i> Tentang Kami</a></li>
                            <li><a href="#produk" class="text-emerald-200 hover:text-white transition text-sm flex items-center"><i class="fas fa-chevron-right text-[10px] mr-2"></i> Produk</a></li>
                            <li><a href="#calculator" class="text-emerald-200 hover:text-white transition text-sm flex items-center"><i class="fas fa-chevron-right text-[10px] mr-2"></i> Kalkulator</a></li>
                            <li><a href="#whyus" class="text-emerald-200 hover:text-white transition text-sm flex items-center"><i class="fas fa-chevron-right text-[10px] mr-2"></i> Keunggulan</a></li>
                            <li><a href="#contact" class="text-emerald-200 hover:text-white transition text-sm flex items-center"><i class="fas fa-chevron-right text-[10px] mr-2"></i> Kontak</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-white font-black mb-6 uppercase text-xs tracking-widest industrial-text">Kontak</h4>
                        <p class="text-emerald-200 text-sm leading-relaxed">
                            Email: contact@amanahadiguna.com<br>
                            WhatsApp: +62 813-3222-2323
                        </p>
                        <div class="mt-6">
                            <p class="text-emerald-200 text-sm">
                                <i class="fas fa-phone-alt mr-2"></i> +62 813-3222-2323
                            </p>
                        </div>
                    </div>
                </div>

                <div class="pt-8 border-t border-emerald-800 flex flex-col md:flex-row justify-between items-center text-emerald-300 text-xs">
                    <p>&copy; 2026 PT. Amanah Adi Guna. Seluruh Hak Cipta Dilindungi.</p>
                    <div class="mt-4 md:mt-0">
                        <p>Designed by <span class="text-white font-black">Digital Usaha</span></p>
                    </div>
                </div>
            </div>
        </footer>

        <a href="https://wa.me/6281332222323?text=halo%20apakah%20benar%20dengan%20PT.%20Amanah%20Adi%20Guna" 
           target="_blank" 
           class="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group">
            
            <span class="absolute right-20 bg-white text-slate-800 text-sm font-black px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100 industrial-text">
                Chat dengan Kami
            </span>

            <i class="fab fa-whatsapp text-4xl"></i>
        </a>

        <div id="specModal" class="fixed inset-0 z-[10000] hidden flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-2 border-emerald-200">
                <div class="p-6 border-b border-emerald-100 flex justify-between items-center bg-manufacture text-white">
                    <h3 class="font-black text-lg industrial-text">Spesifikasi Lengkap Steel Grating</h3>
                    <button onclick="closeModal()" class="text-white hover:text-emerald-200">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div class="p-6 overflow-y-auto max-h-[70vh]">
                    <table class="w-full text-center text-xs border-collapse">
                        <thead>
                            <tr class="bg-emerald-100 text-slate-700">
                                <th class="p-2 border border-emerald-200" rowspan="2">Number of Bearing</th>
                                <th class="p-2 border border-emerald-200" colspan="3">Nominal Width (mm)</th>
                            </tr>
                            <tr class="bg-emerald-50 text-slate-700">
                                <th class="p-2 border border-emerald-200">30</th>
                                <th class="p-2 border border-emerald-200">40</th>
                                <th class="p-2 border border-emerald-200">60</th>
                            </tr>
                        </thead>
                        <tbody id="modalTableBody" class="text-slate-600">
                            </tbody>
                    </table>
                </div>
                <div class="p-4 border-t border-emerald-100 text-right">
                    <button onclick="closeModal()" class="bg-emerald-100 text-manufacture px-6 py-2 rounded-lg font-black hover:bg-emerald-200 transition industrial-text">Tutup</button>
                </div>
            </div>
        </div>

    </body>
    </html>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server PT. Amanah Adi Guna running on http://localhost:' + PORT);
});

module.exports = app;