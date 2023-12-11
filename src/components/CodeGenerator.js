import React, {useState, useEffect} from 'react';
import './CodeGenerator.css'; // Make sure to create this CSS file

const CodeGenerator = ({label, code, onDelete, ttl}) => {
    const [timeLeft, setTimeLeft] = useState(ttl);

    useEffect(() => {
        // Update the time left every second
        const interval = setInterval(() => {
            setTimeLeft(oldTimeLeft => oldTimeLeft - 1);
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const handleCodeClick = () => {
        navigator.clipboard.writeText(code).then(() => {
            console.log('Code copied to clipboard');
        });
    };

    const isLastQuarter = timeLeft < ttl / 4;

    return (
        <div className="code-generator">
            <div className="drag-handle">&#x2630;</div>
            {/* Drag handle (Hamburger icon) */}
            <div className={`ttl-indicator ${isLastQuarter ? 'last-quarter' : ''}`}
                 style={{width: `${(timeLeft / ttl) * 100}%`}}>
                {/* TTL Indicator */}
            </div>
            <span className="code-label">{label}</span>
            <span className={`generated-code ${isLastQuarter ? 'last-quarter' : ''}`}
                  onClick={handleCodeClick}>
                {code}
            </span>
            <button className="delete-button" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default CodeGenerator;
