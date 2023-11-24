import React from 'react'
import './Header.css'
import amazonlogo from '../components/images/amazon_logo.png'

function Header() {
  return (
    <>
      <div className='d-flex justify-content-evenly align-items-center' style={{ height: '60px', backgroundColor: 'black', color: 'white' }}>
        <div className='logo'>
          <img src={amazonlogo} width={'120px'} alt="" />
        </div>
        <div className='location ms-1 mt-1 ' style={{ width: "170px", height: '40px' }} >
          <div className='ms-4' style={{ height: "15px" }}>
            <p className='mt-2' style={{ fontSize: '12px' }}>Delvering to Kochi 87877</p>
          </div>
          <div className='d-flex mb-4'>
            <i class="fa-solid fa-location-dot me-2"></i>
            <p className='fw-bolder' style={{ fontSize: "14px" }}>Update Location</p>
          </div>
        </div>
        <div className="nav-search d-flex justify-content-center align-items-center mt-2" style={{ width: '532px', height: '40px', borderRadius: '4px' }}>
          <div style={{ height: '40px', width: '40px' }} className=''>
            <select style={{ height: '40px', borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px' }} >
              <option style={{ height: '40px', backgroundColor: '#f3f3f3' }} >All</option>
            </select>
          </div>
          <div className='ms-0'><input style={{ height: '40px', width: '450px' }} placeholder='Search Amazon'></input></div>
          <div className='search-icon  d-flex justify-content-center align-items-center border' style={{ height: '40px', backgroundColor: '#febd68', borderTopRightRadius: '4px', borderBottomRightRadius: '4px', width: '39px' }}><i class="fa-solid fa-magnifying-glass fa-xl" style={{ color: 'black' }} ></i></div>


        </div>



        <div className="nav-sign-in">
          <div style={{ height: '14px' }}>   <p style={{ fontSize: '12px', height: '-22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='mt-2'>Hello,sign in</p></div>
          <div> <p style={{ fontSize: '14px', height: '13px' }} className='fw-bolder'>Account &Lists</p></div>
        </div>



        <div className="nav-sign-in">
          <div style={{ height: '14px' }}>   <p style={{ fontSize: '12px', height: '-22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='mt-2'>Returns</p></div>
          <div> <p style={{ fontSize: '14px', height: '13px' }} className='fw-bolder'>&Orders</p></div>
        </div>


        <div className='nav-cart'>
        <i class="fa-solid fa-cart-shopping"></i>Cart

        </div>
     

      </div>




      <div className="panel">
        
          <div className="ms-2 justify-content-center align-items-center mt-1">
          <i class="fa-solid fa-bars pe-2"></i>All
        
        </div>
        <div className="panel-ops ps-1 d-flex mt-1">
          <a href="" style={{textDecoration:'none',color:'white'}}><p className='mx-1'>Today's Deals</p></a>
          <a href="" style={{textDecoration:'none',color:'white'}}><p className='mx-1'>Registry</p></a>
          <a href=""style={{textDecoration:'none',color:'white'}}><p className='mx-1'>Customer service</p></a>
          <a href=""style={{textDecoration:'none',color:'white'}}><p className='mx-1'>Gift Card</p></a>
          <a href=""style={{textDecoration:'none',color:'white'}}><p className='mx-1'>Sell</p></a>
         
        
        </div>
        
          </div>




        
  

      


    </>
  )
}

export default Header