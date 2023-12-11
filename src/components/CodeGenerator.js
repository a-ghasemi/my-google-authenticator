import React from 'react';

const CodeGenerator = ({ label, code, onCopy, onDelete }) => {
    const handleCodeClick = () => {
        navigator.clipboard.writeText(code).then(() => {
            console.log('Code copied to clipboard');
        });
    };

    return (
        <div className="code-generator" onClick={handleCodeClick}>
            <span className="code-label">{label}</span>
            <span className="generated-code" onClick={onCopy}>{code}</span>
            <button className="delete-button" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default CodeGenerator;
