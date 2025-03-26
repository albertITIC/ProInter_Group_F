import React from 'react';
import Header from '../../02-Components/Header/Header';
import fondo_de_pantalla from '../../../assets/fondo_de_pantalla.png'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
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
            <button className="cta-button" 
      onClick={() => navigate('/shop')}>SEE OUR PRODUCTS</button>
          </div>
        </div>
      </div>
    );
  };
  

export default Home;