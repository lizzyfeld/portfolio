import React from 'react';
import { Chrono } from "react-chrono";
import { timelineData } from '../../data/timelineData';
import { blueThemeLight } from '../../theme/theme';
import TimelineCard from './TimelineCard';

function divCardsArray(){
    if (timelineData.length > 0) {
        console.log(timelineData[0]);
        return (
                timelineData.map(achieve => ( 
                    <div className="achievement-cards" key={achieve.id} >
                        <TimelineCard 
                            id={achieve.id}
                            key={achieve.id}
                            company={achieve.company}
                            role={achieve.role}
                            timeLine={achieve.timeLine}
                            details={achieve.details}
                            image={achieve.image}/>
                    </div>
                ))
        );
    } 
    else return [];
}

function Timeline() {
    var timelineDivs = divCardsArray();
    return(
        <div style={{ width: "100%", height: 'fit-content' }}>
        <Chrono
        //   items={timelineData}
          mode="VERTICAL_ALTERNATING"
          slideItemDuration={4000}
          cardHeight={'fit-content'}
          cardWidth={'fit-content'}
          theme={{
            primary: blueThemeLight.primary,
            secondary: blueThemeLight.primary50,
            cardBgColor: '#eaeaea',
            cardForeColor: blueThemeLight.tertiary,
            titleColor: blueThemeLight.primary600,
          }}
          hideControls={true}
          useReadMore={false}
          scrollable={{ scrollbar: false }}
        >
        {timelineDivs}
        </Chrono>
      </div>
    );
}
export default Timeline;