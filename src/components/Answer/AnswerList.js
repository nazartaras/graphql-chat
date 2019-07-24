import React, { useState } from 'react';
import AnswerItem from './AnswerItem';
import AnswerForm from './AnswerForm';

const AnswerList = props => {
    const [showAnswerForm, toggleForm] = useState(false);
    const { messageId, answers } = props;
    
    return (
        <div className="review-list">
            {answers.length > 0 && <span className="review-list-title">Answers</span>}
            {answers.map(item => {
                return <AnswerItem key={item.id} {...item} />
            })}
            <button className="review-button" onClick={() => toggleForm(!showAnswerForm)}>
                {showAnswerForm ? 'Close answer' : 'Add answer'}
            </button>
            {showAnswerForm && <AnswerForm
                messageId={messageId}
                toggleForm={toggleForm}
            />}
        </div>
    );
}

export default AnswerList;