import React from 'react'

const Footer = () => {
  return (
    <div  style={{fontFamily:'Alegreya',backgroundColor:'white'}}>
      <hr />
      <div className='px-3 py-2 d-flex justify-content-between'>
        
        <div>
          <p style={{lineHeight:'0.5'}}><span style={{fontFamily:'Birthstone',fontSize:'1.5rem',fontWeight:'600'}}>Eventrum</span> <span><i className="fa-regular fa-copyright"></i> 2024 | Privacy Policy</span></p>
          <p>All Rights Reserved.</p>
        </div>
        <div className='mx-3 text-light' style={{width:'400px',height:'55px',backgroundColor:'#c804a4'}}>
          <span className='fs-4 d-flex justify-content-evenly '><i className="fa-solid fa-phone p-3"></i> <div style={{height:'55px',width:'1.6px',backgroundColor:'white'}}></div>
          <i className="fa-solid fa-location-dot p-3"></i><div style={{height:'55px',width:'1.6px',backgroundColor:'white'}}></div><i className="fa-brands fa-twitter p-3"></i><div style={{height:'55px',width:'1.6px',backgroundColor:'white'}}></div><i className="fa-brands fa-google-plus-g p-3"></i></span>
        </div>
      </div>
    </div>
  )
}

export default Footer