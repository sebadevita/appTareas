import React, { Component } from 'react'

export default class Tarea extends Component {
    render() {

        //DESTRUCTURING

        const{tarea} = this.props

        return (
            <div>
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header text-center">
                            <h3>{tarea.titulo}</h3>

                            <span className="badge rounded-pill bg-primary">
                                {tarea.prioridad}
                            </span>
                        </div>

                        <div className="card-body text-center">

                            <p>{tarea.descripcion}</p>
                            <b> {tarea.responsable}</b>
                        </div>

                        <div className="card-footer text-center" >


                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" ></input>
                                <label className="form-check-label"></label>
                            </div>

                            <button className="btn btn-danger">
                                Borrar
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
