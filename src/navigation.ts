import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Tentang Saya',
      href: getPermalink('/#about'),
    },
    {
      text: 'Keahlian',
      href: getPermalink('/#skills'),
    },
    {
      text: 'Pengalaman',
      href: getPermalink('/#experience'),
    },
    {
      text: 'Kontak',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [{ text: 'Download CV', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/DimasFalah' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Dimas Falah. All rights reserved.
  `,
};
