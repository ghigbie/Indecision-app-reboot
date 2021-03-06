import React from 'react';

import Option from './../Option/Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="btn button button--link"
                    onClick={props.handleDeletionOption}>Remove All</button>
        </div>
        {props.options.length === 0 && <p> Please add an option to get started! </p>}
            
        {
            props.options.map((option, index) => (
                <Option key={option}
                        optionText={option}
                        count={index +1}
                        handleDeletionOption={props.handleDeletionOption} />))
        }
    </div>
);  

export default Options;