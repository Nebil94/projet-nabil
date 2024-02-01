import "./Home.css";
import Button from "react-bootstrap/Button";
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
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
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
