import React from 'react';
import Footer from './Footer';
import Header from './Header';

const styles = {
  backgroundColor: "#1F5673",
  color: "#90C3C8"
}

export default function PortfolioContainer() {
  return (
    <div style={styles}>
      <Header/>
      <Footer/>
    </div>
  );
}
