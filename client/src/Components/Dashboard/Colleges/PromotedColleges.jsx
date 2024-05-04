// import React, { useState } from 'react';
// import CPU from '../../../DashboardAssets/CollegesAssets/CPU.png'


// const PromotedColleges = () => {
//     return(
//         <div className='Promoted-colleges'>
//             <div className='CPU'>
//                 <div className='Left'>
//                 <img src={CPU} alt='Search' className='CPU'/>
//                 <h5>Central Phillippine University</h5>
//                 <p><h>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</h></p>
//                 </div>
//                 <div className="Right">
//                 <div>
//                 <button className='Add-colleges'>Add to Colleges</button>
//                 </div>
//                 <button className='view'>View</button>
//                 </div>
//             </div>
//             <div className='CPU'>
//                 <div className='Left'>
//                 <img src={CPU} alt='Search' className='CPU'/>
//                 <h5>University of San Agustin</h5>
//                 <p><h>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</h></p>
//                 </div>
//                 <div className="Right">
//                 <div>
//                 <button className='Add-colleges'>Add to Colleges</button>
//                 </div>
//                 <button className='view'>View</button>
//                 </div>
//             </div>
//             <div className='CPU'>
//                 <div className='Left'>
//                 <img src={CPU} alt='Search' className='CPU'/>
//                 <h5>Iloilo Science and Technology</h5>
//                 <p><h>CPU Research and Development <br/> Building, Jaro, Iloilo City, 5000 Iloilo</h></p>
//                 </div>
//                 <div className="Right">
//                 <div>
//                 <button className='Add-colleges'>Add to Colleges</button>
//                 </div>
//                 <button className='view'>View</button>
//                 </div>
//             </div>
//         </div>
//     );
// };



// export default PromotedColleges;

import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const PromotedColleges = ({ addToColleges }) => { // Accept addToColleges function as a prop
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3010/colleges')
      .then(response => {
        setColleges(response.data);
      })
      .catch(error => {
        console.error('Error fetching colleges:', error);
      });
  }, []);

  const handleAddToColleges = (college) => {
    addToColleges(college); // Call the addToColleges function with the selected college
  };

  return (
    <div className='Promoted-colleges'>
      {colleges.map((college) => (
        <div className='college' key={college.id}>
          <div className='Left'>
            <img src={college.logo} alt={college.name} className='logo'/>
            <h5>{college.name}</h5>
            <p>{college.address}</p>
          </div>
          <div className="Right">
            {/* Pass the college object to the handleAddToColleges function */}
            <button className='Add-colleges' onClick={() => handleAddToColleges(college)}>Add to Colleges</button>
            <button className='view'>View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromotedColleges;