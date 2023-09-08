import React from 'react';
import './AccessibleLearning.css';

export default function AccessibleLearning() {
return (
    <>
    <div className='accessible-learning'> 
    <div className='title-learning-modules'>
        Accessible Learning 
    </div>
    <div className='brd'>
        <a href='User-Centered Design.pdf'>
            <button className='d1'>
                <p>User-Centered Design</p>
            </button>
        </a>
        <br></br>
        <a href='Simplified User Interface.pdf'>
            <button className='d2'>
            <p>Simplified User Interface</p>
            </button>
        </a>
        <br></br>
        <a href='Responsive Design.pdf'>
            <button className='d3'>
            <p>Responsive Design</p>
            </button>
        </a>
    </div>
    </div>
    </>
);
}