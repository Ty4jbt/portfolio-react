import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
