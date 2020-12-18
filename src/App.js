import './App.css';
import Navegacion from './components/Navegacion';
import React, {Component} from 'react';
import {tareas} from './tareas.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      tareas
    }
  }

  render() {
    
   const tareas = this.state.tareas.map((tarea , i) => {
      return (
        <div className = "col-md-4">

        <div className= "card mt-4">
          <div className = "card-header text-center"> 
          <h3>{tarea.titulo}</h3>

          <span class="badge rounded-pill bg-primary">
            {tarea.prioridad}
          </span>
          </div>

          <div className = "card-body text-center">

          <p>{tarea.descripcion}</p>
          <b> {tarea.responsable}</b>
            
              
          </div>
        </div>
        </div>
      )
    })
    console.log ("Antes de renderizar")
    return (
      <div className="App">
  
        <Navegacion titulo = "Tareas">
  
        </Navegacion>

        <div className = "container">
          <div className = "row mt-4"></div>
          <div className = "col-md-4 text-center"></div>
          <div className = "col-md-8">
          <div className = "row">
            

          <div className = "container">
            <div className = "row mt-4">
              {tareas}
            </div>

          </div>

            

          </div>
          </div>
        </div>

  
       
      </div>
    )

  }
  
}

export default App;
