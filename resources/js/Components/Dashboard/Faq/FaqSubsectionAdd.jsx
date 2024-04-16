import { useEffect, useState} from 'react';
const URL = 'http://akmeninis.lt';

export default function FaqSubsectionAdd( { data, setData, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr } ){
    const [faqQuestion, setFaqQuestion] = useState('');
    const [faqAnswer, setFaqAnswer] = useState('');
    // const [faqPriority, setFaqPriority] = useState(1);

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
            setFaqQuestion('');
            setFaqAnswer('');
            // setFaqPriority(1);
            setResetData(null);
        }
    }, [resetData]);

    //Insert New FAQ item
    const saveFaq = async () => {
        await axios.post(URL + '/admin/faq', {
            question: faqQuestion,
            answer: faqAnswer,
        })
            .then(response => {
                setFormErr('');
                setFormStatus(response.data.message ? response.data.message : '');
                //refresh list
                setData(
                    [
                    ...data,
                    {
                        id: response.data.id,
                        question: faqQuestion,
                        answer: faqAnswer,
                        priority: response.data.priority + 1
                    }
                ]
            );
                setFaqQuestion('');
                setFaqAnswer('');
            })
            .catch(error => {
                setFormErr(error.response.data.message);
            });
    }

    return (
        <>
            <div className="faq-item" key={'new'}>
                <div className="mb-6">

                    <h3 className='mb-4'>Naujas klausimas</h3>
                    
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