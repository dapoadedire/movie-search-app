import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
