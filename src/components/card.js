import React from 'react';
import './Card.css';

function Card(props) {
    return(
        <div className="Card" b>
            <h3 className='title'>
                {props.heading} 
            </h3>
            <p>
                {props.body}
            </p>
        </div>
    )

}

export default Card