import React, {Component} from 'react';
import{ Prioridades} from '../utils/enumPrioridades'
import  '../estilos/FormularioTareas.css'
import store, { AGREGAR_TAREA } from '../redux/store'
import axios from 'axios'
const API_URL_USUARIOS = 'http://localhost:5000/api/usuarios/'

export default class FormularioTareas extends Component {

        state = {
          usuarios: [],
          usuarioSeleccionado: '',
          titulo: '',
          responsable: '',
          descripcion: '',
          prioridad: 'baja'
        }


    async componentDidMount(){
        const res = await axios.get(API_URL_USUARIOS)
        this.setState({usuarios: res.data.map(usuario => usuario.username),
        usuarioSeleccionado: res.data[0].username
    })
    
    }

    //Las funciones flecha evitan tener que usar el metodo ".bind"

    onChange = e => {
        const {value, name} = e.target
        this.setState({
            [name]: value

        })

    }
    
    onSubmit = e => { 
        e.preventDefault()
        this.agregarTarea(this.state)
        console.log(this.state.responsable)
    }

    agregarTarea(tarea){
        store.dispatch({
            type: AGREGAR_TAREA,
            tarea: tarea,
        })
    }

    render() {

        
        return(
        <div className="formulario-tareas-container">

                <div className= "card formulario-tareas">
                    
                    <div className= "card-header">
                        <h4>Agregar tarea nueva</h4>
                    </div>
                
                    <form className= "card-body" onSubmit={this.onSubmit} >
                        <div className= "form-group" >
                         <input 
                            type= "text"
                            name= "titulo"
                            className= "form-control"
                            placeholder= "Título"
                            onChange= {this.onChange}
                            value = {this.state.titulo}
                            />
                        </div>

                        <div className= "form-group" >
                        <select
                                className="form-control"
                                name="ususarioSeleccionado"
                                onChange={this.onChange}
                                required>
                                {
                                    this.state.usuarios.map(usuario => (
                                        <option key={usuario}>
                                            {usuario}
                                        </option>
                                    ))
                                }
                            </select>

                    
                         </div>

                        <div className= "form-group" >
                            <input 
                                type= "text"
                                name= "descripcion"
                                className= "form-control"
                                placeholder= "Descripción"
                                onChange= {this.onChange}
                                value= {this.state.descripcion}
                            />
                        </div>

                        <div className= "form-group" >
                            <select 
                                className="form-control"
                                id="exampleFormControlSelect1"
                                name="prioridad" 
                                onChange= {this.onChange}
                                value= {this.state.prioridad}
                            >
                            <option>{Prioridades.BAJA}</option>
                            <option>{Prioridades.MEDIA}</option>
                            <option>{Prioridades.ALTA}</option>        

                            </select>
                        </div>
                    
                        <div className= "boton-guardar">
                            <button 
                            type="submit" 
                            className="btn btn-primary">
                                Guardar
                            </button>
                        </div>
                    </form>

                </div>
             </div>
        )
    }

}