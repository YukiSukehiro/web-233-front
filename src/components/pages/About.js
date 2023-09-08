import React from 'react'
import about1 from './images/about1.jpg'
import about2 from './images/about2.jpg'
import about3 from './images/about3.jpg'
import about4 from './images/about4.jpg'
import '../../App.css';
import './About.css';


export default function About() {

return (
<>
    <div className="about">
        {/* Scroll 1 */}
        <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">About</p>
                <p>Info Craft</p>
            </div>
            <div className="backSide">
                <p className="title">PROJECT DESCRIPTION</p>
                <p className='partitle'>Our repository is designed to empower learners of all backgrounds 
        by providing a diverse collection of modules that cover a wide range of subjects and skills.
        Each module has been painstakingly created to offer you in-depth insights, practical knowledge,
        and engaging activities.</p>
            </div>
        </div>
    </div>
            {/* Scroll 2 */}
                <h3 className='title2'><em> Project Objectives </em></h3>


                {/* Photo 1*/}
                    <div className='container1'>
                        <img className='photo1' src={about1} alt="" width='30%' height='auto'/>
                            <div className='overlay1'>
                                <div className='header1'>
                                    Career Development
                                <div className='paragraph1'>
                            Provide modules that assist learners in building skills crucial for career advancement,<br></br>
                        whether within IT roles or related areas.
                    </div>
                </div>
            </div>
        </div>



            {/* Photo 2 */}
                <div className='container2'>
                    <img className='photo2' src={about2} alt="" width='30%' height='auto'/>
                        <div className='overlay2'>
                            <div className='header2'>
                                Comprehensive IT Learning
                            <div className='paragraph2'>
                        Develop a repository that covers a wide range of IT topics, 
                    ensuring that learners can access modules 
                spanning programming, networking, cybersecurity, databases, and emerging technologies.
            </div>
        </div>
    </div>
</div>


            {/* Photo 1 */}
                <div className='container3'>
                    <img className='photo3' src={about3} alt="" width='30%' height='auto'/>
                        <div className='overlay3'>
                            <div className='header3'>
                                Accessible Learning
                            <div className='paragraph3'>
                        Create a user-friendly platform that is accessible  to learners of various backgrounds and skill levels,  from beginners to experienced IT professionals.
                    </div>
                </div>
            </div>
        </div>




        <div className='container4'>
        <img className='photo4' src={about4} alt="" width='30%' height='auto'/>
        <div className='overlay4'>
        <div className='header4'>
            Skill Enhancement
        <div className='paragraph4'>
            Provide modules that empower learners to enhance  their practical IT skills, enabling them to apply knowledge in real-world scenarios.
        </div>
        </div>
</div>
</div>
</div>
</>
);
}