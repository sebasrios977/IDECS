export const SITE = {
  name:        'IDECS',
  tagline:     'Ingeniería, Diseño, Estructuras, Construcciones y Soluciones',
  description: 'Empresa especializada en obra civil y metalmecánica con más de 25 años de experiencia en Colombia. Construimos estructuras que perduran generaciones.',
  url:         import.meta.env.PUBLIC_SITE_URL ?? 'https://tuempresa.com',
  location:    'Puerto Gaitán, Meta, Colombia',
  phone:       '+57 (8) 000 0000',
  address:     'Calle Lorem #00-00, Puerto Gaitán, Meta',
  schedule:    'Lunes a Viernes: 7:00 AM – 5:00 PM',
  social: {
    linkedin: 'https://linkedin.com/company/tuempresa',
    instagram: 'https://instagram.com/tuempresa',
    whatsapp: 'https://wa.me/570000000000',
  },
};

export const NAV_LINKS = [
  { href: '/',          label: 'Inicio'    },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/nosotros',  label: 'Nosotros'  },
  { href: '/contacto',  label: 'Contacto'  },
];

export const STATS = [
  { value: '150+', label: 'Proyectos ejecutados'      },
  { value: '25+',  label: 'Años de experiencia'       },
  { value: '8',    label: 'Departamentos cubiertos'   },
  { value: '40+',  label: 'Clientes activos'          },
];

export const SERVICES = [
  {
    number: '01.',
    icon:   '🏗',
    title:  'Obra Civil',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    number: '02.',
    icon:   '⚙️',
    title:  'Estructuras Metálicas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    number: '03.',
    icon:   '🔩',
    title:  'Metalmecánica Industrial',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export const VALUES = [
  {
    icon:        '◆',
    title:       'Calidad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon:        '⬡',
    title:       'Seguridad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon:        '◈',
    title:       'Innovación',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon:        '❖',
    title:       'Compromiso',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
];

export const CERTIFICATIONS = [
  'ISO 9001:2015 certificada',
  'RETIE y RETILAP vigente',
  'Sistema de gestión HSEQ',
  'RUP activo y al día',
];

export const TEAM = [
  {
    initials: 'JD',
    name:     'Lorem I. Ipsum',
    role:     'Director General',
    bio:      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    initials: 'MS',
    name:     'Dolor A. Sit',
    role:     'Director de Ingeniería',
    bio:      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    initials: 'PL',
    name:     'Amet C. Adipiscing',
    role:     'Directora Comercial',
    bio:      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];

export const TIMELINE = [
  {
    year:  '2000',
    title: 'Fundación de la empresa',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    year:  '2008',
    title: 'Expansión a metalmecánica industrial',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    year:  '2015',
    title: 'Certificación ISO 9001:2015',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.',
  },
  {
    year:  '2025',
    title: 'Presencia en 8 departamentos del país',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.',
  },
];
