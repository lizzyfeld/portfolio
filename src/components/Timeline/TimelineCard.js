import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import './TimelineCard.css';

function TimelineCard({ id, company, role, timeLine, details, image }) {

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
        <div key={id} className={`timeline-card ${classes.timelineCard}`} >
            <div className="education-details">
                <h6 style={{color: theme.primary}}>{timeLine}</h6>
                <h4 style={{color: theme.tertiary, fontSize: '25px'}}>{role}</h4>
                <h5 style={{color: theme.tertiary80}}>{company}</h5>
                <h6 style={{color: theme.tertiary80}}>{details}</h6>
            </div>
            <div className="educard-img" style={{backgroundColor: theme.primary}}>
                <img src={image} alt="" />
            </div>
        </div>      
    )
}

export default TimelineCard