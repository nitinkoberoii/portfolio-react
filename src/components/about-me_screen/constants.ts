// About Me Screen Constants

export const ABOUT_ME_SIDEBAR = [
  {
    id: 'personal-info',
    label: 'personal-info',
    icon: 'user', // placeholder icon name
    children: [
      { id: 'bio', label: 'bio', icon: 'file', type: 'leaf' },
      { id: 'interests', label: 'interests', icon: 'star', type: 'leaf' },
      {
        id: 'education',
        label: 'education',
        icon: 'book',
        type: 'branch',
        children: [
          { id: 'high-school', label: 'high-school', icon: 'school', type: 'leaf' },
          { id: 'university', label: 'university', icon: 'school', type: 'leaf' },
        ],
      },
    ],
  },
  {
    id: 'contacts',
    label: 'contacts',
    icon: 'mail',
    children: [
      { id: 'email', label: 'nitinkoberoii@gmail.com', icon: 'mail', type: 'leaf' },
      { id: 'phone', label: '+91-7302825162', icon: 'phone', type: 'leaf' },
    ],
  },
  {
    id: 'professional-info',
    label: 'professional-info',
    icon: 'briefcase',
    children: [
      { id: 'experience', label: 'experience', icon: 'timeline', type: 'leaf' },
      { id: 'skills', label: 'skills', icon: 'star', type: 'leaf' },
      { id: 'certificates', label: 'certificates', icon: 'award', type: 'leaf' },
    ],
  },
  {
    id: 'hobbies',
    label: 'hobbies',
    icon: 'game',
    children: [
      { id: 'music', label: 'music', icon: 'music', type: 'leaf' },
      { id: 'books', label: 'books', icon: 'book', type: 'leaf' },
      { id: 'hiking', label: 'hiking', icon: 'mountain', type: 'leaf' },
      { id: 'games', label: 'games', icon: 'game', type: 'leaf' },
    ],
  },
];

export const ABOUT_ME_EXPERIENCE = [
  {
    role: 'Full Stack Intern',
    company: 'CodexVeer',
    duration: 'May 2025 - July 2025',
    bullets: [
      'Designed and deployed RESTful APIs using Node.js and MongoDB, achieving 40% faster data transactions and handling over 1000 concurrent client requests with zero downtime.',
      'Collaborated on building 15+ Flutter UI components, ensuring smooth integration with backend services and improving user experience across Android and web platforms.'
    ]
  },
  {
    role: 'Backend Developer [Freelancer]',
    company: 'Medhwan EduTech',
    duration: 'May 2025 - June 2025',
    bullets: [
      'Designed scalable backend architecture and developed RESTful APIs for Prajawal, an educational platform supporting 10th-grade Gujarat Board students.',
      'Integrated database schemas and optimized server-client communication, ensuring reliable and high-performance backend operations under tight deadlines.'
    ]
  },
  {
    role: 'Flutter Developer Intern',
    company: 'Thesis Ace Writers',
    duration: 'September 2024 - November 2024',
    bullets: [
      'Redesigned the user interface for over 20 screens in an educational Flutter application, enhancing navigation and accessibility, which contributed to a 15% increase in user activity during testing.',
      'Integrated 3 critical APIs to support interactive features, contributing to a 20% improvement in app responsiveness, while collaborating with team members to ensure reliable performance.'
    ]
  }
];

export const ABOUT_ME_CONTENT = {
  bio: `/**\n * About me\n * I have 5 years of experience in web development lorem ipsum dolor sit amet,\n * consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n * magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n * nisi ut aliquip ex ea commodo consequat.\n * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n * nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n * officia deserunt mollit anim id est laborum.\n */`,
  interests: `- Coding\n- UI/UX Design\n- Open Source\n- Teaching\n- Blogging`,
  'high-school': `**High School:**\nSpringfield High School\n2010-2014`,
  university: `**University:**\nBSc Computer Science,\nMIT, 2014-2018`,
  experience: ABOUT_ME_EXPERIENCE,
  skills: `- React\n- TypeScript\n- Node.js\n- CSS/SCSS\n- GraphQL`,
  certificates: `- AWS Certified Developer\n- Google UX Design Certificate`,
  music: `- Guitar\n- Piano\n- Synthwave`,
  books: `- Clean Code\n- The Pragmatic Programmer\n- Atomic Habits`,
  hiking: `Favorite trails: Appalachian, Pacific Crest`,
  games: `- Chess\n- Portal 2\n- Celeste`,
  email: `user@gmail.com`,
  phone: `+3598246359`,
};

export const ABOUT_ME_SNIPPETS = [
  {
    id: 'snippet-1',
    username: '@username',
    created: '5 months ago',
    code: `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n  const value: T = parseModel(chunk._response, chunk._value);\n  const initializedChunk: InitializedChunk<T> = (chunk: any);\n  initializedChunk._status = INITIALIZED;\n  initializedChunk._value = value;\n  return value;\n}`,
    language: 'typescript',
    stars: 3,
    details: 'This function initializes a model chunk from a resolved chunk, parsing the response and value, and setting the status to INITIALIZED.',
  },
  {
    id: 'snippet-2',
    username: '@username',
    created: '9 months ago',
    code: `export function parseModelTuple(\n  response: Response,\n  value: {[key: string]: JSONValue} | ReadonlyArray<JSONValue>,\n): any {\n  const tuple: [mixed, mixed, mixed, mixed] = (value: any);\n}`,
    language: 'typescript',
    stars: 0,
    details: 'Parses a model tuple from a response and value. Used for demonstration purposes.',
  },
]; 