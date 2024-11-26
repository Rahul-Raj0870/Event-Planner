import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{fontFamily:'Noto Serif Display',backgroundColor:'white'}} className='position-fixed top-0 w-100 pt-2 z-2'>
      <nav className=' d-flex justify-content-between align-items-center'>
        <Link to={'/'} style={{textDecoration:'none'}}>
          <h1 className='px-4'  style={{fontSize:'2.8rem',fontFamily:'Birthstone',fontWeight:'600',color:'#c804a4',lineHeight:'1'}}>Eventrum 
              <span style={{fontSize:'1.8rem',display:'block'}}>event planner</span>
          </h1>
        </Link>
        <div>
          <ul style={{listStyle:'none',fontSize:'1.4rem',fontWeight:'500'}} className='d-flex '>
            <li style={{borderLeft:'dotted gray',color:'#c804a4'}} className='px-2'>Home</li>
            <li style={{borderLeft:'dotted gray'}} className='px-2'>About</li>
            <li style={{borderLeft:'dotted gray'}} className='px-2'>Services</li>
            <li style={{borderLeft:'dotted gray'}} className='px-2'>Gallery</li>
            <li style={{borderLeft:'dotted gray'}} className='px-2'>Contacts</li>
            <span style={{borderLeft:'dotted gray',color:'#c804a4'}} className='ps-2 pe-4'><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-facebook-f px-2"></i><i className="fa-brands fa-google-plus-g"></i></span>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Header