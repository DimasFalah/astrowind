export const headerData = {
  links: [
    {
      text: 'Tentang Saya',
      href: '#about',
      i18n: 'nav_about',
    },
    {
      text: 'Keahlian',
      href: '#skills',
      i18n: 'nav_skills',
    },
    {
      text: 'Pengalaman',
      href: '#experience',
      i18n: 'nav_experience',
    },
    {
      text: 'Kontak',
      href: '#contact',
      i18n: 'nav_contact',
    },
  ],
  actions: [
    {
      text: 'Download CV',
      href: '/cv_dimas.pdf', // Mengarah ke public/cv_dimas.pdf
      target: '_blank',
      download: 'cv_dimas.pdf', // Mengaktifkan fitur auto-download
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `© 2026 Dimas Falah. All rights reserved.`,
};