import React from 'react';
import AnswerReaction from './AnswerReaction'
const AnswerItem = props => {
    const { text, id, likes, dislikes } = props;
    return (<div className='answer-item'>
        <span><strong>#{id.substring(id.length-4, id.length-1)}</strong></span>
        <span >  {text}</span>
        <AnswerReaction answerId={id} likes={likes} dislikes={dislikes}></AnswerReaction>
        </div>
    );
};

export default AnswerItem;