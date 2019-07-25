import React from 'react';
import { Mutation } from 'react-apollo';
import { Label, Icon, Button } from 'semantic-ui-react';
import { UPDATE_MESSAGE_MUTATION, MESSAGE_QUERY } from '../../queries'
const MessageReaction = props=> {
    const _updateStoreAfterAddingLike = (store, newMessage) => {
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
        mutation={UPDATE_MESSAGE_MUTATION}
        variables={{ messageId:props.messageId, likes:props.likes+1}}
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
        mutation={UPDATE_MESSAGE_MUTATION}
        variables={{ messageId:props.messageId, dislikes:props.dislikes+1}}
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
export default MessageReaction; 