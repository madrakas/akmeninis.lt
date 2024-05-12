import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
const URL = 'http://akmeninis.lt';

export default function CategorySubSection( { data, maxCatPriority, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr, reorderCat, saveCatOrder  } ) {
    const [cat, setCat] = useState(data);
    const [catName, setCatName] = useState(data.name);
    const [catDescription, setCatDescription] = useState(data.description);
    const [catPriority, setCatPriority] = useState(data.priority);

    const editCatPriority = function(newCatPriority){
        if (newCatPriority <= 0) {
            newCatPriority = 1;
        } else if (newCatPriority > maxCatPriority) {
            newCatPriority = maxCatPriority;
        }
        setCatPriority(newCatPriority);
        reorderCat(cat.id, newCatPriority);
    }

    //If save button is clicked in SubSection
    useEffect(() => {
        if (saveData) {
            saveCat();
            setSaveData(null);
        }
    }, [saveData]);

    //If reset button is clicked in SubSection
    useEffect(() => {
        if (resetData) {
            setCatName(cat.name);
            setCatDescription(cat.description);
            // setCatPriority(cat.priority);
            setResetData(null);
        }
    }, [resetData]);
    
    // Update category
    const saveCat = async () => {
        
        //use axios to update category
        await axios.put(URL + '/admin/cat', {
            id: cat.id,
            name: catName,
            description: catDescription,
            priority: catPriority
        })
            .then(response => {
                setCat( 
                    {
                        id: cat.id,
                        name: catName,
                        description: catDescription,
                        priority: catPriority
                    }
                );
                setFormErr('');
                setFormStatus(response.data.message ? response.data.message : '');
                setSaveData(null);
                saveCatOrder();
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
                        
                        {/* Priority increase button */}

                        
                        <button type="button" className="p-2.5 ml-4" onClick={() => {
                            // setFaqPriority(faqPriority + 1);
                            editCatPriority(catPriority + 1);
                        }}> 
                            <FontAwesomeIcon icon={faArrowDown} />
                        </button>
                        {/* Priority decrease button */}
                        <button type="button" className="p-2.5 ml-4" onClick={() => {
                            // setFaqPriority(faqPriority - 1);
                            editCatPriority(catPriority - 1);
                        }}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                    </div>
                    

                    <label className="block font-medium text-sm text-gray-700">Pavadinimas</label>
                    <input type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 "
                        onChange={ (e) => {setCatName(e.target.value)}}                         
                        value={catName}
                    ></input>
                    <label className="block font-medium text-sm text-gray-700 ml-4" >Aprašymas</label>
                    
                    <textarea rows="3" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        onChange={ (e) => {setCatDescription(e.target.value)}}
                        value={catDescription}
                    ></textarea>
                </div>
            </div>
        </>
    );

}