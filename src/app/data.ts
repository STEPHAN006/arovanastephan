export const baseSkills = ["React", "Next.js", "Tailwind CSS", "PostgreSQL", "and more..."];

export const translations = {
  fr: {
    skills: 'Compétences',
    experience: 'Expérience',
    projects: 'Projets',
    showMore: 'Voir plus',
    showLess: 'Voir moins',
    now: 'Maintenant',
    developer: 'Développeur',
    fullstack: 'Fullstack',
    at: 'chez',
    blog: 'Un blog personnel construit avec Next.js et Tailwind CSS'
  },
  en: {
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    showMore: 'Show more',
    showLess: 'Show less',
    now: 'Now',
    developer: 'Developer',
    fullstack: 'Fullstack',
    at: 'at',
    blog: 'A personal blog built with Next.js and Tailwind CSS'
  }
};

export type Language = keyof typeof translations;

export const experiences = [
  {
    title: 'fullstack',
    company: 'UPA',
    period: '2024',
    current: true,
    url: ''
  },
  {
    title: 'developer',
    company: 'freelance',
    period: '2022 - 2023',
    current: false,
    url: ''
  }
];

export const projects = [
  {
    title: 'Blog',
    description: 'blog'
  }
];