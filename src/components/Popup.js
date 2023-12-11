import React from 'react';
import {deleteGenerator} from "../utils/storage";

const Popup = ({ title, onDelete }) => {
    const handleDelete = () => {
        deleteGenerator(generatorId); // from storage.js
    };

    return (
        <div className="popup">
            <h2>{title}</h2>
            <button onClick={handleDelete}>Delete Generator</button>
        </div>
    );
};

export default Popup;
