import gql from 'graphql-tag';

export const MESSAGE_QUERY = gql`
  query messageQuery($orderBy: MessageOrderByInput, $filter:String, $skip: Int, $first: Int) {
    messages(orderBy: $orderBy, filter:$filter, skip:$skip, first:$first) {
      count
      messageList {
        id
        text
        likes
        dislikes
          answers {
          id
          text
          likes
          dislikes
        }
      }
    }
  }
`;

export const POST_MESSAGE_MUTATION = gql`
  mutation MessageMutation($text: String!, $likes: Int!, $dislikes:Int!) {
    postMessage(text: $text, likes: $likes, dislikes:$dislikes) {
      id
      text
      likes
      dislikes
      answers {
        id
        text
        likes
          dislikes
      }
    }
  }
`;

export const POST_ANSWER_MUTATION = gql`
  mutation MessageMutation($messageId: ID!, $text: String!,  $likes: Int!, $dislikes:Int!) {
    postAnswer(messageId: $messageId, text: $text, likes: $likes, dislikes:$dislikes) {
      id
      text
      likes
      dislikes
    }
  }
`;

export const NEW_MESSAGES_SUBSCRIPTION = gql`
  subscription {
    newMessage {
      id
      text
      likes
      dislikes
      answers {
        id
        text
        likes
        dislikes
      }
    }
  }
`;

export const UPDATE_MESSAGE_MUTATION = gql`
  mutation MessageMutation($messageId:ID!, $likes:Int, $dislikes:Int){
    updateMessage(id:$messageId, likes:$likes, dislikes:$dislikes){
      id
      likes 
      dislikes
    }
  }
`
export const UPDATE_ANSWER_MUTATION = gql`
  mutation MessageMutation($answerId:ID!, $likes:Int, $dislikes:Int){
    updateAnswer(id:$answerId, likes:$likes, dislikes:$dislikes){
      id
      likes 
      dislikes
    }
  }
`