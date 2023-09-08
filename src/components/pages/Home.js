import React from 'react';

import './Home.css';

export default function Home() {
return (
    <>
    <div className='home'>
        <h1 className='h1'>Welcome to our Online Repository of Modules.<br></br>
        </h1><br></br>
            <p className='para'>your one-stop resource for thorough and interactive learning experiences. </p>
            <a href='/sign-up' style={{textDecoration: "none"}} >
                <button className='btn'>Get Started</button></a>
    </div>
    </>
);
}