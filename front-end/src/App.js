import pie from './icons/pie18.png';
import EatMe from './components/EatMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hurra, dziś mam urodziny!
        </h1>
        <div className="arithmetics">
          <div className="horizontal">
            <img src={pie} className="icons" alt="18 + 18 =" />
          </div>
        </div>

        <p>
          Z powodu pandemii nie poczęstowałam Cię dziś w biurze następującym ciastem:
        </p>

        <EatMe />

      </header>
    </div>
  );
}

export default App;
