import React from 'react';

function Card(props) {
    return (
        <div className={`card ${props.className}`}>
            {props.title && <div className="card-title">{props.title}</div>}
            {props.children}
        </div>
    );
}

export default Card;

