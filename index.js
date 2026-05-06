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
            .text-manufacture { color: #0F3B2C; }
            .border-manufacture { border-color: #0F3B2C; }
            .price-result {
                background: linear-gradient(135deg, #0F3B2C 0%, #1A5A44 100%);
            }
            .hidden { display: none; }
            .grating-slides, .pole-slides, .guardrail-slides {
                transition: opacity 1000ms ease-in-out;
            }
            .product-btn.active {
                background-color: #0F3B2C;
                color: white;
            }
            .cart-item:hover {
                background-color: #f0fdf4;
            }
            .industrial-pattern {
                background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A5A44' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            }
        </style>
    </head>
    <body class="bg-slate-50 text-slate-900 font-sans industrial-pattern">

        <!-- NAVBAR -->
        <nav class="fixed w-full z-50 bg-emerald-900/70 backdrop-blur-xl border-b border-emerald-700/50 shadow-2xl">
            <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div class="flex items-center space-x-3">
                    <img src="/logo amanah adi guna.png" alt="Logo PT Amanah Adi Guna" class="h-10 w-auto">
                    <div class="text-xl font-bold text-white tracking-tight text-nowrap industrial-text">AMANAH ADI GUNA</div>
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

        <!-- HOME SECTION -->
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
                        <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-10 pointer-events-none"></div>
                        <img src="/Deskripsi-Perusahaan.png" alt="Deskripsi Perusahaan" class="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>

        <!-- ABOUT SECTION -->
        <section id="about" class="py-24 bg-cover bg-center bg-no-repeat" style="background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('/Background-Tentang.png');">
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
                    <div class="bg-white/80 backdrop-blur-md p-8 rounded-2xl border-2 border-emerald-200 shadow-xl">
                        <h4 class="text-xl font-black mb-6 text-manufacture industrial-text">Informasi Legalitas</h4>
                        <ul class="space-y-4 text-slate-700">
                            <li class="flex items-start"><i class="fas fa-check-circle text-emerald-600 mt-1 mr-3 text-lg"></i><span><strong class="industrial-text">Akta Pendirian:</strong> AHU-045746.AH.01.30.Tahun 2024</span></li>
                            <li class="flex items-start"><i class="fas fa-check-circle text-emerald-600 mt-1 mr-3 text-lg"></i><span><strong class="industrial-text">NIB:</strong> 2208240036555</span></li>
                            <li class="flex items-start"><i class="fas fa-check-circle text-emerald-600 mt-1 mr-3 text-lg"></i><span><strong class="industrial-text">NPWP:</strong> 0125.7774.3364.2000</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- CLIENTS SECTION -->
        <section class="py-20 bg-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl md:text-4xl font-black text-manufacture mb-4 industrial-text">Our Valued Clients</h2>
                <div class="w-20 h-1.5 bg-emerald-600 mx-auto mb-12 rounded-full"></div>
                <p class="text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">Kami bangga telah menjalin kemitraan strategis dengan berbagai perusahaan terkemuka untuk mendukung pembangunan infrastruktur yang berkelanjutan.</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">
                    <div class="p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl"><img src="/pln nusantara power.png" alt="PLN Nusantara Power" class="max-h-16 w-auto object-contain"></div>
                    <div class="p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl"><img src="/pln nusantara power services.png" alt="PLN Nusantara Power Services" class="max-h-16 w-auto object-contain"></div>
                    <div class="p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl"><img src="/jacobis.png" alt="Jacobis" class="max-h-14 w-auto object-contain"></div>
                    <div class="p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl"><img src="/espe.jpg" alt="ESPE" class="max-h-14 w-auto object-contain"></div>
                </div>
            </div>
        </section>

        <!-- PRODUK SECTION -->
        <section id="produk" class="py-24 bg-gradient-to-br from-slate-900 to-manufacture text-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-white tracking-widest uppercase text-sm mb-4 industrial-text">Katalog Produk</h2>
                    <h3 class="text-3xl md:text-4xl font-white text-white industrial-text">Spesifikasi Infrastruktur Baja</h3>
                    <div class="w-20 h-1.5 bg-emerald-600 mx-auto mt-4"></div>
                </div>
                <div class="flex flex-wrap justify-center gap-4 mb-10">
                    <button onclick="showProduct('grating')" id="btn-grating" class="product-btn px-6 py-2 rounded-full font-black border-2 border-manufacture transition shadow-md industrial-text">Steel Grating</button>
                    <button onclick="showProduct('pole')" id="btn-pole" class="product-btn px-6 py-2 rounded-full font-black border-2 border-manufacture text-manufacture hover:bg-manufacture hover:text-white transition shadow-md industrial-text">Pole</button>
                    <button onclick="showProduct('guardrail')" id="btn-guardrail" class="product-btn px-6 py-2 rounded-full font-black border-2 border-manufacture text-manufacture hover:bg-manufacture hover:text-white transition shadow-md industrial-text">Guard Rail</button>
                </div>
                <div class="bg-white rounded-3xl shadow-2xl border-2 border-emerald-200 overflow-hidden max-w-5xl mx-auto">
                    
                    <!-- Steel Grating Content -->
                    <div id="content-grating" class="product-content flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-emerald-100">
                            <div class="relative bg-gradient-to-br from-emerald-50 to-emerald-100 w-full aspect-video rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-emerald-200">
                                <img src="/steel-grating.png" id="grating-img-1" class="grating-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" alt="Steel Grating Product">
                                <img src="/steel-grating-spec.png" id="grating-img-2" class="grating-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" alt="Steel Grating Spec Diagram">
                            </div>
                            <h4 class="text-2xl font-black text-manufacture mb-4 industrial-text">Steel Grating</h4>
                            <p class="text-slate-600 leading-relaxed">Material ringan dengan daya tahan beban tinggi. Desain ekonomis, anti-selip, serta memastikan sirkulasi udara dan cahaya maksimal. Mudah dipasang dan tahan lama.</p>
                            <div class="mt-10"><a href="https://wa.me/6281332222323?text=halo%20saya%20ingin%20konsultasi%20mengenai%20produk%20steel%20grating" target="_blank" class="bg-[#25D366] text-white px-8 py-4 rounded-lg font-black hover:bg-green-400 transition inline-flex items-center shadow-lg industrial-text"><i class="fab fa-whatsapp mr-2 text-xl"></i> Konsultasi via WhatsApp</a></div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-emerald-50/30 to-white">
                            <h5 class="font-black text-manufacture mb-4 uppercase text-xs tracking-widest industrial-text">Tabel Spesifikasi</h5>
                            <div class="overflow-x-auto">
                                <table class="w-full text-center text-xs border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                                    <thead><tr class="bg-manufacture text-white"><th class="p-2 border border-emerald-800" rowspan="2">Number of Bearing</th><th class="p-2 border border-emerald-800" colspan="3">Nominal Width (mm)</th></tr><tr class="bg-manufacture-light text-white"><th class="p-2 border border-emerald-700">30</th><th class="p-2 border border-emerald-700">40</th><th class="p-2 border border-emerald-700">60</th></tr></thead>
                                    <tbody class="text-slate-600">
                                        <tr><td class="p-2 border border-slate-200 font-black bg-emerald-50">3</td><td class="p-2 border border-slate-200">-</td><td class="p-2 border border-slate-200">-</td><td class="p-2 border border-slate-200">125</td></tr>
                                        <tr><td class="p-2 border border-slate-200 font-black bg-emerald-50">4</td><td class="p-2 border border-slate-200">95</td><td class="p-2 border border-slate-200">125</td><td class="p-2 border border-slate-200">185</td></tr>
                                        <tr class="bg-slate-50/50"><td class="p-2 border border-slate-200 font-black bg-emerald-50">5</td><td class="p-2 border border-slate-200">125</td><td class="p-2 border border-slate-200">165</td><td class="p-2 border border-slate-200">245</td></tr>
                                        <tr class="bg-slate-50/50"><td class="p-2 border border-slate-200 font-black bg-emerald-50">6</td><td class="p-2 border border-slate-200">155</td><td class="p-2 border border-slate-200">205</td><td class="p-2 border border-slate-200">305</td></tr>
                                        <tr class="bg-slate-50/50"><td class="p-2 border border-slate-200 font-black bg-emerald-50">7</td><td class="p-2 border border-slate-200">185</td><td class="p-2 border border-slate-200">245</td><td class="p-2 border border-slate-200">365</td></tr>
                                        <tr class="bg-slate-50/50"><td class="p-2 border border-slate-200 font-black bg-emerald-50">8</td><td class="p-2 border border-slate-200">215</td><td class="p-2 border border-slate-200">285</td><td class="p-2 border border-slate-200">425</td></tr>
                                        <tr><td class="p-2 border border-slate-200 font-black bg-emerald-50">34</td><td class="p-2 border border-slate-200">995</td><td class="p-2 border border-slate-200">-</td><td class="p-2 border border-slate-200">-</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <button onclick="openGratingModal()" class="mt-4 w-full py-2 bg-emerald-50 text-manufacture text-xs font-black rounded-lg hover:bg-emerald-100 transition flex items-center justify-center border border-emerald-200"><i class="fas fa-list-ul mr-2"></i> Lihat Selengkapnya (32 Tipe)</button>
                        </div>
                    </div>

                    <!-- Guard Rail Content -->
                    <div id="content-guardrail" class="product-content hidden flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-emerald-100">
                            <div class="relative bg-gradient-to-br from-emerald-50 to-emerald-100 w-full aspect-video rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-emerald-200">
                                <img src="/guardrail.png" class="guardrail-slides absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 opacity-100" alt="Guard Rail Product">
                                <img src="/guardrail-spec.png" class="guardrail-slides absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 opacity-0" alt="Guard Rail Specification">
                            </div>
                            <h4 class="text-2xl font-black text-manufacture mb-4 industrial-text">Guard Rail</h4>
                            <p class="text-slate-600 leading-relaxed">Solusi pagar pengaman jalan tol dengan material baja tinggi yang kuat dan fleksibel untuk meminimalisir risiko kecelakaan fatal.</p>
                            <div class="mt-10"><a href="https://wa.me/6281332222323?text=halo%20saya%20ingin%20konsultasi%20mengenai%20produk%20guardrail" target="_blank" class="bg-[#25D366] text-white px-8 py-4 rounded-lg font-black hover:bg-green-400 transition inline-flex items-center shadow-lg industrial-text"><i class="fab fa-whatsapp mr-2 text-xl"></i> Konsultasi via WhatsApp</a></div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-emerald-50/30 to-white">
                            <h5 class="font-black text-manufacture mb-4 uppercase text-xs tracking-widest industrial-text">Tabel Spesifikasi Teknis</h5>
                            <table class="w-full text-xs border-collapse bg-white rounded-lg shadow-md">
                                <thead><tr class="bg-manufacture text-white"><th class="p-2 border border-emerald-800">Part No.</th><th class="p-2 border border-emerald-800">Part Name</th><th class="p-2 border border-emerald-800">Size</th><th class="p-2 border border-emerald-800">Quantity</th></tr></thead>
                                <tbody class="text-slate-600 text-center">
                                    <tr><td class="p-3 border border-slate-200 font-black">1</td><td class="p-3 border border-slate-200">W-Beam Section</td><td class="p-3 border border-slate-200">312 x 83 x 2.67</td><td class="p-3 border border-slate-200">N</td></tr>
                                    <tr class="bg-slate-50"><td class="p-3 border border-slate-200 font-black">2</td><td class="p-3 border border-slate-200">Steel Block</td><td class="p-3 border border-slate-200">U175 x 75-350L x t</td><td class="p-3 border border-slate-200">2N+1</td></tr>
                                    <tr><td class="p-3 border border-slate-200 font-black">3</td><td class="p-3 border border-slate-200">Steel Post</td><td class="p-3 border border-slate-200">U175 x 75-1800L x t</td><td class="p-3 border border-slate-200">2N+1</td></tr>
                                    <tr class="bg-slate-50"><td class="p-3 border border-slate-200 font-black">4</td><td class="p-3 border border-slate-200">End Block</td><td class="p-3 border border-slate-200">410x225x2.67-700L</td><td class="p-3 border border-slate-200">2</td></tr>
                                    <tr><td class="p-3 border border-slate-200 font-black">5</td><td class="p-3 border border-slate-200">Hexagon Bolt</td><td class="p-3 border border-slate-200">M16 x 35</td><td class="p-3 border border-slate-200">4N+2</td></tr>
                                    <tr class="bg-slate-50"><td class="p-3 border border-slate-200 font-black">6</td><td class="p-3 border border-slate-200">Fastener</td><td class="p-3 border border-slate-200">4.5 x 45 x 75</td><td class="p-3 border border-slate-200">2N+1</td></tr>
                                    <tr><td class="p-3 border border-slate-200 font-black">7</td><td class="p-3 border border-slate-200">Splice Bolt</td><td class="p-3 border border-slate-200">M16 x 40</td><td class="p-3 border border-slate-200">8N+8</td></tr>
                                    <tr class="bg-slate-50"><td class="p-3 border border-slate-200 font-black">8</td><td class="p-3 border border-slate-200">Splice Bolt</td><td class="p-3 border border-slate-200">M16 x 45</td><td class="p-3 border border-slate-200">2N+1</td></tr>
                                </tbody>
                            </table>
                            <button onclick="openGuardrailModal()" class="mt-4 w-full py-2 bg-emerald-50 text-manufacture text-xs font-black rounded-lg hover:bg-emerald-100 transition flex items-center justify-center border border-emerald-200"><i class="fas fa-expand-arrows-alt mr-2"></i> LIHAT DETAIL SPESIFIKASI</button>
                        </div>
                    </div>

                    <!-- Pole Content -->
                    <div id="content-pole" class="product-content hidden flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-emerald-100">
                            <div class="relative bg-gradient-to-br from-emerald-50 to-emerald-100 w-full aspect-video rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-emerald-200">
                                <img src="/pole.png" class="pole-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" alt="Pole Product">
                                <img src="/pole-spec.png" class="pole-slides absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 opacity-0" alt="Pole Specification">
                            </div>
                            <h4 class="text-2xl font-black text-manufacture mb-4 industrial-text">Pole</h4>
                            <p class="text-slate-600 leading-relaxed">Tiang berstruktur persegi-kerucut yang estetis, kokoh, dan merata di semua sisi. Tahan korosi dengan lapisan galvanis.</p>
                            <div class="mt-10"><a href="https://wa.me/6281332222323?text=halo%20saya%20ingin%20konsultasi%20mengenai%20produk%20pole" target="_blank" class="bg-[#25D366] text-white px-8 py-4 rounded-lg font-black hover:bg-green-400 transition inline-flex items-center shadow-lg industrial-text"><i class="fab fa-whatsapp mr-2 text-xl"></i> Konsultasi via WhatsApp</a></div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-emerald-50/30 to-white">
                            <h5 class="font-black text-manufacture mb-4 uppercase text-xs tracking-widest industrial-text">Tabel Spesifikasi Teknis</h5>
                            <div class="overflow-x-auto">
                                <table class="w-full text-xs border-collapse bg-white rounded-lg shadow-md">
                                    <thead><tr class="bg-manufacture text-white"><th class="p-2 border border-emerald-800">Tinggi (m)</th><th class="p-2 border border-emerald-800">Bentangan (mm)</th><th class="p-2 border border-emerald-800">Radius (mm)</th><th class="p-2 border border-emerald-800">Tapak (mm)</th><th class="p-2 border border-emerald-800">Angkur (mm)</th></tr></thead>
                                    <tbody class="text-slate-600">
                                        <tr><td class="p-2 border border-slate-200 font-black">6</td><td class="p-2 border border-slate-200">1500/2100</td><td class="p-2 border border-slate-200">1400/1800</td><td class="p-2 border border-slate-200">300x300x16</td><td class="p-2 border border-slate-200">16x500x100</td></tr>
                                        <tr class="bg-slate-50"><td class="p-2 border border-slate-200 font-black">7</td><td class="p-2 border border-slate-200">1500/2100</td><td class="p-2 border border-slate-200">1400/1800</td><td class="p-2 border border-slate-200">300x300x16</td><td class="p-2 border border-slate-200">16x500x100</td></tr>
                                        <tr><td class="p-2 border border-slate-200 font-black">8</td><td class="p-2 border border-slate-200">1500/2100</td><td class="p-2 border border-slate-200">1400/1800</td><td class="p-2 border border-slate-200">300x300x16</td><td class="p-2 border border-slate-200">19x500x100</td></tr>
                                        <tr class="bg-slate-50"><td class="p-2 border border-slate-200 font-black">9</td><td class="p-2 border border-slate-200">1500/2100</td><td class="p-2 border border-slate-200">1400/1800</td><td class="p-2 border border-slate-200">300x300x16</td><td class="p-2 border border-slate-200">19x500x100</td></tr>
                                        <tr><td class="p-2 border border-slate-200 font-black">10</td><td class="p-2 border border-slate-200">1500/2100</td><td class="p-2 border border-slate-200">1400/1800</td><td class="p-2 border border-slate-200">400x400x19</td><td class="p-2 border border-slate-200">22x600x100</td></tr>
                                        <tr class="bg-slate-50"><td class="p-2 border border-slate-200 font-black">15</td><td class="p-2 border border-slate-200">1500/2100</td><td class="p-2 border border-slate-200">1400/1800</td><td class="p-2 border border-slate-200">400x400x19</td><td class="p-2 border border-slate-200">22x800x100</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <button onclick="openPoleModal()" class="mt-4 w-full py-2 bg-emerald-50 text-manufacture text-xs font-black rounded-lg hover:bg-emerald-100 transition flex items-center justify-center border border-emerald-200"><i class="fas fa-expand-arrows-alt mr-2"></i> LIHAT SPESIFIKASI LENGKAP</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CALCULATOR SECTION -->
        <section id="calculator" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-manufacture font-black tracking-widest uppercase text-sm mb-4 industrial-text">Estimasi Harga</h2>
                    <h3 class="text-3xl md:text-4xl font-black text-slate-900 industrial-text">Kalkulator Estimasi Biaya Material Baja</h3>
                    <div class="w-20 h-1.5 bg-emerald-600 mx-auto mt-4"></div>
                    <p class="text-slate-600 mt-6 max-w-2xl mx-auto">Pilih produk, tentukan ukuran dan berat, lalu tambahkan ke keranjang</p>
                </div>

                <div class="max-w-6xl mx-auto bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-2xl overflow-hidden border-2 border-emerald-200">
                    <div class="bg-manufacture p-6">
                        <h4 class="text-white text-2xl font-black text-center industrial-text"><i class="fas fa-calculator mr-3"></i> Kalkulator Estimasi Harga</h4>
                    </div>
                    
                    <div class="p-8">
                        <div id="calculator-image-container" class="mb-6 text-center hidden">
                            <img src="/calculator-SG.png" alt="Steel Grating Calculator" class="mx-auto max-h-48 object-contain rounded-lg border border-emerald-200 shadow-md">
                        </div>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-manufacture font-bold mb-2 industrial-text">Pilih Jenis Produk</label>
                                <select id="calc-product-type" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture bg-white font-semibold">
                                    <option value="grating">Steel Grating</option>
                                    <option value="pole">Pole / Tiang</option>
                                    <option value="guardrail">Guard Rail</option>
                                </select>
                            </div>
                        </div>

                        <!-- Panel Steel Grating -->
                        <div id="calc-grating-panel" class="space-y-6 mt-6">
                            <!-- Input Panjang & Lebar yang sudah ada -->
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Panjang (mm)</label><input type="number" id="grating-length" value="1000" step="100" min="100" class="w-full p-3 border-2 border-emerald-200 rounded-lg" oninput="calculateSteelGratingWeight()"></div>
                                <div><label class="block text-manufacture font-bold mb-2">Lebar (mm)</label><input type="number" id="grating-width" value="500" step="50" min="50" class="w-full p-3 border-2 border-emerald-200 rounded-lg" oninput="calculateSteelGratingWeight()"></div>
                            </div>

                            <!-- Input Parameter Bearing & Crossbar Baru -->
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Tinggi Bearing (H) - mm</label>
                                    <select id="bearing-height" class="w-full p-3 border-2 border-emerald-200 rounded-lg" onchange="calculateSteelGratingWeight()">
                                        <option value="65">65</option>
                                        <option value="60">60</option>
                                        <option value="55">55</option>
                                        <option value="50">50</option>
                                        <option value="45">45</option>
                                        <option value="40" selected>40</option>
                                        <option value="35">35</option>
                                        <option value="32">32</option>
                                        <option value="30">30</option>
                                        <option value="25">25</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Tebal Bearing (T) - mm</label>
                                    <div class="flex gap-2">
                                        <select id="bearing-thickness-select" class="w-2/3 p-3 border-2 border-emerald-200 rounded-lg" onchange="updateBearingThickness()">
                                            <option value="5">5</option>
                                            <option value="4">4</option>
                                            <option value="3" selected>3</option>
                                            <option value="2">2</option>
                                            <option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="bearing-thickness-custom" placeholder="Custom (mm)" class="w-1/3 p-3 border-2 border-emerald-200 rounded-lg hidden" oninput="calculateSteelGratingWeight()">
                                    </div>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Jarak antar Bearing (P) - mm</label>
                                    <select id="bearing-spacing" class="w-full p-3 border-2 border-emerald-200 rounded-lg" onchange="calculateSteelGratingWeight()">
                                        <option value="30">30</option>
                                        <option value="40" selected>40</option>
                                        <option value="60">60</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Jarak antar Crossbar (C) - mm</label>
                                    <select id="crossbar-spacing" class="w-full p-3 border-2 border-emerald-200 rounded-lg" onchange="calculateSteelGratingWeight()">
                                        <option value="50">50</option>
                                        <option value="100" selected>100</option>
                                    </select>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Harga Besi per Kg (Rp)</label>
                                    <input type="number" id="price-per-kg" value="16068" readonly class="w-full p-3 border-2 border-emerald-200 rounded-lg bg-gray-100 cursor-not-allowed">
                                    <p class="text-xs text-slate-400 mt-1">*Harga tetap, tidak dapat diubah</p>
                                </div>
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Harga Galvanis per Kg (Rp)</label>
                                    <input type="number" id="price-galvanis" value="8000" readonly class="w-full p-3 border-2 border-emerald-200 rounded-lg bg-gray-100 cursor-not-allowed">
                                    <p class="text-xs text-slate-400 mt-1">*Harga tetap, tidak dapat diubah</p>
                                </div>
                            </div>

                            <!-- Kondisi & Jenis Barang -->
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Kondisi Barang</label><select id="grating-coating" class="w-full p-3 border-2 border-emerald-200 rounded-lg" onchange="calculateSteelGratingWeight()"><option value="galvanis">Galvanis</option><option value="non-galvanis">Tanpa Galvanis</option></select></div>
                                <div><label class="block text-manufacture font-bold mb-2">Jenis Barang</label><select id="grating-type" class="w-full p-3 border-2 border-emerald-200 rounded-lg" onchange="calculateSteelGratingWeight()"><option value="serrated">Serrated</option><option value="polos">Polos</option></select></div>
                            </div>

                            <div><label class="block text-manufacture font-bold mb-2">Jumlah Unit</label><input type="number" id="grating-quantity" value="1" min="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg" oninput="calculateSteelGratingWeight()"></div>

                            <!-- Detail Perhitungan -->
                            <div class="bg-emerald-50 p-4 rounded-lg space-y-2">
                                <p class="text-sm text-slate-600 font-bold">Detail Perhitungan:</p>
                                <p class="text-xs text-slate-600">Jumlah Bearing: <strong id="calc-jumlah-bearing" class="text-manufacture">0</strong> buah</p>
                                <p class="text-xs text-slate-600">Volume Bearing: <strong id="calc-volume-bearing" class="text-manufacture">0</strong> mm³</p>
                                <p class="text-xs text-slate-600">Berat Bearing: <strong id="calc-berat-bearing" class="text-manufacture">0</strong> kg (x10^-9 x 7850)</p>
                                <p class="text-xs text-slate-600">Jumlah Crossbar: <strong id="calc-jumlah-crossbar" class="text-manufacture">0</strong> buah</p>
                                <p class="text-xs text-slate-600">Berat Crossbar: <strong id="calc-berat-crossbar" class="text-manufacture">0</strong> kg (x10^-9 x 7850)</p>
                                <p class="text-xs text-slate-600">Volume End Plate: <strong id="calc-volume-endplate" class="text-manufacture">0</strong> mm³</p>
                                <p class="text-xs text-slate-600">Berat End Plate: <strong id="calc-berat-endplate" class="text-manufacture">0</strong> kg (x10^-9 x 7850)</p>
                                <div class="border-t border-emerald-200 pt-2 mt-2">
                                    <p class="text-sm font-bold text-manufacture">Berat 1 Steel Grating: <strong id="calculated-weight" class="text-manufacture text-lg">0</strong> kg</p>
                                </div>
                            </div>

                            <!-- Estimasi Harga -->
                            <div class="bg-manufacture p-4 rounded-lg text-white">
                                <p class="text-sm font-bold">Estimasi Harga per Unit:</p>
                                <p class="text-2xl font-black" id="estimated-price-per-unit">Rp 0</p>
                                <p class="text-xs opacity-75 mt-1">*Dibulatkan ke atas ribuan terdekat</p>
                            </div>
                        </div>

                        <!-- Panel Pole & Guardrail -->
                        <div id="calc-other-panel" class="hidden space-y-6 mt-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Koefisien Ukuran</label><input type="number" id="size-coefficient" value="1" step="0.1" min="0.1" class="w-full p-3 border-2 border-emerald-200 rounded-lg"></div>
                                <div><label class="block text-manufacture font-bold mb-2">Berat (kg)</label><input type="number" id="weight" value="1" step="0.5" min="0.5" class="w-full p-3 border-2 border-emerald-200 rounded-lg"></div>
                            </div>
                            <div><label class="block text-manufacture font-bold mb-2">Jumlah Unit</label><input type="number" id="other-quantity" value="1" min="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg"></div>
                            
                            <!-- Estimasi Harga untuk Pole/Guardrail -->
                            <div class="bg-manufacture p-4 rounded-lg text-white">
                                <p class="text-sm font-bold">Estimasi Harga:</p>
                                <p class="text-2xl font-black" id="estimated-price-other">Rp 0</p>
                                <p class="text-xs opacity-75 mt-1">*Harga = Rp 75.000 x Koefisien x Berat x Jumlah</p>
                            </div>
                        </div>

                        <button onclick="addToCartCalc()" class="w-full mt-6 bg-manufacture text-white py-3 rounded-lg font-black hover:bg-manufacture-light transition shadow-lg"><i class="fas fa-cart-plus mr-2"></i> Tambahkan ke Keranjang</button>

                        <div class="mt-8">
                            <h5 class="font-black text-manufacture text-lg mb-4"><i class="fas fa-shopping-cart mr-2"></i> Keranjang Belanja Anda</h5>
                            <div id="cart-items" class="space-y-2 max-h-64 overflow-y-auto mb-4"><p class="text-slate-500 text-center py-4">Belum ada item di keranjang</p></div>
                            <div id="cart-total" class="text-right font-black text-manufacture text-xl hidden">Total: Rp 0</div>
                            <div class="flex gap-4 mt-4">
                                <button onclick="clearCartCalc()" class="flex-1 bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition"><i class="fas fa-trash mr-2"></i> Kosongkan Keranjang</button>
                                <button onclick="calculateTotalPriceCalc()" class="flex-1 bg-manufacture text-white py-2 rounded-lg font-black hover:bg-manufacture-light transition shadow-lg"><i class="fas fa-chart-line mr-2"></i> Hitung Total Estimasi</button>
                            </div>
                        </div>

                        <div id="price-result" class="mt-8 price-result rounded-xl p-6 text-white hidden">
                            <h5 class="text-xl font-black mb-3 text-center"><i class="fas fa-file-invoice-dollar mr-2"></i> Estimasi Biaya</h5>
                            <div class="space-y-2 text-center">
                                <p class="text-3xl font-black" id="total-price">Rp 0</p>
                                <p class="text-sm opacity-90" id="price-breakdown"></p>
                                <p class="text-xs opacity-75 mt-2">*Estimasi belum termasuk pajak dan pengiriman.</p>
                            </div>
                            <div class="mt-4 flex justify-center">
                                <a href="https://wa.me/6281332222323?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20baja%20dari%20PT.%20Amanah%20Adi%20Guna" target="_blank" class="bg-white text-manufacture px-6 py-2 rounded-lg font-bold hover:bg-emerald-50 transition inline-flex items-center"><i class="fab fa-whatsapp mr-2 text-[#25D366]"></i> Konsultasi via WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- WHY US SECTION -->
        <section id="whyus" class="py-24 bg-gradient-to-br from-slate-900 to-manufacture text-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-emerald-300 font-black tracking-widest uppercase text-sm mb-4 industrial-text">Keunggulan Kami</h2>
                    <h3 class="text-3xl md:text-4xl font-black mb-6 industrial-text">Mengapa Memilih PT. Amanah Adi Guna?</h3>
                    <div class="w-20 h-1.5 bg-emerald-500 mx-auto"></div>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                        <div class="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6"><i class="fas fa-box-open text-2xl text-white"></i></div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Tanpa MOQ</h4>
                        <p class="text-emerald-100 leading-relaxed">Tidak ada minimum order quantity. Kami melayani kebutuhan Anda berapapun jumlahnya.</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                        <div class="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6"><i class="fas fa-shipping-fast text-2xl text-white"></i></div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Pengiriman ke Seluruh Indonesia</h4>
                        <p class="text-emerald-100 leading-relaxed">Jangkauan distribusi yang luas ke seluruh wilayah Indonesia.</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                        <div class="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6"><i class="fas fa-headset text-2xl text-white"></i></div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Konsultasi Teknis Gratis</h4>
                        <p class="text-emerald-100 leading-relaxed">Tim ahli kami siap membantu perencanaan dan perhitungan kebutuhan material Anda.</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                        <div class="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6"><i class="fas fa-clipboard-list text-2xl text-white"></i></div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Inspeksi Kualitas</h4>
                        <p class="text-emerald-100 leading-relaxed">Setiap produk melalui proses inspeksi kualitas ketat.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="py-16 border-t border-emerald-800 bg-manufacture-dark">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div><div class="flex items-center space-x-2 mb-6"><img src="/logo amanah adi guna.png" alt="Logo" class="h-10 w-auto"><div class="text-xl font-black text-white industrial-text">AMANAH ADI GUNA</div></div><p class="text-emerald-200 text-sm">Mitra strategis pembangunan nasional yang menghadirkan solusi infrastruktur baja kelas dunia.</p></div>
                    <div><h4 class="text-white font-black mb-6 uppercase text-xs tracking-widest">Navigasi</h4><ul class="space-y-4"><li><a href="#home" class="text-emerald-200 hover:text-white transition text-sm">Beranda</a></li><li><a href="#about" class="text-emerald-200 hover:text-white transition text-sm">Tentang Kami</a></li><li><a href="#produk" class="text-emerald-200 hover:text-white transition text-sm">Produk</a></li><li><a href="#calculator" class="text-emerald-200 hover:text-white transition text-sm">Kalkulator</a></li></ul></div>
                    <div><h4 class="text-white font-black mb-6 uppercase text-xs tracking-widest">Kontak</h4><p class="text-emerald-200 text-sm">Email: contact@amanahadiguna.com<br>WhatsApp: +62 813-3222-2323</p></div>
                </div>
                <div class="pt-8 border-t border-emerald-800 text-center text-emerald-300 text-xs"><p>&copy; 2026 PT. Amanah Adi Guna. Seluruh Hak Cipta Dilindungi.</p></div>
            </div>
        </footer>

        <!-- WHATSAPP FLOAT -->
        <a href="https://wa.me/6281332222323?text=halo%20saya%20tertarik%20dengan%20produk%20PT.%20Amanah%20Adi%20Guna" target="_blank" class="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"><span class="absolute right-20 bg-white text-slate-800 text-sm font-black px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat dengan Kami</span><i class="fab fa-whatsapp text-4xl"></i></a>

        <!-- MODAL -->
        <div id="specModal" class="fixed inset-0 z-[10000] hidden flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-2 border-emerald-200">
                <div class="p-6 border-b border-emerald-100 flex justify-between items-center bg-manufacture text-white"><h3 class="font-black text-lg industrial-text" id="modal-title">Spesifikasi Lengkap</h3><button onclick="closeModal()" class="text-white hover:text-emerald-200"><i class="fas fa-times text-xl"></i></button></div>
                <div class="p-6 overflow-y-auto max-h-[70vh]" id="modal-body"></div>
                <div class="p-4 border-t border-emerald-100 text-right"><button onclick="closeModal()" class="bg-emerald-100 text-manufacture px-6 py-2 rounded-lg font-black hover:bg-emerald-200 transition">Tutup</button></div>
            </div>
        </div>

        <script>
        // ==================== KONSTANTA ====================
        const HARGA_BESI_PER_KG = 16068;
        const HARGA_GALVANIS_PER_KG = 8000;
        const BASE_PRICE = 75000;
        
        // ==================== VARIABEL GLOBAL ====================
        let cart = [];
        let autoSlideInterval;
        const products = ['grating', 'guardrail', 'pole'];
        let currentIndex = 0;
        
        // ==================== FUNGSI STEEL GRATING ====================
        function updateBearingThickness() {
            const select = document.getElementById('bearing-thickness-select');
            const customInput = document.getElementById('bearing-thickness-custom');
            if (select.value === 'custom') {
                customInput.classList.remove('hidden');
            } else {
                customInput.classList.add('hidden');
            }
            calculateSteelGratingWeight();
        }

        function getBearingThickness() {
            const select = document.getElementById('bearing-thickness-select');
            if (select.value === 'custom') {
                return parseFloat(document.getElementById('bearing-thickness-custom').value) || 3;
            }
            return parseFloat(select.value);
        }

        function calculateSteelGratingWeight() {
            const panjang = parseFloat(document.getElementById('grating-length').value) || 0;
            const lebar = parseFloat(document.getElementById('grating-width').value) || 0;
            const tinggiBearing = parseFloat(document.getElementById('bearing-height').value) || 40;
            const tebalBearing = getBearingThickness();
            const jarakBearing = parseFloat(document.getElementById('bearing-spacing').value) || 40;
            const jarakCrossbar = parseFloat(document.getElementById('crossbar-spacing').value) || 100;
            
            if (panjang <= 0 || lebar <= 0) {
                document.getElementById('calculated-weight').innerText = '0';
                return 0;
            }
            
            // 1. Jumlah Bearing = ROUNDDOWN((Lebar - Tebal Bearing) / Jarak antar Bearing, 0) + 1
            const jumlahBearing = Math.floor((lebar - tebalBearing) / jarakBearing) + 1;
            
            // 2. Volume Bearing = Tinggi Bearing * Tebal Bearing * Panjang
            const volumeBearing = tinggiBearing * tebalBearing * panjang;
            
            // 3. Berat Bearing = jumlahBearing * volumeBearing * 10^-9 * 7850
            const beratBearing = jumlahBearing * volumeBearing * Math.pow(10, -9) * 7850;
            
            // 4. Volume Crossbar = 6^2 * Lebar = 36 * Lebar
            const volumeCrossbar = 36 * lebar;
            
            // 5. Jumlah Crossbar = ROUNDUP(Panjang / Jarak antar Crossbar, 0)
            const jumlahCrossbar = Math.ceil(panjang / jarakCrossbar);
            
            // 6. Berat Crossbar = volumeCrossbar * jumlahCrossbar * 10^-9 * 7850
            const beratCrossbar = volumeCrossbar * jumlahCrossbar * Math.pow(10, -9) * 7850;
            
            // 7. Volume End Plate = Tinggi Bearing * Tebal Bearing * Lebar * 2
            const volumeEndPlate = tinggiBearing * tebalBearing * lebar * 2;
            
            // 8. Berat End Plate = volumeEndPlate * 10^-9 * 7850
            const beratEndPlate = volumeEndPlate * Math.pow(10, -9) * 7850;
            
            // 9. Berat 1 Steel Grating keseluruhan
            const totalBerat = beratBearing + beratCrossbar + beratEndPlate;
            
            // Update display detail perhitungan
            document.getElementById('calc-jumlah-bearing').innerText = jumlahBearing;
            document.getElementById('calc-volume-bearing').innerText = volumeBearing.toLocaleString('id-ID');
            document.getElementById('calc-berat-bearing').innerText = beratBearing.toFixed(2);
            document.getElementById('calc-jumlah-crossbar').innerText = jumlahCrossbar;
            document.getElementById('calc-berat-crossbar').innerText = beratCrossbar.toFixed(2);
            document.getElementById('calc-volume-endplate').innerText = volumeEndPlate.toLocaleString('id-ID');
            document.getElementById('calc-berat-endplate').innerText = beratEndPlate.toFixed(2);
            document.getElementById('calculated-weight').innerText = totalBerat.toFixed(2);
            
            // Hitung harga
            const kondisi = document.getElementById('grating-coating').value;
            const jenis = document.getElementById('grating-type').value;
            const quantity = parseInt(document.getElementById('grating-quantity').value) || 1;
            
            let hargaPerUnit = 0;
            
            if (kondisi === 'galvanis') {
                if (jenis === 'serrated') {
                    hargaPerUnit = (HARGA_BESI_PER_KG * totalBerat + HARGA_GALVANIS_PER_KG * totalBerat) * quantity;
                } else {
                    hargaPerUnit = ((HARGA_BESI_PER_KG - 500) * totalBerat + HARGA_GALVANIS_PER_KG * totalBerat) * quantity;
                }
            } else {
                if (jenis === 'serrated') {
                    hargaPerUnit = (HARGA_BESI_PER_KG * totalBerat) * quantity;
                } else {
                    hargaPerUnit = ((HARGA_BESI_PER_KG - 500) * totalBerat) * quantity;
                }
            }
            
            const hargaBulat = Math.ceil(hargaPerUnit / 1000) * 1000;
            document.getElementById('estimated-price-per-unit').innerHTML = 'Rp ' + hargaBulat.toLocaleString('id-ID');
            
            return totalBerat;
        }
        
        // ==================== FUNGSI POLE & GUARDRAIL ====================
        function updateOtherEstimate() {
            const sizeCoeff = parseFloat(document.getElementById('size-coefficient').value) || 1;
            const weight = parseFloat(document.getElementById('weight').value) || 1;
            const quantity = parseInt(document.getElementById('other-quantity').value) || 1;
            const total = BASE_PRICE * sizeCoeff * weight * quantity;
            document.getElementById('estimated-price-other').innerHTML = 'Rp ' + total.toLocaleString('id-ID');
        }
        
        // ==================== DATA PRODUK UNTUK KALKULATOR ====================
        const productSizeOptions = {
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
                { label: "Tinggi 10m - Bentangan 2100mm", value: "10_2100", coefficient: 19.0, defaultWeight: 115 }
            ],
            guardrail: [
                { label: "Standard W-Beam Section", value: "std_wbeam", coefficient: 2.5, defaultWeight: 15 },
                { label: "Heavy Duty W-Beam Section", value: "hd_wbeam", coefficient: 4.0, defaultWeight: 25 },
                { label: "Complete Set (8 parts)", value: "complete_set", coefficient: 15.0, defaultWeight: 85 }
            ]
        };

        function updateSizeOptions() {
            const productType = document.getElementById('calc-product-type').value;
            if (productType === 'grating') return;
            
            const sizeSelect = document.getElementById('calc-product-size');
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
            
            // Hapus event listener lama untuk menghindari duplikasi
            const newSizeSelect = sizeSelect.cloneNode(true);
            sizeSelect.parentNode.replaceChild(newSizeSelect, sizeSelect);
            newSizeSelect.id = 'calc-product-size';
            
            newSizeSelect.addEventListener('change', function() {
                const selected = newSizeSelect.options[newSizeSelect.selectedIndex];
                if (selected && selected.value) {
                    const defaultWeight = parseFloat(selected.getAttribute('data-default-weight')) || 1;
                    document.getElementById('weight').value = defaultWeight;
                    document.getElementById('size-coefficient').value = parseFloat(selected.getAttribute('data-coefficient')) || 1;
                    updateOtherEstimate();
                }
            });
        }

        function toggleCalcPanel() {
            const productType = document.getElementById('calc-product-type').value;
            const gratingPanel = document.getElementById('calc-grating-panel');
            const otherPanel = document.getElementById('calc-other-panel');
            const calculatorImage = document.getElementById('calculator-image-container');
            
            if (productType === 'grating') {
                gratingPanel.classList.remove('hidden');
                otherPanel.classList.add('hidden');
                // Tampilkan gambar calculator untuk Steel Grating
                if (calculatorImage) calculatorImage.classList.remove('hidden');
                calculateSteelGratingWeight();
            } else {
                gratingPanel.classList.add('hidden');
                otherPanel.classList.remove('hidden');
                // Sembunyikan gambar calculator untuk Pole dan Guardrail
                if (calculatorImage) calculatorImage.classList.add('hidden');
                updateOtherEstimate();
            }
        }

        // ==================== FUNGSI KERANJANG ====================
        window.addToCartCalc = function() {
            const productType = document.getElementById('calc-product-type').value;
            
            if (productType === 'grating') {
                const panjang = parseFloat(document.getElementById('grating-length').value);
                const lebar = parseFloat(document.getElementById('grating-width').value);
                const kondisi = document.getElementById('grating-coating').value;
                const jenis = document.getElementById('grating-type').value;
                const quantity = parseInt(document.getElementById('grating-quantity').value);
                const tinggiBearing = document.getElementById('bearing-height').value;
                const tebalBearing = getBearingThickness();
                const jarakBearing = document.getElementById('bearing-spacing').value;
                const jarakCrossbar = document.getElementById('crossbar-spacing').value;
                const totalBerat = calculateSteelGratingWeight();
                const hargaPerUnit = parseFloat(document.getElementById('estimated-price-per-unit').innerText.replace(/[^0-9]/g, '')) || 0;
                const subtotal = hargaPerUnit * quantity;
                
                if (!panjang || !lebar || panjang <= 0 || lebar <= 0) {
                    alert('Masukkan Panjang dan Lebar yang valid');
                    return;
                }
                
                cart.push({
                    id: Date.now(),
                    type: 'Steel Grating',
                    panjang: panjang,
                    lebar: lebar,
                    kondisi: kondisi === 'galvanis' ? 'Galvanis' : 'Tanpa Galvanis',
                    jenis: jenis === 'serrated' ? 'Serrated' : 'Polos',
                    quantity: quantity,
                    beratTotal: totalBerat,
                    hargaPerUnit: hargaPerUnit,
                    subtotal: subtotal,
                    tinggiBearing: tinggiBearing,
                    tebalBearing: tebalBearing,
                    jarakBearing: jarakBearing,
                    jarakCrossbar: jarakCrossbar
                });
            } else {
                const sizeCoeff = parseFloat(document.getElementById('size-coefficient').value);
                const weight = parseFloat(document.getElementById('weight').value);
                const quantity = parseInt(document.getElementById('other-quantity').value);
                const productName = productType === 'pole' ? 'Pole/Tiang' : 'Guard Rail';
                
                if (!sizeCoeff || sizeCoeff <= 0 || !weight || weight <= 0) {
                    alert('Masukkan koefisien ukuran dan berat yang valid');
                    return;
                }
                
                const hargaPerUnit = BASE_PRICE * sizeCoeff * weight;
                const subtotal = hargaPerUnit * quantity;
                
                cart.push({
                    id: Date.now(),
                    type: productName,
                    koefisien: sizeCoeff,
                    berat: weight,
                    quantity: quantity,
                    hargaPerUnit: hargaPerUnit,
                    subtotal: subtotal
                });
            }
            renderCart();
            alert('Item berhasil ditambahkan ke keranjang!');
        };

        function renderCart() {
            const cartDiv = document.getElementById('cart-items');
            const totalDiv = document.getElementById('cart-total');
            
            if (cart.length === 0) {
                cartDiv.innerHTML = '<p class="text-slate-500 text-center py-4">Belum ada item di keranjang</p>';
                totalDiv.classList.add('hidden');
                return;
            }
            
            let html = '';
            let grandTotal = 0;
            
            cart.forEach((item, index) => {
                grandTotal += item.subtotal;
                if (item.type === 'Steel Grating') {
                    html += '<div class="bg-white p-3 rounded-lg border border-emerald-200 flex justify-between items-center">' +
                        '<div><span class="font-bold text-manufacture">' + item.type + '</span><br>' +
                        '<span class="text-sm">' + item.jenis + ' - ' + item.kondisi + '</span><br>' +
                        '<span class="text-xs">' + item.panjang + 'mm x ' + item.lebar + 'mm | ' + item.quantity + ' unit | Berat: ' + item.beratTotal.toFixed(2) + 'kg/unit</span><br>' +
                        '<span class="text-xs text-slate-400">H/Thd: ' + item.tinggiBearing + '/' + item.tebalBearing + 'mm | Jarak: ' + item.jarakBearing + '/' + item.jarakCrossbar + 'mm</span></div>' +
                        '<div class="text-right"><div class="font-bold">Rp ' + item.subtotal.toLocaleString('id-ID') + '</div>' +
                        '<button onclick="removeFromCartCalc(' + index + ')" class="text-red-500 text-xs hover:text-red-700">Hapus</button></div></div>';
                } else {
                    html += '<div class="bg-white p-3 rounded-lg border border-emerald-200 flex justify-between items-center">' +
                        '<div><span class="font-bold text-manufacture">' + item.type + '</span><br>' +
                        '<span class="text-xs">Koef: ' + item.koefisien + ' | Berat: ' + item.berat + 'kg | ' + item.quantity + ' unit</span></div>' +
                        '<div class="text-right"><div class="font-bold">Rp ' + item.subtotal.toLocaleString('id-ID') + '</div>' +
                        '<button onclick="removeFromCartCalc(' + index + ')" class="text-red-500 text-xs hover:text-red-700">Hapus</button></div></div>';
                }
            });
            
            cartDiv.innerHTML = html;
            totalDiv.innerHTML = 'Total: Rp ' + grandTotal.toLocaleString('id-ID');
            totalDiv.classList.remove('hidden');
        }

        window.removeFromCartCalc = function(index) {
            cart.splice(index, 1);
            renderCart();
            document.getElementById('price-result').classList.add('hidden');
        };

        window.clearCartCalc = function() {
            if (cart.length > 0 && confirm('Yakin ingin mengosongkan keranjang?')) {
                cart = [];
                renderCart();
                document.getElementById('price-result').classList.add('hidden');
            }
        };

        window.calculateTotalPriceCalc = function() {
            if (cart.length === 0) {
                alert('Keranjang masih kosong');
                return;
            }
            let total = 0;
            let breakdown = '';
            cart.forEach(item => {
                total += item.subtotal;
                if (item.type === 'Steel Grating') {
                    breakdown += item.jenis + ' ' + item.kondisi + ' (' + item.panjang + 'x' + item.lebar + 'mm) x' + item.quantity + ' = Rp ' + item.subtotal.toLocaleString('id-ID') + '<br>';
                } else {
                    breakdown += item.type + ' x' + item.quantity + ' = Rp ' + item.subtotal.toLocaleString('id-ID') + '<br>';
                }
            });
            document.getElementById('total-price').innerHTML = 'Rp ' + total.toLocaleString('id-ID');
            document.getElementById('price-breakdown').innerHTML = breakdown;
            document.getElementById('price-result').classList.remove('hidden');
        };

        // ==================== FUNGSI ETALASE (SLIDESHOW PRODUK) ====================
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
            if (autoSlideInterval) clearInterval(autoSlideInterval);
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

        // ==================== FUNGSI MODAL ====================
        function closeModal() {
            document.getElementById('specModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        const gratingData = [
            { b: 3, w30: "-", w40: "-", w60: 125 }, { b: 4, w30: 95, w40: 125, w60: 185 },
            { b: 5, w30: 125, w40: 165, w60: 245 }, { b: 6, w30: 155, w40: 205, w60: 305 },
            { b: 7, w30: 185, w40: 245, w60: 365 }, { b: 8, w30: 215, w40: 285, w60: 425 },
            { b: 9, w30: 245, w40: 325, w60: 485 }, { b: 10, w30: 275, w40: 365, w60: 545 },
            { b: 11, w30: 305, w40: 405, w60: 605 }, { b: 12, w30: 335, w40: 445, w60: 665 },
            { b: 13, w30: 365, w40: 485, w60: 725 }, { b: 14, w30: 395, w40: 525, w60: 785 },
            { b: 15, w30: 425, w40: 565, w60: 845 }, { b: 16, w30: 455, w40: 605, w60: 905 },
            { b: 17, w30: 485, w40: 645, w60: 965 }, { b: 18, w30: 515, w40: 685, w60: 1025 },
            { b: 19, w30: 545, w40: 725, w60: "-" }, { b: 20, w30: 575, w40: 765, w60: "-" },
            { b: 21, w30: 605, w40: 805, w60: "-" }, { b: 22, w30: 635, w40: 845, w60: "-" },
            { b: 23, w30: 665, w40: 885, w60: "-" }, { b: 24, w30: 695, w40: 925, w60: "-" },
            { b: 25, w30: 725, w40: 965, w60: "-" }, { b: 26, w30: 755, w40: 1005, w60: "-" },
            { b: 27, w30: 785, w40: "-", w60: "-" }, { b: 28, w30: 815, w40: "-", w60: "-" },
            { b: 29, w30: 845, w40: "-", w60: "-" }, { b: 30, w30: 875, w40: "-", w60: "-" },
            { b: 31, w30: 905, w40: "-", w60: "-" }, { b: 32, w30: 935, w40: "-", w60: "-" },
            { b: 33, w30: 965, w40: "-", w60: "-" }, { b: 34, w30: 995, w40: "-", w60: "-" }
        ];

        window.openGratingModal = function() {
            document.getElementById('modal-title').innerText = 'Spesifikasi Lengkap Steel Grating';
            let html = '<div class="mb-6 rounded-lg overflow-hidden border border-emerald-200 bg-white"><img src="/steel-grating-spec.png" class="w-full h-auto object-contain"></div>';
            html += '<table class="w-full text-center text-xs border-collapse bg-white rounded-lg shadow-md"><thead><tr class="bg-manufacture text-white"><th class="p-2 border border-emerald-800" rowspan="2">Number of Bearing</th><th class="p-2 border border-emerald-800" colspan="3">Nominal Width (mm)</th></tr><tr class="bg-manufacture-light text-white"><th>30</th><th>40</th><th>60</th></tr></thead><tbody>';
            for (let i = 0; i < gratingData.length; i++) {
                const item = gratingData[i];
                html += '<tr class="' + (i % 2 === 0 ? 'bg-white' : 'bg-emerald-50') + '"><td class="p-2 border border-slate-200 font-black">' + item.b + '</td><td class="p-2 border border-slate-200">' + item.w30 + '</td><td class="p-2 border border-slate-200">' + item.w40 + '</td><td class="p-2 border border-slate-200">' + item.w60 + '</td></tr>';
            }
            html += '</tbody></table>';
            document.getElementById('modal-body').innerHTML = html;
            document.getElementById('specModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };

        window.openPoleModal = function() {
            document.getElementById('modal-title').innerText = 'Spesifikasi Lengkap High Quality Pole';
            let html = '<div class="mb-6 rounded-lg overflow-hidden border border-emerald-200 bg-white"><img src="/pole-spec.png" class="w-full h-auto object-contain"></div>';
            html += '<table class="w-full text-center text-xs border-collapse bg-white rounded-lg shadow-md"><thead><tr class="bg-manufacture text-white"><th>Tinggi (m)</th><th>Bentangan (mm)</th><th>Radius (mm)</th><th>Tapak (mm)</th><th>Angkur (mm)</th></tr></thead><tbody>';
            const poleData = [
                { h: 6, b: "1500/2100", r: "1400/1800", tapak: "300x300x16", angkur: "16x500x100" },
                { h: 7, b: "1500/2100", r: "1400/1800", tapak: "300x300x16", angkur: "16x500x100" },
                { h: 8, b: "1500/2100", r: "1400/1800", tapak: "300x300x16", angkur: "19x500x100" },
                { h: 9, b: "1500/2100", r: "1400/1800", tapak: "300x300x16", angkur: "19x500x100" },
                { h: 10, b: "1500/2100", r: "1400/1800", tapak: "400x400x19", angkur: "22x600x100" },
                { h: 11, b: "1500/2100", r: "1400/1800", tapak: "400x400x19", angkur: "22x600x100" },
                { h: 12, b: "1500/2100", r: "1400/1800", tapak: "400x400x19", angkur: "22x600x100" },
                { h: 13, b: "1500/2100", r: "1400/1800", tapak: "400x400x19", angkur: "22x600x100" },
                { h: 14, b: "1500/2100", r: "1400/1800", tapak: "400x400x19", angkur: "22x700x100" },
                { h: 15, b: "1500/2100", r: "1400/1800", tapak: "400x400x19", angkur: "22x800x100" }
            ];
            for (let i = 0; i < poleData.length; i++) {
                const item = poleData[i];
                html += '<tr class="' + (i % 2 === 0 ? 'bg-white' : 'bg-emerald-50') + '"><td class="p-2 border border-slate-200 font-black">' + item.h + '</td><td class="p-2 border border-slate-200">' + item.b + '</td><td class="p-2 border border-slate-200">' + item.r + '</td><td class="p-2 border border-slate-200">' + item.tapak + '</td><td class="p-2 border border-slate-200">' + item.angkur + '</td></tr>';
            }
            html += '</tbody></table>';
            document.getElementById('modal-body').innerHTML = html;
            document.getElementById('specModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };

        window.openGuardrailModal = function() {
            document.getElementById('modal-title').innerText = 'Spesifikasi Lengkap Guard Rail';
            let html = '<div class="mb-6 rounded-lg overflow-hidden border border-emerald-200 bg-white"><img src="/guardrail-spec.png" class="w-full h-auto object-contain"></div>';
            html += '<table class="w-full text-center text-xs border-collapse bg-white rounded-lg shadow-md"><thead><tr class="bg-manufacture text-white"><th>Part No.</th><th>Part Name</th><th>Size</th><th>Quantity</th></tr></thead><tbody>';
            const guardrailData = [
                { no: '1', name: 'W-Beam Section', size: '312 x 83 x 2.67', qty: 'N' },
                { no: '2', name: 'Steel Block', size: 'U175 x 75-350L x t', qty: '2N+1' },
                { no: '3', name: 'Steel Post', size: 'U175 x 75-1800L x t', qty: '2N+1' },
                { no: '4', name: 'End Block', size: '410x225x2.67-700L', qty: '2' },
                { no: '5', name: 'Hexagon Bolt', size: 'M16 x 35', qty: '4N+2' },
                { no: '6', name: 'Fastener', size: '4.5 x 45 x 75', qty: '2N+1' },
                { no: '7', name: 'Splice Bolt', size: 'M16 x 40', qty: '8N+8' },
                { no: '8', name: 'Splice Bolt', size: 'M16 x 45', qty: '2N+1' }
            ];
            for (let i = 0; i < guardrailData.length; i++) {
                const item = guardrailData[i];
                html += '<tr class="' + (i % 2 === 0 ? 'bg-white' : 'bg-emerald-50') + '"><td class="p-2 border border-slate-200 font-black">' + item.no + '</td><td class="p-2 border border-slate-200">' + item.name + '</td><td class="p-2 border border-slate-200">' + item.size + '</td><td class="p-2 border border-slate-200">' + item.qty + '</td></tr>';
            }
            html += '</tbody></table>';
            document.getElementById('modal-body').innerHTML = html;
            document.getElementById('specModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };

        // ==================== EVENT LISTENERS ====================
        // Event untuk kalkulator
        document.getElementById('calc-product-type').addEventListener('change', function() {
            toggleCalcPanel();
            if (this.value !== 'grating') {
                updateSizeOptions();
            }
        });
        
        // Event untuk input steel grating
        const gratingInputs = ['grating-length', 'grating-width', 'bearing-height', 'bearing-spacing', 'crossbar-spacing', 'price-per-kg', 'price-galvanis', 'grating-coating', 'grating-type', 'grating-quantity'];
        gratingInputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.removeEventListener('input', calculateSteelGratingWeight);
                el.addEventListener('input', calculateSteelGratingWeight);
            }
        });
        
        // Event untuk pole/guardrail
        document.getElementById('size-coefficient').addEventListener('input', updateOtherEstimate);
        document.getElementById('weight').addEventListener('input', updateOtherEstimate);
        document.getElementById('other-quantity').addEventListener('input', updateOtherEstimate);
        
        // ==================== INITIALIZATION ====================
        document.addEventListener('DOMContentLoaded', () => {
            // Inisialisasi kalkulator
            toggleCalcPanel();
            calculateSteelGratingWeight();
            updateOtherEstimate();
            
            // Inisialisasi etalase (slideshow produk)
            showProduct('grating');
            startAutoSlide();
            initImageSlideshow('grating-slides', 5000);
            initImageSlideshow('pole-slides', 5000);
            initImageSlideshow('guardrail-slides', 5000);
            
            // Set harga readonly
            document.getElementById('price-per-kg').value = HARGA_BESI_PER_KG;
            document.getElementById('price-galvanis').value = HARGA_GALVANIS_PER_KG;
            
            // Set nilai default untuk crossbar spacing jika P=60
            function checkCrossbarOnLoad() {
                const jarakBearing = document.getElementById('bearing-spacing').value;
                const crossbarSelect = document.getElementById('crossbar-spacing');
                if (jarakBearing == 60) {
                    crossbarSelect.value = '50';
                    for (let i = 0; i < crossbarSelect.options.length; i++) {
                        if (crossbarSelect.options[i].value === '100') {
                            crossbarSelect.options[i].disabled = true;
                        }
                    }
                }
            }
            checkCrossbarOnLoad();
        });
    </script>
    </body>
    </html>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server PT. Amanah Adi Guna running on http://localhost:' + PORT);
});

module.exports = app;