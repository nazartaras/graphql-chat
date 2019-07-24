import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { MESSAGE_QUERY, POST_ANSWER_MUTATION } from '../../queries';

const AnswerForm = props => {
  const { messageId, toggleForm } = props;
  const [text, setText] = useState('');

  const _updateStoreAfterAddingAnswer = (store, newAnswer, messageId) => {
    const orderBy = 'createdAt_DESC';
    const data = store.readQuery({
      query: MESSAGE_QUERY,
      variables: {
        orderBy
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
        <textarea
          onChange={e => setText(e.target.value)}
          placeholder="Answer text"
          autoFocus
          value={text}
          cols="25"
        />
      </div>
      <Mutation
        mutation={POST_ANSWER_MUTATION}
        variables={{ messageId, text }}
        update={(store, { data: { postAnswer } }) => {
          _updateStoreAfterAddingAnswer(store, postAnswer, messageId)
        }}
      >
        {messageMutation =>
          <button onClick={messageMutation}>Answer</button>
        }
      </Mutation>
    </div>
  );
};

export default AnswerForm;