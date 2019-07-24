import React from 'react';

const AnswerItem = props => {
    const { text } = props;
    return (
        <p>{text}</p>
    );
};

export default AnswerItem;