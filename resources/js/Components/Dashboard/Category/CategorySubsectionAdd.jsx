import { useEffect, useState } from "react";
const URL = 'http://akmeninis.lt';

export default function CategorySubsectionAdd( { data, setData, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr } ){
    const [catName, setCatName] = useState('');
    const [catDescription, setCatDescription] = useState('');
    // const [catPriority, setCatPriority] = useState(1);

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
            setCatName('');
            setCatDescription('');
            // setCatPriority(1);
            setResetData(null);
        }
    }, [resetData]);

    //Insert New Category item
    const saveCat = async () => {
        await axios.post(URL + '/admin/cat', {
            name: catName,
            description: catDescription,
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
                        name: catName,
                        description: catDescription,
                        priority: response.data.priority + 1
                    }
                ]
            );
                setCatName('');
                setCatDescription('');
            })
            .catch(error => {
                setFormErr(error.response.data.message);
            });
    }

    return (
        <>
            <div className="faq-item" key={'new'}>
                <div className="mb-6">
                    <h3 className="mb-4">Nauja kategorija</h3>
                    <label className="block font-medium text-sm text-gray-700">Pavadinimas</label>
                    <input type="text" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
                            onChange={(e) => setCatName(e.target.value)}
                            value={catName} 
                    ></input>
                    <label className="block font-medium text-sm text-gray-700 ml-4" >Aprašymas</label>
                    <textarea rows="3" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        onChange={ (e) => {setCatDescription(e.target.value)}} 
                        value={catDescription}>
                    </textarea>                   
                </div>
            </div>
        </> 
    );

}
