import React, { Component } from 'react'
import Tarea from './Tarea'
import PropTypes from 'prop-types'


export default class Tareas extends Component {
    render() {

        return (this.props.tareas.map(tarea => 
        <Tarea 
            tarea= {tarea} 
            key = {tarea.id}
            eliminarTarea= {this.props.eliminarTarea}
            />))
    }
}

Tareas.propTypes = {

    tareas: PropTypes.array.isRequired

}
