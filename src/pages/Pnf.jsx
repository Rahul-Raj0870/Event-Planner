import React from 'react'

const Pnf = () => {
  return (
    <div style={{paddingTop:'120px',minHeight:'100vh'}}>
      <div style={{height:'200px',width:'800px',top:'30%',left:'50%',transform:'translate(-50%)',border:'solid'}} className='position-absolute  rounded bg-white shadow'>
        <div className='text-center'>
          <h1 className='py-4 text-danger'>Page Not Found</h1>
          <p style={{fontSize:'1.3rem'}}>Check the URL and try again....</p>
        </div>
      </div>
    </div>
  )
}

export default Pnf