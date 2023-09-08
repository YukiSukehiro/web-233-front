import React from 'react';
import '../../App.css';
import './SkillEnhancement.css'

export default function SkillEnhancement() {

return (
    <>
    <div className='skill-enhancement'>
        <div className='header-point'>
            Skill Enhancement <br/>
        </div>
        <div className='bord'>
            <a href='HTML-BASIC.pdf'>
                <button className='s1'>
                    <p>HTML-BASIC</p>
                </button>
            </a>
            <br></br>
            <a href='CSS-BASIC.pdf'>
                <button className='s2'>
                <p>CSS-BASIC</p>
                </button>
            </a>
            <br></br>
            <a href='React-BASIC.pdf'>
                <button className='s3'>
                <p>React-BASIC</p>
                </button>
            </a>
            <br></br>
            <a href='JavaScript-BASIC.pdf'>
                <button className='s4'>
                <p>JavaScript-BASIC</p>
                </button>
            </a>
            <br></br>
            <a href='Node-BASIC.pdf'>
                <button className='s5'>
                    <p>Node-BASIC</p>
                </button>
            </a>
            <br></br>
        </div>
    </div>
    </>
);
}