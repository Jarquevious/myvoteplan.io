import React from 'react';


function Form(props) {
    return(
        <div className="Form" b>
            <h3 className='form'>
                {props.heading} 
            </h3>
            <p>
                {props.body}
            </p>
        </div>
    )

}

export default Form