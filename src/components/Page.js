import React, { useState } from "react";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
export default function Page() {
  const [activePage, setActivePage] = useState("About");

  const handlePageChange = (page) => setActivePage(page);

  const renderPage = () => {
    switch (activePage) {
      case "Portfolio":
        return <Portfolio />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
    }
  };

  const styles = {
    div: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <div>
      <Header />
      <div>
        <Navbar activePage={activePage} handlePageChange={handlePageChange} />
      </div>
      <div style={styles.div}>{renderPage()}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
