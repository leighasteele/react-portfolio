import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function renderPage(currentPage) {
  if (currentPage === "About") {
    return <About />;
  }
  if (currentPage === "Contact") {
    return <Contact />;
  }
  if (currentPage === "Portfolio") {
    return <Portfolio />;
  }
  if (currentPage === "Resume") {
    return <Resume />;
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div>
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <nav>
        <a onClick={setCurrentPage("About")}>About</a>
        <a onClick={setCurrentPage("Contact")}>Contact</a>
        <a onClick={setCurrentPage("Portfolio")}>Portfolio</a>
        <a onClick={setCurrentPage("Resume")}>Resume</a>
      </nav>
      {renderPage(currentPage)}
      <Footer />
    </div>
  );
}

export default App;
