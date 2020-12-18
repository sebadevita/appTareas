import React, {Component} from 'react';

export default class Navegacion extends Component {

    render() {
        return(

            <nav className= "navbar navbar-dark bg-dark" >

            <p className ="text-white">
                {this.props.titulo}
            </p>        
            </nav>

        )
    }

}