import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <header>
            <p>password Generator</p>
            <form>
              <input />
            </form>
          </header>
          <section>
            <p>Character Length</p>
            <p>volume line</p>
            <div>
              <div>
                <input type="checkbox" />
                <p>Include Uppercase Letters</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Include Lowercase Letters</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Include Numbers</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Include Symbols</p>
              </div>
            </div>
          </section>
          <section></section>
        </div>
      </div>
    </div>
  );
}

export default App;
