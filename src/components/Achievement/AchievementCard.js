import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'

function AchievementCard({ id, company, role, timeLine, details, image }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    {/* <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" /> */}
                    <img src={image} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{timeLine}</h6>
                    <h4 style={{color: theme.tertiary}}>{role}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                    <h6 style={{color: theme.tertiary80}}>{details}</h6>
                </div>
            </div>
        </Fade>        
    )
}

export default AchievementCard
