import React from 'react';
import Header from './components/templates/Header';
import Slide from './components/templates/Slide';
import CardSection from './components/templates/CardSection';
import Consultation from './components/templates/Consultation';
import Footer from './components/templates/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <CardSection />
      <Consultation />
      <Footer />
    </div>
  );
}

export default App;