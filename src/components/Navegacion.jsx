import React, {Component} from 'react';

export default class Navegacion extends Component {

    render() {
        return(
            <div>


            <nav className= "navbar navbar-dark bg-dark" >
                    
                
                <p className ="text-white">
                &nbsp;
                &nbsp;
                
                {this.props.titulo}

                &nbsp;
                &nbsp;  
                <span className= "badge rounded-pill bg-light text-dark">
                
                {this.props.contador}
                </span>
            </p>

                  
            </nav>
            </div>

        )
    }

}