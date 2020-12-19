import React from "react";
import { useHistory } from 'react-router-dom';
import '../Dashboard/Dashboard.css';
function Header(props){
    const username = sessionStorage.getItem("username");
    const history = useHistory();
    const navigateTo = (page) =>{
        if(page === 'Cart'){
            history.push("/Cart");
        }
        else if(page === 'Dashboard'){
            history.push("/Dashboard");
        }  
    }
    return(
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                     <div className="navbar-header">
                         <a href="#" onClick={() =>navigateTo("Dashboard")} className="navbar-brand title">MedApp</a>
                     </div>
                    <ul className="nav navbar-nav navbar-right">
                       <li><a href="#" className="list" onClick={() =>navigateTo("Cart")}><i className="fa fa-shopping-cart" /> your cart ({props.data.length}) </a></li>
                       <li><a className="list"><span className="glyphicon glyphicon-user"></span>&nbsp; | &nbsp; Hi, {username}</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Header