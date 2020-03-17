import React from 'react'

const userOutput = (props) => {
    const userOutputStyle = {
        width: '60%',
        backgroundColor: 'yellow',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div className="UserOutput" style={userOutputStyle}>
            <p>This is an output component -1 par</p>
            <p>Username: {props.userName}</p>
        </div>
    )

}

export default userOutput