
import { Link } from 'react-router-dom'
import './Dashboard.css'
import '../../App.css'
import React, { useState } from 'react';
import SideBar from "./VerticalContainer";
import ProfileName from "./ProfileName";
//icons for Dashboard

//icons for Profile
import Profile1 from '../../DashboardAssets/ProfileAssets/Profile_Icon.png'
import EditIcon from '../../DashboardAssets/ProfileAssets/EditProfileIcon.png'

//profile tab is default..//applicant information is default



const Dashboard = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [updatedName, setUpdatedName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleMiddleNameChange = (e) => {
        setMiddleName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (firstName && middleName && lastName) {
            setUpdatedName(`${firstName} ${middleName} ${lastName}`);
            setErrorMessage('');
        } else {
            setErrorMessage('Please complete all fields.');
        }
    };
    
    return (
        <div>
            <div className='Grid'>
                <div className='VerticalContainer'>
                    <SideBar/>
                 </div>
                <div className="HorizontalContainer">
                    <ProfileName updatedName={updatedName}/>
                    <div className="MiniTabs">
                        <Link to={'/Dashboard'}><button className="ApplicantInfo">Applicant's Information</button></Link>
                        <Link to={'/LogInCredentials'}><button className="LogCred">Log In Credentials</button></Link>
                        <button className="EduBack">Educational Background</button>
                        <Link to={'/MyColleges'}><button className="MyColleges">My Colleges</button></Link>
                        <button className="InterSchol">Interested Scholarships</button>
                        <button className="DocUplo">Documents Uploaded</button>
                    </div>
                    <div className ="ProfilePrompt">
                        <h1>Profile</h1>
                        <p>Update your photo and personal details here</p>
                    </div>
                </div>
                <div className="HorizontalContainerBOTTOM">
                    <form  onSubmit={handleSubmit}>
                        <div ClassName="left">
                            <input type="text" id='FirstName' placeholder='First Name'  autocomplete="off" onChange={handleFirstNameChange}/>
                            <input type="text" id='MiddleName' placeholder='Middle Name'  autocomplete="off" onChange={handleMiddleNameChange}/>
                            <input type="text" id='LastName' placeholder='Last Name'  autocomplete="off"  onChange={handleLastNameChange}/>
                            <input type="text" id='Suffix' placeholder='Suffix'  autocomplete="off"/>
                        </div>
                        <div ClassName="right">
                            <label htmlFor="DateofBirth" id="DateofBirthLabel">Birthdate:</label>
                            <input type="date" id='DateofBirth' placeholder='Date of Birth'  autocomplete="off"/>
                            <input type="text" id='Address' placeholder='Address'  autocomplete="off"/>
                            <button type="submit">Update</button>
                            <p className="error-message">{errorMessage}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dashboard