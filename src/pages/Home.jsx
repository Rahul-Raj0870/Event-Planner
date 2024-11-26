import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Grid2 } from '@mui/material'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Header />
    <div   style={{paddingTop:'150px',marginInline:'80px',fontFamily:'Alegreya'}}>
      <Grid2 className='mb-5' container spacing={5} >
        <Grid2  >
        <div><img width={'500px'} height={'560px'} src={img1} alt="" /></div>
        </Grid2>
        <Grid2 size={6} container>
          <Grid2 size={12}  ><h1 style={{fontSize:'3rem',marginTop:'90px'}}>Best Ideas for
          <span className='d-block'>Your Parties</span></h1></Grid2>
          
          <Grid2><div><img width={'300px'} height={'300px'}  src={img2} alt="" /></div></Grid2>
          <Grid2><div><img width={'300px'} height={'300px'}  src={img3} alt="" /></div></Grid2>
        
        </Grid2>

      </Grid2>
      
      <h1 style={{fontSize:'3rem',color:'#c804a4'}} className='mt-5 mb-3'>Welcome</h1>
      <div className='d-flex'>
        <img src={img7} alt="" />
        <div style={{textAlign:'justify'}} className='px-5'><p className='fs-3'
>Welcome to <span style={{fontFamily:'Birthstone',fontSize:'2.2rem',fontWeight:'600',color:'#c804a4'}}>Eventrum </span>, your go-to destination for exceptional event planning!</p> <p className='fs-5'>Whether you're organizing a wedding, corporate event, or special celebration, our dedicated team is here to turn your vision into reality. With a focus on creativity, attention to detail, and personalized service, we handle every aspect of your event to ensure a seamless and unforgettable experience. Let us take the stress out of planning so you can enjoy every moment—contact us today to get started!</p></div>

      </div>
      <h1 style={{fontSize:'3rem',color:'#c804a4'}} className='mt-5'>Our Events</h1>
      
      <Grid2 container spacing={5} size={7} className='mt-5'>
        <Grid2 className='position-relative bg-dark'><img style={{opacity:'0.6'}} src={img4} width={'770px'} height={'530px'} alt="" />
        <div style={{top:'50%',left:'50%',transform:'translate(-50%)'}} className='position-absolute text-light'>
          <h1>Birthday Parties</h1>
          <Link to={'/events'} className='border' style={{textDecoration:'none',fontSize:'1.8rem',paddingInline:'100px',fontWeight:'600',color:'white',opacity:'0.8'}}>More</Link>
          </div>
        </Grid2>
        <Grid2 size={5} container>
          <Grid2 className='position-relative bg-dark'>
            <img style={{opacity:'0.6'}} width={'100%'} height={'100%'} src={img5} alt="" />
            <div style={{top:'50%',left:'50%',transform:'translate(-50%)'}} className='position-absolute text-light'>
              <h3>Wedding Planning</h3>
              <Link to={'/events'} className='border' style={{textDecoration:'none',fontSize:'1.8rem',paddingInline:'80px',fontWeight:'600',color:'white',opacity:'0.8'}}>More</Link>
              </div>
          </Grid2>
          <Grid2 className='position-relative bg-dark'>
            <img style={{opacity:'0.6'}} height={'100%'} width={'100%'} src={img6} alt="" />
            <div style={{top:'50%',left:'50%',transform:'translate(-50%)'}} className='position-absolute text-light'>
              <h3>Corporate Events</h3>
              <Link to={'/events'} className='border' style={{textDecoration:'none',fontSize:'1.8rem',paddingInline:'80px',fontWeight:'600',color:'white',opacity:'0.8'}}>More</Link>
              </div>
            </Grid2>

        </Grid2>

      </Grid2>
    </div>
    <Footer />
    </>
  )
}

export default Home