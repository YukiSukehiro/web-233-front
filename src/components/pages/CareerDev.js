import React from 'react';
import './CareerDev.css';

export default function CareerDev() {
return (
    <>
    <div className='career-dev'>
            <div className='header-point'>
            Career Development 
        </div>
        <div className='bordc'>
            <a href='Soft skills.pdf'>
                <button type='submit' className='c1'>
                <p>Soft skills</p>
                </button>
            </a>
            </div>
            <a href='Technical Skills.pdf'>
                <button className='c2'>
                <p>Technical Skills</p>
                </button>
            </a>
            <a href='Mentorship and Coaching.pdf'>
                <button className='c3'>
                <p>Mentorship/<br></br>Coaching</p>
                </button>
            </a>
            </div>
    </>
);
}