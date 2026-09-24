export interface TranslationKey {
  [key: string]: string;
}

export interface Translations {
  [lang: string]: TranslationKey;
}

export const translations: Translations = {
  id: {
    // Navigation & Hero
    hero_badge: 'Halo, Saya',
    hero_role_prefix: 'Seorang',
    hero_desc: 'yang berfokus pada perancangan antarmuka visual bersih interaktif serta aplikasi web modern.',
    btn_contact: 'Hubungi Saya',
    btn_projects: 'Lihat Proyek',

    // About Section
    about_tagline: 'Tentang Saya',
    about_title: 'Menciptakan Pengalaman Digital Berbasis Desain & Kode',
    about_profile_title: 'Profil Ringkas',
    about_profile_desc: 'Selamat datang di portofolio saya! Saya memiliki minat mendalam dalam dunia desain antarmuka (UI/UX) dan pengembangan tampilan web (Frontend Development).',
    
    about_item_1_title: 'Design Thinking Approach',
    about_item_1_desc: 'Mendalami masalah pengguna secara empati untuk merancang solusi UI/UX yang relevan, intuitif, dan bernilai bisnis.',
    
    about_item_2_title: 'Web & App Development',
    about_item_2_desc: 'Mengembangkan aplikasi web dan mobile yang responsif, terstruktur, serta memiliki performa tinggi.',
    
    about_item_3_title: 'Kolaboratif & Komunikatif',
    about_item_3_desc: 'Pemain tim yang adaptif, siap bekerja sama lintas fungsi (Developer, PM, Designer) dengan komunikasi yang terbuka dan produktif.',

    // Skills Section
    skills_tagline: 'Keahlian',
    skills_title: 'Teknologi & Tools',
    skills_subtitle: 'Perangkat lunak dan teknologi yang saya gunakan untuk mewujudkan konsep desain menjadi produk nyata',

    // Projects Section
    projects_tagline: 'Portofolio',
    projects_title: 'Proyek Yang Pernah Dikerjakan',
    project_1_desc: 'Perancangan ulang Antarmuka Aplikasi Mobile JKN menggunakan Metode Design Thinking untuk meningkatkan aksesibilitas layanan kesehatan, kenyamanan visual, serta pengalaman pengguna.',
    project_1_focus_desc: 'Redesain UI/UX berbasis kebutuhan pengguna, penyederhanaan alur navigasi fitur utama (Kartu Digital & Antrean Online), serta konsistensi sistem desain.',
    project_2_desc: 'Perancangan dan pengembangan platform manajemen tugas interaktif untuk mempermudah kolaborasi tim serta pemantauan progress proyek secara berkala.',
    project_2_focus_desc: 'Desain ultra-responsif, manajemen tugas interaktif, visualisasi status proyek, dan performa pemuatan halaman yang sangat cepat.',
    project_focus_title: 'Fokus Desain & Fitur',
    project_tech_title: 'Teknologi & Tools',

    // Experience Section
    exp_tagline: 'Riwayat',
    exp_title: 'Pengalaman & Pendidikan',
    exp_subtitle: 'Latar belakang pendidikan dan alur perjalanan saya di bidang desain dan teknologi',

    exp_date_1: 'Jan 2025 - Mar 2025',
    exp_item_1_title: 'UI/UX Designer & Developer Intern — Kemenkes RI',
    exp_item_1_desc: 'Berkontribusi dalam pengembangan dan perancangan antarmuka sistem/aplikasi layanan kesehatan digital di lingkungan Kementerian Kesehatan Republik Indonesia.',

    exp_date_2: '2021 - 2026',
    exp_item_2_title: 'S1 Teknik Informatika — Universitas Padjadjaran',
    exp_item_2_desc: 'Mempelajari dasar rekayasa perangkat lunak, pemrograman web, perancangan antarmuka pengguna (UI/UX), dan struktur data.',

    exp_date_3: '2018 - 2021',
    exp_item_3_title: 'SMAN 46 Jakarta',
    exp_item_3_desc: 'Menyelesaikan pendidikan menengah atas serta aktif mengembangkan minat awal di bidang teknologi dan komputer.',

    // Contact Section
    contact_title: 'Punya Ide Proyek Menarik?',
    contact_desc: 'Saya selalu terbuka untuk diskusi mengenai perancangan UI/UX, kolaborasi pengembangan web, atau peluang kerja harian.',
    contact_btn: 'Mari Bekerja Sama',
  },
  en: {
    // Navigation & Hero
    hero_badge: 'Hello, I am',
    hero_role_prefix: 'A',
    hero_desc: 'focusing on designing clean, interactive visual interfaces and modern web applications.',
    btn_contact: 'Contact Me',
    btn_projects: 'View Projects',

    // About Section
    about_tagline: 'About Me',
    about_title: 'Creating Digital Experiences Driven by Design & Code',
    about_profile_title: 'Short Profile',
    about_profile_desc: 'Welcome to my portfolio! I have a deep passion for user interface design (UI/UX) and Frontend Development.',
    
    about_item_1_title: 'Design Thinking Approach',
    about_item_1_desc: 'Empathizing with user problems to craft intuitive, business-value driven UI/UX solutions.',
    
    about_item_2_title: 'Web & App Development',
    about_item_2_desc: 'Building responsive, well-structured, and high-performance web and mobile applications.',
    
    about_item_3_title: 'Collaborative & Communicative',
    about_item_3_desc: 'An adaptive team player, ready to cross-collaborate with Developers, PMs, and Designers through clear communication.',

    // Skills Section
    skills_tagline: 'Skills',
    skills_title: 'Tech & Tools',
    skills_subtitle: 'Software and technologies I use to turn design concepts into real products',

    // Projects Section
    projects_tagline: 'Portfolio',
    projects_title: 'Featured Projects',
    project_1_desc: 'Redesigning the JKN Mobile Application Interface using the Design Thinking method to improve healthcare service accessibility, visual comfort, and user experience.',
    project_1_focus_desc: 'User-centered UI/UX redesign, simplifying main feature navigation (Digital Card & Online Queue), and maintaining design system consistency.',
    project_2_desc: 'Designing and developing an interactive task management platform to streamline team collaboration and track project progress.',
    project_2_focus_desc: 'Ultra-responsive design, interactive task management, project status visualization, and fast page loading performance.',
    project_focus_title: 'Design Focus & Features',
    project_tech_title: 'Tech & Tools',

    // Experience Section
    exp_tagline: 'History',
    exp_title: 'Experience & Education',
    exp_subtitle: 'My educational background and professional journey in design and technology',

    exp_date_1: 'Jan 2025 - Mar 2025',
    exp_item_1_title: 'UI/UX Designer & Developer Intern — Ministry of Health RI',
    exp_item_1_desc: 'Contributed to designing interface and developing digital healthcare systems at the Ministry of Health Republic of Indonesia.',

    exp_date_2: '2021 - 2026',
    exp_item_2_title: 'B.S. in Informatics Engineering — Padjadjaran University',
    exp_item_2_desc: 'Studied software engineering fundamentals, web development, user interface design (UI/UX), and data structures.',

    exp_date_3: '2018 - 2021',
    exp_item_3_title: 'SMAN 46 Jakarta High School',
    exp_item_3_desc: 'Completed senior high school education while actively exploring early interests in technology and computing.',

    // Contact Section
    contact_title: 'Have an Interesting Project Idea?',
    contact_desc: 'I am always open to discussions regarding UI/UX design, web development collaboration, or work opportunities.',
    contact_btn: "Let's Work Together",
  },
};