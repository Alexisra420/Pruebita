import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <div className="App">
      <header className="App-header">
         <img src={process.env.PUBLIC_URL + '/imagenes/tierra.gif'} width= '400' alt='temperatura' />
         <h1>Checa la Temperatura de tu Ciudad</h1>
         <Link to='ciudades'>Ver Ciudades</Link>
      </header>
    </div>
    );
}

export default Home;
