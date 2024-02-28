import './src/style.css';
function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src="64x64.png" alt="logo of the fact-verse" />
        <h1>Facts Verse</h1>
      </div>

      <button className="btn btn-large btn-open">Share a code fact</button>
    </header>
  );
}

export default App;
