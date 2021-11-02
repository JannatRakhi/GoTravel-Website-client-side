import React from 'react';
import './WhyTravel.css';

const WhyTravel = () => {
    return (
        <div className='my-5 mx-5'>
            <div>
                <h1 className='text-center '>Guys!Travel with Us:)</h1>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">You can get best guidelines</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://www.freakytravel.com/wp-content/uploads/hiker-ocean-extreme.jpg" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">We are trusted agency</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://i.guim.co.uk/img/media/759f700c9f1d288f76f86a1dc44e37d1cf05e57a/0_28_5100_3061/master/5100.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=b17650e0cdbd1d49f25de4c6bf3a3df1" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Ten Years of Travel Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPP_IHNeCN4Bo1EaSVj18gzSP9wrSo_mPf5bKf9klwJdbF-tiw0Bc1UOJi6Qu_l1n6kA&usqp=CAU" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Happy Experience</h5>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    );
};

export default WhyTravel;