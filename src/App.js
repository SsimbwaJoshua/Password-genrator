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
          <section>
            <div className="strength-states">
              <p>STRENGTH</p>
              <div className="strength-box">
                <p>TOO WEAK!</p>
                <div className="strength-color-boxes">
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                </div>
              </div>
            </div>
            <div className="strength-states">
              <p>STRENGTH</p>
              <div className="strength-box">
                <p>WEAK</p>
                <div className="strength-color-boxes">
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                </div>
              </div>
            </div>
            <div className="strength-states">
              <p>STRENGTH</p>
              <div className="strength-box">
                <p>MEDIUM</p>
                <div className="strength-color-boxes">
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                </div>
              </div>
            </div>
            <div className="strength-states">
              <p>STRENGTH</p>
              <div className="strength-box">
                <p>STRONG</p>
                <div className="strength-color-boxes">
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                  <div className="strength-color-indicators"></div>
                </div>
              </div>
            </div>
          </section>
          <button>GENERATE &rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default App;
