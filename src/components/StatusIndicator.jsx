import React from 'react';

const StatusIndicator = ({ status }) => {
    const getColor = () => {
        switch (status) {
            case 'CREATED':
                return 'blue';
            case 'SAILED':
                return 'green';
            case 'ZABRAKOVAN':
                return 'red';
            default:
                return 'gray';
        }
    };

    return (
        <span style={{ color: getColor() }}>{status}</span>
    );
};

export default StatusIndicator;