import React from "react";
//styles import
import "../styles/DropDownMenu.css";
//react router dom
import { NavLink } from "react-router-dom";

export default class DropDownMenu extends React.Component {
    render(){
        return(
            <nav className="dropdownMenu">
                <ul className="dropdown">
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/'>Inicio</NavLink>
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/Explorer'>Explorar</NavLink>
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/Shorts'>Shorts</NavLink>
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/Subscriptions'>Suscripciones</NavLink>
                    <NavLink style={({isActive})=>{return isActive ? {backgroundColor : "#E5E5E5"} : undefined}} className="linksDrop" to='/Historial'>Historial</NavLink>
                </ul>
            </nav>
        );
    }
}