import React from 'react'
import './ContactForm.css'

const ContactForm = () => {

    let cc1 = document.getElementsByClassName('cc-img');

    function IMGbgIn1() {
        cc1[0].classList.add("img_hover");
    }
    function IMGbgOut1() {
        cc1[0].classList.remove("img_hover");
    }
    function IMGbgIn2() {
        cc1[1].classList.add("img_hover");
    }
    function IMGbgOut2() {
        cc1[1].classList.remove("img_hover");
    }
    function IMGbgIn3() {
        cc1[2].classList.add("img_hover");
    }
    function IMGbgOut3() {
        cc1[2].classList.remove("img_hover");
    }
    function IMGbgIn4() {
        cc1[3].classList.add("img_hover");
    }
    function IMGbgOut4() {
        cc1[3].classList.remove("img_hover");
    }

    return (
        <div>
            <div className="contact-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-content">
                                <span>CONTACT DETAILS</span>
                                <h2>Get in Touch</h2>
                                <p>Give Your details to Book Your Trip</p>
                                <div className="c-c-1" onMouseOver={IMGbgIn1} onMouseOut={IMGbgOut1}>
                                    <img src="https://i.postimg.cc/15r7rR05/location.png" alt="Address" className="cc-img" />
                                    <div className="c-c-1-1">
                                        <h3>Our Address</h3>
                                        <a href="/" id="address">Amravati-444605, Maharashtra, INDIA</a>
                                    </div>
                                </div>
                                <div className="c-c-1" onMouseOver={IMGbgIn2} onMouseOut={IMGbgOut2}>
                                    <img src="https://i.postimg.cc/VkNg9qLD/email1.png" alt="" className="cc-img" />
                                    <div className="c-c-1-1">
                                        <h3>Email</h3>
                                        <span>Mail:</span>
                                        <a href="mailto:travelogged.info@gmail.com?subject=Congratulation Nitesh&body=Congratulation Nitesh, You are selected.">travelogged.info@gmail.com</a>
                                    </div>
                                </div>
                                <div className="c-c-1" onMouseOver={IMGbgIn3} onMouseOut={IMGbgOut3}>
                                    <img src="https://i.postimg.cc/FsC342NV/phone-call.png" alt="" className="cc-img" />
                                    <div className="c-c-1-1">
                                        <h3>Contact</h3>
                                        <span>Mobile:</span>
                                        <a href="tel:+91-9680033244">+91-9680033244</a>
                                    </div>
                                </div>
                                <div className="c-c-1" onMouseOver={IMGbgIn4} onMouseOut={IMGbgOut4}>
                                    <img src="https://i.postimg.cc/0N2TwMLs/clock.png" alt="" className="cc-img" />
                                    <div className="c-c-1-1">
                                        <h3>Contact Hours</h3>
                                        <span>Everyday: 24 Hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-body">
                                <div className="form-container">
                                    <h2>Ready to Get Started?</h2>
                                    <p>Give Your details and we will contact you.</p>
                                    <div className="form-row">
                                        <div className="form-col">
                                            <div className="inputBox">
                                                <input type="text" required="required" />
                                                <span className="text">Your Name</span>
                                                <span className="line"></span>
                                            </div>
                                        </div>
                                        <div className="form-col">
                                            <div className="inputBox">
                                                <input type="email" required="required" />
                                                <span className="text">Email</span>
                                                <span className="line"></span>
                                            </div>
                                        </div>
                                        <div className="form-col">
                                            <div className="inputBox">
                                                <input type="tel" required="required" />
                                                <span className="text">Phone</span>
                                                <span className="line"></span>
                                            </div>
                                        </div>
                                        <div className="form-col">
                                            <div className="inputBox">
                                                <input type="text" required="required" />
                                                <span className="text">Your City</span>
                                                <span className="line"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col">
                                            <div className="inputBox textarea">
                                                <textarea name="" id="" required="required"></textarea>
                                                <span className="text">Type Your Message Here...</span>
                                                <span className="line"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col">
                                            <input type="checkbox" name="" id="check" />
                                            <label for="check">Accept <a href="/">Terms</a> and <a href="/">Privacy Policy</a>.</label>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col">
                                            <input type="submit" value="Submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
