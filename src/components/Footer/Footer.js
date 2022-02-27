import { Link } from 'react-router-dom'
import './Footer.css'
// import '../../../public/images/phone-solid.svg';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className='myFooter'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-lg-3 col-sm-6 footer-col-1'>
                        <Link to='/'><img src='./images/logo.png' draggable='false' alt='Logo' /></Link>
                    </div>

                    <div className='col-md-4 col-lg-3 col-sm-6 footer-col-2'>
                        <h4>Company</h4>
                        <ul>
                            <li><Link to='/about-us' className='f_link'>About Us</Link></li>
                            <li><Link to='/blogs' className='f_link'>Blogs</Link></li>
                            <li><Link to='/testimonials' className='f_link'>Testimonials</Link></li>
                        </ul>
                    </div>

                    <div className='col-md-4 col-lg-3 col-sm-6 footer-col-3'>
                        <h4>Support</h4>
                        <ul>
                            <li><Link to='/contact-us' className='f_link'>Contact Us</Link></li>
                            <li><Link to='/help-center' className='f_link'>Help Center</Link></li>
                            <li><Link to='/faq' className='f_link'>FAQ</Link></li>
                        </ul>
                    </div>

                    <div className='col-md-4 col-lg-3 col-sm-6 footer-col-4'>
                        <h3>Contact Us</h3>
                        <div className='phone' >
                            <a href='tel:+91-9680033244'>
                                <img src='./images/phone-solid.svg' alt='Logo' draggable="false" />
                                +91-9680033244
                            </a>
                        </div>
                        <div className='email'>
                            <a href='mailto:travelogged.info@gmail.com?subject=Congratulation Nitesh&body=Congratulation Nitesh, You are selected.'>
                                <img src='./images/envelope-solid.svg' alt='Email' draggable="false" />
                                travelogged.info@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <hr className='hr' />

                <div class="copyright">
                    <Link to='/terms-and-conditions' className='policy'>Terms & Condition</Link>
                    <Link to='/refund-policy' className='policy'>Refund Policy</Link>
                    <p><img src='./images/copyright-regular.svg' alt='copyright' draggable="false" /><span>{currentYear}</span> travelogged.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
