import React,{ Component } from "react";
import '../css/Login.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import md5 from 'md5';
import Cookies from "universal-cookie";
import Alert from 'react-bootstrap/Alert'; 
import data from '../';

const baseUrl ="http://localhost:3001/usuarios";
const cookies = new Cookies();
class Login extends Component{


    state={
        form:{
            username: '',
            password: '',
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, tipodeusuario: this.state.form.tipodeusuario ,password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })

        
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                console.log(response.data);
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                cookies.set('tipodeusuario', respuesta.tipodeusuario, {path: "/"});
                
                alert(`Bienvenido ${respuesta.tipodeusuario} ${respuesta.nombre} `);
                if(respuesta.tipodeusuario == 'Administrador'){
                    window.location.href="./admin";
                }
                else if(respuesta.tipodeusuario == 'Coordinador'){
                    window.location.href="./coordinador";
                }

            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }


    render() {
        return(
            <div className="containerPrincipal">
            <div className="containerSecundario">
              <div className="form-group">
                <label>Usuario: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={this.handleChange}
                />
                <br />
                <label>Contraseña: </label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                />
                <br />
                <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;