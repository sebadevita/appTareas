import React, { Component } from 'react'
import '../estilos/Navegacion.css'
import Logo from '../utils/anotador.svg'

export default class Navegacion extends Component {

    render() {
        return (
            <div>

                <nav className="nav-container">
                    <div className="nav">

                        <img src={Logo} alt=""/>
                    
                        <div className="links">

                        <div className="mis-tareas">{this.props.titulo}</div>
                        
                        <div className="contador badge badge-pill badge-light">{this.props.contador}</div>
                        </div>
                        
                    </div>
                </nav>
            </div>

        )
    }

}