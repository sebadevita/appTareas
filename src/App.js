import './App.css';
import Navegacion from './components/Navegacion';
import React, {Component} from 'react';
import {tareas} from './tareas.json'
import FormularioTareas from './components/FormularioTareas';
import Tareas from './components/Tareas';

class App extends Component {

  state = {

    tareas: tareas

  }

  render(){
    return (
      <div>
        <Navegacion titulo = "Mis Tareas" contador = {this.state.tareas.length}/>
        
        <div className = "container">
          <div className = "row mt-4">
             <div className = "col-md-4 text-center">

             </div>
        
        <FormularioTareas />
            
        
        <Tareas tareas = {this.state.tareas}/>
      </div>
      </div>
      </div>
    )

  }
}
 

export default App;
