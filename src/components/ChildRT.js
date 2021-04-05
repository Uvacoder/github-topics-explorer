import React from "react";

// Child component to display all related topics and stars with respect to children
const ChildRT = ({topicState, starsState}) => {
    let topics = topicState;
    let stars = starsState;
    return (
        <h4>
            <ul>{topics.map( (topic, i) => 
                <li key={i}> {topic} <span className='stars'>Stars:</span> {stars[i]} </li> 
                )}
            </ul>
        </h4>
    )
}

export default ChildRT;