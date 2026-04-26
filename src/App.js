import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import Productset from './components/Productset/Productset';
import Novelty from './components/Novelty/Novelty';
import Cozyset from './components/Cozyset/Cozyset';
import Productgroup from './components/Productgroup/Productgroup';
import Features from './components/Features/Features';
import Sections from './components/Sections/Sections';
function App() {
  return (
    <div className="App">
      <Products />
      <Productset/>
      <Novelty/>
      <Cozyset/>
      <Productgroup/>
      <Features/>
      <Sections/>
    </div>
  );
}

export default App;
