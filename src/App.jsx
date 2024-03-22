import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Teacher from "./components/Teachers/Teacher";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import CreditCard from "./components/CreditCard/CreditCard";
import News from "./components/News/News";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <CreditCard />
      <About />
      <Teacher />
      <News />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
