export const profile = {
  name: 'Alexander Roth',
  role: 'Senior Software Engineer',
  location: 'Olathe, KS',
  phone: '913-206-8721',
  email: 'a.c.roth89@gmail.com',
  github: 'https://github.com/alexroth',
  linkedin: 'https://linkedin.com/in/alexroth',
  summary:
    'Highly skilled and motivated Software Engineer with a passion for creating accessible, responsive, and performant interfaces. Collaborative and adaptable, thriving in fast-paced environments and committed to delivering high-quality code while adhering to best coding practices.',
}

export const experience = [
  {
    id: 'kiewit',
    title: 'Senior Software Engineer',
    company: 'Kiewit',
    location: 'Lenexa, KS',
    period: 'Jul 2025 – Present',
    type: 'Contract',
    bullets: [
      'Full-stack ownership: Next.js/React frontend, Python/FastAPI backend, Azure infrastructure',
      'Sole engineer on current project — handles DB, Docker, CI/CD, and data visualizations',
      'Builds data visualizations using recharts, Shadcn, and AG Grid for operational stakeholders',
      'Mentors team members and drives adoption of engineering best practices',
      'Manages code repositories, CI/CD processes, and Azure cloud infrastructure',
    ],
  },
  {
    id: 'amu',
    title: 'Frontend Engineer II',
    company: 'AMU (Andrews McMeel Universal)',
    location: 'Kansas City, MO',
    period: 'May 2021 – Jul 2025',
    type: 'Full-time',
    bullets: [
      'Optimized 5 high-traffic web apps including GoComics (1.9M monthly users)',
      'Led full migration of GoComics to Next.js App Router and React Server Components',
      'SME for Strapi CMS backed by a PostgreSQL database',
      '5 years of Azure Cloud Services: Functions, SQL, Blob Storage, AD B2C, OAuth/JWT, App Insights',
      'Implemented WCAG-compliant UI patterns with semantic HTML, ARIA, and keyboard navigability',
      'Built mobile app prototype for GoComics using Expo and React Native',
    ],
  },
  {
    id: 'nic',
    title: 'Developer I',
    company: 'NIC, Inc',
    location: 'Olathe, KS',
    period: 'Jul 2018 – May 2021',
    type: 'Full-time',
    bullets: [
      'Developed and maintained user workflows on the ServiceNow platform with JavaScript and Angular',
      'Worked in an Agile environment on internal process automation tooling',
    ],
  },
]

export const skills = [
  {
    group: 'Languages',
    items: [
      { label: 'JavaScript', wikiSlug: 'JavaScript' },
      { label: 'TypeScript', wikiSlug: 'TypeScript' },
      { label: 'Python', wikiSlug: 'Python_(programming_language)' },
      { label: 'HTML5', wikiSlug: 'HTML5' },
      { label: 'CSS3', wikiSlug: 'CSS' },
      { label: 'SCSS', wikiSlug: 'Sass_(style_sheet_language)' },
    ],
  },
  {
    group: 'Frameworks & Libraries',
    items: [
      { label: 'React', wikiSlug: 'React_(software)' },
      { label: 'Next.js', wikiSlug: 'Next.js' },
      { label: 'Vue 3', wikiSlug: 'Vue.js' },
      { label: 'Node.js', wikiSlug: 'Node.js' },
      { label: 'FastAPI', wikiSlug: 'FastAPI' },
      { label: 'Tailwind', wikiSlug: 'Tailwind_CSS' },
      { label: 'React Native', wikiSlug: 'React_Native' },
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      { label: 'Azure', wikiSlug: 'Microsoft_Azure' },
      { label: 'Docker', wikiSlug: 'Docker_(software)' },
      { label: 'CI/CD', wikiSlug: 'CI/CD' },
      { label: 'Azure DevOps', wikiSlug: 'Azure_DevOps_Server' },
      { label: 'Azure Functions', wikiSlug: 'Microsoft_Azure' },
    ],
  },
  {
    group: 'Databases & CMS',
    items: [
      { label: 'PostgreSQL', wikiSlug: 'PostgreSQL' },
      { label: 'Azure SQL', wikiSlug: 'Microsoft_Azure_SQL_Database' },
      { label: 'DuckDB', wikiSlug: 'DuckDB' },
      { label: 'Strapi', wikiSlug: 'Strapi' },
    ],
  },
  {
    group: 'Testing',
    items: [
      { label: 'Jest', wikiSlug: 'Jest_(JavaScript_framework)' },
      { label: 'Cypress', wikiSlug: 'Cypress_(software)' },
      { label: 'Playwright', wikiSlug: 'Playwright_(software)' },
    ],
  },
  {
    group: 'Tooling',
    items: [
      { label: 'Vite', wikiSlug: 'Vite_(software)' },
      { label: 'Webpack', wikiSlug: 'Webpack' },
      { label: 'Storybook', wikiSlug: 'Storybook_(software)' },
      { label: 'WordPress', wikiSlug: 'WordPress' },
      { label: 'Expo', wikiSlug: 'Expo_(framework)' },
    ],
  },
]

export const projects = [
  {
    id: 'gocomics',
    name: 'GoComics',
    badge: 'live',
    description:
      'Led full migration from legacy Next.js to App Router and React Server Components for a 1.9M monthly user platform.',
    stack: ['Next.js', 'React', 'TypeScript', 'Azure', 'Strapi', 'PostgreSQL'],
    url: 'https://www.gocomics.com',
  },
  {
    id: 'uexpress',
    name: 'UExpress',
    badge: 'live',
    description:
      'Full-stack solo build — data visualization platform with complex charting for operational stakeholders.',
    stack: ['Next.js', 'React', 'TypeScript', 'Azure'],
    url: null,
  },
  {
    id: 'kiewit-platform',
    name: 'Kiewit Data Platform',
    badge: 'internal',
    description:
      'Full-stack solo build — data visualization platform with complex charting for operational stakeholders.',
    stack: ['Python', 'FastAPI', 'DuckDB', 'Next.js', 'Tailwind', 'Docker'],
    url: null,
  },
  {
    id: 'ar-resume',
    name: 'ar.dev Resume App',
    badge: 'vue',
    description:
      'This app — an interactive resume built in Vue 3 with a custom DevTools plugin for network request tracking.',
    stack: ['Vue 3', 'Pinia', 'Vite', 'Wikipedia API', 'GitHub API'],
    url: null,
  },
]
