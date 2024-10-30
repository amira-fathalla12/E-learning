/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./components/Home/Home"
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Home />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />
    </main>
  );
};

export default App;
