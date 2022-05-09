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
                <div>
                <div className="achievement" id="achievement" style={{backgroundColor: theme.secondary}}>
                    <div className="titleContainer">
                        <h1 className="achievement-body" style={{color: theme.primary}}>Professional Experience</h1>
                    </div>
                    <Timeline/>
                </div>
                </div>
            )}
        </>
    )
}

export default Achievement
