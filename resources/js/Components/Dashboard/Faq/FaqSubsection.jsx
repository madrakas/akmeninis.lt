import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'; 
const URL = 'http://akmeninis.lt';

export default function FaqSubsection( { data, maxFaqPriority, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr, reorderFaq, saveFaqOrder } ){
// export default function FaqSubsection( { data, maxFaqPriority, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr, reorderFaq, editData } ){
    const [faq, setFaq] = useState(data);
    const [faqQuestion, setFaqQuestion] = useState(data.question);
    const [faqAnswer, setFaqAnswer] = useState(data.answer);
    const [faqPriority, setFaqPriority] = useState(data.priority);

    const editFaqPriority = function(newFaqPriority){
        if (newFaqPriority <= 0) {
            newFaqPriority = 1;
        } else if (newFaqPriority > maxFaqPriority) {
            newFaqPriority = maxFaqPriority;
        }
        setFaqPriority(newFaqPriority);
        reorderFaq(faq.id, newFaqPriority);
    }

    //If save button is clicked in SubSection
    useEffect(() => {
        if (saveData) {
            saveFaq();
            setSaveData(null);
        }
    }, [saveData]);

    //If reset button is clicked in SubSection
    useEffect(() => {
        if (resetData) {
            setFaqQuestion(faq.question);
            setFaqAnswer(faq.answer);
            // setFaqPriority(faq.priority);
            setResetData(null);
        }
    }, [resetData]);
    
    // Update hero description
    const saveFaq = async () => {
        
        //use axios to update hero description
        await axios.put(URL + '/admin/faq', {
            id: faq.id,
            question: faqQuestion,
            answer: faqAnswer,
            priority: faqPriority
        })
            .then(response => {
                setFaq(
                    {
                        id: faq.id,
                        question: faqQuestion,
                        answer: faqAnswer,
                        priority: faqPriority
                    }
                );
                setFormErr('');
                setFormStatus(response.data.message ? response.data.message : '');
                //refresh list
                // reorderFaq(
                //     faq.id,
                //     faqPriority
                // );
                saveFaqOrder();

            })
            .catch(error => {
                setFormErr(error.response.data.message);
            });
    };

    return (
        <>
            <div className="faq-item" key={data.id}>
                <div className="mb-6">
                    <input type="hidden" value={data.id}></input>
                    <div>
                        <label className="block font-medium text-sm text-gray-700">Prioritetas</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-10" value={faqPriority} readOnly></input>
                        {/* Priority increase button */}

                        
                        <button type="button" className="p-2.5 ml-4" onClick={() => {
                            // setFaqPriority(faqPriority + 1);
                            editFaqPriority(faqPriority + 1);
                        }}> 
                            <FontAwesomeIcon icon={faArrowDown} />
                        </button>
                        {/* Priority decrease button */}
                        <button type="button" className="p-2.5 ml-4" onClick={() => {
                            // setFaqPriority(faqPriority - 1);
                            editFaqPriority(faqPriority - 1);
                        }}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                    </div>
                    

                    <label className="block font-medium text-sm text-gray-700">Klausimas</label>
                    <input type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 "
                        onChange={ (e) => {setFaqQuestion(e.target.value)}}                         
                        value={faqQuestion}
                    ></input>
                    <label className="block font-medium text-sm text-gray-700 ml-4" >Atsakymas</label>
                    <input type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-4 mr-6" 
                        onChange={ (e) => {setFaqAnswer(e.target.value)}}
                        value={faqAnswer}
                    ></input>
                </div>
            </div>
        
        </>
    )
}

