import React from 'react';

//TODO use link instead?
function DescriptionCard(props) {
    return (
        <div className={"descriptionCard"}>
            <p>{props.description}</p>
        </div>);
}

export default DescriptionCard;