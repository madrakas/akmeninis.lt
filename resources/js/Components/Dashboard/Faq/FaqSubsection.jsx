import { useEffect, useState } from 'react';
const URL = 'http://akmeninis.lt';

export default function FaqSubsection( { data, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr} ){
    const [faq, setFaq] = useState(data);
        
    const faqEdit = (data) => {
        const newFaq = faq.map( (item) => {
            if (item.id === data.id){
                if (data.question){
                    return {
                        id: item.id,
                        question: data.question,
                        answer: item.answer,
                    }
                } else if (data.answer){
                    return {
                        id: item.id,
                        question: item.question,
                        answer: data.answer,
                    }
                } 
            } else {
                return item;
            }
        });
        setFaq(newFaq);
    };

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
            setFaq(data);
            setResetData(null);
        }
    }, [resetData]);
    

    const saveFaq = async () => {
        
        //use axios to update hero description
        await axios.put(URL + '/admin/faq', {
            faq: faq
        })
            .then(response => {
                setFormErr('');
                setFormStatus(response.data.message ? response.data.message : '');
            })
            .catch(error => {
                setFormErr(error.response.data.message);
            });
    };

    return (
        
        <>
        {faq.map( (item, index) => (
            <div className="faq-item" key={index}>
                <div className="mb-6">
                    <input type="hidden" value={item.id}></input>
                    <label className="block font-medium text-sm text-gray-700">Klausimas</label>
                    <input type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        onChange={ (e) => {faqEdit({
                            id: item.id,
                            question: e.target.value
                            })}
                        }
                        value={item.question}
                    ></input>
                    <label className="block font-medium text-sm text-gray-700 ml-4" >Atsakymas</label>
                    <input type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-4" 
                        onChange={ (e) => {faqEdit({
                            id: item.id,
                            answer: e.target.value
                            })}}
                        value={item.answer}
                    ></input>
                </div>
            </div>
        ))}
        </>
    )
}

