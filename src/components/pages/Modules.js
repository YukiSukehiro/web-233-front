import React from 'react';
import about1 from './images/about1.jpg'
import about2 from './images/about2.jpg'
import about3 from './images/about3.jpg'
import about4 from './images/about4.jpg'
import './Modules.css';

export default function Modules(){
return (
    <>
    <div className='modules'>
        <div className='border'>
            <div className='border1'>
                <h1 className='t'> Skill Enhancement </h1>
                <img className='pic1' src={about4} alt='' />
                <a href='/skill-enhancement'>
                    <button type="submit" className="learn1">View<i className="fa-solid fa-arrow-right"></i></button>
                </a>
                </div>
        </div>
            <div className='border2'>
                <h1 className='t'> Accessible Learning </h1>
                <img className='pic2' src={about3} alt='' />
                <a href='/accessible-learning'>
                    <button type="submit" className="learn2">View <i className="fa-solid fa-arrow-right"></i></button>
                </a>
                </div>

                <div className='border3'>
                <h1 className='tc'> Comprehensive IT Learning </h1>
                <img className='pic3' src={about2} alt='' />
                <a href='/comprehensive-it-learning'>
                    <button type="submit" className="learn3">View<i className="fa-solid fa-arrow-right"></i></button>
                </a>
                </div>

                <div className='border4'>
                <h1 className='t'> Career Development </h1>
                <img className='pic4' src={about1} alt='' />
                <a href='/career-dev'>
                    <button type="submit" className="learn4">View<i className="fa-solid fa-arrow-right"></i></button>
                </a>
                </div>
    </div>
    </>
);
}