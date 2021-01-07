import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: { seasonText: 'Let\'s hit the beach!', iconName: 'sun' },
    winter: { seasonText: 'Burr, its chilly!', iconName: 'snowflake' }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const seasonText = season === 'winter' ? 'Burr, its chilly!' : 'Let\'s hit the beach!';
    // const icon = season === 'winter' ? 'snowflake' : 'sun'
    const { seasonText, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <i className={`icon-left-small big ${iconName} icon`}></i>
            <h1>{seasonText}</h1>
            <i className={`icon-right-small big ${iconName} icon`}></i>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
