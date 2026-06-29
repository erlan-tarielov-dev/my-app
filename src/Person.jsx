import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h2>Name: {props.a}</h2>
            <h3>Age: {props.b}</h3>
            CARS
            <h2>Car name: {props.t}</h2>
            <h3>Car model: {props.m}</h3>
            <h4>Car number: {props.n}</h4>
        </div>
    );
};

export default Person;