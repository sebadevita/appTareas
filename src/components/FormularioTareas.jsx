import React, {Component} from 'react';
import Prioridades from '../utils/enumPrioridades'

export default class FormularioTareas extends Component {

        state = {
          titulo: '',
          responsable: '',
          descripcion: '',
          prioridad: 'baja'
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
        this.props.agregarTarea(this.state)
    }

    render() {

        
        return(
            <div>
            <div className= "card">
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
                        <input 
                        type= "text"
                        name= "responsable"
                        className= "form-control"
                        placeholder= "Responsable"
                        onChange= {this.onChange}
                        value = {this.state.responsable}
                        />
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



                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>

                    

                </form>

            </div>

               
           </div>
        )
    }

}