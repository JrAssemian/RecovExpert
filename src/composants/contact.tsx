import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, Send, Building, User, AtSign } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast.success("Votre message a été envoyé avec succès !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        firstName: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white mt-20 py-20">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MessageSquare className="h-12 w-12 text-[#1404c2] icon-pulse mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Contactez-Nous</h2>
          <div className="w-24 h-1 bg-[#1404c2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Besoin d'une assistance pour le recouvrement de vos créances ? Notre équipe d'experts est à votre écoute
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Contact RecovExpert" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Nos Coordonnées</h3>
              <div className="w-16 h-1 bg-[#1404c2] mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#1404c2]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Téléphone</p>
                    <p className="text-lg text-[#1a1a1a]">+225 05 050 505 98</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#1404c2]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-lg text-[#1a1a1a]">contact@recovexpert.com</p>
                    <p className="text-lg text-[#1a1a1a]">recovexpert2025@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#1404c2]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Adresse</p>
                    <p className="text-lg text-[#1a1a1a]">Star 14, 9ème tranche Angré/Cocody</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 bg-[#f8f9fa] p-6 rounded-lg border-l-4 border-[#1404c2]">
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-2">Horaires d'ouverture</h4>
                <p className="text-gray-700">
                  Lundi - Vendredi: 9h00 - 18h00<br />
                  Samedi: 9h00 - 12h00<br />
                  Dimanche: Fermé
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#1404c2]"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Envoyez-nous un message</h3>
            <div className="w-16 h-1 bg-[#1404c2] mb-8"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167dff] focus:border-transparent"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167dff] focus:border-transparent"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Société</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167dff] focus:border-transparent"
                    placeholder="Nom de votre société"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167dff] focus:border-transparent"
                    placeholder="Votre adresse email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167dff] focus:border-transparent"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167dff] focus:border-transparent"
                    placeholder="Décrivez votre besoin en détail..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <motion.button
                type="submit"
                className="gradient-button w-full text-white p-4 rounded-md font-semibold text-lg flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-lg mb-16">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Comment nous trouver ?</h3>
            <p className="text-gray-900 mb-6">Rendez-nous visite à notre siège social</p>
          </div>
          <div className="h-96 w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127356.39553302275!2d-4.0873849!3d5.348957899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sfr!4v1651234567890!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="RecovExpert Location"
            ></iframe>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Besoin d'une réponse rapide ?</h3>
          <p className="text-lg text-gray-900 mb-6 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions concernant le recouvrement de vos créances.
          </p>
          <motion.button 
            className="gradient-button text-white px-8 py-4 rounded-md font-semibold text-lg flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Appelez-nous maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Contact;