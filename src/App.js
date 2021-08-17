import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Sponsor from './components/Sponsor';

function App() {
  return (
    <>
      <Navbar /> 
      <Header />
      <Timeline />
      <Gallery />
      <Sponsor />
    </>
  );
}

export default App;
