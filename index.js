const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PT. Amanah Adi Guna | Steel Grating Specialist</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link rel="icon" type="image/png" href="/logo amanah adi guna.png">
        <style>
            html { scroll-behavior: smooth; }
            body { font-family: 'Montserrat', 'Rajdhani', sans-serif; }
            h1, h2, h3, h4, h5, .font-industrial { font-family: 'Rajdhani', 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 0.5px; }
            .industrial-text { font-family: 'Rajdhani', monospace; font-weight: 600; letter-spacing: 1px; }
            .bg-manufacture { background-color: #0F3B2C; }
            .bg-manufacture-dark { background-color: #0A2A1F; }
            .bg-manufacture-light { background-color: #1A5A44; }
            .text-manufacture { color: #0F3B2C; }
            .border-manufacture { border-color: #0F3B2C; }
            .price-result { background: linear-gradient(135deg, #0F3B2C 0%, #1A5A44 100%); }
            .hidden { display: none; }
            .grating-slides { transition: opacity 1000ms ease-in-out; }
            .product-btn.active { background-color: #0F3B2C; color: white; }
            .cart-item:hover { background-color: #f0fdf4; }
            .industrial-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A5A44' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
            .calculator-image { transition: opacity 0.3s ease-in-out; }
            
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
            @keyframes fadeInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
            @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
            @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
            @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
            @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
            @keyframes borderGlow { 0%, 100% { border-color: rgba(16, 185, 129, 0.3); } 50% { border-color: rgba(16, 185, 129, 0.8); } }
            @keyframes floatParticle { 0% { transform: translateY(0) translateX(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100vh) translateX(100px); opacity: 0; } }
            
            .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
            .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
            .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
            .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
            .animate-float { animation: float 3s ease-in-out infinite; }
            .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
            .animate-border-glow { animation: borderGlow 2s ease-in-out infinite; }
            
            .reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
            .reveal.active { opacity: 1; transform: translateY(0); }
            .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.8s ease-out; }
            .reveal-left.active { opacity: 1; transform: translateX(0); }
            .reveal-right { opacity: 0; transform: translateX(30px); transition: all 0.8s ease-out; }
            .reveal-right.active { opacity: 1; transform: translateX(0); }
            .reveal-scale { opacity: 0; transform: scale(0.95); transition: all 0.6s ease-out; }
            .reveal-scale.active { opacity: 1; transform: scale(1); }
            
            .hover-lift { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
            .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); }
            
            .nav-link { position: relative; }
            .nav-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -4px; left: 0; background: #10b981; transition: width 0.3s ease; }
            .nav-link:hover::after { width: 100%; }
            
            .glass-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
            
            .particle { position: absolute; border-radius: 50%; background: rgba(255, 255, 255, 0.3); pointer-events: none; animation: floatParticle linear infinite; }
            
            section { transition: all 0.3s ease-in-out; }
            
            .gradient-hover { background-size: 200% 200%; transition: background-position 0.5s ease; }
            .gradient-hover:hover { background-position: 100% 100%; }
        </style>
    </head>
    <body class="bg-slate-50 text-slate-900 font-sans industrial-pattern">

        <!-- NAVBAR -->
        <nav class="fixed w-full z-50 bg-emerald-900/60 backdrop-blur-xl border-b border-emerald-700/30 shadow-2xl transition-all duration-300" id="navbar">
            <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div class="flex items-center space-x-3">
                    <img src="/logo amanah adi guna.png" alt="Logo PT Amanah Adi Guna" class="h-10 w-auto hover:scale-110 transition-transform duration-300">
                    <div class="text-xl font-bold text-white tracking-tight text-nowrap industrial-text">AMANAH ADI GUNA</div>
                </div>
                <div class="hidden md:flex space-x-8 font-medium text-white/80">
                    <a href="#home" class="nav-link hover:text-white transition-colors duration-300">Beranda</a>
                    <a href="#about" class="nav-link hover:text-white transition-colors duration-300">Tentang Kami</a>
                    <a href="#produk" class="nav-link hover:text-white transition-colors duration-300">Produk</a>
                    <a href="#calculator" class="nav-link hover:text-white transition-colors duration-300">Kalkulator Estimasi</a>
                    <a href="#whyus" class="nav-link hover:text-white transition-colors duration-300">Keunggulan</a>
                </div>
            </div>
        </nav>

        <!-- HOME SECTION -->
        <section id="home" class="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0" style="background: linear-gradient(135deg, rgba(10,42,31,0.95) 0%, rgba(26,90,68,0.9) 50%, rgba(15,59,44,0.95) 100%), url('/pekerja.png') center/cover no-repeat;">
            <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0 bg-repeat" style="background-image: url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z'/%3E%3C/g%3E%3C/svg%3E'); background-size: 20px 20px;"></div>
            </div>
            <div id="particles-container" class="absolute inset-0 pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto px-6 relative z-10 w-full py-10 lg:py-20">
                <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    
                    <!-- Left Content -->
                    <div class="lg:w-1/2 text-center lg:text-left animate-fadeInLeft space-y-8">
                        
                        <div class="space-y-4">
                            <h1 class="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white industrial-text">
                                Mitra Strategis Pembangunan
                            </h1>
                            <h2 class="text-3xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent industrial-text">
                                Infrastruktur Baja Nasional
                            </h2>
                        </div>
                        
                        <p class="text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Menghadirkan solusi steel grating kelas dunia dengan komitmen teguh terhadap kualitas, integritas struktural, dan keandalan.
                        </p>
                        
                        <div class="flex flex-wrap gap-5 justify-center lg:justify-start pt-2">
                            <a href="#about" class="group bg-white text-manufacture px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-3">
                                <span>Pelajari Selengkapnya</span>
                                <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                            </a>
                            <a href="https://wa.me/6281332222323?text=Halo%20saya%20tertarik%20dengan%20produk%20steel%20grating%20dari%20PT.%20Amanah%20Adi%20Guna" target="_blank" class="group border-2 border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-3 text-white">
                                <span>Hubungi Kami</span>
                                <i class="fab fa-whatsapp group-hover:rotate-12 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Right Content -->
                    <div class="lg:w-1/2 hidden lg:block animate-fadeInRight">
                        <div class="relative animate-float">
                            <div class="absolute -top-16 -left-16 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-16 -right-16 w-48 h-48 bg-emerald-600/20 rounded-full blur-3xl"></div>
                            <div class="glass-card rounded-3xl p-10 border border-white/20">
                                <div class="text-center space-y-5">
                                    <i class="fas fa-industry text-7xl text-emerald-400"></i>
                                    <h3 class="text-2xl md:text-3xl font-black text-white industrial-text">Kualitas Terpercaya</h3>
                                    <p class="text-emerald-200/80 text-base leading-relaxed">Steel grating berkualitas tinggi dengan standar internasional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <!-- Scroll Down Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" class="text-white/60 hover:text-white transition-colors">
                    <i class="fas fa-chevron-down text-2xl"></i>
                </a>
            </div>
        </section>
        <!-- ABOUT SECTION -->
        <section id="about" class="py-24 relative overflow-hidden" style="background-image: linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.85)), url('/Background-Tentang.png'); background-size: cover; background-position: center; background-attachment: fixed;">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-16 items-center">
                    <div class="reveal-left">
                        <div class="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
                            <span class="text-manufacture font-bold tracking-widest uppercase text-sm">Tentang Kami</span>
                        </div>
                        <h3 class="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-slate-800 leading-snug industrial-text">Berdedikasi dalam <span class="text-manufacture">Penyediaan Steel Grating</span> Sejak 2024</h3>
                        <p class="text-slate-600 mb-6 leading-relaxed text-lg">Berdiri pada tanggal 08 Agustus 2024 di Kota Gresik, Jawa Timur, PT. Amanah Adi Guna berspesialisasi dalam penyediaan steel grating dan material infrastruktur baja hilir.</p>
                        <p class="text-slate-600 mb-8 leading-relaxed">Misi kami adalah menjadi mitra strategis pembangunan nasional yang menghadirkan solusi infrastruktur baja kelas dunia melalui komitmen terhadap integritas struktural, keamanan jalan, dan keberlanjutan lingkungan.</p>
                        <div class="grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
                            <div class="flex items-start gap-3">
                                <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-certificate text-manufacture"></i></div>
                                <div><h4 class="font-black text-manufacture industrial-text">Legalitas Terjamin</h4><p class="text-sm text-slate-500">Terdaftar resmi di AHU & NIB sejak Agustus 2024.</p></div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-map-marker-alt text-manufacture"></i></div>
                                <div><h4 class="font-black text-manufacture industrial-text">Lokasi Strategis</h4><p class="text-sm text-slate-500">Berada di pusat wilayah Gresik.</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="reveal-right">
                        <div class="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-2 border-emerald-200/50 shadow-2xl hover-lift">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-12 h-12 bg-manufacture rounded-xl flex items-center justify-center"><i class="fas fa-building text-white text-xl"></i></div>
                                <h4 class="text-xl font-black text-manufacture industrial-text">Informasi Legalitas</h4>
                            </div>
                            <ul class="space-y-4 text-slate-700">
                                <li class="flex items-start p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-300"><i class="fas fa-check-circle text-emerald-600 mt-1 mr-3 text-lg"></i><span><strong class="industrial-text">Akta Pendirian:</strong><br>AHU-045746.AH.01.30.Tahun 2024</span></li>
                                <li class="flex items-start p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-300"><i class="fas fa-check-circle text-emerald-600 mt-1 mr-3 text-lg"></i><span><strong class="industrial-text">NIB:</strong><br>2208240036555</span></li>
                                <li class="flex items-start p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-300"><i class="fas fa-check-circle text-emerald-600 mt-1 mr-3 text-lg"></i><span><strong class="industrial-text">NPWP:</strong><br>0125.7774.3364.2000</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CLIENTS SECTION -->
        <section class="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="reveal">
                    <div class="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full"><span class="text-manufacture font-bold tracking-widest uppercase text-sm">Klien Kami</span></div>
                    <h2 class="text-3xl md:text-4xl font-black text-manufacture mb-4 industrial-text">Our Valued Clients</h2>
                    <div class="w-20 h-1.5 bg-emerald-600 mx-auto mb-12 rounded-full"></div>
                    <p class="text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">Kami bangga telah menjalin kemitraan strategis dengan berbagai perusahaan terkemuka untuk mendukung pembangunan infrastruktur yang berkelanjutan.</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    <div class="reveal-scale p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover-lift"><img src="/pln nusantara power.png" alt="PLN Nusantara Power" class="max-h-16 w-auto object-contain"></div>
                    <div class="reveal-scale p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover-lift" style="transition-delay: 0.1s;"><img src="/pln nusantara power services.png" alt="PLN Nusantara Power Services" class="max-h-16 w-auto object-contain"></div>
                    <div class="reveal-scale p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover-lift" style="transition-delay: 0.2s;"><img src="/jacobis.png" alt="Jacobis" class="max-h-14 w-auto object-contain"></div>
                    <div class="reveal-scale p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover-lift" style="transition-delay: 0.3s;"><img src="/espe.jpg" alt="ESPE" class="max-h-14 w-auto object-contain"></div>
                </div>
            </div>
        </section>

        <!-- PRODUK SECTION -->
        <section id="produk" class="py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-manufacture text-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-5">
                <div class="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
            </div>
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-16 reveal">
                    <div class="inline-block mb-4 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-400/30"><span class="text-emerald-300 font-bold tracking-widest uppercase text-sm">Katalog Produk</span></div>
                    <h3 class="text-3xl md:text-4xl lg:text-5xl font-black text-white industrial-text">Spesifikasi Steel Grating</h3>
                    <div class="w-20 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
                </div>
                <div class="bg-white rounded-3xl shadow-2xl border-2 border-emerald-200/50 overflow-hidden max-w-5xl mx-auto animate-border-glow">
                    
                    <!-- Steel Grating Content -->
                    <div id="content-grating" class="flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-emerald-100">
                            <div class="relative bg-gradient-to-br from-emerald-50 to-emerald-100 w-full aspect-video rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-emerald-200">
                                <img src="/steel-grating.png" id="grating-img-1" class="grating-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" alt="Steel Grating Product">
                                <img src="/steel-grating-spec.png" id="grating-img-2" class="grating-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" alt="Steel Grating Spec Diagram">
                            </div>
                            <h4 class="text-2xl font-black text-manufacture mb-4 industrial-text">Steel Grating</h4>
                            <p class="text-slate-600 leading-relaxed">Material ringan dengan daya tahan beban tinggi. Desain ekonomis, anti-selip, serta memastikan sirkulasi udara dan cahaya maksimal. Mudah dipasang dan tahan lama.</p>
                            <div class="mt-10"><a href="https://wa.me/6281332222323?text=halo%20saya%20ingin%20konsultasi%20mengenai%20produk%20steel%20grating" target="_blank" class="bg-[#25D366] text-white px-8 py-4 rounded-xl font-black hover:bg-green-400 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"><i class="fab fa-whatsapp mr-2 text-xl"></i> Konsultasi via WhatsApp</a></div>
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
                            <button onclick="openGratingModal()" class="mt-4 w-full py-3 bg-emerald-50 text-manufacture text-xs font-black rounded-lg hover:bg-emerald-100 transition-all duration-300 flex items-center justify-center border border-emerald-200 hover:shadow-md"><i class="fas fa-list-ul mr-2"></i> Lihat Selengkapnya (32 Tipe)</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CALCULATOR SECTION -->
        <section id="calculator" class="py-24 bg-gradient-to-br from-white to-slate-50">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-12 reveal">
                    <div class="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full"><span class="text-manufacture font-bold tracking-widest uppercase text-sm">Estimasi Harga</span></div>
                    <h3 class="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 industrial-text">Kalkulator Estimasi Biaya Steel Grating</h3>
                    <div class="w-20 h-1.5 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
                    <p class="text-slate-600 mt-6 max-w-2xl mx-auto">Pilih jenis steel grating, tentukan ukuran dan parameter, lalu tambahkan ke keranjang</p>
                </div>

                <div class="max-w-6xl mx-auto bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-2xl overflow-hidden border-2 border-emerald-200 hover-lift reveal-scale">
                    <div class="bg-manufacture p-6 gradient-hover">
                        <h4 class="text-white text-2xl font-black text-center industrial-text"><i class="fas fa-calculator mr-3 animate-pulse-slow"></i> Kalkulator Estimasi Harga</h4>
                    </div>
                    
                    <div class="p-8">
                        <div id="calculator-image-container" class="mb-6 text-center hidden">
                            <img id="calculator-image" src="/calculator-SG.png" alt="Calculator Illustration" class="calculator-image mx-auto max-h-48 object-contain rounded-lg border border-emerald-200 shadow-md">
                        </div>
                        <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-manufacture font-bold mb-2 industrial-text">Pilih Jenis Produk</label>
                            <select id="calc-product-type" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture bg-white font-semibold transition-all duration-300 hover:border-emerald-400">
                                <option value="grating">Steel Grating</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-manufacture font-bold mb-2 industrial-text">Sub Kategori</label>
                            <select id="calc-sub-category" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture bg-white font-semibold transition-all duration-300 hover:border-emerald-400">
                                <option value="standard">Standard (Steel Grating)</option>
                                <option value="stair-tread">Stair Tread</option>
                                <option value="sgt">SGT</option>
                                <option value="sgu">SGU</option>
                            </select>
                        </div>
                    </div>

                        <!-- Panel Steel Grating -->
                        <div id="calc-grating-panel" class="space-y-6 mt-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Panjang (mm)</label><input type="number" id="grating-length" value="1000" step="100" min="100" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSteelGratingWeight()"></div>
                                <div><label class="block text-manufacture font-bold mb-2">Lebar (mm)</label><input type="number" id="grating-width" value="500" step="50" min="50" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSteelGratingWeight()"></div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Tinggi Bearing (H) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="bearing-height-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleCustomInput('bearing-height')">
                                            <option value="65">65</option><option value="60">60</option><option value="55">55</option><option value="50">50</option><option value="45">45</option><option value="40">40</option><option value="35">35</option><option value="32">32</option><option value="30" selected>30</option><option value="25">25</option><option value="20">20</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="bearing-height-custom" placeholder="Custom (mm)" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateSteelGratingWeight()">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Tebal Bearing (T) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="bearing-thickness-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleCustomInput('bearing-thickness')">
                                            <option value="5">5</option><option value="4">4</option><option value="3" selected>3</option><option value="2">2</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="bearing-thickness-custom" placeholder="Custom (mm)" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateSteelGratingWeight()">
                                    </div>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Jarak antar Bearing (P) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="bearing-spacing-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleCustomInput('bearing-spacing')">
                                            <option value="30">30</option><option value="40" selected>40</option><option value="60">60</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="bearing-spacing-custom" placeholder="Custom (mm)" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="onBearingSpacingChange()">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Jarak antar Crossbar (C) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="crossbar-spacing-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleCustomInput('crossbar-spacing')">
                                            <option value="50">50</option><option value="100" selected>100</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="crossbar-spacing-custom" placeholder="Custom (mm)" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateSteelGratingWeight()">
                                    </div>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Diameter Crossbar (D) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="crossbar-diameter-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleCustomInput('crossbar-diameter')">
                                            <option value="6">6</option><option value="10">10</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="crossbar-diameter-custom" placeholder="Custom (mm)" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateSteelGratingWeight()">
                                    </div>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Kondisi Barang</label><select id="grating-coating" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="calculateSteelGratingWeight()"><option value="galvanis">Galvanis</option><option value="non-galvanis">Tanpa Galvanis</option></select></div>
                                <div><label class="block text-manufacture font-bold mb-2">Jenis Barang</label><select id="grating-type" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="calculateSteelGratingWeight()"><option value="serrated">Serrated</option><option value="polos">Polos</option></select></div>
                            </div>

                            <div><label class="block text-manufacture font-bold mb-2">Jumlah Unit</label><input type="number" id="grating-quantity" value="1" min="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSteelGratingWeight()"></div>

                            <div class="bg-emerald-50 p-4 rounded-lg space-y-2">
                                <p class="text-sm text-slate-600 font-bold">Detail Perhitungan:</p>
                                <p class="text-xs text-slate-600">Jumlah Bearing: <strong id="calc-jumlah-bearing" class="text-manufacture">0</strong> buah</p>
                                <p class="text-xs text-slate-600">Volume Bearing: <strong id="calc-volume-bearing" class="text-manufacture">0</strong> mm³</p>
                                <p class="text-xs text-slate-600">Berat Bearing: <strong id="calc-berat-bearing" class="text-manufacture">0</strong> kg</p>
                                <p class="text-xs text-slate-600">Jumlah Crossbar: <strong id="calc-jumlah-crossbar" class="text-manufacture">0</strong> buah</p>
                                <p class="text-xs text-slate-600">Berat Crossbar: <strong id="calc-berat-crossbar" class="text-manufacture">0</strong> kg</p>
                                <p class="text-xs text-slate-600">Volume End Plate: <strong id="calc-volume-endplate" class="text-manufacture">0</strong> mm³</p>
                                <p class="text-xs text-slate-600">Berat End Plate: <strong id="calc-berat-endplate" class="text-manufacture">0</strong> kg</p>
                                <div class="border-t border-emerald-200 pt-2 mt-2">
                                    <p class="text-sm font-bold text-manufacture">Berat 1 Steel Grating: <strong id="calculated-weight" class="text-manufacture text-lg">0</strong> kg</p>
                                </div>
                            </div>

                            <div class="bg-manufacture p-4 rounded-lg text-white">
                                <p class="text-sm font-bold">Estimasi Harga per Unit:</p>
                                <p class="text-2xl font-black" id="estimated-price-per-unit">Rp 0</p>
                                <div class="text-xs opacity-75 mt-2 space-y-1">
                                    <p>Harga sebelum PPN: <span id="estimated-price-before-ppn" class="font-semibold">Rp 0</span></p>
                                    <p>PPN 11%: <span id="estimated-ppn-value" class="font-semibold">Rp 0</span></p>
                                    <p class="text-yellow-200">*Dibulatkan ke atas ribuan terdekat</p>
                                </div>
                            </div>
                        </div>

                        <!-- Panel Stair Tread -->
                        <div id="calc-stair-tread-panel" class="hidden space-y-6 mt-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Panjang (mm)</label><input type="number" id="stair-length" value="1000" step="100" min="100" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateStairTreadWeight()"></div>
                                <div><label class="block text-manufacture font-bold mb-2">Lebar (mm)</label><input type="number" id="stair-width" value="500" step="50" min="50" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateStairTreadWeight()"></div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Tinggi Bearing (H) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="stair-bearing-height-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleStairCustomInput('bearing-height')">
                                            <option value="65">65</option><option value="60">60</option><option value="55">55</option><option value="50">50</option><option value="45">45</option><option value="40">40</option><option value="35">35</option><option value="32">32</option><option value="30" selected>30</option><option value="25">25</option><option value="20">20</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="stair-bearing-height-custom" placeholder="Custom" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateStairTreadWeight()">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Tebal Bearing (T) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="stair-bearing-thickness-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleStairCustomInput('bearing-thickness')">
                                            <option value="5">5</option><option value="4">4</option><option value="3" selected>3</option><option value="2">2</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="stair-bearing-thickness-custom" placeholder="Custom" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateStairTreadWeight()">
                                    </div>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Jarak antar Bearing (P) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="stair-bearing-spacing-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleStairCustomInput('bearing-spacing')">
                                            <option value="30">30</option><option value="40" selected>40</option><option value="60">60</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="stair-bearing-spacing-custom" placeholder="Custom" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateStairTreadWeight()">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Jarak antar Crossbar (C) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="stair-crossbar-spacing-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleStairCustomInput('crossbar-spacing')">
                                            <option value="50">50</option><option value="100" selected>100</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="stair-crossbar-spacing-custom" placeholder="Custom" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateStairTreadWeight()">
                                    </div>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Diameter Crossbar (D) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="stair-diameter-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleStairCustomInput('diameter')">
                                            <option value="6">6</option><option value="10">10</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="stair-diameter-custom" placeholder="Custom" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateStairTreadWeight()">
                                    </div>
                                </div>
                                <div></div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Tinggi End Plate (H) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="stair-endplate-height-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleStairCustomInput('endplate-height')">
                                            <option value="65">65</option><option value="60">60</option><option value="55">55</option><option value="50">50</option><option value="45">45</option><option value="40">40</option><option value="35">35</option><option value="32">32</option><option value="30" selected>30</option><option value="25">25</option><option value="20">20</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="stair-endplate-height-custom" placeholder="Custom" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateStairTreadWeight()">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Tebal End Plate (T) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="stair-endplate-thickness-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleStairCustomInput('endplate-thickness')">
                                            <option value="5">5</option><option value="4">4</option><option value="3" selected>3</option><option value="2">2</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="stair-endplate-thickness-custom" placeholder="Custom" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateStairTreadWeight()">
                                    </div>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Tinggi Checkered Plate (H) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="stair-checkered-height-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleStairCustomInput('checkered-height')">
                                            <option value="65">65</option><option value="60">60</option><option value="55">55</option><option value="50">50</option><option value="45">45</option><option value="40">40</option><option value="35">35</option><option value="32">32</option><option value="30" selected>30</option><option value="25">25</option><option value="20">20</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="stair-checkered-height-custom" placeholder="Custom" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateStairTreadWeight()">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-manufacture font-bold mb-2">Tebal Checkered Plate (T) - mm</label>
                                    <div class="flex gap-2 items-start">
                                        <select id="stair-checkered-thickness-select" class="flex-1 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="toggleStairCustomInput('checkered-thickness')">
                                            <option value="5">5</option><option value="4">4</option><option value="3" selected>3</option><option value="2">2</option><option value="custom">Custom</option>
                                        </select>
                                        <input type="number" id="stair-checkered-thickness-custom" placeholder="Custom" class="hidden w-32 p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture" oninput="calculateStairTreadWeight()">
                                    </div>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Kondisi Barang</label><select id="stair-coating" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="calculateStairTreadWeight()"><option value="galvanis">Galvanis</option><option value="non-galvanis">Tanpa Galvanis</option></select></div>
                                <div><label class="block text-manufacture font-bold mb-2">Jenis Barang</label><select id="stair-type" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="calculateStairTreadWeight()"><option value="serrated">Serrated</option><option value="polos">Polos</option></select></div>
                            </div>

                            <div><label class="block text-manufacture font-bold mb-2">Jumlah Unit</label><input type="number" id="stair-quantity" value="1" min="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateStairTreadWeight()"></div>

                            <div class="bg-emerald-50 p-4 rounded-lg space-y-2">
                                <p class="text-sm text-slate-600 font-bold">Detail Perhitungan Stair Tread:</p>
                                <p class="text-xs text-slate-600">Jumlah Bearing: <strong id="stair-jumlah-bearing" class="text-manufacture">0</strong> buah</p>
                                <p class="text-xs text-slate-600">Berat Bearing: <strong id="stair-berat-bearing" class="text-manufacture">0</strong> kg</p>
                                <p class="text-xs text-slate-600">Jumlah Crossbar: <strong id="stair-jumlah-crossbar" class="text-manufacture">0</strong> buah</p>
                                <p class="text-xs text-slate-600">Berat Crossbar: <strong id="stair-berat-crossbar" class="text-manufacture">0</strong> kg</p>
                                <p class="text-xs text-slate-600">Berat End Plate: <strong id="stair-berat-endplate" class="text-manufacture">0</strong> kg</p>
                                <p class="text-xs text-slate-600">Berat Checkered Plate: <strong id="stair-berat-checkered" class="text-manufacture">0</strong> kg</p>
                                <div class="border-t border-emerald-200 pt-2 mt-2">
                                    <p class="text-sm font-bold text-manufacture">Berat 1 Stair Tread: <strong id="stair-calculated-weight" class="text-manufacture text-lg">0</strong> kg</p>
                                </div>
                            </div>

                            <div class="bg-manufacture p-4 rounded-lg text-white">
                                <p class="text-sm font-bold">Estimasi Harga per Unit:</p>
                                <p class="text-2xl font-black" id="stair-estimated-price">Rp 0</p>
                                <div class="text-xs opacity-75 mt-2 space-y-1">
                                    <p>Harga sebelum PPN: <span id="stair-price-before-ppn" class="font-semibold">Rp 0</span></p>
                                    <p>PPN 11%: <span id="stair-ppn-value" class="font-semibold">Rp 0</span></p>
                                    <p class="text-yellow-200">*Dibulatkan ke atas ribuan terdekat</p>
                                </div>
                            </div>
                        </div>

                        <!-- Panel SGT -->
                        <div id="calc-sgt-panel" class="hidden space-y-6 mt-6">
                            <p class="font-bold text-manufacture mb-3">Parameter SGT:</p>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Panjang SGT (b) - mm</label><input type="number" id="sgt-length-b" value="1000" step="100" min="100" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>
                                <div><label class="block text-manufacture font-bold mb-2">Lebar SGT (a) - mm</label><input type="number" id="sgt-width-a" value="500" step="50" min="50" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Tinggi SGT (h) - mm</label><input type="number" id="sgt-height-h" value="30" step="5" min="10" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>
                                <div><label class="block text-manufacture font-bold mb-2">Tebal Bearing (T) - mm</label><input type="number" id="sgt-thickness-t" value="3" step="1" min="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Jarak antar Bearing (P) - mm</label><input type="number" id="sgt-bearing-spacing-p" value="40" step="10" min="10" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>
                                <div><label class="block text-manufacture font-bold mb-2">Diameter Crossbar (D) - mm</label><input type="number" id="sgt-diameter-d" value="6" step="1" min="4" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Jarak antar Crossbar (C) - mm</label><input type="number" id="sgt-crossbar-spacing-c" value="100" step="10" min="50" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>
                                <div></div>
                            </div>

                            <div class="border-t border-emerald-200 pt-4 mt-2">
                                <p class="font-bold text-manufacture mb-3">Parameter Support Angel:</p>
                                <div class="grid md:grid-cols-3 gap-4">
                                    <div><label class="block text-manufacture font-bold mb-2 text-sm">Lebar Support (aS) - mm</label><input type="number" id="sgt-support-width-as" value="50" step="5" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>
                                    <div><label class="block text-manufacture font-bold mb-2 text-sm">Tinggi Support (hS) - mm</label><input type="number" id="sgt-support-height-hs" value="50" step="5" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>
                                    <div><label class="block text-manufacture font-bold mb-2 text-sm">Tebal Support (TS) - mm</label><input type="number" id="sgt-support-thickness-ts" value="5" step="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>
                                </div>
                                <p class="text-xs text-slate-400 mt-2">*Rumus support: (( (aS+hS)×2×b×TS ) + (0.25×π×8²×100×ROUNDDOWN(b/300) )) × 10^-9 × 7850</p>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Kondisi Barang</label><select id="sgt-coating" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="calculateSGTWeight()"><option value="galvanis">Galvanis</option><option value="non-galvanis">Tanpa Galvanis</option></select></div>
                                <div><label class="block text-manufacture font-bold mb-2">Jenis Barang</label><select id="sgt-type" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="calculateSGTWeight()"><option value="serrated">Serrated</option><option value="polos">Polos</option></select></div>
                            </div>

                            <div><label class="block text-manufacture font-bold mb-2">Jumlah Unit</label><input type="number" id="sgt-quantity" value="1" min="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGTWeight()"></div>

                            <div class="bg-emerald-50 p-4 rounded-lg space-y-2">
                                <p class="text-sm text-slate-600 font-bold">Detail Perhitungan SGT:</p>
                                <p class="text-xs text-slate-600">Berat Grating: <strong id="sgt-berat-grating" class="text-manufacture">0</strong> kg</p>
                                <p class="text-xs text-slate-600">Berat Support: <strong id="sgt-berat-support" class="text-manufacture">0</strong> kg</p>
                                <div class="border-t border-emerald-200 pt-2 mt-2">
                                    <p class="text-sm font-bold text-manufacture">Total Berat 1 Unit SGT: <strong id="sgt-calculated-weight" class="text-manufacture text-lg">0</strong> kg</p>
                                </div>
                            </div>

                            <div class="bg-manufacture p-4 rounded-lg text-white">
                                <p class="text-sm font-bold">Estimasi Harga per Unit:</p>
                                <p class="text-2xl font-black" id="sgt-estimated-price">Rp 0</p>
                                <div class="text-xs opacity-75 mt-2 space-y-1">
                                    <p>Harga sebelum PPN: <span id="sgt-price-before-ppn" class="font-semibold">Rp 0</span></p>
                                    <p>PPN 11%: <span id="sgt-ppn-value" class="font-semibold">Rp 0</span></p>
                                    <p class="text-yellow-200">*Dibulatkan ke atas ribuan terdekat</p>
                                </div>
                            </div>
                        </div>

                        <!-- Panel SGU -->
                        <div id="calc-sgu-panel" class="hidden space-y-6 mt-6">
                            <p class="font-bold text-manufacture mb-3">Parameter SGU:</p>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Panjang SGU (b) - mm</label><input type="number" id="sgu-length-b" value="1000" step="100" min="100" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGUWeight()"></div>
                                <div><label class="block text-manufacture font-bold mb-2">Lebar SGU (a) - mm</label><input type="number" id="sgu-width-a" value="500" step="50" min="50" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGUWeight()"></div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Tinggi SGU (h) - mm</label><input type="number" id="sgu-height-h" value="30" step="5" min="10" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGUWeight()"></div>
                                <div><label class="block text-manufacture font-bold mb-2">Tebal Bearing (T) - mm</label><input type="number" id="sgu-thickness-t" value="3" step="1" min="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGUWeight()"></div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Jarak antar Bearing (P) - mm</label><input type="number" id="sgu-bearing-spacing-p" value="40" step="10" min="10" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGUWeight()"></div>
                                <div><label class="block text-manufacture font-bold mb-2">Diameter Crossbar (D) - mm</label><input type="number" id="sgu-diameter-d" value="6" step="1" min="4" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGUWeight()"></div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Jarak antar Crossbar (C) - mm</label><input type="number" id="sgu-crossbar-spacing-c" value="100" step="10" min="50" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGUWeight()"></div>
                                <div></div>
                            </div>

                            <div class="border-t border-emerald-200 pt-4 mt-2">
                                <p class="font-bold text-manufacture mb-3">Parameter Support SGU:</p>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div><label class="block text-manufacture font-bold mb-2 text-sm">Ukuran Support (ahS) - mm</label><input type="number" id="sgu-support-size-ahs" value="50" step="5" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGUWeight()"></div>
                                    <div><label class="block text-manufacture font-bold mb-2 text-sm">Tebal Support (TS) - mm</label><input type="number" id="sgu-support-thickness-ts" value="5" step="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGUWeight()"></div>
                                </div>
                                <p class="text-xs text-slate-400 mt-2">*Rumus support: ((ahS + ahS) × 2 × TS × b) × 10^-9 × 7850</p>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div><label class="block text-manufacture font-bold mb-2">Kondisi Barang</label><select id="sgu-coating" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="calculateSGUWeight()"><option value="galvanis">Galvanis</option><option value="non-galvanis">Tanpa Galvanis</option></select></div>
                                <div><label class="block text-manufacture font-bold mb-2">Jenis Barang</label><select id="sgu-type" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" onchange="calculateSGUWeight()"><option value="serrated">Serrated</option><option value="polos">Polos</option></select></div>
                            </div>

                            <div><label class="block text-manufacture font-bold mb-2">Jumlah Unit</label><input type="number" id="sgu-quantity" value="1" min="1" class="w-full p-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-manufacture transition-all duration-300" oninput="calculateSGUWeight()"></div>

                            <div class="bg-emerald-50 p-4 rounded-lg space-y-2">
                                <p class="text-sm text-slate-600 font-bold">Detail Perhitungan SGU:</p>
                                <p class="text-xs text-slate-600">Berat Grating: <strong id="sgu-berat-grating" class="text-manufacture">0</strong> kg</p>
                                <p class="text-xs text-slate-600">Berat Support: <strong id="sgu-berat-support" class="text-manufacture">0</strong> kg</p>
                                <div class="border-t border-emerald-200 pt-2 mt-2">
                                    <p class="text-sm font-bold text-manufacture">Total Berat 1 Unit SGU: <strong id="sgu-calculated-weight" class="text-manufacture text-lg">0</strong> kg</p>
                                </div>
                            </div>

                            <div class="bg-manufacture p-4 rounded-lg text-white">
                                <p class="text-sm font-bold">Estimasi Harga per Unit:</p>
                                <p class="text-2xl font-black" id="sgu-estimated-price">Rp 0</p>
                                <div class="text-xs opacity-75 mt-2 space-y-1">
                                    <p>Harga sebelum PPN: <span id="sgu-price-before-ppn" class="font-semibold">Rp 0</span></p>
                                    <p>PPN 11%: <span id="sgu-ppn-value" class="font-semibold">Rp 0</span></p>
                                    <p class="text-yellow-200">*Dibulatkan ke atas ribuan terdekat</p>
                                </div>
                            </div>
                        </div>

                        <button onclick="addToCartCalc()" class="w-full mt-6 bg-manufacture text-white py-4 rounded-xl font-black hover:bg-manufacture-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            <i class="fas fa-cart-plus mr-2"></i> Tambahkan ke Keranjang
                        </button>

                        <div class="mt-8">
                            <h5 class="font-black text-manufacture text-lg mb-4"><i class="fas fa-shopping-cart mr-2"></i> Keranjang Belanja Anda</h5>
                            <div id="cart-items" class="space-y-2 max-h-64 overflow-y-auto mb-4"><p class="text-slate-500 text-center py-4">Belum ada item di keranjang</p></div>
                            <div id="cart-total" class="text-right font-black text-manufacture text-xl hidden">Total: Rp 0</div>
                            <div class="flex gap-4 mt-4">
                                <button onclick="clearCartCalc()" class="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"><i class="fas fa-trash mr-2"></i> Kosongkan Keranjang</button>
                                <button onclick="calculateTotalPriceCalc()" class="flex-1 bg-manufacture text-white py-3 rounded-xl font-black hover:bg-manufacture-light transition-all duration-300 shadow-lg hover:shadow-xl"><i class="fas fa-chart-line mr-2"></i> Hitung Total Estimasi</button>
                            </div>
                        </div>

                        <div id="price-result" class="mt-8 price-result rounded-xl p-6 text-white hidden">
                            <h5 class="text-xl font-black mb-3 text-center"><i class="fas fa-file-invoice-dollar mr-2"></i> Estimasi Biaya</h5>
                            <div class="space-y-2 text-center">
                                <p class="text-3xl font-black" id="total-price">Rp 0</p>
                                <p class="text-sm opacity-90" id="price-breakdown"></p>
                                <p class="text-xs opacity-75 mt-2">Estimasi belum termasuk pengiriman.</p>
                            </div>
                            <div class="mt-4 flex justify-center">
                                <a id="whatsapp-consult-link" href="https://wa.me/6281332222323?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20steel%20grating%20dari%20PT.%20Amanah%20Adi%20Guna" target="_blank" class="bg-white text-manufacture px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"><i class="fab fa-whatsapp mr-2 text-[#25D366]"></i> Konsultasi via WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- WHY US SECTION -->
        <section id="whyus" class="py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-manufacture text-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-5">
                <div class="absolute top-10 right-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
                <div class="absolute bottom-10 left-10 w-64 h-64 bg-emerald-600 rounded-full blur-3xl"></div>
            </div>
            <div class="max-w-7xl mx-auto px-6 relative z-10">
                <div class="text-center mb-16 reveal">
                    <h3 class="text-3xl md:text-4xl lg:text-5xl font-black mb-6 industrial-text">Mengapa Memilih PT. Amanah Adi Guna?</h3>
                    <div class="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="reveal-scale bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15 hover-lift">
                        <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"><i class="fas fa-box-open text-2xl text-white"></i></div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Tanpa MOQ</h4>
                        <p class="text-emerald-100/80 leading-relaxed">Tidak ada minimum order quantity. Kami melayani kebutuhan Anda berapapun jumlahnya.</p>
                    </div>
                    <div class="reveal-scale bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15 hover-lift" style="transition-delay: 0.1s;">
                        <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"><i class="fas fa-shipping-fast text-2xl text-white"></i></div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Pengiriman ke Seluruh Indonesia</h4>
                        <p class="text-emerald-100/80 leading-relaxed">Jangkauan distribusi yang luas ke seluruh wilayah Indonesia.</p>
                    </div>
                    <div class="reveal-scale bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15 hover-lift" style="transition-delay: 0.2s;">
                        <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"><i class="fas fa-headset text-2xl text-white"></i></div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Konsultasi Teknis Gratis</h4>
                        <p class="text-emerald-100/80 leading-relaxed">Tim ahli kami siap membantu perencanaan dan perhitungan kebutuhan steel grating Anda.</p>
                    </div>
                    <div class="reveal-scale bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15 hover-lift" style="transition-delay: 0.3s;">
                        <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"><i class="fas fa-clipboard-list text-2xl text-white"></i></div>
                        <h4 class="text-xl font-black mb-4 industrial-text">Inspeksi Kualitas</h4>
                        <p class="text-emerald-100/80 leading-relaxed">Setiap produk melalui proses inspeksi kualitas ketat.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="py-16 border-t border-emerald-800 bg-manufacture-dark">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div class="reveal-left"><div class="flex items-center space-x-2 mb-6"><img src="/logo amanah adi guna.png" alt="Logo" class="h-10 w-auto"><div class="text-xl font-black text-white industrial-text">AMANAH ADI GUNA</div></div><p class="text-emerald-200 text-sm">Mitra strategis pembangunan nasional yang menghadirkan solusi steel grating kelas dunia.</p></div>
                    <div class="reveal"><h4 class="text-white font-black mb-6 uppercase text-xs tracking-widest">Navigasi</h4><ul class="space-y-4"><li><a href="#home" class="text-emerald-200 hover:text-white transition text-sm">Beranda</a></li><li><a href="#about" class="text-emerald-200 hover:text-white transition text-sm">Tentang Kami</a></li><li><a href="#produk" class="text-emerald-200 hover:text-white transition text-sm">Produk</a></li><li><a href="#calculator" class="text-emerald-200 hover:text-white transition text-sm">Kalkulator</a></li></ul></div>
                    <div class="reveal-right"><h4 class="text-white font-black mb-6 uppercase text-xs tracking-widest">Kontak</h4><p class="text-emerald-200 text-sm">Email: contact@amanahadiguna.com<br>WhatsApp: +62 813-3222-2323</p></div>
                </div>
                <div class="pt-8 border-t border-emerald-800 text-center text-emerald-300 text-xs"><p>&copy; 2026 PT. Amanah Adi Guna. Seluruh Hak Cipta Dilindungi.</p></div>
            </div>
        </footer>

        <!-- WHATSAPP FLOAT -->
        <a href="https://wa.me/6281332222323?text=halo%20saya%20tertarik%20dengan%20produk%20PT.%20Amanah%20Adi%20Guna" target="_blank" class="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group animate-float">
            <span class="absolute right-20 bg-white text-slate-800 text-sm font-black px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Chat dengan Kami</span>
            <i class="fab fa-whatsapp text-4xl"></i>
        </a>

        <!-- MODAL -->
        <div id="specModal" class="fixed inset-0 z-[10000] hidden flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-2 border-emerald-200 animate-scaleIn">
                <div class="p-6 border-b border-emerald-100 flex justify-between items-center bg-manufacture text-white"><h3 class="font-black text-lg industrial-text" id="modal-title">Spesifikasi Lengkap</h3><button onclick="closeModal()" class="text-white hover:text-emerald-200 transition-colors"><i class="fas fa-times text-xl"></i></button></div>
                <div class="p-6 overflow-y-auto max-h-[70vh]" id="modal-body"></div>
                <div class="p-4 border-t border-emerald-100 text-right"><button onclick="closeModal()" class="bg-emerald-100 text-manufacture px-6 py-2 rounded-lg font-black hover:bg-emerald-200 transition">Tutup</button></div>
            </div>
        </div>

        <script>
        // ==================== KONSTANTA ====================
        const HARGA_BESI_STEELGRATING_PER_KG = 13068;
        const HARGA_GALVANIS_STEELGRATING_PER_KG = 8000;
        const HARGA_BESI_STAIR_TREAD_PER_KG = 32068;
        const HARGA_GALVANIS_STAIR_TREAD_PER_KG = 32068;
        const HARGA_BESI_SGT_PER_KG = 30068;
        const HARGA_GALVANIS_SGT_PER_KG = 30068;
        const HARGA_BESI_SGU_PER_KG = 30068;
        const HARGA_GALVANIS_SGU_PER_KG = 30068;
        const PANJANG_CHK = 0;
        const TEBAL_CHK = 3.2;
        const PPN = 0.11;
        
        // ==================== VARIABEL GLOBAL ====================
        let cart = [];
        
        // ==================== FUNGSI REVEAL ON SCROLL ====================
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        // ==================== FUNGSI PARTICLE BACKGROUND ====================
        function createParticles() {
            const container = document.getElementById('particles-container');
            if (!container) return;
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                const size = Math.random() * 4 + 2;
                const left = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 15 + 10;
                particle.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + left + '%;bottom:-10px;animation:floatParticle ' + duration + 's ' + delay + 's infinite;opacity:' + (Math.random() * 0.5 + 0.1) + ';';
                container.appendChild(particle);
            }
        }

        // ==================== FUNGSI NAVBAR SCROLL ====================
        function handleNavbarScroll() {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.style.backgroundColor = 'rgba(10, 42, 31, 0.95)';
                    navbar.style.backdropFilter = 'blur(20px)';
                } else {
                    navbar.style.backgroundColor = 'rgba(15, 59, 44, 0.6)';
                    navbar.style.backdropFilter = 'blur(12px)';
                }
            }
        }

        // ==================== FUNGSI UPDATE GAMBAR KALKULATOR ====================
        function updateCalculatorImage(subCategory) {
            const imageContainer = document.getElementById('calculator-image-container');
            const calculatorImage = document.getElementById('calculator-image');
            if (!calculatorImage) return;
            imageContainer.classList.remove('hidden');
            switch(subCategory) {
                case 'standard': calculatorImage.src = '/calculator-SG.png'; calculatorImage.alt = 'Steel Grating Calculator'; break;
                case 'stair-tread': calculatorImage.src = '/calculator-ST.png'; calculatorImage.alt = 'Stair Tread Calculator'; break;
                case 'sgt': calculatorImage.src = '/calculator-SGT.png'; calculatorImage.alt = 'SGT Calculator'; break;
                case 'sgu': calculatorImage.src = '/calculator-SGU.png'; calculatorImage.alt = 'SGU Calculator'; break;
                default: imageContainer.classList.add('hidden');
            }
        }

        // ==================== FUNGSI STEEL GRATING ====================
        function toggleCustomInput(type) {
            let selectId, customId;
            switch(type) {
                case 'bearing-height': selectId = 'bearing-height-select'; customId = 'bearing-height-custom'; break;
                case 'bearing-thickness': selectId = 'bearing-thickness-select'; customId = 'bearing-thickness-custom'; break;
                case 'bearing-spacing': selectId = 'bearing-spacing-select'; customId = 'bearing-spacing-custom'; break;
                case 'crossbar-spacing': selectId = 'crossbar-spacing-select'; customId = 'crossbar-spacing-custom'; break;
                case 'crossbar-diameter': selectId = 'crossbar-diameter-select'; customId = 'crossbar-diameter-custom'; break;
                default: return;
            }
            const select = document.getElementById(selectId);
            const customInput = document.getElementById(customId);
            if (select.value === 'custom') { customInput.classList.remove('hidden'); customInput.focus(); }
            else { customInput.classList.add('hidden'); customInput.value = ''; }
            if (type === 'bearing-spacing') { onBearingSpacingChange(); }
            else { calculateSteelGratingWeight(); }
        }

        function getBearingHeight() { const select = document.getElementById('bearing-height-select'); if (select.value === 'custom') { return parseFloat(document.getElementById('bearing-height-custom').value) || 30; } return parseFloat(select.value); }
        function getBearingThickness() { const select = document.getElementById('bearing-thickness-select'); if (select.value === 'custom') { return parseFloat(document.getElementById('bearing-thickness-custom').value) || 3; } return parseFloat(select.value); }
        function getBearingSpacing() { const select = document.getElementById('bearing-spacing-select'); if (select.value === 'custom') { return parseFloat(document.getElementById('bearing-spacing-custom').value) || 40; } return parseFloat(select.value); }
        function getCrossbarSpacing() { const select = document.getElementById('crossbar-spacing-select'); if (select.value === 'custom') { return parseFloat(document.getElementById('crossbar-spacing-custom').value) || 100; } return parseFloat(select.value); }
        function getCrossbarDiameter() { const select = document.getElementById('crossbar-diameter-select'); if (select.value === 'custom') { return parseFloat(document.getElementById('crossbar-diameter-custom').value) || 6; } return parseFloat(select.value); }

        function onBearingSpacingChange() {
            const jarakBearing = getBearingSpacing();
            const currentC = getCrossbarSpacing();
            if (jarakBearing == 60 && currentC != 50 && document.getElementById('crossbar-spacing-select').value !== 'custom') {
                console.log('Rekomendasi Jarak Crossbar (C) = 50mm untuk P = 60mm');
            }
            calculateSteelGratingWeight();
        }

        function calculateSteelGratingWeight() {
            const panjang = parseFloat(document.getElementById('grating-length').value) || 0;
            const lebar = parseFloat(document.getElementById('grating-width').value) || 0;
            const tinggiBearing = getBearingHeight();
            const tebalBearing = getBearingThickness();
            const jarakBearing = getBearingSpacing();
            const jarakCrossbar = getCrossbarSpacing();
            const diameterCrossbar = getCrossbarDiameter();
            
            if (panjang <= 0 || lebar <= 0) {
                document.getElementById('calculated-weight').innerText = '0';
                return { totalBerat: 0, hargaSebelumPPN: 0, nilaiPPN: 0, hargaSetelahPPN: 0, hargaBulat: 0 };
            }
            
            const jumlahBearing = Math.ceil((lebar - tebalBearing) / jarakBearing) + 1;
            const volumeBearing = tinggiBearing * tebalBearing * panjang;
            const beratBearing = jumlahBearing * volumeBearing * Math.pow(10, -9) * 7850;
            const volumeCrossbar = Math.pow(diameterCrossbar, 2) * lebar;
            const jumlahCrossbar = Math.ceil(panjang / jarakCrossbar);
            const beratCrossbar = volumeCrossbar * jumlahCrossbar * Math.pow(10, -9) * 7850;
            const volumeEndPlate = tinggiBearing * tebalBearing * lebar * 2;
            const beratEndPlate = volumeEndPlate * Math.pow(10, -9) * 7850;
            const totalBerat = beratBearing + beratCrossbar + beratEndPlate;
            
            document.getElementById('calc-jumlah-bearing').innerText = jumlahBearing;
            document.getElementById('calc-volume-bearing').innerText = volumeBearing.toLocaleString('id-ID');
            document.getElementById('calc-berat-bearing').innerText = beratBearing.toFixed(2);
            document.getElementById('calc-jumlah-crossbar').innerText = jumlahCrossbar;
            document.getElementById('calc-berat-crossbar').innerText = beratCrossbar.toFixed(2);
            document.getElementById('calc-volume-endplate').innerText = volumeEndPlate.toLocaleString('id-ID');
            document.getElementById('calc-berat-endplate').innerText = beratEndPlate.toFixed(2);
            document.getElementById('calculated-weight').innerText = totalBerat.toFixed(2);
            
            const kondisi = document.getElementById('grating-coating').value;
            const jenis = document.getElementById('grating-type').value;
            const quantity = parseInt(document.getElementById('grating-quantity').value) || 1;
            
            let hargaPerUnit = 0;
            if (kondisi === 'galvanis') {
                if (jenis === 'serrated') { hargaPerUnit = (HARGA_BESI_STEELGRATING_PER_KG * totalBerat + HARGA_GALVANIS_STEELGRATING_PER_KG * totalBerat); }
                else { hargaPerUnit = ((HARGA_BESI_STEELGRATING_PER_KG - 500) * totalBerat + HARGA_GALVANIS_STEELGRATING_PER_KG * totalBerat); }
            } else {
                if (jenis === 'serrated') { hargaPerUnit = (HARGA_BESI_STEELGRATING_PER_KG * totalBerat); }
                else { hargaPerUnit = ((HARGA_BESI_STEELGRATING_PER_KG - 500) * totalBerat); }
            }
            hargaPerUnit = hargaPerUnit * quantity;
            
            const hargaSebelumPPN = hargaPerUnit;
            const nilaiPPN = hargaSebelumPPN * PPN;
            const hargaSetelahPPN = hargaSebelumPPN + nilaiPPN;
            const hargaBulat = Math.ceil(hargaSetelahPPN / 1000) * 1000;
            
            document.getElementById('estimated-price-per-unit').innerHTML = 'Rp ' + hargaBulat.toLocaleString('id-ID');
            document.getElementById('estimated-price-before-ppn').innerHTML = 'Rp ' + Math.ceil(hargaSebelumPPN).toLocaleString('id-ID');
            document.getElementById('estimated-ppn-value').innerHTML = 'Rp ' + Math.ceil(nilaiPPN).toLocaleString('id-ID');
            
            return { totalBerat: totalBerat, hargaSebelumPPN: hargaSebelumPPN, nilaiPPN: nilaiPPN, hargaSetelahPPN: hargaSetelahPPN, hargaBulat: hargaBulat };
        }

        // ==================== FUNGSI STAIR TREAD ====================
        function toggleStairCustomInput(type) {
            let selectId, customId;
            switch(type) {
                case 'bearing-height': selectId = 'stair-bearing-height-select'; customId = 'stair-bearing-height-custom'; break;
                case 'bearing-thickness': selectId = 'stair-bearing-thickness-select'; customId = 'stair-bearing-thickness-custom'; break;
                case 'bearing-spacing': selectId = 'stair-bearing-spacing-select'; customId = 'stair-bearing-spacing-custom'; break;
                case 'crossbar-spacing': selectId = 'stair-crossbar-spacing-select'; customId = 'stair-crossbar-spacing-custom'; break;
                case 'diameter': selectId = 'stair-diameter-select'; customId = 'stair-diameter-custom'; break;
                case 'endplate-height': selectId = 'stair-endplate-height-select'; customId = 'stair-endplate-height-custom'; break;
                case 'endplate-thickness': selectId = 'stair-endplate-thickness-select'; customId = 'stair-endplate-thickness-custom'; break;
                case 'checkered-height': selectId = 'stair-checkered-height-select'; customId = 'stair-checkered-height-custom'; break;
                case 'checkered-thickness': selectId = 'stair-checkered-thickness-select'; customId = 'stair-checkered-thickness-custom'; break;
                default: return;
            }
            const select = document.getElementById(selectId);
            const customInput = document.getElementById(customId);
            if (select && select.value === 'custom') { customInput.classList.remove('hidden'); customInput.focus(); }
            else if (customInput) { customInput.classList.add('hidden'); customInput.value = ''; }
            calculateStairTreadWeight();
        }

        function getStairBearingHeight() { const select = document.getElementById('stair-bearing-height-select'); if (select && select.value === 'custom') { return parseFloat(document.getElementById('stair-bearing-height-custom').value) || 30; } return select ? parseFloat(select.value) : 30; }
        function getStairBearingThickness() { const select = document.getElementById('stair-bearing-thickness-select'); if (select && select.value === 'custom') { return parseFloat(document.getElementById('stair-bearing-thickness-custom').value) || 3; } return select ? parseFloat(select.value) : 3; }
        function getStairBearingSpacing() { const select = document.getElementById('stair-bearing-spacing-select'); if (select && select.value === 'custom') { return parseFloat(document.getElementById('stair-bearing-spacing-custom').value) || 40; } return select ? parseFloat(select.value) : 40; }
        function getStairCrossbarSpacing() { const select = document.getElementById('stair-crossbar-spacing-select'); if (select && select.value === 'custom') { return parseFloat(document.getElementById('stair-crossbar-spacing-custom').value) || 100; } return select ? parseFloat(select.value) : 100; }
        function getStairDiameter() { const select = document.getElementById('stair-diameter-select'); if (select && select.value === 'custom') { return parseFloat(document.getElementById('stair-diameter-custom').value) || 6; } return select ? parseFloat(select.value) : 6; }
        function getStairEndplateThickness() { const select = document.getElementById('stair-endplate-thickness-select'); if (select && select.value === 'custom') { return parseFloat(document.getElementById('stair-endplate-thickness-custom').value) || 3; } return select ? parseFloat(select.value) : 3; }
        function getStairEndplateHeight() { const select = document.getElementById('stair-endplate-height-select'); if (select && select.value === 'custom') { return parseFloat(document.getElementById('stair-endplate-height-custom').value) || 30; } return select ? parseFloat(select.value) : 30; }
        function getStairCheckeredHeight() { const select = document.getElementById('stair-checkered-height-select'); if (select && select.value === 'custom') { return parseFloat(document.getElementById('stair-checkered-height-custom').value) || 3; } return select ? parseFloat(select.value) : 3; }
        function getStairCheckeredThickness() { const select = document.getElementById('stair-checkered-thickness-select'); if (select && select.value === 'custom') { return parseFloat(document.getElementById('stair-checkered-thickness-custom').value) || 3; } return select ? parseFloat(select.value) : 3; }

        function calculateStairTreadWeight() {
            const panjang = parseFloat(document.getElementById('stair-length').value) || 0;
            const lebar = parseFloat(document.getElementById('stair-width').value) || 0;
            const tinggiBearing = getStairBearingHeight();
            const tebalBearing = getStairBearingThickness();
            const jarakBearing = getStairBearingSpacing();
            const jarakCrossbar = getStairCrossbarSpacing();
            const diameterCrossbar = getStairDiameter();
            const tinggiEndPlate = getStairEndplateHeight();
            const tebalEndPlate = getStairEndplateThickness();
            const tinggiCheckered = getStairCheckeredHeight();
            const tebalCheckered = getStairCheckeredThickness();
            
            let totalBeratGrating = 0, totalBeratSupport = 0, totalBerat = 0;
            
            if (panjang > 0 && lebar > 0) {
                const jumlahBearing = Math.ceil((lebar - tebalBearing) / jarakBearing);
                const volumeBearing = tinggiBearing * tebalBearing * panjang;
                const beratBearing = jumlahBearing * volumeBearing * Math.pow(10, -9) * 7850;
                const volumeCrossbar = 0.25 * Math.PI * Math.pow(diameterCrossbar, 2) * lebar;
                const jumlahCrossbar = Math.ceil(panjang / jarakCrossbar);
                const beratCrossbar = volumeCrossbar * jumlahCrossbar * Math.pow(10, -9) * 7850;
                const volumeEndPlate = tinggiEndPlate * tebalEndPlate * 2 * lebar;
                const beratEndPlate = volumeEndPlate * Math.pow(10, -9) * 7850;
                const volumeCheckered = tinggiCheckered * tebalCheckered * panjang * 2;
                const beratCheckered = volumeCheckered * Math.pow(10, -9) * 7850;
                totalBeratGrating = beratBearing + beratCrossbar;
                totalBeratSupport = beratEndPlate + beratCheckered;
                totalBerat = totalBeratGrating + totalBeratSupport;
                
                document.getElementById('stair-jumlah-bearing').innerText = jumlahBearing;
                document.getElementById('stair-berat-bearing').innerText = beratBearing.toFixed(2);
                document.getElementById('stair-jumlah-crossbar').innerText = jumlahCrossbar;
                document.getElementById('stair-berat-crossbar').innerText = beratCrossbar.toFixed(2);
                document.getElementById('stair-berat-endplate').innerText = beratEndPlate.toFixed(2);
                document.getElementById('stair-berat-checkered').innerText = beratCheckered.toFixed(2);
                document.getElementById('stair-calculated-weight').innerText = totalBerat.toFixed(2);
            }
            
            const kondisi = document.getElementById('stair-coating').value;
            const jenis = document.getElementById('stair-type').value;
            const quantity = parseInt(document.getElementById('stair-quantity').value) || 1;
            
            let hargaPerUnit = 0;
            if (kondisi === 'galvanis') {
                if (jenis === 'serrated') { hargaPerUnit = (HARGA_BESI_STAIR_TREAD_PER_KG * totalBeratGrating + HARGA_GALVANIS_STAIR_TREAD_PER_KG * totalBeratSupport); }
                else { hargaPerUnit = ((HARGA_BESI_STAIR_TREAD_PER_KG - 500) * totalBeratGrating + HARGA_GALVANIS_STAIR_TREAD_PER_KG * totalBeratSupport); }
            } else {
                if (jenis === 'serrated') { hargaPerUnit = (HARGA_BESI_STAIR_TREAD_PER_KG * totalBeratGrating); }
                else { hargaPerUnit = ((HARGA_BESI_STAIR_TREAD_PER_KG - 500) * totalBeratGrating); }
            }
            
            const hargaSebelumPPN = hargaPerUnit * quantity;
            const nilaiPPN = hargaSebelumPPN * PPN;
            const hargaSetelahPPN = hargaSebelumPPN + nilaiPPN;
            const hargaBulat = Math.ceil(hargaSetelahPPN / 1000) * 1000;
            
            const estimatedPriceEl = document.getElementById('stair-estimated-price');
            const priceBeforePpnEl = document.getElementById('stair-price-before-ppn');
            const ppnValueEl = document.getElementById('stair-ppn-value');
            if (estimatedPriceEl) estimatedPriceEl.innerHTML = 'Rp ' + hargaBulat.toLocaleString('id-ID');
            if (priceBeforePpnEl) priceBeforePpnEl.innerHTML = 'Rp ' + Math.ceil(hargaSebelumPPN).toLocaleString('id-ID');
            if (ppnValueEl) ppnValueEl.innerHTML = 'Rp ' + Math.ceil(nilaiPPN).toLocaleString('id-ID');
            
            return { totalBerat: totalBerat, hargaSebelumPPN: hargaSebelumPPN, nilaiPPN: nilaiPPN, hargaSetelahPPN: hargaSetelahPPN, hargaBulat: hargaBulat };
        }

        // ==================== FUNGSI SGT ====================
        function calculateSGTWeight() {
            const b = parseFloat(document.getElementById('sgt-length-b').value) || 0;
            const a = parseFloat(document.getElementById('sgt-width-a').value) || 0;
            const h = parseFloat(document.getElementById('sgt-height-h').value) || 30;
            const T = parseFloat(document.getElementById('sgt-thickness-t').value) || 3;
            const P = parseFloat(document.getElementById('sgt-bearing-spacing-p').value) || 40;
            const D = parseFloat(document.getElementById('sgt-diameter-d').value) || 6;
            const C = parseFloat(document.getElementById('sgt-crossbar-spacing-c').value) || 100;
            const aS = parseFloat(document.getElementById('sgt-support-width-as').value) || 50;
            const hS = parseFloat(document.getElementById('sgt-support-height-hs').value) || 50;
            const TS = parseFloat(document.getElementById('sgt-support-thickness-ts').value) || 5;
            const kondisi = document.getElementById('sgt-coating').value;
            const jenis = document.getElementById('sgt-type').value;
            const quantity = parseInt(document.getElementById('sgt-quantity').value) || 1;
            
            if (b <= 0 || a <= 0) {
                document.getElementById('sgt-calculated-weight').innerText = '0';
                return { beratGrating: 0, beratSupport: 0, totalBerat: 0, hargaSebelumPPN: 0, nilaiPPN: 0, hargaBulat: 0 };
            }
            
            const term1 = (Math.ceil((b - T) / P) + 1) * h * a * T;
            const term3 = 0.25 * Math.PI * Math.pow(D, 2) * b * Math.ceil(a / C);
            const term4 = b * h * T * 2;
            const beratGrating = (term1 + term3 + term4) * Math.pow(10, -9) * 7850;
            const supportTerm1 = (aS + hS) * 2 * b * TS;
            const supportTerm2 = 0.25 * Math.PI * Math.pow(8, 2) * 100 * Math.floor(b / 300);
            const beratSupport = (supportTerm1 + supportTerm2) * Math.pow(10, -9) * 7850;
            const totalBerat = beratGrating + beratSupport;
            
            document.getElementById('sgt-berat-grating').innerText = beratGrating.toFixed(2);
            document.getElementById('sgt-berat-support').innerText = beratSupport.toFixed(2);
            document.getElementById('sgt-calculated-weight').innerText = totalBerat.toFixed(2);
            
            let hargaPerUnit = 0;
            if (kondisi === 'galvanis') {
                if (jenis === 'serrated') { hargaPerUnit = (HARGA_BESI_SGT_PER_KG * beratGrating + HARGA_GALVANIS_SGT_PER_KG * beratSupport); }
                else { hargaPerUnit = ((HARGA_BESI_SGT_PER_KG - 500) * beratGrating + (HARGA_GALVANIS_SGT_PER_KG - 500) * beratSupport); }
            } else {
                if (jenis === 'serrated') { hargaPerUnit = (HARGA_BESI_SGT_PER_KG * totalBerat); }
                else { hargaPerUnit = ((HARGA_BESI_SGT_PER_KG - 500) * totalBerat); }
            }
            hargaPerUnit = hargaPerUnit * quantity;
            const hargaSebelumPPN = hargaPerUnit;
            const nilaiPPN = hargaSebelumPPN * PPN;
            const hargaSetelahPPN = hargaSebelumPPN + nilaiPPN;
            const hargaBulat = Math.ceil(hargaSetelahPPN / 1000) * 1000;
            
            document.getElementById('sgt-estimated-price').innerHTML = 'Rp ' + hargaBulat.toLocaleString('id-ID');
            document.getElementById('sgt-price-before-ppn').innerHTML = 'Rp ' + Math.ceil(hargaSebelumPPN).toLocaleString('id-ID');
            document.getElementById('sgt-ppn-value').innerHTML = 'Rp ' + Math.ceil(nilaiPPN).toLocaleString('id-ID');
            
            return { beratGrating: beratGrating, beratSupport: beratSupport, totalBerat: totalBerat, hargaSebelumPPN: hargaSebelumPPN, nilaiPPN: nilaiPPN, hargaBulat: hargaBulat };
        }

        // ==================== FUNGSI SGU ====================
        function calculateSGUWeight() {
            const b = parseFloat(document.getElementById('sgu-length-b').value) || 0;
            const a = parseFloat(document.getElementById('sgu-width-a').value) || 0;
            const h = parseFloat(document.getElementById('sgu-height-h').value) || 30;
            const T = parseFloat(document.getElementById('sgu-thickness-t').value) || 3;
            const P = parseFloat(document.getElementById('sgu-bearing-spacing-p').value) || 40;
            const D = parseFloat(document.getElementById('sgu-diameter-d').value) || 6;
            const C = parseFloat(document.getElementById('sgu-crossbar-spacing-c').value) || 100;
            const ahS = parseFloat(document.getElementById('sgu-support-size-ahs').value) || 50;
            const TS = parseFloat(document.getElementById('sgu-support-thickness-ts').value) || 5;
            const kondisi = document.getElementById('sgu-coating').value;
            const jenis = document.getElementById('sgu-type').value;
            const quantity = parseInt(document.getElementById('sgu-quantity').value) || 1;
            
            if (b <= 0 || a <= 0) {
                document.getElementById('sgu-calculated-weight').innerText = '0';
                return { beratGrating: 0, beratSupport: 0, totalBerat: 0, hargaSebelumPPN: 0, nilaiPPN: 0, hargaBulat: 0 };
            }
            
            const term1 = (Math.ceil((b - T) / P) + 1) * h * (a - 2 * TS) * T;
            const term3 = Math.pow(D, 2) * b * Math.ceil(a / C);
            const beratGrating = (term1 + term3) * Math.pow(10, -9) * 7850;
            const supportTerm1 = (ahS + ahS) * 2 * TS * b;
            const beratSupport = supportTerm1 * Math.pow(10, -9) * 7850;
            const totalBerat = beratGrating + beratSupport;
            
            document.getElementById('sgu-berat-grating').innerText = beratGrating.toFixed(2);
            document.getElementById('sgu-berat-support').innerText = beratSupport.toFixed(2);
            document.getElementById('sgu-calculated-weight').innerText = totalBerat.toFixed(2);
            
            let hargaPerUnit = 0;
            if (kondisi === 'galvanis') {
                if (jenis === 'serrated') { hargaPerUnit = (HARGA_BESI_SGU_PER_KG * beratGrating + HARGA_GALVANIS_SGU_PER_KG * beratSupport); }
                else { hargaPerUnit = (HARGA_BESI_SGU_PER_KG * beratGrating + (HARGA_GALVANIS_SGU_PER_KG - 500) * beratSupport); }
            } else {
                if (jenis === 'serrated') { hargaPerUnit = (HARGA_BESI_SGU_PER_KG * beratGrating); }
                else { hargaPerUnit = (HARGA_BESI_SGU_PER_KG * beratGrating); }
            }
            hargaPerUnit = hargaPerUnit * quantity;
            const hargaSebelumPPN = hargaPerUnit;
            const nilaiPPN = hargaSebelumPPN * PPN;
            const hargaSetelahPPN = hargaSebelumPPN + nilaiPPN;
            const hargaBulat = Math.ceil(hargaSetelahPPN / 1000) * 1000;
            
            document.getElementById('sgu-estimated-price').innerHTML = 'Rp ' + hargaBulat.toLocaleString('id-ID');
            document.getElementById('sgu-price-before-ppn').innerHTML = 'Rp ' + Math.ceil(hargaSebelumPPN).toLocaleString('id-ID');
            document.getElementById('sgu-ppn-value').innerHTML = 'Rp ' + Math.ceil(nilaiPPN).toLocaleString('id-ID');
            
            return { beratGrating: beratGrating, beratSupport: beratSupport, totalBerat: totalBerat, hargaSebelumPPN: hargaSebelumPPN, nilaiPPN: nilaiPPN, hargaBulat: hargaBulat };
        }
        
        // ==================== TOGGLE KALKULATOR ====================
        function toggleCalcPanel() {
            const subCategory = document.getElementById('calc-sub-category').value;
            const gratingPanel = document.getElementById('calc-grating-panel');
            const stairTreadPanel = document.getElementById('calc-stair-tread-panel');
            const sgtPanel = document.getElementById('calc-sgt-panel');
            const sguPanel = document.getElementById('calc-sgu-panel');
            const calculatorImage = document.getElementById('calculator-image-container');
            
            if (gratingPanel) gratingPanel.classList.add('hidden');
            if (stairTreadPanel) stairTreadPanel.classList.add('hidden');
            if (sgtPanel) sgtPanel.classList.add('hidden');
            if (sguPanel) sguPanel.classList.add('hidden');
            
            updateCalculatorImage(subCategory);
            if (subCategory === 'standard') { if (gratingPanel) gratingPanel.classList.remove('hidden'); calculateSteelGratingWeight(); }
            else if (subCategory === 'stair-tread') { if (stairTreadPanel) stairTreadPanel.classList.remove('hidden'); calculateStairTreadWeight(); }
            else if (subCategory === 'sgt') { if (sgtPanel) sgtPanel.classList.remove('hidden'); calculateSGTWeight(); }
            else if (subCategory === 'sgu') { if (sguPanel) sguPanel.classList.remove('hidden'); calculateSGUWeight(); }
        }

        // ==================== FUNGSI WHATSAPP MESSAGE GENERATOR ====================
        function generateWhatsAppMessage() {
            if (cart.length === 0) return 'Halo%2C%20saya%20ingin%20konsultasi%20mengenai%20produk%20steel%20grating%20dari%20PT.%20Amanah%20Adi%20Guna';
            
            let message = 'Halo%2C%20saya%20ingin%20berkonsultasi%20mengenai%20estimasi%20biaya%20berikut%3A%0A%0A';
            
            cart.forEach((item, index) => {
                message += '%2A' + (index + 1) + '.%20' + item.type + '%2A%0A';
                if (item.type === 'Steel Grating') {
                    message += '   -%20Ukuran%3A%20' + item.panjang + 'mm%20x%20' + item.lebar + 'mm%0A';
                    message += '   -%20Jenis%3A%20' + item.jenis + '%20(%20' + item.kondisi + '%20)%0A';
                    message += '   -%20Jumlah%3A%20' + item.quantity + '%20unit%0A';
                    message += '   -%20Berat%20per%20unit%3A%20' + item.beratTotal.toFixed(2) + '%20kg%0A';
                } else if (item.type === 'Stair Tread') {
                    message += '   -%20Ukuran%3A%20' + item.panjang + 'mm%20x%20' + item.lebar + 'mm%0A';
                    message += '   -%20Jenis%3A%20' + item.jenis + '%20(%20' + item.kondisi + '%20)%0A';
                    message += '   -%20Jumlah%3A%20' + item.quantity + '%20unit%0A';
                    message += '   -%20Berat%20per%20unit%3A%20' + (item.beratTotal || 0).toFixed(2) + '%20kg%0A';
                } else if (item.type === 'SGT' || item.type === 'SGU') {
                    message += '   -%20Ukuran%3A%20' + item.panjang + 'mm%20x%20' + item.lebar + 'mm%0A';
                    message += '   -%20Jenis%3A%20' + item.jenis + '%20(%20' + item.kondisi + '%20)%0A';
                    message += '   -%20Jumlah%3A%20' + item.quantity + '%20unit%0A';
                    message += '   -%20Berat%20per%20unit%3A%20' + (item.beratTotal || 0).toFixed(2) + '%20kg%0A';
                }
                message += '   -%20Estimasi%20Harga%20per%20Unit%3A%20Rp%20' + item.hargaPerUnit.toLocaleString('id-ID') + '%0A';
                message += '   -%20Subtotal%3A%20Rp%20' + item.subtotal.toLocaleString('id-ID') + '%0A%0A';
            });
            
            let total = 0;
            cart.forEach(item => { total += item.subtotal; });
            message += '%2ATotal%20Estimasi%3A%20Rp%20' + total.toLocaleString('id-ID') + '%2A%0A%0A';
            message += 'Mohon%20bantuannya%20untuk%20dikonsultasikan%20lebih%20lanjut.%20Terima%20kasih.';
            
            return message;
        }
        
        function updateWhatsAppLink() {
            const whatsappLink = document.getElementById('whatsapp-consult-link');
            if (whatsappLink) {
                const message = generateWhatsAppMessage();
                whatsappLink.href = 'https://wa.me/6281332222323?text=' + message;
            }
        }

        // ==================== FUNGSI KERANJANG ====================
        window.addToCartCalc = function() {
            const subCategory = document.getElementById('calc-sub-category').value;
            
            if (subCategory === 'standard') {
                const panjang = parseFloat(document.getElementById('grating-length').value);
                const lebar = parseFloat(document.getElementById('grating-width').value);
                const kondisi = document.getElementById('grating-coating').value;
                const jenis = document.getElementById('grating-type').value;
                const quantity = parseInt(document.getElementById('grating-quantity').value);
                const result = calculateSteelGratingWeight();
                if (!panjang || !lebar || panjang <= 0 || lebar <= 0) { alert('Masukkan Panjang dan Lebar yang valid'); return; }
                cart.push({
                    id: Date.now(), type: 'Steel Grating', panjang: panjang, lebar: lebar,
                    kondisi: kondisi === 'galvanis' ? 'Galvanis' : 'Tanpa Galvanis',
                    jenis: jenis === 'serrated' ? 'Serrated' : 'Polos', quantity: quantity,
                    beratTotal: result.totalBerat, hargaPerUnit: result.hargaBulat, subtotal: result.hargaBulat * quantity,
                    hargaSebelumPPN: result.hargaSebelumPPN, nilaiPPN: result.nilaiPPN,
                    tinggiBearing: getBearingHeight(), tebalBearing: getBearingThickness(),
                    jarakBearing: getBearingSpacing(), jarakCrossbar: getCrossbarSpacing(), diameterCrossbar: getCrossbarDiameter()
                });
                renderCart(); alert('Item Steel Grating berhasil ditambahkan ke keranjang!');
            } else if (subCategory === 'stair-tread') {
                const panjang = parseFloat(document.getElementById('stair-length').value);
                const lebar = parseFloat(document.getElementById('stair-width').value);
                const kondisi = document.getElementById('stair-coating').value;
                const jenis = document.getElementById('stair-type').value;
                const quantity = parseInt(document.getElementById('stair-quantity').value);
                const result = calculateStairTreadWeight();
                if (!result) { alert('Terjadi kesalahan perhitungan'); return; }
                if (!panjang || !lebar || panjang <= 0 || lebar <= 0) { alert('Masukkan Panjang dan Lebar yang valid'); return; }
                cart.push({
                    id: Date.now(), type: 'Stair Tread', panjang: panjang, lebar: lebar,
                    kondisi: kondisi === 'galvanis' ? 'Galvanis' : 'Tanpa Galvanis',
                    jenis: jenis === 'serrated' ? 'Serrated' : 'Polos', quantity: quantity,
                    beratTotal: result.totalBerat, hargaPerUnit: result.hargaBulat, subtotal: result.hargaBulat * quantity,
                    hargaSebelumPPN: result.hargaSebelumPPN, nilaiPPN: result.nilaiPPN,
                    tinggiBearing: getStairBearingHeight(), tebalBearing: getStairBearingThickness(),
                    jarakBearing: getStairBearingSpacing(), jarakCrossbar: getStairCrossbarSpacing(), diameterCrossbar: getStairDiameter(),
                    tinggiEndPlate: getStairEndplateHeight(), tebalEndPlate: getStairEndplateThickness(),
                    tinggiCheckered: getStairCheckeredHeight(), tebalCheckered: getStairCheckeredThickness()
                });
                renderCart(); alert('Item Stair Tread berhasil ditambahkan ke keranjang!');
            } else if (subCategory === 'sgt') {
                const b = parseFloat(document.getElementById('sgt-length-b').value) || 0;
                const a = parseFloat(document.getElementById('sgt-width-a').value) || 0;
                const kondisi = document.getElementById('sgt-coating').value;
                const jenis = document.getElementById('sgt-type').value;
                const quantity = parseInt(document.getElementById('sgt-quantity').value) || 1;
                const result = calculateSGTWeight();
                if (!b || !a || b <= 0 || a <= 0) { alert('Masukkan Panjang dan Lebar SGT yang valid'); return; }
                cart.push({
                    id: Date.now(), type: 'SGT', panjang: b, lebar: a,
                    kondisi: kondisi === 'galvanis' ? 'Galvanis' : 'Tanpa Galvanis',
                    jenis: jenis === 'serrated' ? 'Serrated' : 'Polos', quantity: quantity,
                    beratGrating: result.beratGrating, beratSupport: result.beratSupport, beratTotal: result.totalBerat,
                    hargaPerUnit: result.hargaBulat, subtotal: result.hargaBulat * quantity,
                    hargaSebelumPPN: result.hargaSebelumPPN, nilaiPPN: result.nilaiPPN
                });
                renderCart(); alert('Item SGT berhasil ditambahkan ke keranjang!');
            } else if (subCategory === 'sgu') {
                const b = parseFloat(document.getElementById('sgu-length-b').value) || 0;
                const a = parseFloat(document.getElementById('sgu-width-a').value) || 0;
                const kondisi = document.getElementById('sgu-coating').value;
                const jenis = document.getElementById('sgu-type').value;
                const quantity = parseInt(document.getElementById('sgu-quantity').value) || 1;
                const result = calculateSGUWeight();
                if (!b || !a || b <= 0 || a <= 0) { alert('Masukkan Panjang dan Lebar SGU yang valid'); return; }
                cart.push({
                    id: Date.now(), type: 'SGU', panjang: b, lebar: a,
                    kondisi: kondisi === 'galvanis' ? 'Galvanis' : 'Tanpa Galvanis',
                    jenis: jenis === 'serrated' ? 'Serrated' : 'Polos', quantity: quantity,
                    beratGrating: result.beratGrating, beratSupport: result.beratSupport, beratTotal: result.totalBerat,
                    hargaPerUnit: result.hargaBulat, subtotal: result.hargaBulat * quantity,
                    hargaSebelumPPN: result.hargaSebelumPPN, nilaiPPN: result.nilaiPPN
                });
                renderCart(); alert('Item SGU berhasil ditambahkan ke keranjang!');
            }
        };

        function renderCart() {
            const cartDiv = document.getElementById('cart-items');
            const totalDiv = document.getElementById('cart-total');
            if (cart.length === 0) { cartDiv.innerHTML = '<p class="text-slate-500 text-center py-4">Belum ada item di keranjang</p>'; totalDiv.classList.add('hidden'); return; }
            let html = ''; let grandTotal = 0;
            cart.forEach((item, index) => {
                grandTotal += item.subtotal;
                if (item.type === 'Steel Grating') {
                    html += '<div class="bg-white p-3 rounded-lg border border-emerald-200 flex justify-between items-center cart-item hover:shadow-md transition-all duration-300"><div><span class="font-bold text-manufacture">' + item.type + '</span><br><span class="text-sm">' + item.jenis + ' - ' + item.kondisi + '</span><br><span class="text-xs">' + item.panjang + 'mm x ' + item.lebar + 'mm | ' + item.quantity + ' unit | Berat: ' + item.beratTotal.toFixed(2) + 'kg/unit</span><br><span class="text-xs text-slate-400">PPN 11%: Rp ' + (item.nilaiPPN || 0).toLocaleString('id-ID') + '</span></div><div class="text-right"><div class="font-bold">Rp ' + item.subtotal.toLocaleString('id-ID') + '</div><button onclick="removeFromCartCalc(' + index + ')" class="text-red-500 text-xs hover:text-red-700"><i class="fas fa-trash"></i> Hapus</button></div></div>';
                } else if (item.type === 'Stair Tread') {
                    html += '<div class="bg-white p-3 rounded-lg border border-emerald-200 flex justify-between items-center cart-item hover:shadow-md transition-all duration-300"><div><span class="font-bold text-manufacture">' + item.type + '</span><br><span class="text-sm">' + item.jenis + ' - ' + item.kondisi + '</span><br><span class="text-xs">' + item.panjang + 'mm x ' + item.lebar + 'mm | ' + item.quantity + ' unit | Berat: ' + (item.beratTotal || 0).toFixed(2) + 'kg/unit</span><br><span class="text-xs text-slate-400">PPN 11%: Rp ' + (item.nilaiPPN || 0).toLocaleString('id-ID') + '</span></div><div class="text-right"><div class="font-bold">Rp ' + item.subtotal.toLocaleString('id-ID') + '</div><button onclick="removeFromCartCalc(' + index + ')" class="text-red-500 text-xs hover:text-red-700"><i class="fas fa-trash"></i> Hapus</button></div></div>';
                } else if (item.type === 'SGT' || item.type === 'SGU') {
                    html += '<div class="bg-white p-3 rounded-lg border border-emerald-200 flex justify-between items-center cart-item hover:shadow-md transition-all duration-300"><div><span class="font-bold text-manufacture">' + item.type + '</span><br><span class="text-sm">' + item.jenis + ' - ' + item.kondisi + '</span><br><span class="text-xs">' + item.panjang + 'mm x ' + item.lebar + 'mm | ' + item.quantity + ' unit</span><br><span class="text-xs text-slate-400">Berat Grating: ' + (item.beratGrating || 0).toFixed(2) + 'kg | Berat Support: ' + (item.beratSupport || 0).toFixed(2) + 'kg</span><br><span class="text-xs text-slate-400">PPN 11%: Rp ' + (item.nilaiPPN || 0).toLocaleString('id-ID') + '</span></div><div class="text-right"><div class="font-bold">Rp ' + item.subtotal.toLocaleString('id-ID') + '</div><button onclick="removeFromCartCalc(' + index + ')" class="text-red-500 text-xs hover:text-red-700"><i class="fas fa-trash"></i> Hapus</button></div></div>';
                }
            });
            cartDiv.innerHTML = html;
            totalDiv.innerHTML = 'Total: Rp ' + grandTotal.toLocaleString('id-ID');
            totalDiv.classList.remove('hidden');
            updateWhatsAppLink();
        }

        window.removeFromCartCalc = function(index) { cart.splice(index, 1); renderCart(); document.getElementById('price-result').classList.add('hidden'); };
        window.clearCartCalc = function() { if (cart.length > 0 && confirm('Yakin ingin mengosongkan keranjang?')) { cart = []; renderCart(); document.getElementById('price-result').classList.add('hidden'); } };
        window.calculateTotalPriceCalc = function() {
            if (cart.length === 0) { alert('Keranjang masih kosong'); return; }
            let total = 0, totalSebelumPPN = 0, totalPPN = 0, breakdown = '';
            cart.forEach(item => {
                total += item.subtotal;
                totalSebelumPPN += item.hargaSebelumPPN || (item.subtotal / 1.11);
                totalPPN += item.nilaiPPN || (item.subtotal - (item.subtotal / 1.11));
                if (item.type === 'Steel Grating') { breakdown += item.jenis + ' ' + item.kondisi + ' (' + item.panjang + 'x' + item.lebar + 'mm) x' + item.quantity + ' = Rp ' + item.subtotal.toLocaleString('id-ID') + '<br>'; }
                else if (item.type === 'Stair Tread') { breakdown += item.type + ' ' + item.jenis + ' ' + item.kondisi + ' (' + item.panjang + 'x' + item.lebar + 'mm) x' + item.quantity + ' = Rp ' + item.subtotal.toLocaleString('id-ID') + '<br>'; }
                else { breakdown += item.type + ' x' + item.quantity + ' = Rp ' + item.subtotal.toLocaleString('id-ID') + '<br>'; }
            });
            document.getElementById('total-price').innerHTML = 'Rp ' + total.toLocaleString('id-ID');
            document.getElementById('price-breakdown').innerHTML = '<div class="text-left text-sm">' + breakdown + '<hr class="my-2 border-white/30"><div class="flex justify-between"><span>Total sebelum PPN:</span><span>Rp ' + Math.ceil(totalSebelumPPN).toLocaleString('id-ID') + '</span></div><div class="flex justify-between text-yellow-200"><span>PPN 11%:</span><span>Rp ' + Math.ceil(totalPPN).toLocaleString('id-ID') + '</span></div><div class="flex justify-between font-bold text-lg mt-1"><span>Total termasuk PPN:</span><span>Rp ' + total.toLocaleString('id-ID') + '</span></div></div>';
            document.getElementById('price-result').classList.remove('hidden');
            updateWhatsAppLink();
        };

        // ==================== FUNGSI MODAL ====================
        function closeModal() { document.getElementById('specModal').classList.add('hidden'); document.body.style.overflow = 'auto'; }

        const gratingData = [
            { b: 3, w30: "-", w40: "-", w60: 125 }, { b: 4, w30: 95, w40: 125, w60: 185 }, { b: 5, w30: 125, w40: 165, w60: 245 },
            { b: 6, w30: 155, w40: 205, w60: 305 }, { b: 7, w30: 185, w40: 245, w60: 365 }, { b: 8, w30: 215, w40: 285, w60: 425 },
            { b: 9, w30: 245, w40: 325, w60: 485 }, { b: 10, w30: 275, w40: 365, w60: 545 }, { b: 11, w30: 305, w40: 405, w60: 605 },
            { b: 12, w30: 335, w40: 445, w60: 665 }, { b: 13, w30: 365, w40: 485, w60: 725 }, { b: 14, w30: 395, w40: 525, w60: 785 },
            { b: 15, w30: 425, w40: 565, w60: 845 }, { b: 16, w30: 455, w40: 605, w60: 905 }, { b: 17, w30: 485, w40: 645, w60: 965 },
            { b: 18, w30: 515, w40: 685, w60: 1025 }, { b: 19, w30: 545, w40: 725, w60: "-" }, { b: 20, w30: 575, w40: 765, w60: "-" },
            { b: 21, w30: 605, w40: 805, w60: "-" }, { b: 22, w30: 635, w40: 845, w60: "-" }, { b: 23, w30: 665, w40: 885, w60: "-" },
            { b: 24, w30: 695, w40: 925, w60: "-" }, { b: 25, w30: 725, w40: 965, w60: "-" }, { b: 26, w30: 755, w40: 1005, w60: "-" },
            { b: 27, w30: 785, w40: "-", w60: "-" }, { b: 28, w30: 815, w40: "-", w60: "-" }, { b: 29, w30: 845, w40: "-", w60: "-" },
            { b: 30, w30: 875, w40: "-", w60: "-" }, { b: 31, w30: 905, w40: "-", w60: "-" }, { b: 32, w30: 935, w40: "-", w60: "-" },
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

        // ==================== EVENT LISTENERS ====================
        document.getElementById('calc-sub-category').addEventListener('change', function() { toggleCalcPanel(); });

        // ==================== INITIALIZATION ====================
        document.addEventListener('DOMContentLoaded', () => {
            revealOnScroll();
            window.addEventListener('scroll', revealOnScroll);
            createParticles();
            handleNavbarScroll();
            window.addEventListener('scroll', handleNavbarScroll);
            toggleCalcPanel();
            calculateSteelGratingWeight();
            updateWhatsAppLink();
            document.getElementById('crossbar-diameter-select').addEventListener('change', function() { toggleCustomInput('crossbar-diameter'); });
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
