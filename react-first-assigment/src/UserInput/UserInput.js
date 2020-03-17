import React from 'react';

const userInput = (props) => {
    const usrInputStyle = {
        width: '60%',
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div style={usrInputStyle}>
            <p>This is an input component</p>
            <input
                type="text"
                onChange={props.userName}
                value={props.currentName}/>
        </div>
    )

}

export default userInput;