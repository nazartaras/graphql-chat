import gql from 'graphql-tag';

export const MESSAGE_QUERY = gql`
  query messageQuery($orderBy: MessageOrderByInput) {
    messages(orderBy: $orderBy) {
      count
      messageList {
        id
        text
        answers {
          id
          text
        }
      }
    }
  }
`;

export const POST_MESSAGE_MUTATION = gql`
  mutation MessageMutation($text: String!) {
    postMessage(text: $text) {
      id
      text
      answers {
        id
        text
      }
    }
  }
`;

export const POST_ANSWER_MUTATION = gql`
  mutation MessageMutation($messageId: ID!, $text: String!) {
    postAnswer(messageId: $messageId, text: $text) {
      id
      text
    }
  }
`;

export const NEW_MESSAGES_SUBSCRIPTION = gql`
  subscription {
    newMessage {
      id
      text
      answers {
        id
        text
      }
    }
  }
`;