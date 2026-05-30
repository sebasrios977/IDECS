export type ProjectCategory =
  | 'Obra Civil'
  | 'Metalmecánica'
  | 'Industrial'
  | 'Infraestructura';

export interface Project {
  id:          string;
  name:        string;
  client:      string;
  category:    ProjectCategory;
  location:    string;
  year:        number;
  description: string;
  /** Path relative to /public — leave empty string if no image yet */
  image:       string;
  images:      string[]; // Array of paths relative to /public for additional images (optional)
}

export const PROJECTS: Project[] = [
  {
    id:          'proyecto-a',
    name:        'Lorem Ipsum Construction A',
    client:      'Dolor Sit Amet SAS',
    category:    'Obra Civil',
    location:    'Villavicencio, Meta',
    year:        2024,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: './images/test-image.png',
    images: ['./images/test-image.png', './images/test-image.png'],
  },
  {
    id:          'proyecto-b',
    name:        'Lorem Ipsum Steel Structure B',
    client:      'Consectetur Ltda.',
    category:    'Metalmecánica',
    location:    'Puerto Gaitán, Meta',
    year:        2024,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: './images/test-image.png',
    images: ['./images/test-image.png', './images/test-image.png'],
  },
  {
    id:          'proyecto-c',
    name:        'Lorem Ipsum Industrial Complex C',
    client:      'Adipiscing Group',
    category:    'Industrial',
    location:    'Bogotá, Cundinamarca',
    year:        2023,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: './images/test-image.png',
    images: ['./images/test-image.png', './images/test-image.png'],
  },
  {
    id:          'proyecto-d',
    name:        'Lorem Ipsum Bridge Project D',
    client:      'Eiusmod Corp.',
    category:    'Infraestructura',
    location:    'Acacías, Meta',
    year:        2023,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: './images/test-image.png',
    images: ['./images/test-image.png', './images/test-image.png'],
  },
  {
    id:          'proyecto-e',
    name:        'Lorem Ipsum Warehouse E',
    client:      'Tempor Inc.',
    category:    'Obra Civil',
    location:    'Granada, Meta',
    year:        2022,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: './images/test-image.png',
    images: ['./images/test-image.png', './images/test-image.png'],
  },
  {
    id:          'proyecto-f',
    name:        'Lorem Ipsum Tank Farm F',
    client:      'Labore SAS',
    category:    'Metalmecánica',
    location:    'Restrepo, Meta',
    year:        2022,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: './images/test-image.png',
    images: ['./images/test-image.png', './images/test-image.png'],
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Obra Civil',
  'Metalmecánica',
  'Industrial',
  'Infraestructura',
];
