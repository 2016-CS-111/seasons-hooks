import React from 'react';
import ReactDOM from 'react-dom';

import geoLocation from './geoLocation';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
    const [lat, errorMessage] = geoLocation();
    

    const renderContent = () => {
        if (lat && !errorMessage) {
            return <SeasonDisplay lat={lat} />;
        }

        if (errorMessage && !lat) {
            return <div>Error: {errorMessage}</div>;
        }

        return (
            <Spinner message="Please don't use your brain and allow location access" />     
        );
    };

    console.log(lat, errorMessage);
    return (
        <div>
            {renderContent()}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));