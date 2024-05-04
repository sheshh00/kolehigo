import React, { useState, useEffect } from 'react';
import Axios from 'axios'; // Ensure Axios is imported
import CPU from '../../../DashboardAssets/CollegesAssets/CPU.png';

const PromotedColleges = () => {
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

  return (
    <div className='Promoted-colleges'>
      {colleges.map((college) => (
        <div className='CPU' key={college.id}>
          <div className='Left'>
            {/* Assuming `college.logo` is the path to the image */}
            <img src={college.logo || CPU} alt={college.name} className='CPU-logo'/>
            <h5>{college.name}</h5>
            {/* Removed the <h> tag as it is not valid HTML */}
            <p>{college.address}</p>
          </div>
          <div className="Right">
            <button className='Add-colleges'>Add to Colleges</button>
            <button className='view'>View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromotedColleges;

