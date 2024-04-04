import { useEffect, useState } from 'react';
const URL = 'http://akmeninis.lt';

export default function FaqSubsection( { data, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr} ){

    const [faq, setFaq] = useState(data);
    console.log(data);

    return (
        
        <>
        
        
        {faq.map( (item, index) => (
            <div className="faq-item" key={index}>
                <div className="question-row">
                    <div className="question">{item.question}</div>
                    <div className="answer-button">+</div>
                </div>
                <div className="answer">{item.answer}</div>
            </div>
        ))}
        
        </>
        
        
    )
}

