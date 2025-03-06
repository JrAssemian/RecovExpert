import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./composants/header.tsx";
import Home from "./composants/home.tsx";
import Services from "./composants/services.tsx";
import Contact from "./composants/contact.tsx";
import About from "./composants/about.tsx";
import Valeurs from "./composants/valeurs.tsx";
import Footer from "./composants/footer.tsx";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fixé en haut */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Contenu principal avec plus d’espace au-dessus */}
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qui-sommes-nous" element={<About />} />
            <Route path="/nos-services" element={<Services />} />
            <Route path="/Valeurs" element={<Valeurs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      {/* Footer en bas */}
      <Footer />
    </div>
  );
}

export default App;