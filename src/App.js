import './App.css';
import Navegacion from './components/Navegacion';
import React, {Component} from 'react';
import {tareas} from './tareas.json'
import FormularioTareas from './components/FormularioTareas';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tareas
    }
    
    this.agregarTarea = this.agregarTarea.bind(this)


  }
  
      agregarTarea(tarea){
        this.setState({
          tareas:[...this.state.tareas, tarea]
        })
      }

      borrarTarea(index){
        this.setState({

          tareas: this.state.tareas.filter((tareas, i)=>  {
            return i !== index
          })

        })
      }
  
  render() {
    
   const tareas = this.state.tareas.map((tarea , i) => {
      return (

        <div className = "col-md-4" key={i}>

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

          <div className= "card-footer" >
            <button 
            className= "btn btn-danger"
            onClick= {this.borrarTarea.bind(this, i)}
            >
              Borrar

            </button>

          </div>
            
              
          </div>
        </div>
        </div>
      )
    })
    return (
      <div className="App">
  
        <Navegacion titulo = "Tareas" cantidadDeTareas = {this.state.tareas.length}>
  
        </Navegacion>

        <div className = "container">
          <div className = "row mt-4"></div>
          <div className = "col-md-4 text-center"></div>
          <FormularioTareas onAgregarTarea= {this.agregarTarea}>
          </FormularioTareas>
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
