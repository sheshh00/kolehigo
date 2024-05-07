
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Compare.css';
import college1 from '../../../../DashboardAssets/CollegesAssets/college1.png';
import kolehigo from '../../../../DashboardAssets/CollegesAssets/Kolehigo.png';
import CPU from '../../../../DashboardAssets/CollegesAssets/CPU.png';
import SearchBar from '../../Colleges/SearchBar.jsx';
import SideBar from "../../../Dashboard/VerticalContainer.jsx";

const Compare = () => {
    return (
        <div>
            <div className='Grid10'>
                <div className='VerticalContainer'>
                    <SideBar />
                 </div>
                 <div className='HorizontalContainer'>
                    <img src={kolehigo} alt='kolehigologo' className='kolehigo'/>
                    {<SearchBar />}
                    <img src={college1} alt="college1" className='college1'/>
                </div>
                <div className ='HorizontalContainer1'>
                    <h6  className="Title">Comparison</h6>
                    <div className="Uni1">
                        <h6 className="School1">Central Philippine University</h6>
                    </div>
                    <div className="Uni2">
                        <h6 className="School2">University of San Agustin</h6>
                    </div>
                </div>
                <div className='fill'>
                </div>
                <div className = "HorizontalContainer2"> 
                    <div className='Left'>
                        <li>Type of Institution:</li>
                        <li>Programs Offered:</li>
                        <li>Tuition and Other Fees:</li>
                        <li>Campus Facilities:</li>
                        <li>Location and Accessibility:</li>
                        <li>Extracurricular Activities</li>
                        <li>Graduate Success:</li>
                        <li>Admission Requirements:</li>
                    </div>
                    <div className='Right'></div>
                </div>
            </div>
        </div>
    );
};

export default Compare;