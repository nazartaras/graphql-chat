import React from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import MessageItem from '../Message/MessageItem';
import MessageForm from '../Message/MessageForm';
import { MESSAGE_QUERY, NEW_MESSAGES_SUBSCRIPTION } from '../../queries';

const MessageList = props => {
    const orderByDateDesc = 'createdAt_DESC';
    const orderByDateAsc = 'createdAt_ASC';
    const orderByLikeDesc = 'likes_DESC';
    const orderByLikeAsc = 'likes_ASC';
    let currMessagesCount = 0;
    const _subscribeToNewMessages = subscribeToMore => {
        subscribeToMore({
            document: NEW_MESSAGES_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                console.log('update')
                if (!subscriptionData.data) return prev;
                const { newMessage } = subscriptionData.data;
                const exists = prev.messages.messageList.find(({ id }) => id === newMessage.id);
                if (exists) return prev;
                return {
                    ...prev, messages: {
                        messageList: [newMessage, ...prev.messages.messageList],
                        count: prev.messages.messageList.length + 1,
                        __typename: prev.messages.__typename
                    }
                };
            }
        });
    };


    return (
        <div className="container">
            <Query query={MESSAGE_QUERY} variables={{ orderBy:orderByDateDesc, skip:currMessagesCount, first:5 }}>
                {({ loading, error, data, refetch, subscribeToMore }) => {
                    if (loading) return <div style={{fontSize:'5em'}}>Loading...</div>;
                    if (error) return <div>Fetch error</div>;
                    _subscribeToNewMessages(subscribeToMore);
                    const { messages: { messageList, count } } = data;
                    return (<div>
                        <Button content="Apply" color='green' label="Order by date Asc" onClick={()=>{refetch({orderBy:orderByDateAsc})}}></Button>
                        <Button content="Apply" color='green' label="Order by date Desc" onClick={()=>refetch({orderBy:orderByDateDesc})}></Button>
                        <Button content="Apply" color='green' label="Order by likes Asc"onClick={()=>refetch({orderBy:orderByLikeAsc})}></Button>
                        <Button content="Apply" color='green' label="Order by likes Desc"onClick={()=>refetch({orderBy:orderByLikeDesc})}></Button>
                        <div className='filter-field'>
                            <Input placeholder="Enter filter"  id='filter-input'></Input>
                            <Button icon='filter' content="Filter" style={{marginLeft:'1em'}} onClick={()=>{refetch({filter:document.getElementById('filter-input').value})}}></Button>
                        </div>
                        <div className="message-list">
                            {messageList.map(item => {
                                return <MessageItem key={item.id} {...item} />
                            })}
                        </div>
                        <Button content="Prev page" icon="arrow left" onClick={()=>{
                            if(currMessagesCount > 5){
                                currMessagesCount -=5;
                            }else if(count-currMessagesCount>0){
                                currMessagesCount = 0;
                            }
                            refetch({skip:currMessagesCount})
                            }}></Button>
                        <Button content="To first page" onClick={()=>{
                            currMessagesCount=0;
                            refetch({skip:0})}} ></Button>
                        <Button onClick={()=>{
                            if(currMessagesCount < count-5){
                                currMessagesCount +=5;
                            }
                            refetch({skip:currMessagesCount})
                        }}>Next page<Icon className='arrow right'/></Button>
                        {(()=>{if(currMessagesCount/5===0){
                        return <MessageForm  page={currMessagesCount%5} refetch={refetch}></MessageForm>}})()}
                        </div>
                    );
                }}
            </Query>
        </div>
    );
};

export default MessageList;