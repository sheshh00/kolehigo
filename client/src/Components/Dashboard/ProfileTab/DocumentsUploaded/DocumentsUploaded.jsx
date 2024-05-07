
import React from 'react'
import { Link } from 'react-router-dom'
import './DocumentsUploaded.css'
import '../../../../App.css'
import SideBar from '../../../../Components/Dashboard/VerticalContainer'
import Submissiontab from './Submissiontab';
//icons for Dashboard

//icons for Profile
import Profile1 from '../../../../DashboardAssets/ProfileAssets/Profile_Icon.png'
//profile tab is default..//applicant information is default


const DocumentsUploaded = () => {
    return (
        <div>
           <div className='Grid7'>
                <div className='VerticalContainer'>
                    <SideBar/>
                 </div>
                <div className="HorizontalContainer">
                    <div className="NameDis">
                        <img src={Profile1} alt="Profile1"/>
                        <h1>John Patrick Orbina Gerona
                        <p>Freshman</p>
                        </h1>
                    </div>
                    <div className="MiniTabs">
                        <Link to={'/Dashboard'}><button className="ApplicantInfo">Applicant's Information</button></Link>
                        <Link to={'/LogInCredentials'}><button className="LogCred">Log In Credentials</button></Link>
                        <Link to={'/EducationalBackground'}><button className="EduBack">Educational Background</button></Link>
                        <Link to={'/MyColleges'}><button className="MyColleges">My Colleges</button></Link>
                        <button classname="InterSchol">Interested Scholarships</button>
                        <Link to={'/DocumentsUploaded'}><button className="DocUplo">Documents Uploaded</button></Link>
                    </div>
                    <div className ="ProfilePrompt">
                        <h1>Documents Uploaded</h1>
                        <p>Upload general documentary requirements needed for your applied college</p>
                    </div>
                </div>
                <div class="HorizontalContainerBOTTOM">
                    <Submissiontab/>
                </div>
            </div>
        </div>
    )
}

export default DocumentsUploaded