import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='mb-5'>

            <div className='text-center m-5'>
                <h1>About Us</h1>
            </div>

            <div className='row'>
                <div className="col-md-6 m-auto">
                    <div className=" m-5 w-75 ">
                        <h1 className="card-title">We are the best Agency for travel</h1>
                        <p className="card-text">Travel refers to the activity of travelers. A traveler is someone who. moves between different geographic locations, for any purpose. and any duration.The purpose of travel is connected with building social relationships, opportunities to learn and grow, and commitment. It gives us the chance to be truly engaged in an activity, to develop new skills and to discover new cultures. It brings us closer to ourselves and others.</p>
                        <div>
                            <button className='btn btn-warning px-5 text-white'>Find More</button>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 text-center ">
                    <img className='about-img  p-2 ' src="https://image.cnbcfm.com/api/v1/image/106537227-1589463911434gettyimages-890234318.jpeg?v=1589463982&w=1600&h=900" alt="..." />
                </div>


            </div>
            <div>
                <div className=' my-5'>
                    <h4 className='text-center  opacity-50'>Reviews of client</h4>
                    <h1 className='text-center'>Top Reviews about GoTravel</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-5">
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://images.forwardcdn.com/image/720x/center/images/cropped/istock-627909282-1514234385.jpg" className="review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Imin Milani</h5>
                                <h5 className="card-title text-center opacity-75">Wow.I may travel to learn something specific: a new language, a new cuisine, aspects of a different culture, or a deeper appreciation of faith or spirituality.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://i.pinimg.com/originals/5f/4a/56/5f4a5607b02c0d3e0cc89c27e64a02ee.jpg" className="review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Jara Khan</h5>
                                <h5 className="card-title text-center opacity-75"> Thank you.You'll hear about travelers embarking on sacred pilgrimages, growing after a first solo female travel trip.It's a deeper appreciation of faith or spirituality. </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://static.showit.co/800/l8z2pIMYRruuJGiO7N8j5w/96725/isabel_kitchener_waterloo_headshots.jpg" className="review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Katrina Jinum </h5>
                                <h5 className="card-title text-center opacity-75">It's a good experience thanks to all.After visiting the likes of Paris, Rome and Kiev on my first visit to Europe, I vouched to never again confine my visit to big cities</h5>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </div>



    );
};

export default AboutUs;
