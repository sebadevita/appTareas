import React, { Component } from 'react'

export default class ListaUsuarios extends Component {
    

    state= {
        usuarios: []
    }

    async componentDidMount(){
        const res= await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await res.json()
        this.setState({usuarios: data})
        console.log(data)
    }

    
    render() {
        return (
            <div>
               <h1>Usuarios</h1>
               {
                   this.state.usuarios.map(usuario => {
                       return <div key= {usuario.id}>
                           <h2>{usuario.name}</h2>
                           <p>{usuario.email}</p>
                       </div>
                   })
               } 
            </div>
        )
    }
}
