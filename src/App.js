import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container />
      <Footer />
    </React.Fragment>
  );
};

export default App;
