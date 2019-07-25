import React from 'react';
import { Mutation } from 'react-apollo';
import { Label, Icon, Button } from 'semantic-ui-react';
import { UPDATE_ANSWER_MUTATION, MESSAGE_QUERY } from '../../queries'
const AnswerReaction = props=> {
    const _updateStoreAfterAddingLike = (store) => {
        const orderBy = 'createdAt_DESC';
       
        const data = store.readQuery({
          query: MESSAGE_QUERY,
          variables: {
            orderBy,
            skip:0,
            first:5
          }
        });
        store.writeQuery({
          query: MESSAGE_QUERY,
          data,
        });
      };
    return <div>
        <Mutation
        mutation={UPDATE_ANSWER_MUTATION}
        variables={{ answerId:props.answerId, likes:props.likes+1}}
        update={(store) => {
          _updateStoreAfterAddingLike(store);
        }}
      >
          {messageMutation =>
        <Label basic size="small" as="a" onClick={messageMutation}>
            <Icon name="thumbs up" />
            {props.likes}
        </Label>
    }
        </Mutation>
        <Mutation
        mutation={UPDATE_ANSWER_MUTATION}
        variables={{ answerId:props.answerId, dislikes:props.dislikes+1}}
        update={(store) => {
          _updateStoreAfterAddingLike(store);
        }}
      >
           {messageMutation =>
        <Label basic size="small" as="a" onClick={messageMutation} >
            <Icon name="thumbs down" />
            {props.dislikes}
        </Label>}
        </Mutation>
    </div>
    
}
export default AnswerReaction; 