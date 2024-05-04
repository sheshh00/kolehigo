import React from 'react';
import { Link } from 'react-router-dom';
import './Colleges.css';
import '../../../App.css';
import SideBar from "../../../Components/Dashboard/VerticalContainer.jsx"


import college1 from '../../../DashboardAssets/CollegesAssets/college1.png';
import kolehigo from '../../../DashboardAssets/CollegesAssets/Kolehigo.png'
import CPU from '../../../DashboardAssets/CollegesAssets/CPU.png'

import SearchBar from '../Colleges/SearchBar.jsx';
import PromotedColleges from '../Colleges/PromotedColleges.jsx';
import CollegeList from '../Colleges/CollegeList.jsx';
const Colleges = () => {
    return (
        <div>
            <div className='Grid0'>
                <div className='VerticalContainer'>
                    <SideBar />
                 </div>
                 <div className='HorizontalContainer'>
                    <img src={kolehigo} alt='kolehigologo' className='kolehigo'/>
                    {<SearchBar />}
                    <img src={college1} alt="college1" className='college1'/>
                </div>
                <div className ='HorizontalContainer1'>
                    <h6>Promoted Colleges</h6>
                    {<PromotedColleges />}
                </div>
                <div className = "HorizontalContainer2"> 
                    {<CollegeList />}
                </div>
                {/* 
                <div className='grid'>
                    <div style={{height: '100px'}}>
                    <div className='CPU1'>
                                <img src={CPU} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                                <h5>Central Phillippine Unviersity</h5>
                                <p><h6>BS in Software Engineering  </h6></p>
                                <button className='Add-colleges'><h5>Add to colleges</h5></button>
                                <button className='view'><h5>View</h5></button>
                        </div>
                        <div className='San-Agustin1'>
                            <img src={CPU} style={{ width: '30px', height: '30px', marginRight: '10px' }}/>
                                <h5>San Agustin</h5>
                                <p><h6>BS in Computer Engineering</h6></p>
                                <button className='Add-colleges'><h5>Add to colleges</h5></button>
                                <button className='view'><h5>View</h5></button>
                        </div>
                    </div>
                 </div> */}
            </div>
        </div>
    );
};

export default Colleges;