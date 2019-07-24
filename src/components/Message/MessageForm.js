import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { POST_MESSAGE_MUTATION, MESSAGE_QUERY } from '../../queries';

const MessageForm = props => {
  const [text, setText] = useState('');

  const _updateStoreAfterAddingMessage = (store, newMessage) => {
    const orderBy = 'createdAt_DESC';
   
    const data = store.readQuery({
      query: MESSAGE_QUERY,
      variables: {
        orderBy
      }
    });
    data.messages.messageList.push(newMessage);
    store.writeQuery({
      query: MESSAGE_QUERY,
      data,
    });
  };

  return (
    <div className="form-wrapper">
      <div className="input-wrapper">
        <input type="text" placeholder="Text" value={text} onChange={e => setText(e.target.value)} />
      </div>

      <Mutation
        mutation={POST_MESSAGE_MUTATION}
        variables={{ text }}
        update={(store, { data: { postMessage } }) => {
          _updateStoreAfterAddingMessage(store, postMessage);
        }}
      >
        {messageMutation =>
          <button className="send-button" onClick={messageMutation}>Send</button>
        }
      </Mutation>
    </div>
  );
};

export default MessageForm;