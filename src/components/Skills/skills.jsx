import React from 'react';
import './skills.css';
import UIDesgine from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesgine from '../../assets/app-design.png';
import DataBase from '../../assets/DataBase3.png';



const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a passionate full-stack web developer with expertise in both backend and frontend technologies. I specialize in building scalable, user-friendly, and high-performance web applications. With a strong foundation in programming and a keen eye for design, I strive to create seamless digital experiences that solve real-world problems.</span>

        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesgine} alt="ui image" className="skillBarImg" />
                <div className="skillBarText">
                <h2>UI/UX Desgine</h2>
                <p>UI/UX design creates intuitive, user-friendly interfaces.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="web design" className="skillBarImg" />
                <div className="skillBarText">
                <h2>Frontend(Client-Side)</h2>
                <p>Transforming Ideas into Stunning Interactive Web Experiences.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesgine} alt="app design" className="skillBarImg" />
                <div className="skillBarText">
                <h2>Backend(Server-Side)</h2>
                <p>Powering Seamless Digital Experiences with Precision and Reliability.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={DataBase} alt="Database" className="skillBarImg" />
                <div className="skillBarText">
                <h2>Database</h2>
                <p>Ensuring Data Integrity, Security, and Optimal Performance.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills