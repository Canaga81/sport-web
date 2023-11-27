import React from 'react';
import Values from '../Values';

const SectionHeader = ( { icon, title, className } ) => {
    return (
        <div className={`section__head ${className}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
    );
};

export default SectionHeader;