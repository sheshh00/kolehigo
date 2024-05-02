import React from 'react';
import { Link } from 'react-router-dom';
import './MyColleges.css'; // Ensure this CSS file includes the updated styles
import '../../../../App.css';
import SideBar from '../../../../Components/Dashboard/VerticalContainer';
import ProfileName from '../../../../Components/Dashboard/ProfileName';
import { useColleges } from '../../../Dashboard/Colleges/CollegeContext.jsx';

// Assuming you have icons if needed or other imports

const MyColleges = () => {
    const { myColleges } = useColleges();

    return (
        <div className="Grid2">
            <div className="VerticalContainer">
                <SideBar />
            </div>
            <div className="HorizontalContainer">
                <ProfileName />
                <div className="MiniTabs">
                    <Link to='/Dashboard'><button className="ApplicantInfo">Applicant's Information</button></Link>
                    <Link to='/LogInCredentials'><button className="LogCred">Log In Credentials</button></Link>
                    <button className="EduBack">Educational Background</button>
                    <Link to='/MyColleges'><button className="MyColleges">My Colleges</button></Link>
                    <button className="InterSchol">Interested Scholarships</button>
                    <button className="DocUplo">Documents Uploaded</button>
                </div>
                <div className="ProfilePrompt">
                    <h1>My Colleges</h1>
                    <p>Tab of your chosen interested colleges to apply</p>
                </div>
            </div>
            <div className="HorizontalContainerBOTTOM">
                {myColleges.map(college => (
                    <div key={college.id} className="mycollege-item">
                        <img src={college.logo} alt={college.name} className="mycollege-logo" />
                        <div className="mycollege-details">
                            <h5>{college.name}</h5>
                            <p>{college.address}</p>
                        </div>
                        <div className="mybuttons-container">
                            <button className="myview">View Courses</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyColleges;