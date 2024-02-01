import "./Home.css";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Projects from "../../Components/Projects/Projects";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";
import About from "../../Components/About/About";
import BasicExample from "../../Components/Header/Header";
function Home() {
  return (
    <div>
      <BasicExample />
      <Header />
      <Banner />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
