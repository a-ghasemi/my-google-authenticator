import React from 'react';

const Popup = ({ title, onDelete }) => {
    return (
        <div className="popup">
            <h2>{title}</h2>
            <button onClick={onDelete}>Delete Generator</button>
        </div>
    );
};

export default Popup;
