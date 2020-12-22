import React, { Component } from 'react'

export default class Tareas extends Component {
    render() {
        return this.props.tareas.map(tarea => 
          
            
            <div className = "col-md-4" key={tarea.id}>

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

                <div className= "card-footer text-center" >
                  <p>{tarea.hecho}</p>
             <button 
            className= "btn btn-danger"
            onClick= "sarasa"
            >
              Borrar

            </button>

            
              
          </div>


          </div>
          </div>
          
          )
        
      
    }
}
