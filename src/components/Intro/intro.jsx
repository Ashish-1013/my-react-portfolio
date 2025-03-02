import "./intro.css";        //normal css
import React from 'react'
import { Link } from 'react-scroll';   
import bg from "../../assets/anime 16_1.png";
import btnImg from "../../assets/hireme.png";
import cv from "../../assets/Ashish Kumar Giri - .pdf"

const Intro = () => {


    const myCvDown = () => {
        const pdfUrl = cv;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "ak_cv.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
    };



//Transforming ideas into seamless, user-centric web experiences, explore my portfolio to see how I bring creativity and functionality to life.

return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText"> I'm <span className="introName">Ashish,<br/></span>Website Devloper</span>
            <p className="introPara">Crafting Creativity, One Project at a Time.😉</p>
            <Link><button className="btn" onClick={myCvDown}><img src={btnImg} alt="hire me" className="btnImg"/> Download CV </button></Link>
        </div>
        <img src={bg} alt="my image" className="bg" />
        <hr></hr>
        <div className="scrollIndicator">↓</div>
    </section>
)
}

export default Intro;


