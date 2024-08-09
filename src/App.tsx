import React from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="h-[80vh] bg-gradient-to-r from-slate-900 to-slate-700">
      <Nav />
      </div>
      <Footer />
    </>
  );
}
export default App;
