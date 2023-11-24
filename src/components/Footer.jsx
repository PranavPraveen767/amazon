import React from 'react'
import'./Footer.css'

function Footer() {
  return (
    <>
    <div className="footer-panel">
     <div>
      <p className='mt-3' style={{fontSize:'13px',fontWeight:'700'}}>Back To Top</p>
     </div>

    </div>
    <div className="parent-div ">
    <div className="footer-panel2 mt1">
      <div className='footer-list'>
        <h6 className='fw-bolder'>Get To Know Us</h6>
        <p>Careers</p>
        <p>Blog</p>
        <p>About Amazon</p>
        <p>Investor Relations</p>
        <p>Amazon Devices</p>
        <p>Amazon Science</p>
      </div>
      <div className='footer-list'>
      <h6 className='fw-bolder'>Make Money With Us</h6>
      <p>Sell products on Amazon</p>
      <p>Sell on Amazon Business</p>
      <p>Sell apps on Amazon</p>
      <p>Become an Affiliate</p>
      <p>Advertise Your Products</p>
      <p>Self-Publish with Us</p>
      <p>Host an Amazon Hub</p>
      <p>See More Make Money with Us</p>
      </div>
      <div className='footer-list'>
      <h6 className='fw-bolder'>Amazon Payment Products</h6>
      <p>Amazon Business Card</p>
      <p>Shop With Points</p>
      <p>Reload Your Balance</p>
      <p>Amazon Currency Convertor</p>
        
      </div>
      <div className='footer-list'>
      <h6 className='fw-bolder'>Let Us Help You</h6>
      <p>Amazon and COVID-19</p>
      <p> Your Account</p>
      <p>Your Orders</p>
      <p>Shipping Rates & Policies</p>
      <p>Returns & Replacements</p>
      <p>Manage Your Content and Devices</p>
      <p>Amazon Assistant</p>
      <p>Help</p>
      </div>
    </div>
  
    </div>
    
    </>
  )
}

export default Footer