import React from 'react';
import AnswerList from '../Answer/AnswerList';
import MessageReaction from'../Message/MessageReaction';
import { Button } from 'semantic-ui-react';

const MessageItem = props => {
  const { id, text, answers, likes, dislikes } = props;
  
  return (
    <div className="message-item">
      <div className="message-code">#{id.substring(id.length-4,id.length-1)}</div>
      <div className="message-body">
      <div className="text-wrapper">
        <p>{text}</p>
      </div>
      <MessageReaction messageId={id} likes={likes} dislikes={dislikes}> </MessageReaction>  
      <AnswerList messageId={id} answers={answers} />
      </div>
    </div>
  );
};

export default MessageItem;