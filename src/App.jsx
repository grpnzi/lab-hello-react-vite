// src/App.jsx
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import DisplayCards from './components/DisplayCards';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Welcome></Welcome>
      <DisplayCards></DisplayCards>
    </div>
  );
}

export default App;