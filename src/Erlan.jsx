import React from 'react';

let car = {
    brend: 'Lexus',
    model: 'LX 600',
    year: 2026,
    color: 'white',
    edition: 'Luxury'
}

const Erlan = () => {
    return (
        <div>
            <h1>{car.brend}</h1>
            <h2>{car.model}</h2>
            <h3>{car.year}</h3>
            <h4>{car.color}</h4>
            <h5>{car.edition}</h5>
            
        </div>
    );
};

export default Erlan;