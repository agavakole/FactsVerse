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

// Selecting DOM elements

const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// create DOM elements: Render facts in list
factsList.innerHTML = '';

// Load Data from supabase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    'https://tghwirkdxlywjaandczd.supabase.co/rest/v1/facts',
    {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnaHdpcmtkeGx5d2phYW5kY3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5ODEzNDgsImV4cCI6MjAyNDU1NzM0OH0.sE-dD6An9Yi0hcz68uXt7Th8UZ0HUDoNSPkUjP6xoLw',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnaHdpcmtkeGx5d2phYW5kY3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5ODEzNDgsImV4cCI6MjAyNDU1NzM0OH0.sE-dD6An9Yi0hcz68uXt7Th8UZ0HUDoNSPkUjP6xoLw',
      },
    }
  );
  const data = await res.json();

  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join('');
  factsList.insertAdjacentHTML('afterbegin', html);
}

// Toggle form visibility
btn.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    btn.textContent = 'Share a fact';
  }
});
