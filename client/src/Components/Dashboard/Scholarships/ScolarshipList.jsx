import React, { useState } from 'react';
import Dost from '../../../DashboardAssets/Dost.png'


const ScholarshipList = () => {
    return(
        <div className="ScholarshipList">
            <div className='Tabs'>
                <button className='Prev'>Prev</button>
                <button className='Next'>Next</button>
            </div>
            <div className='DOST'>
                <div className='Left'>
                    <img src={Dost} alt='Search' className='DOST1'/>
                    <h5>DOST-SEI Undergraduate Scholarship</h5>
                    <p>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</p>
                </div>
                <div className='Right'>
                    <button className='Add-colleges'>Add to Scholarships</button>
                    <button className='view'>View</button>
                </div>
            </div>
            <div className='DOST1'>
                <div className='Left'>
                    <img src={Dost} alt='Search' className='DOST1'/>
                    <h5>DOST-SEI Undergraduate Scholarship</h5>
                    <p>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</p>
                </div>
                <div className='Right'>
                    <button className='Add-colleges'>Add to Scholarships</button>
                    <button className='view'>View</button>
                </div>
            </div>
            <div className='DOST1'>
                <div className='Left'>
                    <img src={Dost} alt='Search' className='DOST1'/>
                    <h5>DOST-SEI Undergraduate Scholarship</h5>
                    <p>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</p>
                </div>
                <div className='Right'>
                    <button className='Add-colleges'>Add to Scholarships</button>
                    <button className='view'>View</button>
                </div>
            </div>
        </div>
    );
};



export default ScholarshipList;