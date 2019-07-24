import React from 'react';
import AnswerList from '../Answer/AnswerList';

const MessageItem = props => {
  const { id, text, answers } = props;
  
  return (
    <div className="product-item">
      <div className="title-wrapper">
        <h2>{text}</h2>
      </div>
      <AnswerList messageId={id} answers={answers} />
    </div>
  );
};

export default MessageItem;