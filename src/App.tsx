import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Experience />
      <Education />
      <Awards />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
