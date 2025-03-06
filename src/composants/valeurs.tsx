//import React from 'react';
import { motion } from "framer-motion";
import { Award, GraduationCap, Handshake, Heart, Lock} from "lucide-react";

const Values = () => {
  return (
    <section id="apropos" className="bg-white mt-20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Award className="h-12 w-12 text-[#1404c2] icon-pulse mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Nos Valeurs</h2>
          <div className="w-24 h-1 bg-[#1404c2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous incarnons l'excellence et l'intégrité dans chacune de nos actions pour un recouvrement éthique et efficace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Value 1 */}
          <motion.div 
            className="feature-card bg-[#f8f9fa] p-8 rounded-lg shadow-lg border-t-4 border-[#1404c2]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-50 p-4 rounded-full">
                <Handshake className="h-10 w-10 text-[#1404c2]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] ml-4">Respect</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Nous plaçons l'humain au cœur de chaque interaction, avec une écoute active et bienveillante. Notre approche privilégie le dialogue constructif et le respect mutuel pour trouver des solutions adaptées à chaque situation.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-[#1404c2] font-semibold">
                "Le respect est le fondement de toute relation durable."
              </p>
            </div>
          </motion.div>

          {/* Value 2 */}
          <motion.div 
            className="feature-card bg-[#f8f9fa] p-8 rounded-lg shadow-lg border-t-4 border-[#1404c2]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-50 p-4 rounded-full">
                <GraduationCap className="h-10 w-10 text-[#1404c2]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] ml-4">Expertise</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Notre équipe de professionnels qualifiés apporte des solutions fiables et efficaces à chaque défi. Nous nous appuyons sur notre connaissance approfondie du secteur et notre expérience pour garantir des résultats optimaux.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-[#1404c2] font-semibold">
                "L'expertise est notre engagement envers l'excellence."
              </p>
            </div>
          </motion.div>

          {/* Value 3 */}
          <motion.div 
            className="feature-card bg-[#f8f9fa] p-8 rounded-lg shadow-lg border-t-4 border-[#1404c2]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-50 p-4 rounded-full">
                <Heart className="h-10 w-10 text-[#1404c2]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] ml-4">Intégrité</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Nous travaillons avec transparence, éthique et loyauté envers toutes les parties. Notre approche honnête et directe garantit une relation de confiance avec nos clients et leurs débiteurs, essentielle pour un recouvrement amiable réussi.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-[#1404c2] font-semibold">
                "L'intégrité est non négociable dans notre métier."
              </p>
            </div>
          </motion.div>

          {/* Value 4 */}
          <motion.div 
            className="feature-card bg-[#f8f9fa] p-8 rounded-lg shadow-lg border-t-4 border-[#1404c2]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-50 p-4 rounded-full">
                <Lock className="h-10 w-10 text-[#1404c2]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] ml-4">Confidentialité</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Nous garantissons la protection totale des données et des échanges. La sécurité des informations que vous nous confiez est une priorité absolue, et nous mettons en œuvre les mesures les plus strictes pour la préserver.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-[#1404c2] font-semibold">
                "Votre confiance mérite notre protection la plus rigoureuse."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Section 
        <div className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-[#167dff]">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Client Testimonial" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="text-4xl text-[#167dff] font-serif mb-4">"</div>
              <p className="text-lg text-gray-700 italic mb-4">
                RecovExpert a transformé notre approche du recouvrement. Leur méthode amiable nous a permis de récupérer 95% de nos créances tout en préservant nos relations commerciales. Leur professionnalisme et leur intégrité sont exemplaires.
              </p>
              <div className="font-semibold text-[#1a1a1a]">
                Jean Dupont
                <span className="block text-gray-500 font-normal">Directeur Financier, Entreprise XYZ</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Team Section Preview 
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Notre Équipe</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Découvrez les experts qui font de RecovExpert votre partenaire de confiance en recouvrement amiable.
          </p>
          <motion.button 
            className="gradient-button text-white px-8 py-4 rounded-md font-semibold text-lg flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rencontrer l'équipe
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
        */}
      </div>
    </section>
  );
};

export default Values;