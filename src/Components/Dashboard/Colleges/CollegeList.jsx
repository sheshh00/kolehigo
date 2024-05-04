import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../Colleges/Colleges.scss';
import { useColleges } from '../Colleges/CollegeContext.jsx';

const CollegeList = () => {
    const [colleges, setColleges] = useState([]);
    const { addCollege } = useColleges();
    const [addedColleges, setAddedColleges] = useState({});
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [filter, setFilter] = useState([]);
    const [areaFilter, setAreaFilter] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        fetchColleges();
    }, []);

    const fetchColleges = () => {
        const queryParams = new URLSearchParams();
        if (filter.length > 0) queryParams.append('type', filter.join(','));
        if (areaFilter.length > 0) queryParams.append('area', areaFilter.join(','));
    
        Axios.get(`http://localhost:3010/colleges?${queryParams.toString()}`).then(response => {
            setColleges(response.data);
        }).catch(error => {
            console.error('Error fetching colleges:', error);
        });
    };

    const applyFilters = () => {
        fetchColleges();
    };

    const toggleFilterVisibility = () => {
        setShowFilters(!showFilters);
    };

    const handleCheckboxChange = (filterType, value) => {
        const update = prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        if (filterType === 'type') setFilter(update);
        else if (filterType === 'area') setAreaFilter(update);
    };

    const handleAddCollege = college => {
        if (!addedColleges[college.id]) {
            addCollege(college);
            const updatedAdded = { ...addedColleges, [college.id]: true };
            setAddedColleges(updatedAdded);
            setMessage(`Added ${college.name} to your colleges.`);
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
        } else {
            setMessage(`You have already added ${college.name}.`);
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
        }
    };

    return (
        <div className="college-list">
            <button onClick={toggleFilterVisibility} className="toggle-filters-button">
                {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            {showFilters && (
                <div className='label-container'>
                    <div>
                        <label>
                            <input type="checkbox" value="Private" checked={filter.includes('Private')}
                               onChange={(e) => handleCheckboxChange('type', 'Private')} /> Private
                        </label>
                        <label>
                            <input type="checkbox" value="Public" checked={filter.includes('Public')}
                               onChange={(e) => handleCheckboxChange('type', 'Public')} /> Public
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" value="Urban" checked={areaFilter.includes('Urban')}
                               onChange={(e) => handleCheckboxChange('area', 'Urban')} /> Urban
                        </label>
                        <label>
                            <input type="checkbox" value="Rural" checked={areaFilter.includes('Rural')}
                               onChange={(e) => handleCheckboxChange('area', 'Rural')} /> Rural
                        </label>
                    </div>
                    <button onClick={applyFilters} className='Apply-filters'>Apply Filter</button>
                </div>
            )}
            {showMessage && <div className="popup-message">{message}</div>}
            {colleges.map((college) => (
                <div key={college.id} className="college-item">
                    <img src={college.logo} alt={college.name} className="college-logo" />
                    <div className="college-details">
                        <h5>{college.name}</h5>
                        <p>{college.address}</p>
                        <button 
                            className={addedColleges[college.id] ? "added-to-colleges" : "add-to-colleges"}
                            onClick={() => handleAddCollege(college)}
                            disabled={addedColleges[college.id]}
                        >
                            {addedColleges[college.id] ? "College Added" : "Add to Colleges"}
                        </button>
                        <button className="view">View</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CollegeList;


