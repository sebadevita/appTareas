import React, {Component} from 'react';

export default class FormularioTareas extends Component {


    constructor () {
        super();
        this.state = {
          titulo: '',
          responsable: '',
          descripcion: '',
          prioridad: 'baja'
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput (e) {
        const {value, name} = e.target
        this.setState({
            [name]: value

        })

    }
    
    handleSubmit(e){
        e.preventDefault()
        this.props.onAgregarTarea(this.state)

    }

    render() {
        return(
            <div>
            <div className= "card">
                <div className= "card-header">

                     <h4>Agregar tarea nueva</h4>
                    </div>
                <form className= "card-body" onSubmit={this.handleSubmit} >
                    <div className= "form-group" >
                        <input 
                        type= "text"
                        name= "titulo"
                        className= "form-control"
                        placeholder= "Título"
                        onChange= {this.handleInput}
                        />
                        </div>

                        <div className= "form-group" >
                        <input 
                        type= "text"
                        name= "responsable"
                        className= "form-control"
                        placeholder= "Responsable"
                        onChange= {this.handleInput}
                        />
                        </div>

                        <div className= "form-group" >
                        <input 
                        type= "text"
                        name= "descripcion"
                        className= "form-control"
                        placeholder= "Descripción"
                        onChange= {this.handleInput}
                        />
                        </div>

                        <div className= "form-group" >
                        <select 
                        className="form-control"
                        name="prioridad" 
                        onChange= {this.handleInput}
                        >
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>        

                        </select>
                        </div>

                        <div className= "card-footer">


                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>

                        </div>

                </form>

            </div>

               
           </div>
        )
    }

}