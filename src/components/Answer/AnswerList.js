import React, { useState } from 'react';
import AnswerItem from './AnswerItem';
import AnswerForm from './AnswerForm';
import { Button } from 'semantic-ui-react';

const AnswerList = props => {
    const [showAnswerForm, toggleForm] = useState(false);
    const { messageId, answers } = props;
    
    return (
        <div className="answer-list">
            {answers.length > 0 && <span className="answer-list-title">Answers</span>}
            {answers.map(item => {
                return <AnswerItem key={item.id} {...item} />
            })}
            <Button color='red' style={{margin:'.1em'}}className="answer-button" onClick={() => toggleForm(!showAnswerForm)}>
                {showAnswerForm ? 'X' : 'Add answer'}
            </Button>
            {showAnswerForm && <AnswerForm
                messageId={messageId}
                toggleForm={toggleForm}
            />}
        </div>
    );
}

export default AnswerList;