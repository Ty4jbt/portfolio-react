import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
