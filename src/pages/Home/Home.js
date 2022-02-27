import { useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Testimonial from '../../components/Testimonial/Testimonial';
import './Home.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const Home = () => {

    const [line, setLine] = useState(0);

    if (line % 2 === 0) {
        setLine()
    }

    // let counts = setInterval(updated);
    // let upto = 0;
    // function updated() {
    //     var count = document.getElementById("counter");
    //     count.innerHTML = ++upto;
    //     if (upto === 1000) {
    //         clearInterval(counts);
    //     }
    // }

    // let C = document.getElementsByClassName('counter');
    // document.ready(function(){
    //    C.counterUp({
    //         delay:10,
    //         time: 1200
    //     })
    // })

    return (
        <div>
            <div className='header'>
                <Navbar />
                <div className='custom_bg'></div>

                <div className='header_content'>
                    <h1>Travelogged Kedarnath 2022</h1>
                    <div >
                        <p>Visit the "SWARG" on Earth- The Mighty Kedarnath Temple this 2022.</p>
                    </div>
                    <div className='btn_grp'>
                        <Link to='/book-now' style={{ textDecoration: 'none' }}>
                            <button className='btn1'>Book Now</button>
                        </Link>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <button className='btn2'>Check Itinerary</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container travel_container'>
                <h1 className='heading'>Kedarnath Itinerary</h1>

                <ul className='step_list'>
                    <li className="step_item">
                        <div className="step_number">1</div>

                        <div className="step_content">
                            <div className="step_img_box">
                                <img loading="lazy" src="./images/day0.jpg"
                                    alt="Mountain" data-width="1959" data-height="1306"
                                    className="steps-01__img  js-lightbox-single-image " />
                            </div>

                            <div className="step_text_box">
                                <h2 className="step_heading">Day 0 : Departure From Delhi</h2>
                                <div className="content_box ">
                                    <div className="step_text">
                                        <ul>
                                            <li>We meet at Kaushambi Metro Station in Delhi at 6PM and Start out
                                                trip with full zeal and excitement.</li>
                                            <li>Pit Stop in between for <strong>Dinner (not on us) </strong>at
                                                around 11 PM.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="step_item">
                        <div className="step_number">2</div>

                        <div className="step_content step_content_1">
                            <div className="step_text_box">
                                <h2 className="step_heading">Day 1 : Reach Gupkashi</h2>
                                <div className="content_box">
                                    <div className="step_text">
                                        <ul>
                                            <li>Approx 14 hours of Journey to Guptkashi, (with multiple pit-stops)</li>
                                            <li>We will Reach Guptkashi by noon.</li>
                                            <li>On arrival at Guptkashi check-in hotel. Rest of the day at leisure.</li>
                                            <li>Overnight stay at hotel </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="step_img_box">
                                <img loading="lazy" src="./images/day1.jpg"
                                    alt="Mountain" data-width="1959" data-height="1306"
                                    className="steps-01__img  js-lightbox-single-image " />
                            </div>
                        </div>
                    </li>

                    <li className="step_item">
                        <div className="step_number">3</div>

                        <div className="step_content">
                            <div className="step_img_box">
                                <img loading="lazy" src="./images/day2.jpg"
                                    alt="Mountain" data-width="1959" data-height="1306"
                                    className="steps-01__img  js-lightbox-single-image " />
                            </div>

                            <div className="step_text_box">
                                <h2 className="step_heading">Day 2 : Sonprayag-Kedarnath</h2>
                                <div className="content_box ">
                                    <div className="step_text">
                                        <ul>
                                            <li>Early morning (5 AM) after breakfast check out from the hotel and drive to Sonprayag. From where, you will start your 20 km trek to Kedarnath.</li>
                                            <li>On arrival check in at the hotel. Freshen-up and proceed for Darshan. Take part in evening Aarti.</li>
                                            <li>Dinner and Overnight at hotel.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="step_item">
                        <div className="step_number">4</div>

                        <div className="step_content step_content_1">
                            <div className="step_text_box">
                                <h2 className="step_heading">Day 3 : Kedarnath- Guptkashi</h2>
                                <div className="content_box ">
                                    <div className="step_text">
                                        <ul>
                                            <li>Wake up early in the morning, freshen up and have breakfast.</li>
                                            <li>Visit - Bhairav Temple and start your trek down to Gaurikund.</li>
                                            <li>Drive back to Guptkashi.</li>
                                            <li>Dinner, Rest and Overnight Stay.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="step_img_box">
                                <img loading="lazy" src="./images/day3.jpg"
                                    alt="Mountain" data-width="1959" data-height="1306"
                                    className="steps-01__img  js-lightbox-single-image " />
                            </div>
                        </div>
                    </li>

                    <li className="step_item">
                        <div className="step_number">5</div>

                        <div className="step_content">
                            <div className="step_img_box">
                                <img loading="lazy" src="./images/day4.jpg"
                                    alt="Mountain" data-width="1959" data-height="1306"
                                    className="steps-01__img  js-lightbox-single-image " />
                            </div>

                            <div className="step_text_box">
                                <h2 className="step_heading">Day 4 : Return with Happy Memories | Rishikesh</h2>
                                <div className="content_box ">
                                    <div className="step_text">
                                        <ul>
                                            <li>Wake up early in the morning, freshen up and have breakfast. </li>
                                            <li>Start your return Journey to Delhi.</li>
                                            <li>Take a stop in mid at Rishikesh. Visit Laxman Jhula, Ram Jhula. Take Part in Evening Ganga Aarti.</li>
                                            <li>After that, start your return journey to Delhi.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="step_item">
                        <div className="final_step_number">
                            <img src='./images/heart-solid.svg' alt='heart' />
                        </div>
                    </li>
                </ul>
            </div>


            <div className='container'>
                <div className='inclusions'>
                    <div className='inclusion_heading'>
                        <h2>Inclusions</h2>
                        <p>We include Everything in our plans which you might need while Travelling</p>
                    </div>

                    <div className='inclusion_box'>
                        <div className='inclusion_item'>
                            <img src="./images/transportation.png" alt="Transportation" draggable="false" />
                            <div className='inclusion_item_name'>
                                <span>Transportation</span>
                            </div>
                        </div>
                        <div className='inclusion_item'>
                            <img src="./images/meals.png" alt="Meals" draggable="false" />
                            <div className='inclusion_item_name'>
                                <span>Meals</span>
                            </div>
                        </div>
                        <div className='inclusion_item'>
                            <img src="./images/stays.png" alt="Stays" draggable="false" />
                            <div className='inclusion_item_name'>
                                <span>Stays</span>
                            </div>
                        </div>
                        <div className='inclusion_item'>
                            <img src="./images/tour-guide.png" alt="Tour Guide" draggable="false" />
                            <div className='inclusion_item_name'>
                                <span>Tour Guide</span>
                            </div>
                        </div>
                    </div>

                    <div className='inclusion_btn'>
                        <Link to='/'>
                            <button className='inclusion_btn-1'>Download Itinerary</button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='why-travelogged'>
                    <h2>Why Travelogged</h2>
                    <p>Travelogged is new age technology driven Travel Company. We specialise in Group Departures at affordable prices.</p>
                </div>

                <div className='features'>
                    <div className='feature_item'>
                        <img src='./images/reviews.png' alt='Rating' draggable="false" />
                        <div className='feature_item_text'>
                            <ReactVisibilitySensor partialVisibility offset={{ top: 100 }}>
                                {({ isVisible }) => (
                                    <span className='counter'>
                                        {isVisible ? <CountUp start={0} end={500} duration={1.5} /> : 500}
                                    </span>
                                )}
                            </ReactVisibilitySensor>
                            <span>+ Reviews</span>
                        </div>
                    </div>
                    <div className='feature_item'>
                        <img src='./images/map.png' alt='Map' draggable="false" />
                        <div className='feature_item_text'>
                            <ReactVisibilitySensor partialVisibility offset={{ top: 100 }}>
                                {({ isVisible }) => (
                                    <span className='counter'>
                                        {isVisible ? <CountUp start={0} end={120} duration={1.5} /> : 120}
                                    </span>
                                )}
                            </ReactVisibilitySensor>
                            <span>+ Group Departures</span>
                        </div>
                    </div>
                    <div className='feature_item'>
                        <img src='./images/happy-travellers.png' alt='Happy Travellers' draggable="false" />
                        <div className='feature_item_text'>
                            <ReactVisibilitySensor partialVisibility offset={{ top: 100 }}>
                                {({ isVisible }) => (
                                    <span className='counter'>
                                        {isVisible ? <CountUp start={0} end={2000} duration={1.5} /> : 2000}
                                    </span>
                                )}
                            </ReactVisibilitySensor>
                            <span>+ Happy Travellers</span>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonial />

            <div className='social-media'>
                <div className='container'>
                    <h2>Our Social Media</h2>
                    <div className='social-logo'>
                        <ul>
                            <li>
                                <a href='https://www.youtube.com/'><img src='./images/youtube-brands.svg' alt='youtube' draggable="false" /></a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/nitesh_2_9/'><img src='./images/instagram-brands.svg' alt='instagram' draggable="false" /></a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/people/Nitesh-Jangid/100059126799170/'><img src='./images/facebook-f-brands.svg' alt='facebook' draggable="false" /></a>
                            </li>
                            <li>
                                <a href='https://www.twitter.com/nitesh_2_9/'><img src='./images/twitter-brands.svg' alt='twitter' draggable="false" /></a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/nitesh-jangid-bb6673205/'><img src='./images/linkedin-in-brands.svg' alt='linkedin' draggable="false" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ContactForm />

            <Footer />

        </div>
    )
}

export default Home
