import React from 'react';

const TitreSection = ( {titre} ) => {
    return (
        <div>
            <hr></hr>
            <p className="titreSection">{ titre }</p>
        </div>
    );
};

export default TitreSection;