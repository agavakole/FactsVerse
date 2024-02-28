const CATEGORIES = [
  { name: 'react', color: '#3b82f6' },
  { name: 'supabase', color: '#16a34a' },
  { name: 'html', color: '#ef4444' },
  { name: 'python', color: '#eab308' },
  { name: 'css', color: '#db2777' },
  { name: 'node.js', color: '#14b8a6' },
  { name: 'c', color: '#f97316' },
  { name: 'java', color: '#8b5cf6' },
  { name: 'javascript', color: '#79b7ca' },
];

const initialFacts = [
  {
    id: 1,
    text: 'Reacts virtual DOM efficiently updates the UI by selectively rendering only the components that have changed, resulting in faster performance and a smoother user experience.',
    source: 'https://react.dev/',
    category: 'react',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 3,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'With JavaScript, you can create interactive elements on web pages, such as games, forms with validation, sliders, and much more.',
    source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'javascript',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'HTML provides the structure for web pages and supports multimedia elements like images, videos, and audio, enabling developers to create rich and immersive content',
    source:
      'https://www.linkedin.com/advice/0/how-can-html5-used-create-engaging-multimedia-2xuwc',
    category: 'html',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// 👍 🤯
