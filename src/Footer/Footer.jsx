import React from 'react'
import './Footer.css'

const Footer=()=>{
    return(
        <div className='footer'>
        <div className='footer-title'>
            <p>JP Power Ventures</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Projects</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
        </div>
    )
}

export default Footer;