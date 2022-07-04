import React from "react";
//styles import
import "../styles/Menu.css";
//react router imports
import { Link } from "react-router-dom";
//react icons
import { FaBars, FaYoutube, FaSearch, FaMicrophone, FaTh, FaEllipsisV, FaUserAlt } from "react-icons/fa";

//import dropdown
import DropDownMenu from "./DropDownMenu";

export default class Menu extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            dropDown : false
        }
    }

    render(){
        return(
            <nav className="Menu">
                <div className="firstSubMenu">
                    {this.state.dropDown ? <DropDownMenu /> : <></>}
                    <h3 onClick={()=>{this.state.dropDown ? this.setState({dropDown : false}) : this.setState({dropDown : true})}}><FaBars /></h3>
                    <h2><Link className="links" to='/'><FaYoutube style={{color : "#FF0000"}}/>Youtube</Link></h2>
                </div>
                <div className="buscador">
                    <input type="text" placeholder="Buscar"/>
                    <button className="buscar"><FaSearch /></button>
                    <button className="microfono"><FaMicrophone /></button>
                </div>  
                <div className="LoginAndConfigs">
                    <h3><FaTh /></h3>
                    <h3><FaEllipsisV /></h3>
                    <div className="loginMenu">
                        <h3 style={{color: "#1468D6"}}><FaUserAlt style={{color : "rgb(33, 142, 214)", marginRight : "5px"}}/> Iniciar Sesión</h3>
                    </div>
                </div>
            </nav>
        );
    }

}