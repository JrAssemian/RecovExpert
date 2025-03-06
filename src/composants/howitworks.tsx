//import React from "react";

const HowItWorks = () => {
  return (
    <div id="comment-ca-marche" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ▶️ Comment ça marche ?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Un processus simple et efficace
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-medium text-gray-900">Étape 1 : Dépôt de votre dossier</h3>
              <p className="mt-2 text-gray-500">
                Envoyez-nous les informations de votre créance via notre formulaire sécurisé.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">📑</div>
              <h3 className="text-xl font-medium text-gray-900">Étape 2 : Analyse et stratégie</h3>
              <p className="mt-2 text-gray-500">
                Nous analysons la situation et définissons une approche de recouvrement personnalisée.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-medium text-gray-900">Étape 3 : Contact avec le débiteur</h3>
              <p className="mt-2 text-gray-500">
                Nos experts établissent un dialogue constructif pour trouver une solution amiable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-medium text-gray-900">Étape 4 : Paiement et suivi</h3>
              <p className="mt-2 text-gray-500">
                Nous veillons au bon déroulement du paiement et assurons un suivi post-recouvrement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;