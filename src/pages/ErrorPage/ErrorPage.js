import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbars from '../../components/Navbar/Navbar'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div>
      <Navbars />
      <div className='error'>
        <img src='./images/404-error1.png' draggable="false" alt='ErrorImage'></img>
        <h1>Page Not Found!</h1>
        <Link to='/' className='go_to_home'>
          <button>Go to Home Page</button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage
