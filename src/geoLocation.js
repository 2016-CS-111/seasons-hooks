import { useState, useEffect } from 'react';

const GeoLocation = () => {

    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchPos = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLat(position.coords.latitude),
            (err) => setErrorMessage(err.message)
        );
    };

    useEffect( () => {
        fetchPos()
    }, []);
    return [lat, errorMessage];
    // OR 
    // return { lat: lat, errorMessage: errorMessage }
};

export default GeoLocation;