import { useEffect, useState } from 'react';
const URL = 'http://akmeninis.lt';

export default function FaqSubsection( { data, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr} ){

    const [faq, setFaq] = useState(data);

    setFaq = (data) => {
        
        return faq.map( (item, index) => {
            if (item.id === data.id){
                if (data.question){
                    faq[index].question = data.question;
                }
                if (data.answer){
                    faq[index].answer = data.answer;
                }
            }
        });

            
        
    };

    console.log(data);

    return (
        
        <>
        
        
        {faq.map( (item, index) => (
            <div className="faq-item" key={index}>
                <div className="question-row">
                    <input type="hidden" value={item.id}></input>
                    <input type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        onChange={ (e) => {setFaq({
                            id: item.id,
                            question: e.target.value
                            })}
                        }
                        value={item.question}
                    ></input>
                    
                    <input type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        onChange={ (e) => {setFaq(
                    )}}
                        value={item.answer}
                    ></input>
                </div>
            </div>
        ))}
        </>
    )
}

