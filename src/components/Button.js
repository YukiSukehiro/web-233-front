import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button () {
    return (
        <Link to='sign-in'>
            <button className='sign-in-btn'>
                Sign In
            </button>
        </Link>
    )
}