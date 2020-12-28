import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Tarea extends Component {

    tareaCompleta() {
        return {

            color: this.props.tarea.hecho ? 'black' : 'gray'
        }
    }

    render() {

        //DESTRUCTURING

        const { tarea } = this.props

        return (
            <div>
                <div className="col-md-4" style={this.tareaCompleta()}>
                    <div className="card mt-4">
                        <div className="card-header text-center">
                            <h3>{tarea.titulo}</h3>

                            <span className="badge rounded-pill bg-primary text-light">
                                {tarea.prioridad}
                            </span>
                        </div>

                        <div className="card-body text-center">

                            <p>{tarea.descripcion}</p>
                            <b> {tarea.responsable}</b>
                        </div>

                            <div className="form-check text-center">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    onChange={this.props.realizarTarea.bind(this, tarea.idTarea)}>

                                </input>
                                <label className="form-check-label"></label>
                            </div>
                        <div className="card-footer text-center" >




                            <button className="btn btn-danger"
                                onClick={this.props.eliminarTarea.bind(this, tarea.idTarea)}
                            >Borrar</button>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

Tarea.propTypes = {

    tarea: PropTypes.object.isRequired

}
