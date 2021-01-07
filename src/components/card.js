import React from 'react';
import './card.css';

function Card(props) {
    return(
        <div className="Card">
            <h3>
                {props.heading} 
            
            </h3>
            <p>
                {props.body}
            </p>
        </div>
    )

}

export default Card