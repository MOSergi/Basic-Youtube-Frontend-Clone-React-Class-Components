import React from "react";
//styles import
import "../styles/Menu.css";
//react router imports
import { Link } from "react-router-dom";
//react icons
import { FaBars, FaYoutube, FaSearch, FaMicrophone, FaTh, FaEllipsisV, FaUserAlt } from "react-icons/fa";

export default class Menu extends React.Component {

    render(){
        return(
            <nav className="Menu">
                <div className="firstSubMenu">
                    <h3><FaBars /></h3>
                    <h2><FaYoutube style={{color : "#FF0000"}}/>Youtube</h2>
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