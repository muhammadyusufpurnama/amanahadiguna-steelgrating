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
        <link rel="icon" type="image/png" href="/logo amanah adi guna.png">
        <style>
            html {
                scroll-behavior: smooth;
            }
            .grating-slides {
                /* Memastikan transisi halus saat perubahan class opacity */
                transition: opacity 1000ms ease-in-out;
            }
        </style>
    </head>
    <body class="bg-slate-50 text-slate-900 font-sans">

        <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <img src="/logo amanah adi guna.png" alt="Logo PT Amanah Adi Guna" class="h-10 w-auto">
                    <div class="text-xl font-bold text-blue-900 tracking-tight text-nowrap">AMANAH ADI GUNA</div>
                </div>
                <div class="hidden md:flex space-x-8 font-medium text-slate-600">
                    <a href="#home" class="hover:text-blue-900 transition">Beranda</a>
                    <a href="#about" class="hover:text-blue-900 transition">Tentang Kami</a>
                    <a href="#produk" class="hover:text-blue-900 transition">Produk</a>
                    <a href="#contact" class="hover:text-blue-900 transition">Kontak</a>
                </div>
            </div>
        </nav>

        <section id="home" class="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        Mitra Strategis Pembangunan <span class="text-blue-400">Infrastruktur Baja</span> Nasional.
                    </h1>
                    <p class="text-lg text-slate-300 mb-8 max-w-md">
                        Menghadirkan solusi baja hilir kelas dunia dengan komitmen teguh terhadap kualitas, integritas struktural, dan keandalan.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#about" class="bg-white text-blue-900 px-8 py-3 rounded font-bold hover:bg-slate-100 transition shadow-lg">Pelajari Selengkapnya</a>
                        <a href="#contact" class="border border-white/30 px-8 py-3 rounded font-bold hover:bg-white/10 transition">Hubungi Kami</a>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <div class="relative w-full max-w-md aspect-video bg-slate-800 rounded-lg shadow-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                        <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        <span class="text-slate-500 font-mono text-sm uppercase tracking-widest">Amanah Adi Guna Steel</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-blue-900 font-bold tracking-widest uppercase text-sm mb-4">Tentang Kami</h2>
                        <h3 class="text-3xl font-bold mb-6 text-slate-800 leading-snug">Berdedikasi dalam Penyediaan Material Baja Sejak 2024</h3>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Berdiri pada tanggal 08 Agustus 2024 di Kota Gresik, Jawa Timur, PT. Amanah Adi Guna berspesialisasi dalam penyediaan material infrastruktur baja hilir.
                        </p>
                        <p class="text-slate-600 mb-8 leading-relaxed">
                            Misi kami adalah menjadi mitra strategis pembangunan nasional yang menghadirkan solusi infrastruktur baja kelas dunia melalui komitmen terhadap integritas struktural, 
                            keamanan jalan, dan keberlanjutan lingkungan.
                        </p>
                        <div class="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                            <div>
                                <h4 class="font-bold text-blue-900">Legalitas Terjamin</h4>
                                <p class="text-sm text-slate-500">Terdaftar resmi di AHU & NIB sejak Agustus 2024.</p>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-900">Lokasi Strategis</h4>
                                <p class="text-sm text-slate-500">Berada dipusat wilayah Gresik.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-slate-100 p-8 rounded-2xl">
                        <h4 class="text-xl font-bold mb-6 text-blue-900">Informasi Legalitas</h4>
                        <ul class="space-y-4 text-slate-700">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                                <span><strong>Akta Pendirian:</strong> AHU-045746.AH.01.30.Tahun 2024</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                                <span><strong>NIB:</strong> 2208240036555</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                                <span><strong>NPWP:</strong> 0125.7774.3364.2000</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Valued Clients</h2>
                <div class="w-20 h-1.5 bg-blue-600 mx-auto mb-12 rounded-full"></div>
                
                <p class="text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Kami bangga telah menjalin kemitraan strategis dengan berbagai perusahaan terkemuka untuk mendukung pembangunan infrastruktur yang berkelanjutan.
                </p>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">
                    <div class="client-logo-wrapper p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md">
                        <img src="/pln nusantara power.png" alt="PLN Nusantara Power" class="max-h-16 w-auto object-contain">
                    </div>

                    <div class="client-logo-wrapper p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md">
                        <img src="/pln nusantara power services.png" alt="PLN Nusantara Power Services" class="max-h-16 w-auto object-contain">
                    </div>

                    <div class="client-logo-wrapper p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md">
                        <img src="/jacobis.png" alt="Jacobis" class="max-h-14 w-auto object-contain">
                    </div>

                    <div class="client-logo-wrapper p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md">
                        <img src="/espe.jpg" alt="ESPE" class="max-h-14 w-auto object-contain">
                    </div>
                </div>
            </div>
        </section>

        <section id="produk" class="py-24 bg-slate-50 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-blue-900 font-bold tracking-widest uppercase text-sm mb-4">Katalog Produk</h2>
                    <h3 class="text-3xl font-bold text-slate-900">Spesifikasi Infrastruktur Baja</h3>
                    <div class="w-20 h-1.5 bg-blue-600 mx-auto mt-4"></div>
                </div>

                <div class="flex flex-wrap justify-center gap-4 mb-10">
                    <button onclick="showProduct('grating')" id="btn-grating" class="product-btn px-6 py-2 rounded-full font-semibold border-2 border-blue-900 transition shadow-sm">Steel Grating</button>
                    <button onclick="showProduct('pole')" id="btn-pole" class="product-btn px-6 py-2 rounded-full font-semibold border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition shadow-sm">Pole</button>
                    <button onclick="showProduct('guardrail')" id="btn-guardrail" class="product-btn px-6 py-2 rounded-full font-semibold border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition shadow-sm">Guard Rail</button>
                </div>

                <div class="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden max-w-5xl mx-auto">
                    
                    <div id="content-grating" class="product-content flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
                            <div class="relative bg-slate-100 w-full aspect-video rounded-xl mb-8 flex items-center justify-center overflow-hidden">
                                <img src="/steel-grating.png" 
                                    id="grating-img-1"
                                    class="grating-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" 
                                    alt="Steel Grating Product">

                                <img src="/steel-grating-spec.png" 
                                    id="grating-img-2"
                                    class="grating-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" 
                                    alt="Steel Grating Spec Diagram">
                            </div>

                            <h4 class="text-2xl font-bold text-blue-900 mb-4">Steel Grating</h4>
                            <p class="text-slate-600 leading-relaxed">
                                Material ringan dengan daya tahan beban tinggi. Desain ekonomis, anti-selip, serta memastikan sirkulasi udara dan cahaya maksimal. Mudah dipasang dan tahan lama.
                            </p>
                            <div class="mt-10">
                                <a href="https://wa.me/6281332222323?text=halo%20apakah%20benar%20dengan%20PT.%20Amanah%20Adi%20Guna,%20saya%20ingin%20konsultasi%20mengenai%20produk%20steel%20grating%20yang%20ditawarkan" 
                                target="_blank"
                                class="bg-[#25D366] text-white px-8 py-4 rounded font-bold hover:bg-green-400 transition inline-flex items-center shadow-lg">
                                    <i class="fab fa-whatsapp mr-2 text-xl text-white"></i> Konsultasi via WhatsApp
                                </a>
                            </div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-12 bg-slate-50/50">
                            <h5 class="font-bold text-blue-900 mb-4 uppercase text-xs tracking-widest">Tabel Spesifikasi</h5>
                            <div class="overflow-x-auto">
                                <table class="w-full text-center text-xs border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                                    <thead>
                                        <tr class="bg-blue-900 text-white">
                                            <th class="p-2 border border-blue-800" rowspan="2">Number of Bearing</th>
                                            <th class="p-2 border border-blue-800" colspan="3">Nominal Width (mm)</th>
                                        </tr>
                                        <tr class="bg-blue-800 text-white">
                                            <th class="p-2 border border-blue-700">30</th>
                                            <th class="p-2 border border-blue-700">40</th>
                                            <th class="p-2 border border-blue-700">60</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-slate-600">
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-bold bg-slate-50">3</td>
                                            <td class="p-2 border border-slate-200">-</td>
                                            <td class="p-2 border border-slate-200">-</td>
                                            <td class="p-2 border border-slate-200">125</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-bold bg-slate-50">4</td>
                                            <td class="p-2 border border-slate-200">95</td>
                                            <td class="p-2 border border-slate-200">125</td>
                                            <td class="p-2 border border-slate-200">185</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-bold bg-slate-50">5</td>
                                            <td class="p-2 border border-slate-200">125</td>
                                            <td class="p-2 border border-slate-200">165</td>
                                            <td class="p-2 border border-slate-200">245</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-bold bg-slate-50">6</td>
                                            <td class="p-2 border border-slate-200">155</td>
                                            <td class="p-2 border border-slate-200">205</td>
                                            <td class="p-2 border border-slate-200">305</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-bold bg-slate-50">7</td>
                                            <td class="p-2 border border-slate-200">185</td>
                                            <td class="p-2 border border-slate-200">245</td>
                                            <td class="p-2 border border-slate-200">365</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-bold bg-slate-50">8</td>
                                            <td class="p-2 border border-slate-200">215</td>
                                            <td class="p-2 border border-slate-200">285</td>
                                            <td class="p-2 border border-slate-200">425</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-bold bg-slate-50">9</td>
                                            <td class="p-2 border border-slate-200">245</td>
                                            <td class="p-2 border border-slate-200">325</td>
                                            <td class="p-2 border border-slate-200">485</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-bold bg-slate-50">10</td>
                                            <td class="p-2 border border-slate-200">275</td>
                                            <td class="p-2 border border-slate-200">365</td>
                                            <td class="p-2 border border-slate-200">545</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-bold bg-slate-50">⋮</td>
                                            <td class="p-2 border border-slate-200">⋮</td>
                                            <td class="p-2 border border-slate-200">⋮</td>
                                            <td class="p-2 border border-slate-200">⋮</td>
                                        </tr>
                                        <tr class="bg-slate-50/50">
                                            <td class="p-2 border border-slate-200 font-bold bg-slate-50">34</td>
                                            <td class="p-2 border border-slate-200">995</td>
                                            <td class="p-2 border border-slate-200">-</td>
                                            <td class="p-2 border border-slate-200">-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button onclick="openModal()" class="mt-4 w-full py-2 bg-blue-50 text-blue-900 text-xs font-bold rounded hover:bg-blue-100 transition flex items-center justify-center">
                                <i class="fas fa-list-ul mr-2"></i> Lihat Selengkapnya (32 Tipe)
                            </button>
                            <p class="mt-4 text-[11px] text-slate-500 italic leading-relaxed">
                                * Data berdasarkan standar teknis PT. Amanah Adi Guna.
                            </p>
                        </div>
                    </div>

                    <div id="content-guardrail" class="product-content hidden flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
                            <div class="relative bg-slate-100 w-full aspect-video rounded-xl mb-8 flex items-center justify-center overflow-hidden">
                                <img src="/guardrail.png" 
                                    class="guardrail-slides absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 opacity-100" 
                                    alt="High Quality Guard Rail Product">

                                <img src="/guardrail-spec.png" 
                                    class="guardrail-slides absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 opacity-0" 
                                    alt="Guard Rail Specification Diagram">
                            </div>

                            <h4 class="text-2xl font-bold text-blue-900 mb-4">Guard Rail</h4>
                            <p class="text-slate-600 leading-relaxed">
                                Solusi pagar pengaman jalan tol dengan material baja tinggi yang kuat dan fleksibel untuk meminimalisir risiko kecelakaan fatal.
                            </p>
                            <div class="mt-10">
                                <a href="https://wa.me/6281332222323?text=halo%20apakah%20benar%20dengan%20PT.%20Amanah%20Adi%20Guna,%20saya%20ingin%20konsultasi%20mengenai%20produk%20guardrail%20yang%20ditawarkan" 
                                target="_blank"
                                class="bg-[#25D366] text-white px-8 py-4 rounded font-bold hover:bg-green-400 transition inline-flex items-center shadow-lg">
                                    <i class="fab fa-whatsapp mr-2 text-xl text-white"></i> Konsultasi via WhatsApp
                                </a>
                            </div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-12 bg-slate-50/50">
                            <h5 class="font-bold text-blue-900 mb-4 uppercase text-xs tracking-widest">Tabel SpesifikasiTeknis</h5>
                            <table class="w-full text-xs border-collapse bg-white rounded-lg shadow-sm">
                                <thead>
                                            <tr class="bg-blue-900 text-white">
                                                <th class="p-2 border border-blue-800">No. Bag <br><small>Part no.</small></th>
                                                <th class="p-2 border border-blue-800">Nama Bagian <br><small>Part name</small></th>
                                                <th class="p-2 border border-blue-800">Ukuran <br><small>Size</small></th>
                                                <th class="p-2 border border-blue-800">Jumlah <br><small>Quantity</small></th>
                                            </tr>
                                        </thead>
                                <tbody class="text-slate-600 text-center">
                                    <tr>
                                        <td class="p-3 border border-slate-200 font-bold text-blue-900">1</td>
                                        <td class="p-3 border border-slate-200">W-Beam Section</td>
                                        <td class="p-3 border border-slate-200">312 x 83 x 2.67</td>
                                        <td class="p-3 border border-slate-200">N</td>
                                    </tr>
                                    <tr class="bg-slate-50">
                                        <td class="p-3 border border-slate-200 font-bold text-blue-900">2</td>
                                        <td class="p-3 border border-slate-200">Steel Block</td>
                                        <td class="p-3 border border-slate-200">U175 x 75-350 L x t</td>
                                        <td class="p-3 border border-slate-200">2N+1</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border border-slate-200 font-bold text-blue-900">3</td>
                                        <td class="p-3 border border-slate-200">Steel Post</td>
                                        <td class="p-3 border border-slate-200">U175 x 75-1800 L x t</td>
                                        <td class="p-3 border border-slate-200">2N+1</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border border-slate-200 font-bold text-blue-900">4</td>
                                        <td class="p-3 border border-slate-200">End Block</td>
                                        <td class="p-3 border border-slate-200">410 x 225 x 2.67-700L</td>
                                        <td class="p-3 border border-slate-200">2</td>
                                    </tr>
                                    <tr class="bg-slate-50">
                                        <td class="p-3 border border-slate-200 font-bold text-blue-900">5</td>
                                        <td class="p-3 border border-slate-200">Hexagon Bolt</td>
                                        <td class="p-3 border border-slate-200">M16 x 35 (W 5/8"x1 1/4")</td>
                                        <td class="p-3 border border-slate-200">4N+2</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border border-slate-200 font-bold text-blue-900">6</td>
                                        <td class="p-3 border border-slate-200">Fastener</td>
                                        <td class="p-3 border border-slate-200">4.5 x 45 x 75</td>
                                        <td class="p-3 border border-slate-200">2N+1</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border border-slate-200 font-bold text-blue-900">7</td>
                                        <td class="p-3 border border-slate-200">Splice Bolt</td>
                                        <td class="p-3 border border-slate-200">M16 x 40 (W 5/8"x1 1/4")</td>
                                        <td class="p-3 border border-slate-200">8N+8</td>
                                    </tr>
                                    <tr class="bg-slate-50">
                                        <td class="p-3 border border-slate-200 font-bold text-blue-900">8</td>
                                        <td class="p-3 border border-slate-200">Splice Bolt</td>
                                        <td class="p-3 border border-slate-200">M16 x 45 (W 5/8"x1 1/4")</td>
                                        <td class="p-3 border border-slate-200">2N+1</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onclick="openGuardrailModal()" class="mt-4 w-full py-2 bg-blue-50 text-blue-900 text-xs font-bold rounded hover:bg-blue-100 transition flex items-center justify-center">
                                <i class="fas fa-expand-arrows-alt mr-2"></i> LIHAT GAMBAR & DETAIL SPESIFIKASI
                            </button>
                            <p class="mt-4 text-[11px] text-slate-500 italic leading-relaxed">
                                * t = 4.5, 5.0, atau 6.0 tergantung kebutuhan proyek.
                            </p>
                        </div>
                    </div>

                    <div id="content-pole" class="product-content hidden flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
                            <div class="relative bg-slate-100 w-full aspect-video rounded-xl mb-8 flex items-center justify-center overflow-hidden">
                                <img src="/pole.png" 
                                    class="pole-slides absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" 
                                    alt="High Quality Pole Product">

                                <img src="/pole-spec.png" 
                                    class="pole-slides absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 opacity-0" 
                                    alt="Pole Specification Diagram">
                            </div>

                            <h4 class="text-2xl font-bold text-blue-900 mb-4">Pole</h4>
                            <p class="text-slate-600 leading-relaxed">
                                Tiang berstruktur persegi-kerucut yang estetis, kokoh, dan merata di semua sisi. Tahan korosi dengan lapisan galvanis, serta menjamin mutu lewat sertifikasi SNI dan ISO 9001:2008.
                            </p>
                            <div class="mt-10">
                                <a href="https://wa.me/6281332222323?text=halo%20apakah%20benar%20dengan%20PT.%20Amanah%20Adi%20Guna,%20saya%20ingin%20konsultasi%20mengenai%20produk%20pole%20yang%20ditawarkan" 
                                target="_blank"
                                class="bg-[#25D366] text-white px-8 py-4 rounded font-bold hover:bg-green-400 transition inline-flex items-center shadow-lg">
                                    <i class="fab fa-whatsapp mr-2 text-xl text-white"></i> Konsultasi via WhatsApp
                                </a>
                            </div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-12 bg-slate-50/50">
                            
                            <h5 class="font-bold text-blue-900 mb-4 uppercase text-xs tracking-widest">Tabel Spesifikasi Teknis</h5>
                            <div class="overflow-x-auto">
                                <table class="w-full text-xs border-collapse bg-white rounded-lg shadow-sm">
                                    <thead>
                                            <tr class="bg-blue-900 text-white">
                                                <th class="p-2 border border-blue-800">Tinggi (meter)</th>
                                                <th class="p-2 border border-blue-800">Bentangan (mm)</th>
                                                <th class="p-2 border border-blue-800">radius (mm)</th>
                                                <th class="p-2 border border-blue-800">Tapak <br>(b1xb1xb2) (mm)</th>
                                                <th class="p-2 border border-blue-800">Angkur <br>(a1xa1xa3) (mm)</th>
                                            </tr>
                                    </thead>
                                    <tbody class="text-slate-600">
                                        <tr>
                                            <td class="p-2 border border-slate-200 font-bold text-center" rowspan="2">6</td>
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
                                            <td class="p-2 border border-slate-200 font-bold text-center" rowspan="2">7</td>
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
                                            <td class="p-2 border border-slate-200 font-bold text-center" rowspan="2">8</td>
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
                                            <td class="p-2 border border-slate-200 font-bold text-center" rowspan="2">9</td>
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
                                            <td class="p-2 border border-slate-200 font-bold text-center" rowspan="2">15</td>
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
                            <button onclick="openPoleModal()" class="mt-4 w-full py-2 bg-blue-50 text-blue-900 text-xs font-bold rounded hover:bg-blue-100 transition flex items-center justify-center">
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

            function showProduct(productId, isManual = false) {
                const content = document.getElementById('content-' + productId);
                if (!content) return; // Guard clause agar tidak crash jika ID salah

                currentIndex = products.indexOf(productId);

                // Hide all
                document.querySelectorAll('.product-content').forEach(el => el.classList.add('hidden'));
                // Show selected
                content.classList.remove('hidden');
                
                // Update Buttons
                document.querySelectorAll('.product-btn').forEach(btn => {
                    btn.classList.remove('bg-blue-900', 'text-white');
                    btn.classList.add('text-blue-900');
                });
                
                const activeBtn = document.getElementById('btn-' + productId);
                if (activeBtn) {
                    activeBtn.classList.add('bg-blue-900', 'text-white');
                    activeBtn.classList.remove('text-blue-900');
                }

                if (isManual) resetAutoSlide();
            }

            function nextProduct() {
                currentIndex = (currentIndex + 1) % products.length;
                showProduct(products[currentIndex], false);
            }

            function startAutoSlide() {
                // PERBAIKAN: Gunakan 10000 untuk 10 detik
                autoSlideInterval = setInterval(nextProduct, 10000); 
            }

            function resetAutoSlide() {
                clearInterval(autoSlideInterval);
                startAutoSlide();
            }

            document.addEventListener('DOMContentLoaded', () => {
                showProduct('grating');
                startAutoSlide();
            });

            // Fungsi untuk inisialisasi slideshow gambar internal

            function initImageSlideshow(className, intervalTime) {
                let slideIndex = 0;
                const slides = document.querySelectorAll('.' + className);
                
                if (slides.length <= 1) return; // Jangan jalankan jika gambar cuma 1

                setInterval(() => {
                    // Fade Out gambar sekarang
                    slides[slideIndex].classList.replace('opacity-100', 'opacity-0');
                    
                    // Pindah index
                    slideIndex = (slideIndex + 1) % slides.length;
                    
                    // Fade In gambar berikutnya
                    slides[slideIndex].classList.replace('opacity-0', 'opacity-100');
                }, intervalTime);
            }

            // Inisialisasi semua slideshow saat halaman siap
            document.addEventListener('DOMContentLoaded', () => {
                showProduct('grating'); // Produk default
                startAutoSlide();      // Perpindahan card produk (10 detik)
                
                // Jalankan slideshow gambar internal masing-masing produk (misal 5 detik)
                initImageSlideshow('grating-slides', 5000); 
                initImageSlideshow('pole-slides', 5000);
                initImageSlideshow('guardrail-slides', 5000);
            });

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

                // 1. Ganti Judul Modal
                document.querySelector('#specModal h3').innerText = 'Spesifikasi Lengkap Steel Grating';

                // 2. Tambahkan Gambar Spesifikasi (Gunakan kutip tunggal agar aman)
                let contentHtml = '<div class="mb-6 rounded-lg overflow-hidden border border-slate-200 bg-white">' +
                                    '<img src="/steel-grating-spec.png" class="w-full h-auto object-contain" alt="Steel Grating Spec Diagram">' +
                                '</div>';

                // 3. Tambahkan Struktur Tabel
                contentHtml += '<table class="w-full text-center text-[10px] border-collapse bg-white rounded-lg shadow-sm">' +
                    '<thead>' +
                        '<tr class="bg-blue-900 text-white">' +
                            '<th class="p-2 border border-blue-800" rowspan="2">Number of Bearing</th>' +
                            '<th class="p-2 border border-blue-800" colspan="3">Nominal Width (mm)</th>' +
                        '</tr>' +
                        '<tr class="bg-blue-800 text-white">' +
                            '<th class="p-2 border border-blue-700">30</th>' +
                            '<th class="p-2 border border-blue-700">40</th>' +
                            '<th class="p-2 border border-blue-700">60</th>' +
                        '</tr>' +
                    '</thead>' +
                    '<tbody class="text-slate-600">';

                // 4. Masukkan Data dari Array gratingData
                gratingData.forEach((item, index) => {
                    const rowClass = (index % 2 === 0) ? 'bg-white' : 'bg-slate-50';
                    contentHtml += '<tr class="' + rowClass + ' hover:bg-blue-50">' +
                        '<td class="p-2 border border-slate-200 font-bold">' + item.b + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.w30 + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.w40 + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.w60 + '</td>' +
                    '</tr>';
                });

                contentHtml += '</tbody></table>';

                // 5. Render ke dalam modal
                modalContainer.innerHTML = contentHtml;

                // 6. Tampilkan Modal
                document.getElementById('specModal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }

            function closeModal() {
                document.getElementById('specModal').classList.add('hidden');
                document.body.style.overflow = 'auto'; // Aktifkan kembali scroll
            }
            
            // Data Teknis Pole dari Gambar Compro
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
                { h: 15, b: 2100, r: 1800, tapak: "400 x 400 x 19", angkur: "22 x 800 x 100" },
            ];

            function openPoleModal() {
                const modalContainer = document.querySelector('#specModal .p-6.overflow-y-auto');
                if (!modalContainer) return;

                // 1. Ganti Judul Modal
                document.querySelector('#specModal h3').innerText = 'Spesifikasi Lengkap High Quality Pole';

                // 2. Tambahkan Gambar Spesifikasi (Gunakan kutip tunggal agar aman di Node.js)
                let contentHtml = '<div class="mb-6 rounded-lg overflow-hidden border border-slate-200 bg-white">' +
                                    '<img src="/pole-spec.png" class="w-full h-auto object-contain" alt="Pole Spec Diagram">' +
                                '</div>';

                // 3. Tambahkan Struktur Tabel
                contentHtml += '<table class="w-full text-center text-[10px] border-collapse bg-white rounded-lg shadow-sm">' +
                    '<thead>' +
                        '<tr class="bg-blue-900 text-white">' +
                            '<th class="p-2 border border-blue-800">Tinggi (meter)</th>' +
                            '<th class="p-2 border border-blue-800">Bentangan (mm)</th>' +
                            '<th class="p-2 border border-blue-800">Radius (mm)</th>' +
                            '<th class="p-2 border border-blue-800">Tapak (b1xb1xb2)(mm)</th>' +
                            '<th class="p-2 border border-blue-800">Angkur (a1xa2xa3)(mm)</th>' +
                        '</tr>' +
                    '</thead>' +
                    '<tbody class="text-slate-600">';

                // 4. Masukkan Data dari Array poleData dengan Logika Rowspan
                for (let i = 0; i < poleData.length; i++) {
                    const item = poleData[i];
                    const rowClass = (i % 2 === 0) ? 'bg-white' : 'bg-slate-50';
                    const isFirstOfGroup = (i % 2 === 0); 

                    contentHtml += '<tr class="' + rowClass + ' hover:bg-blue-50">';
                    
                    if (isFirstOfGroup) {
                        contentHtml += '<td class="p-2 border border-slate-200 font-bold" rowspan="2">' + item.h + '</td>';
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

                // 5. Tambahkan Catatan Kaki
                contentHtml += '<p class="mt-4 text-[11px] text-slate-500 italic leading-relaxed">' +
                            '* Ukuran tiang bisa disesuaikan dengan kebutuhan.' +
                            '</p>';

                // 6. Render ke dalam modal
                modalContainer.innerHTML = contentHtml;

                // 7. Tampilkan Modal
                document.getElementById('specModal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }

            function openGuardrailModal() {
                const modalContainer = document.querySelector('#specModal .p-6.overflow-y-auto');
                if (!modalContainer) return;

                document.querySelector('#specModal h3').innerText = 'Spesifikasi Lengkap Guard Rail';

                // 1. Susunan Gambar menggunakan View Utama & Thumbnail
                let contentHtml = '<div class="mb-6">' +
                    '<div class="rounded-lg overflow-hidden border border-slate-200 bg-white mb-4 shadow-inner">' +
                        '<img id="main-guardrail-view" src="/guardrail-spec.png" class="w-full h-auto min-h-[250px] md:min-h-[350px] object-contain p-2 transition-all duration-300">' +
                    '</div>' +
                    '<div class="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">' +
                        // Thumbnail 1 (Active by default)
                        '<img src="/guardrail-spec.png" onclick="changeGuardrailView(this)" class="guardrail-thumb h-16 w-24 object-cover border-2 border-blue-900 rounded cursor-pointer opacity-100 transition-all">' +
                        // Thumbnail 2
                        '<img src="/guardrail-part1.png" onclick="changeGuardrailView(this)" class="guardrail-thumb h-16 w-24 object-cover border border-slate-200 rounded cursor-pointer opacity-60 hover:opacity-100 transition-all">' +
                        // Thumbnail 3
                        '<img src="/guardrail-part2.png" onclick="changeGuardrailView(this)" class="guardrail-thumb h-16 w-24 object-cover border border-slate-200 rounded cursor-pointer opacity-60 hover:opacity-100 transition-all">' +
                        // Thumbnail 4
                        '<img src="/guardrail-part3.png" onclick="changeGuardrailView(this)" class="guardrail-thumb h-16 w-24 object-cover border border-slate-200 rounded cursor-pointer opacity-60 hover:opacity-100 transition-all">' +
                    '</div>' +
                '</div>';

                // 2. Struktur Tabel
                contentHtml += '<table class="w-full text-center text-[10px] border-collapse bg-white rounded-lg shadow-sm">' +
                    '<thead><tr class="bg-blue-900 text-white">' +
                        '<th class="p-2 border border-blue-800">No. Bagian</th>' +
                        '<th class="p-2 border border-blue-800">Nama Bagian</th>' +
                        '<th class="p-2 border border-blue-800">Ukuran (Size)</th>' +
                        '<th class="p-2 border border-blue-800">Jumlah (Qty)</th>' +
                    '</tr></thead>' +
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

                guardrailData.forEach((item, index) => {
                    const rowClass = (index % 2 === 0) ? 'bg-white' : 'bg-slate-50';
                    contentHtml += '<tr class="' + rowClass + ' hover:bg-blue-50">' +
                        '<td class="p-2 border border-slate-200 font-bold">' + item.no + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.name + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.size + '</td>' +
                        '<td class="p-2 border border-slate-200">' + item.qty + '</td>' +
                    '</tr>';
                });
                contentHtml += '</tbody></table>';
                contentHtml += '<p class="mt-4 text-[11px] text-slate-500 italic leading-relaxed">* t = 4.5, 5.0, atau 6.0 tergantung kebutuhan proyek.</p>';

                modalContainer.innerHTML = contentHtml;
                document.getElementById('specModal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }

            // Fungsi Helper untuk ganti gambar & update border thumbnail
            function changeGuardrailView(el) {
                // Ganti gambar utama
                const mainImg = document.getElementById('main-guardrail-view');
                mainImg.style.opacity = '0';
                setTimeout(() => {
                    mainImg.src = el.src;
                    mainImg.style.opacity = '1';
                }, 200);

                // Update styling thumbnail
                document.querySelectorAll('.guardrail-thumb').forEach(thumb => {
                    thumb.classList.remove('border-blue-900', 'border-2', 'opacity-100');
                    thumb.classList.add('border-slate-200', 'border', 'opacity-60');
                });
                
                el.classList.remove('border-slate-200', 'border', 'opacity-60');
                el.classList.add('border-blue-900', 'border-2', 'opacity-100');
            }
        </script>

        <style>
            .product-btn.active {
                background-color: #1e3a8a;
                color: white;
            }
        </style>

        <section id="contact" class="py-24 bg-blue-900 text-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="text-left">
                        <h2 class="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Hubungi Kami</h2>
                        <h3 class="text-3xl font-bold mb-6">Kantor Operasional</h3>
                        <p class="text-blue-100 mb-8 leading-relaxed">
                            Silakan kunjungi kantor kami atau hubungi kami melalui saluran di bawah ini untuk konsultasi proyek infrastruktur baja.
                        </p>
                        
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                    <i class="fas fa-map-marker-alt text-blue-400"></i>
                                </div>
                                <div>
                                    <p class="font-bold">Alamat</p>
                                    <p class="text-sm text-blue-200">Jl. Sunan Giri No.57, Kel. Kawisanyar, Kec. Kebomas, Gresik, Jawa Timur - 61121</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                    <i class="fas fa-envelope text-blue-400"></i>
                                </div>
                                <div>
                                    <p class="font-bold">Email</p>
                                    <p class="text-sm text-blue-200">contact@amanahadiguna.com</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10">
                            <a href="https://wa.me/6281332222323?text=halo%20apakah%20benar%20dengan%20PT.%20Amanah%20Adi%20Guna" 
                            target="_blank"
                            class="bg-white text-blue-900 px-8 py-4 rounded font-bold hover:bg-slate-100 transition inline-flex items-center shadow-lg">
                                <i class="fab fa-whatsapp mr-2 text-xl text-[#25D366]"></i> Konsultasi via WhatsApp
                            </a>
                        </div>
                    </div>

                    <div class="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.6582670687642!2d112.63665276953897!3d-7.16834639955227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd8006c715ec355%3A0x852bf158ddb3335d!2sJl.%20Sunan%20Giri%20No.57%2C%20Kebomas%2C%20Ngipik%2C%20Kec.%20Gresik%2C%20Kabupaten%20Gresik%2C%20Jawa%20Timur%2061121!5e0!3m2!1sid!2sid!4v1776516942017!5m2!1sid!2sid" 
                        width="600" 
                        height="450" 
                        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>

        <footer class="py-16 border-t border-slate-200 bg-black">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div class="flex items-center space-x-2 mb-6">
                            <div class="flex items-center space-x-2">
                                <img src="/logo amanah adi guna.png" alt="Logo PT Amanah Adi Guna" class="h-10 w-auto">
                                <div class="text-xl font-bold text-white tracking-tight text-nowrap">AMANAH ADI GUNA</div>
                            </div>
                        </div>
                        <p class="text-white text-sm leading-relaxed">
                            Mitra strategis pembangunan nasional yang menghadirkan solusi infrastruktur baja kelas dunia dengan integritas tinggi.
                        </p>
                    </div>

                    <div>
                        <h4 class="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigasi</h4>
                        <ul class="space-y-4">
                            <li><a href="#home" class="text-white hover:text-white transition text-sm flex items-center"><i class="fas fa-chevron-right text-[10px] mr-2"></i> Beranda</a></li>
                            <li><a href="#about" class="text-white hover:text-white transition text-sm flex items-center"><i class="fas fa-chevron-right text-[10px] mr-2"></i> Tentang Kami</a></li>
                            <li><a href="#produk" class="text-white hover:text-white transition text-sm flex items-center"><i class="fas fa-chevron-right text-[10px] mr-2"></i> Produk</a></li>
                            <li><a href="#contact" class="text-white hover:text-white transition text-sm flex items-center"><i class="fas fa-chevron-right text-[10px] mr-2"></i> Kontak</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-white font-bold mb-6 uppercase text-xs tracking-widest">Lokasi</h4>
                        <p class="text-white text-sm leading-relaxed">
                            Jl. Sunan Giri No.57, Kel. Kawisanyar,<br>
                            Kec. Kebomas, Gresik, Jawa Timur<br>
                            61121, Indonesia
                        </p>
                    </div>
                </div>

                <div class="pt-8 border-t border-white flex flex-col md:flex-row justify-between items-center text-white text-xs">
                    <p>&copy; 2026 PT. Amanah Adi Guna. Seluruh Hak Cipta Dilindungi.</p>
                    <div class="mt-4 md:mt-0">
                        <p>Designed by <span class="text-white font-medium">Digital Usaha</span></p>
                    </div>
                </div>
            </div>
        </footer>

        <a href="https://wa.me/6281332222323?text=halo%20apakah%20benar%20dengan%20PT.%20Amanah%20Adi%20Guna" 
           target="_blank" 
           class="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group">
            
            <span class="absolute right-20 bg-white text-slate-800 text-sm font-semibold px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
                Chat dengan Kami
            </span>

            <i class="fab fa-whatsapp text-4xl"></i>
        </a>

        <div id="specModal" class="fixed inset-0 z-[10000] hidden flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-blue-900 text-white">
                    <h3 class="font-bold text-lg">Spesifikasi Lengkap Steel Grating</h3>
                    <button onclick="closeModal()" class="text-white hover:text-slate-300">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div class="p-6 overflow-y-auto max-h-[70vh]">
                    <table class="w-full text-center text-xs border-collapse">
                        <thead>
                            <tr class="bg-slate-100 text-slate-700">
                                <th class="p-2 border border-slate-200" rowspan="2">Number of Bearing</th>
                                <th class="p-2 border border-slate-200" colspan="3">Nominal Width (mm)</th>
                            </tr>
                            <tr class="bg-slate-50 text-slate-700">
                                <th class="p-2 border border-slate-200">30</th>
                                <th class="p-2 border border-slate-200">40</th>
                                <th class="p-2 border border-slate-200">60</th>
                            </tr>
                        </thead>
                        <tbody id="modalTableBody" class="text-slate-600">
                            </tbody>
                    </table>
                </div>
                <div class="p-4 border-t border-slate-100 text-right">
                    <button onclick="closeModal()" class="bg-slate-200 text-slate-700 px-6 py-2 rounded font-semibold hover:bg-slate-300 transition">Tutup</button>
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