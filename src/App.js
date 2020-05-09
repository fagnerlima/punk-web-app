import React from 'react';

import './App.css';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <Routes />
    </div>
    <Footer />
  </div>
);

export default App;
