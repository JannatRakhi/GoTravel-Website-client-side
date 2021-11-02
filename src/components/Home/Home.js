import React from 'react';


import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Packages from '../Packages/Packages';
import WhyTravel from '../WhyTravel/WhyTravel';

import './Home.css'


const Home = () => {
  return (
    <div id="home" className=''>
      <div >
        <img className='image' src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_504534504_145596.jpg" alt="" />
      </div>


      <div>
        <Packages></Packages>
        <WhyTravel></WhyTravel>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>

      </div>



    </div>
  );
};

export default Home;