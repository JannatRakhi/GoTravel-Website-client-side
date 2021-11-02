import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Packages = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-fortress-49093.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className='mb-5' >
            <h1 className='text-dark text-center mx-5 my-5 '>Famous Tourist Country</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 m-auto">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>


        </div>
    );
};

export default Packages;