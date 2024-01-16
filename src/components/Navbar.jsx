import React from "react";
import '../css/navbar.css';

function Navbar(){
    return(
    <section className="section1">
        <div className="Header">
            <div className="header_part">Trippy</div>
            <div className="sub_header">
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Contact</div>
                <div>Signup</div>
            </div> 
            <div className="sub_header1">
                <div>Home</div>
                <div>Contact</div>
                <div>Signup</div>
            </div>  
        </div>
        
    </section>   
    );
}

export default Navbar;