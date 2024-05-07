import React, { useState } from 'react';

const Education = () => {
    const [highSchoolExpanded, setHighSchoolExpanded] = useState(false);
    const [gradesExpanded, setGradesExpanded] = useState(false);
    const [awardsExpanded, setAwardsExpanded] = useState(false);
    const [clubsExpanded, setClubsExpanded] = useState(false);
    const [curriculumExpanded, setCurriculumExpanded] = useState(false);

    const toggleHighSchool = () => {
        setHighSchoolExpanded(!highSchoolExpanded);
    };

    const toggleGrades = () => {
        setGradesExpanded(!gradesExpanded);
    };

    const toggleAwards = () => {
        setAwardsExpanded(!awardsExpanded);
    };

    const toggleClubs = () => {
        setClubsExpanded(!clubsExpanded);
    };

    const toggleCurriculum = () => {
        setCurriculumExpanded(!curriculumExpanded);
    };

    return (
        <div className="Education">
            <div className="dropdown-container1">
                <button className="dropdown-btn" onClick={toggleHighSchool}>
                    Current or Recent High School
                </button>
                {highSchoolExpanded && (
                    <div className="dropdown-content">
                        COOL HIGHSCHOOL
                    </div>
                )}
            </div>

            <div className="dropdown-container2">
                <button className="dropdown-btn" onClick={toggleGrades}>
                    Grades
                </button>
                {gradesExpanded && (
                    <div className="dropdown-content">
                        Nice Grades
                    </div>
                )}
            </div>

            <div className="dropdown-container3">
                <button className="dropdown-btn" onClick={toggleAwards}>
                    Awards
                </button>
                {awardsExpanded && (
                    <div className="dropdown-content">
                        Cool Awards
                    </div>
                )}
            </div>

            <div className="dropdown-container4">
                <button className="dropdown-btn" onClick={toggleClubs}>
                    Clubs
                </button>
                {clubsExpanded && (
                    <div className="dropdown-content">
                        Cool Clubs
                    </div>
                )}
            </div>

            <div className="dropdown-container5">
                <button className="dropdown-btn" onClick={toggleCurriculum}>
                    Curriculum
                </button>
                {curriculumExpanded && (
                    <div className="dropdown-content">
                        WHat a Curriculumn
                    </div>
                )}
            </div>
        </div>
    );
};

export default Education;