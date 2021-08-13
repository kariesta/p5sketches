import React from 'react';

//TODO use link instead?
function DescriptionCard(props) {
    return (
        <div className={"descriptionCard"}>
            <h1>{props.description}</h1>
            <p>{props.categories.join(', ')}</p>
        </div>);
}

export default DescriptionCard;