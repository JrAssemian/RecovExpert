import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

const About = () => {
  return (
    <section id="qui-sommes-nous" className="bg-white py-20">
      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Users className="h-12 w-12 text-[#1404c2] icon-pulse mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Qui Sommes-Nous</h2>
          <div className="w-24 h-1 bg-[#1404c2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">Découvrez RecovExpert, la methode innovante pour un recouvrement amiable, respectueux et performant.</p>
        </div>
        {/* Main About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div 
            className="overflow-hidden rounded-lg shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}

          >
            <img 
              src="../assets/abt.jpg" 
              alt="L'équipe RecovExpert" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
              Notre Mission : Réconcilier Finance et Relations Humaines
            </h3>
            <div className="w-16 h-1 bg-[#1404c2] mb-6"></div>
            <p className="text-lg text-gray-900 mb-6">
              Chez RecovExpert, nous croyons que le recouvrement à l'amiable est une alternative plus efficace et plus
              humaine que les méthodes traditionnelles. Nous accompagnons les entreprises, indépendants et professionnels
              pour récupérer leurs créances tout en préservant leur relation client.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#1404c2] mr-3"></div>
                <p className="text-gray-900">Éthique et transparence dans chaque interaction</p>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#1404c2] mr-3"></div>
                <p className="text-gray-900">Respect et négociation pour des solutions durables</p>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#1404c2] mr-3"></div>
                <p className="text-gray-900">Solutions sur-mesure adaptées à chaque situation</p>
              </div>
            </div>
            <div className="bg-[#f8f9fa] p-6 rounded-lg border-l-4 border-[#1404c2]">
              <h4 className="text-xl font-bold text-[#1a1a1a] mb-2">Notre objectif</h4>
              <p className="text-gray-900">
                Maximiser vos chances de paiement sans altérer votre image de marque et sans conflits juridiques inutiles.
              </p>
            </div>
          </motion.div>
        </div>
         {/* Key Facts Section 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="feature-card bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#167dff]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <Target className="h-10 w-10 text-[#167dff] mr-3" />
              <h3 className="text-xl font-semibold text-[#1a1a1a]">95% de réussite</h3>
            </div>
            <p className="text-gray-900 mb-4">
              Notre approche amiable nous permet d'atteindre un taux de recouvrement exceptionnel, bien supérieur aux méthodes traditionnelles.
            </p>
          </motion.div>

          <motion.div 
            className="feature-card bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#167dff]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Clock className="h-10 w-10 text-[#167dff] mr-3" />
              <h3 className="text-xl font-semibold text-[#1a1a1a]">10 ans d'expérience</h3>
            </div>
            <p className="text-gray-900 mb-4">
              Une décennie d'expertise dans le recouvrement amiable, avec des milliers de dossiers traités avec succès pour des clients de tous secteurs.
            </p>
          </motion.div>

          <motion.div 
            className="feature-card bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#167dff]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <Briefcase className="h-10 w-10 text-[#167dff] mr-3" />
              <h3 className="text-xl font-semibold text-[#1a1a1a]">+500 clients satisfaits</h3>
            </div>
            <p className="text-gray-900 mb-4">
              Des entreprises de toutes tailles nous font confiance pour gérer leurs créances avec professionnalisme et efficacité.
            </p>
          </motion.div>
        </div> */}

           {/* Team Preview Section */}
        <div className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Notre Équipe</h2>
              <div className="w-16 h-1 bg-[#1404c2] mb-6"></div>
              <p className="text-lg text-gray-900 mb-8">
                Une équipe de professionnels passionnés, experts en recouvrement amiable, négociation et relation client. Chaque membre apporte son expertise unique pour vous offrir un service d'excellence.
              </p>
              <motion.button 
                className="gradient-button text-white px-8 py-4 rounded-md font-semibold text-lg flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rencontrer l'équipe
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
            <div className="h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Notre Équipe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;