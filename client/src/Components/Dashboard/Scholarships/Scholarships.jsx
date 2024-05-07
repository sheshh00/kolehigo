import React from 'react';
import { Link } from 'react-router-dom';
import './Scholarships.css';
import '../../../App.css';
import SideBar from "../../../Components/Dashboard/VerticalContainer.jsx"

import college1 from '../../../DashboardAssets/CollegesAssets/college1.png';
import kolehigo from '../../../DashboardAssets/CollegesAssets/Kolehigo.png'

import SearchBar1 from '../Scholarships/SearchBar1.jsx';
import PromotedScholarship from '../Scholarships/Promotedscholarships.jsx';
import ScholarshipList from '../Scholarships/ScolarshipList.jsx';

const Scholarships = () => {
    return (
        <div>
        <div className='Grid3'>
            <div className='VerticalContainer'>
                <SideBar />
             </div>
             <div className='HorizontalContainer'>
                <img src={kolehigo} alt='kolehigologo' className='kolehigo'/>
                <h1>Apply for the Scholarships</h1>
                <img src={college1} alt="college1" className='college1'/>
            </div>
            <div className ='HorizontalContainer1'>
                {<SearchBar1 />}
                <h6>Promoted Scholarships</h6>
                {<PromotedScholarship />}
            </div>
            <div className = "HorizontalContainer2"> 
                {<ScholarshipList />}
            </div>
        </div>
    </div>
    );
};


export default Scholarships;