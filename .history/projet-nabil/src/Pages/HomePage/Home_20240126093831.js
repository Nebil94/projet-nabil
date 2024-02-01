import "./Home.css";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Projects from "../../Components/Projects/Projects";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
