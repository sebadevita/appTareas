import React, { Component } from 'react'
import Tarea from './Tarea'
import PropTypes from 'prop-types'

import '../estilos/ListaTareas.css'


//REDUX
import store from '../redux/store'


export default class Tareas extends Component {


    constructor() {
        super()

        this.state = {
            tareas: store.getState().tareas
        }
    }
    
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                tareas: store.getState().tareas
            })
        })
    }


    render() {

        return (
            
        <div className= "tareas-grid-container">

            <div className= "tareas-grid">

        
            
            
        {this.state.tareas.map(tarea => 

        <Tarea className= "tarea-item"
            tarea= {tarea} 
            key = {tarea.id}/> 
            )}
        
            </div>
        </div>
        )
    }


  

}

Tareas.propTypes = {

    tareas: PropTypes.array.isRequired

}


