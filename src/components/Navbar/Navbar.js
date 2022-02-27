import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbars = () => {

    const [navbarBg, setNavbarBg] = useState(false);
    const [navColor, setNavColor] = useState(false);
    var scroll_topBtn = document.getElementById('scroll_top');

    function topFunction() {
        document.body.scrollTop = 0;  // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavbarBg(true);
            setNavColor(true);
            scroll_topBtn.style.display = "block";
        }
        else {
            setNavbarBg(false);
            setNavColor(false);
            scroll_topBtn.style.display = "none";
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div>
            <div className='myNav' >
                <Navbar collapseOnSelect expand="md" bg='none' variant="dark" fixed='top' className={navbarBg ? 'nav_bg active ' : 'nav_bg'}>
                    <Container className='nav_container'>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div className='navbar_logo'>
                                <img src='./images/logo.png' draggable='false' alt='Logo' />
                                <h1 className={navColor ? 'activeColor' : ''}>Travelogged</h1>
                            </div>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end nav_collapse'>
                            <Nav>
                                <Link to='/pricing' className={navColor ? 'nav_item activeColor' : 'nav_item'}>Pricing</Link>
                                <Link to='/about-us' className={navColor ? 'nav_item activeColor' : 'nav_item'}>About Us</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <button id="scroll_top" onClick={topFunction}>
                <img src="./images/arrow-up-solid.svg" alt='arrow-top' draggable="false" />
            </button>

            <button id="whatsapp">
                <a href='whatsapp://send?text=Congratulation Nitesh! You are selected.'>
                    <img src="./images/whatsapp-brands.svg" alt='arrow-top' draggable="false" />
                </a>
            </button>
        </div>
    )
}

export default Navbars
