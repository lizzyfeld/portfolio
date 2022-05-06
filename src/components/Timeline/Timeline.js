import React from 'react';
import { Chrono } from "react-chrono";

const items = [{
    title: "May 1940",
    contentTitle: "Dunkirk",
    contentText:"Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    contentDetailedText: "On 10 May 1940, Hitler began his long-awaited offensive in the west...",
  },];


function Timeline() {
    return(
        <div style={{ width: "100%", height: "90vh" }}>
        <Chrono
          items={items}
          mode="VERTICAL"
          slideShow
          slideItemDuration={4000}
          cardHeight={150}
        />
      </div>
    );
}
export default Timeline;