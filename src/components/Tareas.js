import React, { Component } from 'react'
import Tarea from './Tarea'

export default class Tareas extends Component {
    render() {
        return (this.props.tareas.map(tarea => <Tarea tarea = {tarea} key = {tarea.id}/>))
    }
}
