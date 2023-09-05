import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </>
  )
}