import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column  text-light mt-5 shadow" style={{ width: "100%", height:'300px'}} >
    <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
    <div style={{width:'400px'}}className='website'>
    
      <h4><i style={{height:'25px'}}className="fa-brands fa-docker me-2"></i>Project fair</h4>
      <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
      <p>Code licensed Luminar, docs CC BY 3.0.</p>
    <p>Currently v5.3.2.</p>
    </div>
    <div className='links d-flex flex-column'>
      <h5>Links</h5>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
      <Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Login</Link>
      <Link to={'/register'} style={{textDecoration:'none',color:'white'}}>Register</Link>
    
    </div>
    <div className='guides d-flex flex-column'>
      <h5>Guides</h5>
      <a href="https://react.dev/"style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
      <a href="https://react-bootstrap.github.io/"style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
      <a href="https://reactrouter.com/en/main"style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</a>
    
    </div>
    <div className='contact d-flex flex-column'>
      <h5> Contact Us </h5>
      <div className='d-flex'>
        <input placeholder='Enter your email here' type="text" className="me-1 rounded p-1" />
        <button className='btn btn-warning ms-2'><i className="fa-solid fa-arrow-right "></i></button>
      </div>
      <div className="icons d-flex justify-content-between mt-3">
        <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'> <i className="fa-brands fa-twitter"></i></a>
        <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'> <i className="fa-brands fa-instagram"></i></a>
        <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'> <i className="fa-brands fa-facebook"></i></a>
        <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'> <i className="fa-brands fa-linkedin"></i></a>
        <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'> <i className="fa-brands fa-github"></i></a>
        <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'> <i className="fa-solid fa-phone"></i></a>
    
    
      </div>
    </div>
    </div>
    <p className='text-center mt-3'>Copyright @ Jan Batch, 2024 FF Store. Built with React.</p>
          </div>
  )
}

export default Footer
