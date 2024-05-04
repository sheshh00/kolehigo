import React, { useState } from 'react';
import Dost from '../../../DashboardAssets/ScholarshipsAssets/dost.png'


const Promotedscholarships = () => {
    return(
        <div className='Promoted-colleges'>
            <div className='CPU'>
                <div className='Left'>
                <img src={Dost} alt='Search' className='CPU'/>
                <h5>DOST-SEI Undergraduate Scholarship</h5>
                <p><h>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</h></p>
                </div>
                <div className="Right">
                <div>
                <button className='Add-colleges'>Add to <br/> Scholarships</button>
                </div>
                <button className='view'>View</button>
                </div>
            </div>
            <div className='CPU'>
                <div className='Left'>
                <img src={Dost} alt='Search' className='CPU'/>
                <h5>DOST-SEI Undergraduate Scholarship</h5>
                <p><h>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</h></p>
                </div>
                <div className="Right">
                <div>
                <button className='Add-colleges'>Add to <br/> Scholarships</button>
                </div>
                <button className='view'>View</button>
                </div>
            </div>
            <div className='CPU'>
                <div className='Left'>
                <img src={Dost} alt='Search' className='CPU'/>
                <h5>DOST-SEI Undergraduate Scholarship</h5>
                <p><h>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</h></p>
                </div>
                <div className="Right">
                <div>
                <button className='Add-colleges'>Add to <br/> Scholarships</button>
                </div>
                <button className='view'>View</button>
                </div>
            </div>
        </div>
    );
};



export default Promotedscholarships;