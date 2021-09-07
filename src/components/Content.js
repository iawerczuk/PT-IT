import React from 'react'
import logo from '../components/ia.png';

export default function Content() {
    return (
        <div className='content'>
            <div className="pt">
                    <h1>PT</h1>
                    <p>
                        Od wielu lat zajmuję sie rehabilitacją ortopedyczną. Głównymi obszarami zainteresowań jest leczenie zachowawcze i pooperacyjne stawu kolanowego, skokowego, stopy i tk. miękkich kończyny dolnej
                    </p>
                    <a href="https://carolina.pl" alt="carolina.pl"><img src="../logo-kolor-carolina1.png"></img></a>
            </div>          
            <div className='logo'>
                    <img src={logo} alt="logo"/>
                    <div className='contact'>
                        <h2>Izabela Awerczuk</h2>
                        <span><i class="far fa-envelope"></i>awerczuk.izabela@gmail.com</span>
                        <span><i class="fas fa-phone"></i>509868744</span>

                    </div>
            </div>  
            <div className="it">
                <h1>IT</h1>
                <p>
                    Jestem junior front-end developerem. Pracuję w środowisku ReactJS.
                </p>
                <div className="skills">
                    <ul>
                        <li>HTML</li>
                        <li>CSS, Sass</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>Git</li>
                        <li>Scrum</li>
                        <li>VSC, WebStorm</li>
                    </ul> 
                <div className="github">
                            <a href="https://github.com/iawerczuk" alt="github"> 
                            <i class="fab fa-github fa-3x"></i>
                            </a>             
                 </div>
                 </div>
                
            </div>
        </div>
    )
}