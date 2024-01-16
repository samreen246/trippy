import React from "react";
import '../css/home.css';
import back from'../images/back.jpg';
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

function Home(){
    return(
        <section className="contain">
            <div className="nav">
                <div className="nav2"><Navbar/></div>
                <div className="contain">
                <div className="title">Your journey Your Story</div>
                <div className="sub_title">Choose your favourite destination</div> 
                <button className="butt">Travel Plans</button> 
            </div>
            <Content/>
            <Footer/>
            </div>
        </section>
    );
}

export default Home;