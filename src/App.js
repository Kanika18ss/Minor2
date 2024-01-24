import Weather from './Weather';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Header from './Header/Header';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather/>
      </header>
      <div className='Footer'>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
