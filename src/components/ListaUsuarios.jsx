import React, { Component } from 'react'
import axios from 'axios'
const API_URL_USUARIOS = 'http://localhost:5000/api/usuarios/'

export default class ListaUsuarios extends Component {


    state = {
        usuarios: [],
        username: '',
    }

    async componentDidMount() {
        this.getUsuarios()
    }

    getUsuarios = async () =>{
        const res = await axios.get(API_URL_USUARIOS)
        this.setState({ usuarios: res.data })

    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    crearUsuario = async e => {
        e.preventDefault()
        await axios.post(API_URL_USUARIOS, {
            username: this.state.username
        })
        this.setState({username: ''})
        this.getUsuarios()

    }

    eliminarUsuario = async usuarioId => {
        await axios.delete(API_URL_USUARIOS + usuarioId)
        this.getUsuarios()

    }


    render() {
        return (
            <div>
                <div className="card container p-4">
                    <div className="card card-header">
                        <h4>Crear usuario</h4>
                    </div>
                    <div className="card card-body">

                        <div className="form-group" >
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="Username"
                                onChange={this.onChangeUsername}
                                value={this.state.username}
                            />
                            <div
                                className="btn btn-primary text center mt-2"
                                onChange={this.onChangeUsername}
                                onClick={this.crearUsuario} >
                                Crear
                            </div>
                        </div>
                    </div>

                </div>

                {
                    this.state.usuarios.map(usuario => {
                        return <div 
                        className="card card-body text center" 
                        key={usuario._id}
                        onDoubleClick={() => this.eliminarUsuario(usuario._id)}>
                            <h2>{usuario.username}</h2>
                            <p>{usuario.nombre}</p>
                        </div>
                    })
                }



            </div>
        )
    }
}
