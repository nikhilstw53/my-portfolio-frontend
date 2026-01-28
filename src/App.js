import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main className="px-6 md:px-20">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
