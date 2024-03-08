import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Teacher from "./components/Teachers/Teacher";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Teacher />
      <Gallery/>
      <Footer/>
    </>
  );
}

export default App;
