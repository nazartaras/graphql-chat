import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { MESSAGE_QUERY, POST_ANSWER_MUTATION } from '../../queries';
import { Button, Input } from 'semantic-ui-react';

const AnswerForm = props => {
  const { messageId, toggleForm } = props;
  const [text, setText] = useState('');

  const _updateStoreAfterAddingAnswer = (store, newAnswer, messageId) => {
    const orderBy = 'createdAt_DESC';
    const data = store.readQuery({
      query: MESSAGE_QUERY,
      variables: {
        orderBy,
        skip:0,
        first:5
      }
    });
    const answeredMessage = data.messages.messageList.find(
      item => item.id === messageId
    );
    answeredMessage.answers.push(newAnswer);
    store.writeQuery({ query: MESSAGE_QUERY, data });
    toggleForm(false);
  };

  return (
    <div className="form-wrapper">
      <div className="input-wrapper">
        <Input
          onChange={e => setText(e.target.value)}
          placeholder="Answer text"
          autoFocus
          value={text}
          style={{margin:'.1em'}}
          cols="25"
        />
      </div>
      <Mutation
        mutation={POST_ANSWER_MUTATION}
        variables={{ messageId, text, dislikes:0, likes:0 }}
        update={(store, { data: { postAnswer } }) => {
          _updateStoreAfterAddingAnswer(store, postAnswer, messageId)
        }}
      >
        {messageMutation =>
          <Button color='green' onClick={messageMutation}>Answer</Button>
        }
      </Mutation>
    </div>
  );
};

export default AnswerForm;