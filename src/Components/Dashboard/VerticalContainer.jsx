
import { Link } from 'react-router-dom'
import './Dashboard.css'
import '../../App.css'
import React from 'react'

//icons for Dashboard
import Koheligo from '../../DashboardAssets/KolehiGO_ICON.png'
import Colleges from '../../DashboardAssets/Colleges_Button_(1).png'
import Profile from '../../DashboardAssets/Profile_Button_(1).png'
import Scholarships from '../../DashboardAssets/Scholarship_Button_(1).png'

const VerticalContainer = () => {
    return (
         <div>
            <div className='VerticalContainer'>
                <img src={Koheligo} alt="KoheliGOicon"/>
                <Link to={'/Dashboard'}><button className="Profile"><img src={Profile} alt="Profileicon"/> Profile </button></Link>
                <Link to={'/colleges'}>
                    <button className="Colleges">
                        <img src={Colleges} alt="Collegeicon"/>
                        Colleges
                    </button></Link>
                <button className="Scholarships"><img src={Scholarships} alt="Scholarshipsicon"/>Scholarships</button>
            </div>
        </div>
    )
}

export default VerticalContainer