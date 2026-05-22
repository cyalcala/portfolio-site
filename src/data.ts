// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Testimonials',
    url: '#testimonials-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/cyalcala',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cyrusalcala/',
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@cyalcala',
  },
];

const resourceLinks = [
  {
    label: 'Pillarstack',
    url: 'https://www.pillarstack.com',
  },
  {
    label: 'Figma Template',
    url: 'https://www.figma.com/community/file/1328038510191576951/project-starter-template',
  },
];

const heroText =
  'An AI Builder and Technical Writer, building autonomous systems and writing developer-focused guides.';

const locationPlace = `14°35'59"N 120°59'0"E`;
const locationCountry = 'Philippines, Manila';

// cal.com (not active by default for Cyrus)
const dataCalNamespace = '30min';
const dataCalLink = 'cyrusalcala/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
