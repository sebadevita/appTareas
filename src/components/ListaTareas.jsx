import React, { Component } from 'react'
import Tarea from './Tarea'
import PropTypes from 'prop-types'
import '../estilos/ListaTareas.css'


export default class Tareas extends Component {
    render() {

        return (
            
        <div className= "tareas-grid-container">

            <div className= "tareas-grid">

        
            
            
        {this.props.tareas.map(tarea => 


        <Tarea className= "tarea-item"
            tarea= {tarea} 
            key = {tarea.id}
            eliminarTarea= {this.props.eliminarTarea}
            realizarTarea= {this.props.realizarTarea}
            ></Tarea> 
            )}
        
            </div>
        </div>
        )
    }
}

Tareas.propTypes = {

    tareas: PropTypes.array.isRequired

}
