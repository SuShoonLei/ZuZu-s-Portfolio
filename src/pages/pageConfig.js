export const PAGES = [
  {
    id: 'intro',
    path: '/',
    label: 'Introduction',
    nextLabel: 'What I bring',
  },
  {
    id: 'competencies',
    path: '/competencies',
    label: 'What I bring',
    nextLabel: 'Experience',
  },
  {
    id: 'experience',
    path: '/experience',
    label: 'Experience',
    nextLabel: 'Education',
  },
  {
    id: 'education',
    path: '/education',
    label: 'Education',
    nextLabel: "Let's connect",
  },
  {
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    nextLabel: null,
  },
];

export function getPageIndex(pathname) {
  const index = PAGES.findIndex((page) => page.path === pathname);
  return index === -1 ? 0 : index;
}
