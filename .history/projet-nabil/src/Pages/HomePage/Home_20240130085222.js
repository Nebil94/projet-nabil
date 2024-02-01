import "./Home.css";
import Button from "react-bootstrap/esm/Button";
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
      <>
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
        <Button variant="outline-success">Success</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
        <Button variant="outline-danger">Danger</Button>{" "}
        <Button variant="outline-info">Info</Button>{" "}
        <Button variant="outline-light">Light</Button>{" "}
        <Button variant="outline-dark">Dark</Button>
      </>
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
