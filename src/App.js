import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import HeroSection from './Components/HeroSection';
import ReadySection from './Components/ReadySection';
import InfoSection from './Components/InfoSection';
import {firstdata,Seconddata} from './Components/InfoSection/data'
import TestimonialSlider from './Components/TestimonialSlider';
import Journal from './Components/Journal';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <ReadySection />
      <InfoSection {...firstdata} />
      <TestimonialSlider />
      <InfoSection {...Seconddata} />
      <Journal />
      <Footer />
    </Router>
  );
}

export default App;
