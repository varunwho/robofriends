import React, { Component } from 'react';
import './Hello.css';

const Hello = (props) => {
    return (
        <div className="tc f1">
            <h1>Hello World</h1>
            <p>{ props.greeting }</p>
        </div>
    )
}

export default Hello;