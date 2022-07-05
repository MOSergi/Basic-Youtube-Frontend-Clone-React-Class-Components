import React from "react";
//styles import
import "../styles/DropDownMenu.css";
//react router dom
import { NavLink } from "react-router-dom";
//icons 
import { FaHome, FaRegCompass, FaFileVideo, FaYoutubeSquare, FaHistory, FaBook } from "react-icons/fa";

export default class DropDownMenu extends React.Component {
    render(){
        return(
            <nav className="dropdownMenu">
                <ul className="dropdown">
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/'><FaHome /> Inicio</NavLink>
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/Explorer'><FaRegCompass /> Explorar</NavLink>
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/Shorts'><FaFileVideo /> Shorts</NavLink>
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/Subscriptions'><FaYoutubeSquare /> Suscripciones</NavLink>
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/Biblioteca'><FaBook /> Biblioteca</NavLink>
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/Historial'><FaHistory /> Historial</NavLink>
                </ul>
            </nav>
        );
    }
}