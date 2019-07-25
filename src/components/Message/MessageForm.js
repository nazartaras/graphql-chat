import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { POST_MESSAGE_MUTATION, MESSAGE_QUERY } from '../../queries';
import { Button, Input } from 'semantic-ui-react';

const MessageForm = props => {
  const [text, setText] = useState('');

  const _updateStoreAfterAddingMessage = (store, newMessage) => {
    const orderBy = 'createdAt_DESC';
    let data = store.readQuery({
      query: MESSAGE_QUERY,
      variables: {
        orderBy,
        skip:0,
        first:5
      }
    }); 
    data.messages.messageList.unshift(newMessage);

    store.writeQuery({
      query: MESSAGE_QUERY,
      data
    });
  };
  
  return (
    <div className='message-form'>
        <Input type="text" placeholder="Text" value={text} onChange={e => setText(e.target.value)} />

      <Mutation
        mutation={POST_MESSAGE_MUTATION}
        variables={{ text, likes:0, dislikes:0}}
        update={(store, { data: { postMessage } }) => {
          _updateStoreAfterAddingMessage(store, postMessage);
        }}
      >
        {messageMutation =>
          <Button primary icon='send' style={{marginLeft:'1em'}}content="Send" onClick={messageMutation}></Button>
        }
      </Mutation>
    </div>
  );
};

export default MessageForm;