import React, {Component} from 'react';

export default class Navegacion extends Component {

    render() {
        return(

            <nav className= "navbar navbar-dark bg-dark" >
                <p className ="text-white">
                {this.props.titulo}
                &nbsp;
                <span className= "badge rounded-pill bg-light text-dark">
                
                {this.props.cantidadDeTareas}
                </span>
            </p>

                  
            </nav>

        )
    }

}