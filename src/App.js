import './App.css';
import Header from './components/Header'
import Games from './components/Games'
import MyGames from './components/MyGames'



function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <MyGames/>
        <Games/>
      </main>
    </div>
  );
}

export default App;
