import React from 'react';

const CodeGenerator = ({ label, code, onCopy, onDelete }) => {
    return (
        <div className="code-generator">
            <span className="code-label">{label}</span>
            <span className="generated-code" onClick={onCopy}>{code}</span>
            <button className="delete-button" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default CodeGenerator;
