import React, { useContext} from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';
import Timeline from '../Timeline/Timeline';

function Achievement() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{backgroundColor: theme.secondary}}>
                <div className="achievement-body">
                    <h1 style={{color: theme.primary}}>Professional Experience</h1>
                    <h4 style={{color:theme.tertiary}}>{achievementData.bio}</h4>
                </div>
                <Timeline/>
                {/* <div className="achievement-cards">
                    {achievementData.achievements.map(achieve => ( 
                        <AchievementCard 
                        id={achieve.id}
                        company={achieve.company}
                        role={achieve.role}
                        timeLine={achieve.timeLine}
                        details={achieve.details}
                        image={achieve.image}/>
                    ))}
                </div> */}
            </div>
            )}
        </>
    )
}

export default Achievement
