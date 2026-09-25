import React from 'react';

const Customar = ({customar}) => {
    const {id,problemHeading,shortDescription,date,status,priority,name}= customar
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Customar;