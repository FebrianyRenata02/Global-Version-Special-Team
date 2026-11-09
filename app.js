/**
- SPECIAL TEAM - Elite Digital & Community Solutions
- Complete Vanilla JavaScript DOM Application
 */

(function() {
    'use strict';

    // Inject Custom Styles & Tailwind Config dynamically
    function injectAssets() {
        if (!document.getElementById('special-team-styles')) {
            const style = document.createElement('style');
            style.id = 'special-team-styles';
            style.textContent = `
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #09090b;
                    color: #f4f4f5;
                }
                .glow-purple {
                    box-shadow: 0 0 50px -10px rgba(139, 92, 246, 0.25);
                }
                .glow-card:hover {
                    box-shadow: 0 10px 30px -5px rgba(139, 92, 246, 0.15);
                    border-color: rgba(139, 92, 246, 0.4);
                }
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: #09090b;
                }
                ::-webkit-scrollbar-thumb {
                    background: #27272a;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #3f3f46;
                }
            `;
            document.head.appendChild(style);
        }

        if (!document.getElementById('tailwind-script')) {
            const twScript = document.createElement('script');
            twScript.id = 'tailwind-script';
            twScript.src = 'https://cdn.tailwindcss.com';
            twScript.onload = () => {
                window.tailwind.config = {
                    darkMode: 'class',
                    theme: {
                        extend: {
                            colors: {
                                darkBg: '#09090b',
                                cardBg: '#121217',
                                cardHover: '#1a1a23',
                                primary: '#8b5cf6',
                                primaryHover: '#7c3aed',
                                discordBlurple: '#5865F2'
                            },
                            fontFamily: {
                                sans: ['Inter', 'sans-serif'],
                            }
                        }
                    }
                };
            };
            document.head.appendChild(twScript);
        }

        if (!document.getElementById('google-fonts')) {
            const fontLink = document.createElement('link');
            fontLink.id = 'google-fonts';
            fontLink.rel = 'stylesheet';
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
            document.head.appendChild(fontLink);
        }

        if (!document.getElementById('fontawesome')) {
            const faLink = document.createElement('link');
            faLink.id = 'fontawesome';
            faLink.rel = 'stylesheet';
            faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(faLink);
        }
    }

    // Build Entire Application HTML Shell via DOM
    function renderApp() {
        const root = document.getElementById('app') || document.body;
        root.className = 'bg-darkBg text-gray-100 antialiased selection:bg-primary selection:text-white';
        root.innerHTML = `
            <!-- Notification Toast Element -->
            <div id="toast" class="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 bg-cardBg border border-purple-500/30 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3">
                <i class="fa-solid fa-circle-check text-purple-400 text-lg"></i>
                <span id="toast-message" class="text-sm font-medium text-gray-200">Berhasil!</span>
            </div>

            <!-- Header / Navbar Section -->
            <header class="sticky top-0 z-40 backdrop-blur-xl bg-darkBg/80 border-b border-white/5">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 grid grid-cols-3 items-center">
                    <!-- Left: Logo & Agency Badge -->
                    <div id="nav-logo" class="flex items-center gap-3 cursor-pointer justify-start">
                        <img src="ST2.png" alt="Special Team Logo" style="height: 48px; width: auto; object-fit: contain; filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.4));">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="font-extrabold tracking-wider text-base sm:text-lg bg-gradient-to-r from-white via-gray-200 to-purple-400 bg-clip-text text-transparent">SPECIAL TEAM</span>
                                <span class="hidden sm:inline-block text-[10px] bg-purple-950 text-purple-300 font-semibold px-2 py-0.5 rounded-full border border-purple-500/30">AGENCY</span>
                            </div>
                            <span class="block text-[10px] text-gray-400 font-medium tracking-widest uppercase">Elite Digital Solutions</span>
                        </div>
                    </div>

                    <!-- Center: Nav Links -->
                    <nav class="hidden lg:flex items-center justify-center gap-6 text-sm font-medium text-gray-300">
                        <a href="#beranda" class="hover:text-purple-400 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-xs text-purple-400"></i> Beranda</a>
                        <a href="#layanan" class="hover:text-purple-400 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-layer-group text-xs text-purple-400"></i> Layanan</a>
                        <a href="#portofolio" class="hover:text-purple-400 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-code text-xs text-purple-400"></i> Portofolio</a>
                        <a href="#tim" class="hover:text-purple-400 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-users text-xs text-purple-400"></i> Tim</a>
                        <a href="#pesan" class="hover:text-purple-400 transition-colors flex items-center gap-1.5"><i class="fa-solid fa-paper-plane text-xs text-purple-400"></i> Pesan Layanan</a>
                    </nav>

                    <!-- Right: Discord & Mobile Menu Button -->
                    <div class="flex items-center justify-end gap-3">
                        <a href="https://discord.com" target="_blank" class="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-[#5865F2]/20 hover:scale-[1.02]">
                            <i class="fa-brands fa-discord text-lg"></i>
                            <span>Discord Server</span>
                        </a>
                        <button id="menu-btn" class="lg:hidden text-gray-300 hover:text-white p-2 text-xl focus:outline-none">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu Dropdown -->
                <div id="mobile-menu" class="hidden lg:hidden px-4 pt-3 pb-6 bg-cardBg border-b border-white/5 space-y-3">
                    <a href="#beranda" class="mobile-link block text-gray-300 hover:text-purple-400 py-1.5 font-medium text-sm"><i class="fa-solid fa-house w-5 text-purple-400"></i> Beranda</a>
                    <a href="#layanan" class="mobile-link block text-gray-300 hover:text-purple-400 py-1.5 font-medium text-sm"><i class="fa-solid fa-layer-group w-5 text-purple-400"></i> Layanan</a>
                    <a href="#portofolio" class="mobile-link block text-gray-300 hover:text-purple-400 py-1.5 font-medium text-sm"><i class="fa-solid fa-code w-5 text-purple-400"></i> Portofolio</a>
                    <a href="#tim" class="mobile-link block text-gray-300 hover:text-purple-400 py-1.5 font-medium text-sm"><i class="fa-solid fa-users w-5 text-purple-400"></i> Tim</a>
                    <a href="#pesan" class="mobile-link block text-gray-300 hover:text-purple-400 py-1.5 font-medium text-sm"><i class="fa-solid fa-paper-plane w-5 text-purple-400"></i> Pesan Layanan</a>
                </div>
            </header>

            <!-- Hero Section -->
            <section id="beranda" class="relative pt-12 pb-20 overflow-hidden">
                <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none"></div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6">
                        <span class="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                        Special Team Agency • Open for Projects & Commissions
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div class="lg:col-span-7 space-y-6">
                            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                                Wujudkan Ide Digital Anda Bersama <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">Special Team</span>
                            </h1>
                            <p class="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                                Agensi digital elit yang mengkhususkan diri dalam Graphic Design, UI/UX Design, Back-End Web Development, Custom Discord Bots, dan Engineering berkualitas tinggi dengan standar komunitas profesional.
                            </p>
                            <div class="flex flex-wrap items-center gap-4 pt-2">
                                <a href="#pesan" class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl shadow-purple-600/25 flex items-center gap-2 transition-all hover:scale-[1.02]">
                                    <i class="fa-solid fa-paper-plane"></i> Mulai Pesan Layanan
                                </a>
                                <a href="#portofolio" class="bg-cardBg hover:bg-cardHover text-gray-200 border border-white/10 font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all">
                                    <i class="fa-solid fa-folder-open text-purple-400"></i> Lihat Portofolio
                                </a>
                            </div>

                            <div class="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div>
                                    <div class="text-2xl sm:text-3xl font-extrabold text-white">50+</div>
                                    <div class="text-xs text-gray-400 font-medium mt-1">Proyek Selesai</div>
                                </div>
                                <div>
                                    <div class="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                                    <div class="text-xs text-gray-400 font-medium mt-1">Kepuasan Klien</div>
                                </div>
                                <div>
                                    <div class="text-2xl sm:text-3xl font-extrabold text-white">24/7</div>
                                    <div class="text-xs text-gray-400 font-medium mt-1">Support & Maintenance</div>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-5">
                            <div class="bg-cardBg border border-purple-500/25 rounded-3xl p-6 shadow-2xl glow-purple relative">
                                <div class="flex items-center justify-between pb-4 border-b border-white/10">
                                    <div class="flex items-center gap-3">
                                        <div class="w-9 h-9 rounded-xl bg-purple-600/30 flex items-center justify-center text-purple-400">
                                            <i class="fa-solid fa-shield-halved"></i>
                                        </div>
                                        <div>
                                            <h3 class="font-bold text-sm text-white">Special Team Hub</h3>
                                            <p class="text-[11px] text-green-400 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online & Ready</p>
                                        </div>
                                    </div>
                                    <span class="text-[10px] bg-purple-900/50 text-purple-300 font-semibold px-2.5 py-1 rounded-lg border border-purple-500/30">Elite Hub</span>
                                </div>

                                <div class="mt-4 space-y-3">
                                    <div class="bg-darkBg/80 p-3 rounded-2xl border border-white/5">
                                        <div class="flex items-center justify-between text-xs mb-1">
                                            <span class="font-bold text-purple-400 flex items-center gap-1.5"><i class="fa-solid fa-crown text-[10px]"></i> Pengarah strategi dan koordinator seluruh proyek Comunity</span>
                                            <span class="text-[10px] text-gray-500">Baru saja</span>
                                        </div>
                                        <p class="text-xs text-gray-300">Komisi desain web & bot Discord untuk klien VIP telah diselesaikan dengan sukses!</p>
                                    </div>
                                    <div class="bg-darkBg/80 p-3 rounded-2xl border border-white/5">
                                        <div class="flex items-center justify-between text-xs mb-1">
                                            <span class="font-bold text-blue-400 flex items-center gap-1.5"><i class="fa-solid fa-code text-[10px]"></i> Guardian, Back-End Developer</span>
                                            <span class="text-[10px] text-gray-500">5 mnt lalu</span>
                                        </div>
                                        <p class="text-xs text-gray-300">Menerima pesanan baru untuk arsitektur server backend dan manajemen database.</p>
                                    </div>
                                </div>

                                <a href="#pesan" class="mt-6 w-full py-3 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all">
                                    <i class="fa-solid fa-comments"></i> Konsultasikan Proyek Anda
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section id="layanan" class="py-20 bg-[#070709] border-t border-white/5">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-2xl mx-auto mb-16">
                        <span class="text-purple-400 font-semibold text-xs tracking-widest uppercase bg-purple-950/50 px-3 py-1 rounded-full border border-purple-500/20">Layanan Profesional</span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">Kami Menawarkan Anda</h2>
                        <p class="text-gray-400 text-sm mt-3">Solusi lengkap untuk kebutuhan digital bisnis Anda. Mulai dari desain website profesional, pengembangan Back-End, hingga optimasi performa dan keamanan. Tim ahli kami siap membantu mewujudkan visi digital Anda dengan teknologi terkini.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-cardBg border border-white/5 rounded-3xl p-7 glow-card transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div class="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl mb-6">
                                    <i class="fa-solid fa-pen-nib"></i>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-2">Graphic Design</h3>
                                <p class="text-gray-400 text-sm mb-6 leading-relaxed">Pembuatan banner promosi, logo branding, poster, aset media sosial, dan visual banner Discord berkualitas tinggi dan eye-catching.</p>
                            </div>
                            <div class="space-y-2 border-t border-white/5 pt-4 text-xs text-gray-300">
                                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-purple-400"></i> Brand Identity & Logo</div>
                                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-purple-400"></i> Server Banner & Icon</div>
                            </div>
                        </div>

                        <div class="bg-cardBg border border-white/5 rounded-3xl p-7 glow-card transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div class="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl mb-6">
                                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-2">UI/UX Design</h3>
                                <p class="text-gray-400 text-sm mb-6 leading-relaxed">Perancangan antarmuka pengguna (UI) dan pengalaman pengguna (UX) yang intuitif, modern, dan responsif menggunakan Figma.</p>
                            </div>
                            <div class="space-y-2 border-t border-white/5 pt-4 text-xs text-gray-300">
                                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-indigo-400"></i> Wireframe & Prototype</div>
                                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-indigo-400"></i> Web & App Interface</div>
                            </div>
                        </div>

                        <div class="bg-cardBg border border-white/5 rounded-3xl p-7 glow-card transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div class="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl mb-6">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-2">Back-End Web Dev</h3>
                                <p class="text-gray-400 text-sm mb-6 leading-relaxed">Pengembangan sistem server, REST API, manajemen database, dan integrasi backend yang andal dan aman.</p>
                            </div>
                            <div class="space-y-2 border-t border-white/5 pt-4 text-xs text-gray-300">
                                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> Secure REST APIs & Database</div>
                                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-blue-400"></i> High Performance & Scalable</div>
                            </div>
                        </div>

                        <div class="bg-cardBg border border-white/5 rounded-3xl p-7 glow-card transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div class="w-12 h-12 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2] text-xl mb-6">
                                    <i class="fa-brands fa-discord"></i>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-2">Custom Discord Bots</h3>
                                <p class="text-gray-400 text-sm mb-6 leading-relaxed">Pembuatan bot Discord khusus untuk otomatisasi server, sistem verifikasi, moderasi, musik, tiket support, dan integrasi API eksternal.</p>
                            </div>
                            <div class="space-y-2 border-t border-white/5 pt-4 text-xs text-gray-300">
                                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-[#5865F2]"></i> Bot Automation & Moderation</div>
                                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-[#5865F2]"></i> Custom Commands & Database</div>
                            </div>
                        </div>

                        <div class="bg-cardBg border border-white/5 rounded-3xl p-7 glow-card transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-2">
                            <div>
                                <div class="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl mb-6">
                                    <i class="fa-solid fa-server"></i>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-2">Engineering & Cloud Solutions</h3>
                                <p class="text-gray-400 text-sm mb-6 leading-relaxed">Arsitektur sistem server yang handal, manajemen cloud/deployment, optimasi performa kustom, serta keamanan tingkat tinggi untuk kelangsungan ekosistem digital Anda.</p>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/5 pt-4 text-xs text-gray-300">
                                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> Server Architecture & VPS Setup</div>
                                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> API Development & Security</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Showcase Section -->
            <section id="portofolio" class="py-20 border-t border-white/5">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-2xl mx-auto mb-16">
                        <span class="text-purple-400 font-semibold text-xs tracking-widest uppercase bg-purple-950/50 px-3 py-1 rounded-full border border-purple-500/20">Portofolio Pilihan</span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">Showcase Proyek Unggulan</h2>
                        <p class="text-gray-400 text-sm mt-3">Beberapa hasil karya terbaik yang telah kami selesaikan untuk klien dan komunitas.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-cardBg border border-white/5 rounded-3xl overflow-hidden glow-card transition-all duration-300 flex flex-col justify-between">
                            <div class="h-52 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-6 flex flex-col justify-between relative">
                                <div class="flex justify-end">
                                    <span class="bg-black/40 backdrop-blur-md text-cyan-300 text-[10px] font-bold px-3 py-1 rounded-full border border-white/10">Bot Discord</span>
                                </div>
                                <div class="flex justify-center items-center py-2">
                                    <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-3xl shadow-xl border border-white/20">
                                        <i class="fa-solid fa-robot"></i>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-white mb-2">Guardian Bot V4</h3>
                                    <p class="text-gray-400 text-xs leading-relaxed">Bot pelindung server otomatis dengan sistem AI anti-spam, manajemen tiket, dan integrasi panel web.</p>
                                </div>
                                <div>
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        <span class="bg-white/5 text-purple-300 text-[10px] px-2.5 py-1 rounded-lg font-medium">Node.js</span>
                                        <span class="bg-white/5 text-purple-300 text-[10px] px-2.5 py-1 rounded-lg font-medium">Discord.js</span>
                                    </div>
                                    <button class="project-btn w-full py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-all" data-title="Guardian Bot V4" data-desc="Bot pelindung server otomatis dengan sistem AI anti-spam tingkat lanjut, sistem verifikasi captcha, manajemen tiket otomatis, dan kontrol panel berbasis web dengan keamanan enkripsi tinggi.">
                                        <span>Lihat Detail Proyek</span> <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="bg-cardBg border border-white/5 rounded-3xl overflow-hidden glow-card transition-all duration-300 flex flex-col justify-between">
                            <div class="h-52 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 p-6 flex flex-col justify-between relative">
                                <div class="flex justify-end">
                                    <span class="bg-black/40 backdrop-blur-md text-amber-300 text-[10px] font-bold px-3 py-1 rounded-full border border-white/10">Web App</span>
                                </div>
                                <div class="flex justify-center items-center py-2">
                                    <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-3xl shadow-xl border border-white/20">
                                        <i class="fa-solid fa-gamepad"></i>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-white mb-2">Esports Tournament Platform</h3>
                                    <p class="text-gray-400 text-xs leading-relaxed">Sistem pendaftaran turnamen game online dengan manajemen bracket otomatis dan live scoring.</p>
                                </div>
                                <div>
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        <span class="bg-white/5 text-purple-300 text-[10px] px-2.5 py-1 rounded-lg font-medium">React</span>
                                        <span class="bg-white/5 text-purple-300 text-[10px] px-2.5 py-1 rounded-lg font-medium">Tailwind</span>
                                    </div>
                                    <button class="project-btn w-full py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-all" data-title="Esports Tournament Platform" data-desc="Platform manajemen turnamen esport end-to-end yang dilengkapi integrasi bracket otomatis single/double elimination, pendaftaran tim real-time, dan live streaming scoreboards.">
                                        <span>Lihat Detail Proyek</span> <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="bg-cardBg border border-white/5 rounded-3xl overflow-hidden glow-card transition-all duration-300 flex flex-col justify-between">
                            <div class="h-52 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-6 flex flex-col justify-between relative">
                                <div class="flex justify-end">
                                    <span class="bg-black/40 backdrop-blur-md text-emerald-300 text-[10px] font-bold px-3 py-1 rounded-full border border-white/10">Branding</span>
                                </div>
                                <div class="flex justify-center items-center py-2">
                                    <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-3xl shadow-xl border border-white/20">
                                        <i class="fa-solid fa-palette"></i>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-white mb-2">Neon Community Branding</h3>
                                    <p class="text-gray-400 text-xs leading-relaxed">Desain paket identitas visual lengkap mencakup logo, banner discord, emoji kustom, dan overlay streaming.</p>
                                </div>
                                <div>
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        <span class="bg-white/5 text-purple-300 text-[10px] px-2.5 py-1 rounded-lg font-medium">Figma</span>
                                        <span class="bg-white/5 text-purple-300 text-[10px] px-2.5 py-1 rounded-lg font-medium">Photoshop</span>
                                    </div>
                                    <button class="project-btn w-full py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-all" data-title="Neon Community Branding" data-desc="Paket rebranding visual komprehensif untuk komunitas game besar mencakup panduan warna, maskot kustom vector, asset emote animasi, dan desain overlay OBS.">
                                        <span>Lihat Detail Proyek</span> <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Team Section -->
            <section id="tim" class="py-20 bg-[#070709] border-t border-white/5">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-2xl mx-auto mb-16">
                        <span class="text-purple-400 font-semibold text-xs tracking-widest uppercase bg-purple-950/50 px-3 py-1 rounded-full border border-purple-500/20">Ahli & Profesional</span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">Tim Inti Special Team</h2>
                        <p class="text-gray-400 text-sm mt-3">Dipimpin oleh individu berpengalaman di bidang pengembangan perangkat lunak dan desain kreatif.</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="bg-cardBg border border-white/5 rounded-3xl p-6 text-center glow-card transition-all duration-300 flex flex-col justify-between min-h-[560px]">
                            <div class="flex flex-col items-center">
                                <div class="w-16 h-16 rounded-2xl overflow-hidden mb-4 shadow-xl shadow-purple-500/20 border border-purple-500/30">
                                    <img src="tigers_403.png" alt="Tigers" class="w-full h-full object-cover">
                                </div>
                                <span class="text-[10px] bg-purple-950 text-purple-300 px-3 py-1 rounded-full font-bold border border-purple-500/30 mb-2">FOUNDER</span>
                                <h3 class="text-lg font-bold text-white mb-1">Tigers 🐯</h3>
                                <p class="text-purple-400 text-xs font-semibold mb-3 leading-snug">Pengarah strategi dan koordinator seluruh proyek Comunity</p>
                                <p class="text-gray-400 text-xs leading-relaxed">Fullstack Developer Berpengalaman dengan keahlian dalam berbagai teknologi Front-End dan Back-End.</p>
                            </div>
                            <div class="flex items-center justify-center gap-3 text-gray-400 pt-4 border-t border-white/5 mt-4">
                                <a href="#" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-sm transition-colors"><i class="fa-brands fa-discord"></i></a>
                                <a href="#" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-sm transition-colors"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>

                        <div class="bg-cardBg border border-white/5 rounded-3xl p-6 text-center glow-card transition-all duration-300 flex flex-col justify-between min-h-[560px]">
                            <div class="flex flex-col items-center">
                                <div class="w-16 h-16 rounded-2xl overflow-hidden mb-4 shadow-xl shadow-blue-500/20 border border-blue-500/30">
                                    <img src="Pradana.png" alt="Pradana" class="w-full h-full object-cover">
                                </div>
                                <span class="text-[10px] bg-blue-950 text-blue-300 px-3 py-1 rounded-full font-bold border border-blue-500/30 mb-2">GUARDIAN</span>
                                <h3 class="text-lg font-bold text-white mb-1">Pradana</h3>
                                <p class="text-blue-400 text-xs font-semibold mb-3 leading-snug">Back-End Developer</p>
                                <p class="text-gray-400 text-xs leading-relaxed mb-3">Penengah atau pemimpin yang bertugas mengatur, mengarahkan, dan mengawasi jalannya suatu diskusi, rapat, seminar.</p>
                                <p class="text-gray-400 text-xs leading-relaxed">spesialis dengan keahlian dalam arsitektur sistem dan database management.</p>
                            </div>
                            <div class="flex items-center justify-center gap-3 text-gray-400 pt-4 border-t border-white/5 mt-4">
                                <a href="#" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-sm transition-colors"><i class="fa-brands fa-discord"></i></a>
                                <a href="#" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-sm transition-colors"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>

                        <div class="bg-cardBg border border-white/5 rounded-3xl p-6 text-center glow-card transition-all duration-300 flex flex-col justify-between min-h-[560px]">
                            <div class="flex flex-col items-center">
                                <div class="w-16 h-16 rounded-2xl overflow-hidden mb-4 shadow-xl shadow-pink-500/20 border border-pink-500/30">
                                    <img src="Smoker.png" alt="Smoker" class="w-full h-full object-cover">
                                </div>
                                <span class="text-[10px] bg-pink-950 text-pink-300 px-3 py-1 rounded-full font-bold border border-pink-500/30 mb-2">UIX</span>
                                <h3 class="text-lg font-bold text-white mb-1">Smoker</h3>
                                <p class="text-pink-400 text-xs font-semibold mb-3 leading-snug">UI/UX & Graphic Lead</p>
                                <p class="text-gray-400 text-xs leading-relaxed">Perancang visual estetika dan antarmuka produk.</p>
                            </div>
                            <div class="flex items-center justify-center gap-3 text-gray-400 pt-4 border-t border-white/5 mt-4">
                                <a href="#" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-sm transition-colors"><i class="fa-brands fa-figma"></i></a>
                                <a href="#" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-sm transition-colors"><i class="fa-brands fa-behance"></i></a>
                            </div>
                        </div>

                        <div class="bg-cardBg border border-white/5 rounded-3xl p-6 text-center glow-card transition-all duration-300 flex flex-col justify-between min-h-[560px]">
                            <div class="flex flex-col items-center">
                                <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white text-xl font-bold shadow-xl shadow-emerald-500/20 mb-4">RZ</div>
                                <span class="text-[10px] bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full font-bold border border-emerald-500/30 mb-2">ENG</span>
                                <h3 class="text-lg font-bold text-white mb-1">Raihan Z.</h3>
                                <p class="text-emerald-400 text-xs font-semibold mb-3 leading-snug">Cloud & Systems Engineer</p>
                                <p class="text-gray-400 text-xs leading-relaxed">Pengelola infrastruktur server dan keamanan jaringan.</p>
                            </div>
                            <div class="flex items-center justify-center gap-3 text-gray-400 pt-4 border-t border-white/5 mt-4">
                                <a href="#" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-sm transition-colors"><i class="fa-brands fa-discord"></i></a>
                                <a href="#" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-sm transition-colors"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Order Form Section -->
            <section id="pesan" class="py-20 border-t border-white/5 relative">
                <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[140px] pointer-events-none"></div>
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="bg-cardBg border border-purple-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl glow-purple">
                        <div class="text-center max-w-lg mx-auto mb-10">
                            <span class="text-purple-400 font-semibold text-xs tracking-widest uppercase bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/20">Pesan Layanan</span>
                            <h2 class="text-2xl sm:text-3xl font-extrabold mt-3 tracking-tight">Mulai Proyek Bersama Special Team</h2>
                            <p class="text-gray-400 text-xs mt-2">Isi formulir di bawah ini atau hubungi kami langsung melalui Discord untuk mendiskusikan kebutuhan Anda.</p>
                        </div>

                        <form id="order-form" class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Nama Lengkap / Panggilan</label>
                                    <input type="text" id="name" required placeholder="Contoh: Budi Santoso" class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors">
                                </div>
                                <div>
                                    <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Username Discord / Kontak</label>
                                    <input type="text" id="contact" required placeholder="Contoh: budi#1234 atau 08123456789" class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors">
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Pilih Layanan</label>
                                <select id="service" class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors">
                                    <option value="Graphic Design">Graphic Design (Banner, Logo, Asset)</option>
                                    <option value="UI/UX Design">UI/UX Design (Figma, Web/App Prototype)</option>
                                    <option value="Back-End Web Dev">Back-End Web Development</option>
                                    <option value="Custom Discord Bots">Custom Discord Bots</option>
                                    <option value="Engineering & Cloud Solutions">Engineering & Cloud Solutions</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Detail Proyek / Catatan</label>
                                <textarea id="details" rows="4" required placeholder="Jelaskan detail kebutuhan proyek, fitur yang diinginkan, atau referensi..." class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"></textarea>
                            </div>

                            <div class="flex flex-col sm:flex-row items-center gap-4 pt-2">
                                <button type="submit" class="w-full sm:flex-1 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-xl shadow-purple-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]">
                                    <i class="fa-solid fa-paper-plane"></i> Kirim Pesanan ke Tim
                                </button>
                                <a href="https://discord.com" target="_blank" class="w-full sm:w-auto px-6 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#5865F2]/20">
                                    <i class="fa-brands fa-discord"></i> Chat via Discord
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <!-- Footer Section -->
            <footer class="bg-cardBg border-t border-white/5 py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
                        <div class="md:col-span-5 space-y-4">
                            <div class="flex items-center gap-3">
                                <img src="ST2.png" alt="Special Team Logo" style="height: 36px; width: auto; object-fit: contain; filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.4));">
                                <span class="font-extrabold tracking-wider text-base text-white">SPECIAL TEAM</span>
                            </div>
                            <p class="text-gray-400 text-xs max-w-sm leading-relaxed">
                                Agensi digital profesional dan komunitas developer dengan standar tinggi untuk kebutuhan digital Anda.
                            </p>
                        </div>

                        <div class="md:col-span-3 space-y-3">
                            <h4 class="font-bold text-xs uppercase tracking-wider text-white">Navigasi Utama</h4>
                            <ul class="space-y-2 text-xs text-gray-400">
                                <li><a href="#beranda" class="hover:text-purple-400 transition-colors">Beranda</a></li>
                                <li><a href="#layanan" class="hover:text-purple-400 transition-colors">Layanan</a></li>
                                <li><a href="#portofolio" class="hover:text-purple-400 transition-colors">Portofolio</a></li>
                                <li><a href="#tim" class="hover:text-purple-400 transition-colors">Tim & Ahli</a></li>
                            </ul>
                        </div>

                        <div class="md:col-span-2 space-y-3">
                            <h4 class="font-bold text-xs uppercase tracking-wider text-white">Komunitas & Link</h4>
                            <ul class="space-y-2 text-xs text-gray-400">
                                <li><a href="https://discord.com" target="_blank" class="hover:text-purple-400 transition-colors">Discord Server</a></li>
                                <li><a href="#pesan" class="hover:text-purple-400 transition-colors">Pesan Layanan</a></li>
                                <li><a href="#" class="hover:text-purple-400 transition-colors">Kebijakan Privasi</a></li>
                                <li><a href="#" class="hover:text-purple-400 transition-colors">Syarat & Ketentuan</a></li>
                            </ul>
                        </div>

                        <div class="md:col-span-2 space-y-3">
                            <h4 class="font-bold text-xs uppercase tracking-wider text-white">Status Layanan</h4>
                            <div class="bg-darkBg p-3 rounded-xl border border-white/5 space-y-2 text-xs">
                                <div class="flex items-center justify-between text-gray-300"><span>API Gateway</span> <span class="text-green-400 flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online</span></div>
                                <div class="flex items-center justify-between text-gray-300"><span>Project Queue</span> <span class="text-purple-400 font-semibold">Aktif & Open</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
                        <p>&copy; 2026 Special Team. All rights reserved. Recognized with Discord Aesthetics.</p>
                        <div class="flex items-center gap-4 mt-4 sm:mt-0 text-gray-400">
                            <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-discord"></i></a>
                            <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-github"></i></a>
                            <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </footer>

            <!-- Project Detail Modal -->
            <div id="project-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md hidden opacity-0 transition-opacity duration-300">
                <div class="bg-cardBg border border-purple-500/30 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative transform scale-95 transition-transform duration-300" id="modal-content">
                    <button id="modal-close" class="absolute top-4 right-4 text-gray-400 hover:text-white w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <div class="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl mb-4">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <h3 id="modal-title" class="text-xl font-bold text-white mb-2">Judul Proyek</h3>
                    <p id="modal-desc" class="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">Deskripsi lengkap proyek akan tampil di sini.</p>
                    <button id="modal-ok-btn" class="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-purple-600/30 transition-all">Tutup</button>
                </div>
            </div>
        `;
    }

    // Attach Interactivity Event Listeners
    function setupInteractions() {
        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }

        // Logo Scroll to Top
        const navLogo = document.getElementById('nav-logo');
        if (navLogo) {
            navLogo.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Toast Notification System
        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-message');
            if (!toast || !toastMsg) return;

            toastMsg.innerText = message;
            toast.classList.remove('translate-y-20', 'opacity-0');

            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3500);
        }

        // Form Submit Handler
        const orderForm = document.getElementById('order-form');
        if (orderForm) {
            orderForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const nameInput = document.getElementById('name');
                const clientName = nameInput ? nameInput.value : 'Klien';

                showToast(`Terima kasih ${clientName}! Pesanan Anda berhasil dikirim ke Special Team.`);
                orderForm.reset();
            });
        }

        // Modal Management
        const modal = document.getElementById('project-modal');
        const modalContent = document.getElementById('modal-content');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const realModalClose = document.getElementById('modal-close');
        const modalOkBtn = document.getElementById('modal-ok-btn');
        const projectBtns = document.querySelectorAll('.project-btn');

        function openModal(title, desc) {
            if (!modal || !modalContent) return;
            if (modalTitle) modalTitle.innerText = title;
            if (modalDesc) modalDesc.innerText = desc;

            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
        }

        function closeModal() {
            if (!modal || !modalContent) return;
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        projectBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const title = btn.getAttribute('data-title');
                const desc = btn.getAttribute('data-desc');
                openModal(title, desc);
            });
        });

        if (realModalClose) realModalClose.addEventListener('click', closeModal);
        if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);

        if (modal) {
            window.addEventListener('click', (e) => {
                e.target === modal && closeModal();
            });
        }
    }

    // Initialize application execution
    function init() {
        injectAssets();
        renderApp();
        setupInteractions();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
