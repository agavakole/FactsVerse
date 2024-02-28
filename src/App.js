import './style.css';

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="64x64.png" alt="logo of the fact-verse" />
          <h1>Facts Verse</h1>
        </div>

        <button className="btn btn-large btn-open">Share a code fact</button>
      </header>
      <NewFactForm />

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactList() {
  return <section>Fact List</section>;
}

export default App;
