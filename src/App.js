import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Resume />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
