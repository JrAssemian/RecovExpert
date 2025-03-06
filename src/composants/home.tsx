//import React from 'react';
import Slider from "react-slick";
import { Home as HomeIcon } from "lucide-react";
import { Handshake, Scale, FileText, RefreshCw, Folder, CheckCheck, ArrowRight } from "lucide-react";

const Home = () => {
  const images = [
    { 
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", 
      message: "RecovExpert - Votre Partenaire de Confiance en Recouvrement Amiable." 
    },
    { 
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", 
      message: "Transformez vos impayés en solutions, sans conflit ni stress." 
    },
    { 
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", 
      message: "Recouvrement amiable, une approche humaine et efficace." 
    },
    { 
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", 
      message: "Vous avez des créances en attente? Confiez-les nous, nous nous occupons de tout."
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section id="accueil">
      {/* Hero Section with Slider */}
      <div className="relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative h-screen">
              <div className="absolute inset-0">
                <img
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] to-[#00000080]"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-6 max-w-4xl">
                  {image.message}
                </h1>
                <button className="gradient-button text-white px-8 py-4 rounded-md font-semibold text-lg flex items-center">
                  <a href="/contact">Demandez un devis gratuit</a>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Introduction Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HomeIcon className="h-12 w-12 text-[#1404c2] icon-pulse mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Recouvrer vos créances en toute sérénité !</h2>
            <div className="w-24 h-1 bg-[#1404c2] mx-auto mb-8"></div>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Chez RecovExpert, nous savons que les impayés peuvent fragiliser votre trésorerie et nuire à votre activité.
              Notre approche 100% amiable vous garantit une récupération de vos créances dans un cadre éthique, efficace et
              respectueux avec une approche humaine.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="feature-card bg-[#f8f9fa] p-6 rounded-lg shadow-lg border-t-4 border-[#1404c2]">
              <CheckCheck className="h-10 w-10 text-[#1404c2] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Sans conflit, sans stress</h3>
              <p className="text-gray-900">Notre approche privilégie le dialogue et la négociation pour préserver vos relations commerciales.</p>
            </div>
            
            <div className="feature-card bg-[#f8f9fa] p-6 rounded-lg shadow-lg border-t-4 border-[#1404c2]">
              <Handshake className="h-10 w-10 text-[#1404c2] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Confiance et diplomatie</h3>
              <p className="text-gray-900">Un recouvrement basé sur la confiance et la diplomatie pour des résultats durables.</p>
            </div>
            
            <div className="feature-card bg-[#f8f9fa] p-6 rounded-lg shadow-lg border-t-4 border-[#1404c2]">
              <Scale className="h-10 w-10 text-[#1404c2] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Processus équitable</h3>
              <p className="text-gray-900">Un processus équitable et conforme aux réglementations en vigueur.</p>
            </div>
            
            <div className="feature-card bg-[#f8f9fa] p-6 rounded-lg shadow-lg border-t-4 border-[#1404c2]">
              <FileText className="h-10 w-10 text-[#1404c2] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Solutions légales</h3>
              <p className="text-gray-900">Des solutions légales et sécurisées pour le recouvrement de vos créances.</p>
            </div>
            
            <div className="feature-card bg-[#f8f9fa] p-6 rounded-lg shadow-lg border-t-4 border-[#1404c2]">
              <RefreshCw className="h-10 w-10 text-[#1404c2] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Fluidifiez votre trésorerie</h3>
              <p className="text-gray-900">Améliorez votre trésorerie sans recourir à des procédures judiciaires coûteuses.</p>
            </div>
            
            <div className="feature-card bg-[#f8f9fa] p-6 rounded-lg shadow-lg border-t-4 border-[#1404c2]">
              <Folder className="h-10 w-10 text-[#1404c2] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">95% de réussite</h3>
              <p className="text-gray-900">Un taux de réussite exceptionnel sur l'ensemble de nos dossiers traités.</p>
            </div>
          </div>

          {/* Notre Engagement Section */}
          <div className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Notre Engagement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Notre Engagement</h2>
                <div className="w-16 h-1 bg-[#1404c2] mb-6"></div>
                <p className="text-xl text-gray-900 mb-8">
                  Offrir un service de recouvrement efficace en privilégiant le dialogue et la négociation, sans recours à
                  des procédures judiciaires lourdes et coûteuses.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
                    <CheckCheck className="h-5 w-5 text-[#1404c2] mr-2" />
                    <span className="text-gray-900">Approche humaine</span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
                    <CheckCheck className="h-5 w-5 text-[#1404c2] mr-2" />
                    <span className="text-gray-900">Résultats garantis</span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
                    <CheckCheck className="h-5 w-5 text-[#1404c2] mr-2" />
                    <span className="text-gray-900">Transparence totale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#1404c2] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à récupérer vos créances ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <button className="bg-white text-[#1404c2] hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-all">
            <a href="/contact">Demander un devis gratuit</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;