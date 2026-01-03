
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AIStrategyTool from './components/AIStrategyTool';
import CreatorForm from './components/CreatorForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-20 md:py-32 bg-white">
          <About />
        </section>

        <section id="services" className="py-24 bg-beige/50">
          <Services />
        </section>

        <section id="ai-tool" className="py-24 bg-white">
          <AIStrategyTool />
        </section>

        <section id="join" className="py-24 bg-beige/30 border-t border-slate-50">
          <CreatorForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
