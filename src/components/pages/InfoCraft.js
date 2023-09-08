
import React from 'react'
import './Infocraft.css';

export default function Modules() {

return (
    <>
    <div className='infocraft'>
        <div className='repo'>
            Online Repository Modules
            <div className='sito'>
            Welcome to our Online Repository of Modules.
            Our repository is designed to empower learners of all backgrounds <br></br>by providing a diverse collection of modules that cover a wide range of subjects and skills.
            Each module has<br></br> been painstakingly created to offer you in-depth insights, practical knowledge, and engaging activities.

            </div>
        </div>
        <a href='/modules'>
    <button className="space" type="button">
    <strong>LEARN MORE</strong>
    <div id="container-stars">
        <div id="stars"></div>
    </div>
    <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
    </div>
    </button>
    </a>
    </div>
    </>
);
}
