//import React from 'react';
import { motion } from "framer-motion";
import { Folder, Handshake, Activity, BarChart, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="bg-white mt-20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Folder className="h-12 w-12 text-[#1404c2] icon-pulse mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Nos Services</h2>
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Une gestion du recouvrement amiable, efficace et transparente</h3>
          <div className="w-24 h-1 bg-[#1404c2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Chez RecovExpert, nous accompagnons les entreprises dans la récupération de leurs créances impayées avec une approche 100 % amiable, favorisant la préservation des relations commerciales. 
            Grâce à notre expertise et à notre solution innovante SoftRecov, nous garantissons un suivi en temps réel et une gestion optimisée de chaque dossier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Service 1 */}
          <motion.div 
            className="feature-card bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#1404c2]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src="../assets/srv1.jpg" 
                alt="Recouvrement Amiable" 
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="flex items-center mb-4">
              <Handshake className="h-10 w-10 text-[#1404c2] mr-3" />
              <h3 className="text-xl font-semibold text-[#1a1a1a]">Recouvrement Amiable sur mesure</h3>
            </div>
            <div className="space-y-3 text-gray-900 mb-6">
              <p>
                🔹<span className="text-[#1404c2] font-semibold">Stratégies de relance personnalisées :</span> Nous adaptons nos actions de relance en fonction du profil des débiteurs et utilisons les canaux les plus efficaces (téléphone, e-mail, SMS, courrier).
              </p>
              <p>
                🔹<span className="text-[#1404c2] font-semibold">Médiation et négociation :</span> Nos experts agissent en tant qu'intermédiaires pour trouver des solutions de règlement adaptées, incluant des échéanciers de paiement sur mesure.
              </p>
              <p>
                🔹<span className="text-[#1404c2] font-semibold">Suivi en temps réel avec SoftRecov :</span> Notre logiciel permet aux créanciers de suivre l’évolution de chaque dossier, avec une visibilité totale sur les actions menées et les paiements reçus.
              </p>
            </div>
            {/*
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#1a1a1a]">
                🎯 Objectif : Récupérez vos créances tout en préservant vos relations d'affaires.
              </h4>
            </div> */}
            <div className="mt-6">
              <a href="/contact" className="flex items-center text-[#1404c2] font-semibold hover:underline">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            className="feature-card bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#1404c2]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="SoftRecov" 
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="flex items-center mb-4">
              <Activity className="h-10 w-10 text-[#1404c2] mr-3" />
              <h3 className="text-xl font-semibold text-[#1a1a1a]">Externalisation de la gestion des créances</h3>
            </div>
            <div className="space-y-3 text-gray-900 mb-6">
              <p>
                🔹<span className="text-[#1404c2] font-semibold">Prise en charge complète du recouvrement :</span> Nous gérons l’intégralité du processus, permettant aux entreprises de se concentrer sur leur cœur de métier.
              </p>
              <p>
                🔹<span className="text-[#1404c2] font-semibold">Réduction des délais et optimisation des taux de : </span>Grâce à nos méthodes éprouvées et à l’intelligence de SoftRecov, nous maximisons le taux de récupération tout en minimisant les délais.
              </p>
              <p>
                🔹<span className="text-[#1404c2] font-semibold">Rapports et analyses : </span> Nos clients bénéficient d’une transparence totale grâce aux tableaux de bord détaillés et aux analyses fournies par SoftRecov.
              </p>
            </div>
            {/*
            <p className="text-gray-900 mb-4">
              Pour garantir une gestion efficace de vos créances, nous avons conçu <span className="text-[#1404c2] font-semibold">SoftRecov</span>, un logiciel innovant qui vous permet de garder le contrôle en temps réel.
            </p>
            
            <h4 className="font-semibold text-[#1a1a1a] mb-3">
              💡 Avec notre logiciel <span className="text-[#167dff]">SoftRecov</span>, vous bénéficiez de :
            </h4>
            
            <div className="space-y-2 text-black-900 mb-6">
              <p><span className="font-semibold">✅ Un suivi en temps réel :</span> accédez à l'état de chaque créance à tout moment.</p>
              <p><span className="font-semibold">✅ Des relances automatisées :</span> SMS, emails, courriers adaptés à chaque débiteur.</p>
              <p><span className="font-semibold">✅ Un historique détaillé :</span> suivez les engagements de paiement.</p>
              <p><span className="font-semibold">✅ Des analyses et rapports clairs</span> pour optimiser votre trésorerie.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-bold text-[#1a1a1a]">
                🎯 Objectif : Gardez le contrôle sur chaque créance.
              </h4>
            </div> */}
            <div className="mt-6">
              <a href="/contact" className="flex items-center text-[#1404c2] font-semibold hover:underline">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            className="feature-card bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#1404c2]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Suivi et Reporting" 
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="flex items-center mb-4">
              <BarChart className="h-10 w-10 text-[#1404c2] mr-3" />
              <h3 className="text-xl font-semibold text-[#1a1a1a]">Suivi & Reporting</h3>
            </div>
            {/*
            <div className="space-y-3 text-gray-900 mb-6">
              <p>
                📊 Nous vous fournissons des <span className="text-[#167dff] font-semibold">rapports détaillés</span> et un accès en temps réel aux résultats de nos actions.
              </p>
              <p>
                📌 <span className="text-[#167dff] font-semibold">Tableau de bord interactif</span> pour suivre l'évolution de vos dossiers en toute autonomie.
              </p>
              <p>
                📈 Des <span className="text-[#167dff] font-semibold">statistiques et indicateurs clés</span> pour optimiser la gestion de votre trésorerie.
              </p>
            </div>
            <p className="text-[#1a1a1a] font-semibold mb-4">
              🚀 Avec RecovExpert et SoftRecov, chaque créance est suivie, chaque débiteur est accompagné, et chaque paiement est sécurisé.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#1a1a1a]">
                🎯 Objectif : Transparence totale et prise de décision optimisée.
              </h4>
            </div> */}
            <div className="mt-6">
              <a href="/contact" className="flex items-center text-[#1404c2] font-semibold hover:underline">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Prêt à optimiser votre recouvrement ?</h3>
          <p className="text-lg text-gray-900 mb-6 max-w-2xl mx-auto">
            Découvrez comment nos services peuvent transformer votre approche du recouvrement et améliorer votre trésorerie.
          </p>
          <motion.button 
            className="gradient-button text-white px-8 py-4 rounded-md font-semibold text-lg flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demandez une démonstration
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;