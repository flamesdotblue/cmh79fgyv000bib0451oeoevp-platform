import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import FeatureCards from './components/FeatureCards';
import ModulesOverview from './components/ModulesOverview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroSplineCover />
      <main className="relative z-10">
        <FeatureCards />
        <ModulesOverview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
