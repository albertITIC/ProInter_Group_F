import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../../02-Components/Header/Header';
import fondo_de_pantalla from '../../../assets/fondo_de_pantalla.png'
const Home = () => {
    return (
      <div className="page-container">
        <style>
@import url('https://fonts.googleapis.com/css2?family=Lacquer&display=swap');
</style>
        <Header />
        <div 
          className="home-page"
          style={{ 
            backgroundImage: `url(${fondo_de_pantalla})`,
          }}
        >
          <div className="content">
            <h1>WHAT'S BIOMORPH?</h1>
            <p>BIOMORPH IS AN ONLINE SHOP THAT PROVIDES ANY TYPE OF ANIMAL.</p>
            <button className="cta-button">SEE OUR PRODUCTS</button>
          </div>
        </div>
      </div>
    );
  };
  

export default Home;