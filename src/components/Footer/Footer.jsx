import React from 'react'
import './Footer.css'
import facebook from '../../assets/Footer/facebook.png'
import instagram from '../../assets/Footer/instagram.png'
import linkedin from '../../assets/Footer/linkedin.png'
import youtube from '../../assets/Footer/youtube.png'
import { Link } from 'react-router-dom'

function Footer() {
  
  return (
    <div className='footer'>
      <div className="footer-con">
        <div className="social-icon">
          <h2>  FOLLOW US</h2>
          <div className="icons">
              <a href="https://www.facebook.com/spadvertisingraipur"><img src={facebook} alt="" /></a>
              <a href="https://www.instagram.com/spadvertisingrpr/"><img src={instagram} alt="" /></a>
              <a href="https://www.linkedin.com/company/sp-advertising20/posts/?feedView=all"><img src={linkedin} alt="" /></a>
              <a href="https://www.youtube.com/@spadvertising530"><img src={youtube} alt="" /></a>
          </div>
        </div>


        <div className="footer-box">

        

        <div className='div1'>
        <div className="footer-contact">
          <h2>Pages</h2>
          <div className='pages'>
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/about"}><li>About Us</li></Link>
          <Link to={"/Welcome-page"}><li>Clients</li></Link>
          <Link to={"/Contact"}><li>Contact Us</li></Link>
          <Link to={"/Blog"}><li>Blog</li></Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScgyaKydibWI9ch_ha0_Nv_ANKwMTXM1S5m7PviQoJqEEvk3A/viewform?usp=sf_link"><li>Career</li></a>
          </div>
        </div>

        <div className="footer-service">
          <h2>Services</h2>
          <ul className="pages">
          <Link to={"/Outdoor-Advertising"}><li>Outdoor Advertising</li></Link>
          <Link to={"/Digital-Marketing"}><li>Digital Marketing</li></Link>
          <Link to={"/Designing-Services"}><li>Designing Services</li></Link>
          <Link to={"/Print-Media"}><li>Print Media</li></Link>
          <Link to={"/Branding-Strategy"}><li>Branding & Strategy</li></Link>
          <Link to={"/Event-Promotion"}><li>Event Promotion</li></Link>
          </ul>
        </div>
        </div>

          
        <div className='div2'>
        <div className="address">
            <h2>Contacts</h2>
            <div className='footer-conct'>
            <p>+91-8085354646</p>
            <p>spadvertising@live.com</p>
            </div>
          </div>
          
        
        </div>

        </div>

      </div>
      <br />
      <hr />
      <div className="copyright">
        <p>Copyright © 2024 SP Advertising - All Rights Reserved.</p>
        <div>
          <p>Privacy Policy</p><p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
