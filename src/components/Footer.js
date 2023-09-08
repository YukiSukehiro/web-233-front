
import './Footer.css';
import React from "react";






function Footer (){


return (
    <div className="main-footer">
        <div className= "container">
            <div className="row1">
                {/* Column1 */}
                <div className="col">
                    Cite Students<br></br>
                    Online Repository Modules 
                </div>
                {/* Column2 */}
                <div className='col2'>
                    <h1>Contact Us</h1>
                    <ul>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrglkFTfCwfwcKTHhpTthMPPxCngcJRxwjjNDvlWZvLqjQVmfPqdmmjMHtCvRLzhzVHHQV"><i className="fa fa-envelope"></i></a>
                    ohab.diaz.up@phinmaed.com<br></br>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVJRjrMKwpQfvhgMXMGfxQpkqBsZtPNXRpdzzrcQdFhdFVrrvlTgfknLJGgHhlVQkPTSWL"><i className="fa fa-envelope"></i></a>
                        john.valenzuela.up@phinmaed.com<br></br>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVJRjrMKwpQfvhgMXMGfxQpkqBsZtPNXRpdzzrcQdFhdFVrrvlTgfknLJGgHhlVQkPTSWL"><i className="fa fa-envelope"></i></a>
                        jodi.carrera.up@phinmaed.com<br></br>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQhhSjVprbjRzNZssZHGgWxvWcSgSHBSFJrGnxGnMkZMxQvMfljBWhpGSVbgvHXbjpthv"><i className="fa fa-envelope"></i></a>
                    just.bandong.up@phinmaed.com
                    </ul>
                    </div>
                    {/*Column3 */}
                    <div className='col3'>
                    <h1> School Address </h1>
                    <ul>
                        <a href="https://www.google.com/maps/place/PHINMA-University+of+Pangasinan/@16.0471092,120.3399398,17z/data=!3m1!4b1!4m6!3m5!1s0x339167fe6bba4d67:0xf54b516c2c5d10b6!8m2!3d16.0471041!4d120.3425147!16s%2Fm%2F0641gkp?entry=ttu">
                        <i className="fa-solid fa-location-dot"></i></a>28WV+R2R, Arellano St, Downtown District, Dagupan, 2400 Pangasinan
                    </ul>
                    </div>
                </div>
            </div>
        
        <hr />
        <div className="row">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} This App | All right reserved | Term Of Service | Privacy 
            </p>
        </div>
    </div>
    
);
}
export default Footer;