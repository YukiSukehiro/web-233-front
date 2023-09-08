import React from 'react';
import './ComprehensiveITLeaning.css';

export default function ComprehensiveITLearning() {
return (
    <>
    <div className='comprehensive-it-learning'>
            <div className='header-point'>
            <p>Comprehensive IT Learning </p>
        </div>
        <div className='bordt'>
            <a href='Programming.pdf'>
                <button className='t1'>
                    <p>Programming</p>
                </button>
            </a>
            <br></br>
            <a href='Networking.pdf'>
                <button className='t2'>
                <p>Networking</p>
                </button>
            </a>
            <br></br>
            <a href='Cyber Security.pdf'>
                <button className='t3'>
                <p>Cyber Security</p>
                </button>
            </a>
            <br></br>
            <a href='Database.pdf'>
                <button className='t4'>
                <p>Database</p>
                </button>
            </a>
            <br></br>
            <a href='Emerging Technologies.pdf'>
                <button className='t5'>
                <p>Emerging Technologies</p>
                </button>
            </a>
            <br></br>
            </div>
        </div>
    </>
);
}