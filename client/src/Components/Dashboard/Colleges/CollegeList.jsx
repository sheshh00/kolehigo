// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import CPU from '../../../DashboardAssets/CollegesAssets/CPU.png'



// const CollegeList = () => {
//     //const = 
//     //const =
//     return(
//         <div className="CollegeList">
//             <div className='Tabs'>
//                 <button className='Prev'>Prev</button>
//                 <button className='Next'>Next</button>
//             </div>
//             <div className='CPU'>
//                 <div className='Left'>
//                     <img src={CPU} alt='Search' className='CPU1'/>
//                     <h5>Central Phillippine University</h5>
//                     <p>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</p>
//                 </div>
//                 <div className='Right'>
//                     <button className='Add-colleges'>Add to Colleges</button>
//                     <Link to={'/CollegeView'}><button className='view'>View</button></Link>
//                 </div>
//             </div>
//             <div className='USA'>
//                 <div className='Left'>
//                     <img src={CPU} alt='Search' className='CPU1'/>
//                     <h5>University of San Agustin</h5>
//                     <p>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</p>
//                 </div>
//                 <div className='Right'>
//                     <button className='Add-colleges'>Add to Colleges</button>
//                     <button className='view'>View</button>
//                 </div>
//             </div>
//             <div className='ISATU'>
//                 <div className='Left'>
//                     <img src={CPU} alt='Search' className='CPU1'/>
//                     <h5>Iloilo Science and Technology</h5>
//                     <p>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</p>
//                 </div>
//                 <div className='Right'>
//                     <button className='Add-colleges'>Add to Colleges</button>
//                     <button className='view'>View</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CollegeList;

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../Colleges/Colleges.scss';
import { useColleges } from '../Colleges/CollegeContext.jsx';
import { Link } from 'react-router-dom';

const CollegeList = () => {
    const [colleges, setColleges] = useState([]);
    const { addCollege } = useColleges();
    const [addedColleges, setAddedColleges] = useState({});
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:3010/colleges')
            .then(response => {
                setColleges(response.data);
                const initAdded = response.data.reduce((acc, college) => ({
                    ...acc,
                    [college.id]: false
                }), {});
                setAddedColleges(initAdded);
            })
            .catch(error => {
                console.error('Error fetching colleges:', error);
            });
    }, []);

    const handleAddCollege = college => {
        console.log("Before update:", addedColleges);
        if (!addedColleges[college.id]) {
            addCollege(college);
            const updatedAdded = { ...addedColleges, [college.id]: true };
            setAddedColleges(updatedAdded);
            setMessage(`Added ${college.name} to your colleges.`);
        } else {
            setMessage(`You have already added ${college.name}.`);
        }
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
    };

    return (
        <div className="college-list">
            {showMessage && <div className="popup-message">{message}</div>}
            {colleges.map((colleges, index) => (
                <div key={index} className="college-item">
                    <img src={colleges.logo} alt={colleges.name} className="college-logo" />
                    <div className="college-details">
                        <h5>{colleges.name}</h5>
                        <p>{colleges.address}</p>
                    </div>
                    <div className="buttons-container">
                        <button 
                            className={addedColleges[colleges.id] ? "added-to-colleges" : "add-to-colleges"}
                            onClick={() => handleAddCollege(colleges)}
                            disabled={addedColleges[colleges.id]}
                        >
                            {addedColleges[colleges.id] ? "College Added" : "Add to Colleges"}
                        </button>
                        {colleges.name === "Central Philippine University" && (
                            <Link to={'/CollegeView'}>  
                            <button className="view">View</button>
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CollegeList;