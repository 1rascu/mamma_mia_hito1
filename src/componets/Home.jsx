import React from 'react';
import CardPizza from './CardPizza';
import pepperoni from '../assets/img/pepp.jpg';
import napolitana from '../assets/img/napo.png';
import espanola from '../assets/img/ita.jpg';

const Home = () => {
  return (
    <div className='card-container'>
      <CardPizza 
        name="Napolitana" 
        price={5950} 
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        imagen={napolitana} 
      />

      <CardPizza 
        name="Española" 
        price={6950} 
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        imagen={espanola}
      />

      <CardPizza 
        name="Pepperoni" 
        price={6950} 
        ingredients={["mozzarella", "doble-pepperoni", "orégano"]}
        imagen={pepperoni}
      />
    </div>
  );
};

export default Home;