import React from 'react';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  let loremImg = 100;
  const direcImg ="https://lorempixel.com/150/";
  return (
    <div>
            <h1>Propiedades de los componentes</h1>
            <br />

            <div className="row">
                <div className= "col">
                    <Cards 
                      imagen={direcImg + loremImg}
                      titulo="titulo 1"
                      texto="Texto de card 1"/>
                </div>
                <div className= "col">
                    <Cards 
                      imagen={direcImg + (loremImg+1)}
                      titulo="titulo 2"
                      texto="Texto de card 2"/>
                </div>
                <div className= "col">
                    <Cards 
                      imagen={direcImg + (loremImg+2)}
                      titulo="titulo 3"
                      texto="Texto de card 3" />
                </div>
            </div>
        </div>
  );
}

export default App;
