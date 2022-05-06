import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'
import stanford from '../../assets/images/stanford.jpg'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            GPA = {edu.GPA}
                            details = {edu.details}
                        />
                    ))}
                </div>
                <div className="education-image">
                    {/* <img src={theme.eduimg} alt=""/> */}
                    <img src='https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/SU_SealColor_web3.png' alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education
