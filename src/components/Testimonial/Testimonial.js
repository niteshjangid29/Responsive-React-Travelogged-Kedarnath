import { Carousel } from 'react-bootstrap';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <>
            <div className='testimonials'>
                <div className='container'>
                    <div className="testimonial_heading">
                        <h2>What Others Say About Us?</h2>
                    </div>

                    <div className="mySlider">

                        <Carousel>
                            <Carousel.Item interval={5000}>
                                <div className="slide_box">
                                    <div className="slide1">
                                        <p>It was indeed one of the most wonderful experiences having my first trip with travelogged.in. Kedarnath was never that easy but these Guys made sure that we enjoy every each bit of it. Their Management and facilities were good. I would highly recommend and of course I am planning to travel with them super soon.</p>

                                        <div className='author'>
                                            <h4>Nitesh Jangid1</h4>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item interval={5000}>
                                <div className="slide_box">
                                    <div className="slide1">
                                        <p>I visited Manali with Travelogged and God it was wonderful. It was my first solo trip with them. In this Budget, this level of service was unbeliveable. It would have happily paid double for it!!
                                            <br />
                                            The hotels, food, coordinator knowledge and interaction with everyone made it such a smooth and fun trip.
                                            <br />
                                            Thank You so much Travelogged.
                                        </p>

                                        <div className='author'>
                                            <h4>Nitesh Jangid2</h4>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item interval={5000}>
                                <div className="slide_box">
                                    <div className="slide1">
                                        <p>It was indeed one of the most wonderful experiences having my first trip with travelogged.in. Kedarnath was never that easy but these Guys made sure that we enjoy every each bit of it. Their Management and facilities were good. I would highly recommend and of course I am planning to travel with them super soon.</p>

                                        <div className='author'>
                                            <h4>Nitesh Jangid3</h4>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>
            </div>
            {/* <div className='testimonials'>
                <div className='container'>
                    <div className='testimonials_heading'>
                        <h2>What Others Say About Us?</h2>
                    </div>

                    <div className='testimonial-box'>
                        <div className='testi-left-arrow'></div>

                        <div className='slider'>
                            <div className='slides'>
                                <input type='radio' name='radio-btn' id='radio1' />
                                <input type='radio' name='radio-btn' id='radio2' />
                                <input type='radio' name='radio-btn' id='radio3' />
                                <input type='radio' name='radio-btn' id='radio4' />


                                <div class="slide first">
                                    <p>It was indeed one of the most wonderful experiences having my first trip with travelogged.in. Kedarnath was never that easy but these Guys made sure that we enjoy every each bit of it. Their Management and facilities were good. I would highly recommend and of course I am planning to travel with them super soon.</p>

                                    <div className='author'>
                                        <h4>Nitesh Jangid1</h4>
                                    </div>
                                </div>

                                <div class="slide">
                                    <p>It was indeed one of the most wonderful experiences having my first trip with travelogged.in. Kedarnath was never that easy but these Guys made sure that we enjoy every each bit of it. Their Management and facilities were good. I would highly recommend and of course I am planning to travel with them super soon.</p>

                                    <div className='author'>
                                        <h4>Nitesh Jangid2</h4>
                                    </div>
                                </div>

                                <div class="slide">
                                    <p>It was indeed one of the most wonderful experiences having my first trip with travelogged.in. Kedarnath was never that easy but these Guys made sure that we enjoy every each bit of it. Their Management and facilities were good. I would highly recommend and of course I am planning to travel with them super soon.</p>

                                    <div className='author'>
                                        <h4>Nitesh Jangid3</h4>
                                    </div>
                                </div>

                                <div className="slide">
                                    <p>It was indeed one of the most wonderful experiences having my first trip with travelogged.in. Kedarnath was never that easy but these Guys made sure that we enjoy every each bit of it. Their Management and facilities were good. I would highly recommend and of course I am planning to travel with them super soon.</p>

                                    <div className='author'>
                                        <h4>Nitesh Jangid4</h4>
                                    </div>
                                </div>

                                <div className="navigation-auto">
                                    <div class="auto-btn1"></div>
                                    <div class="auto-btn2"></div>
                                    <div class="auto-btn3"></div>
                                    <div class="auto-btn4"></div>
                                </div>

                            </div>

                            <div className="navigation-manual">
                                <label for="radio1" class="manual-btn"></label>
                                <label for="radio2" class="manual-btn"></label>
                                <label for="radio3" class="manual-btn"></label>
                                <label for="radio4" class="manual-btn"></label>
                            </div>
                        </div>

                        <div className='testi-right-arrow'></div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Testimonial
