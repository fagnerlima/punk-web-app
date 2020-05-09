import React from 'react';

import './App.css';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

const App = () => (
  <div className="App">
    <Header />
    <Container>
      <Routes />
    </Container>
    <Footer />
  </div>
);

export default App;
