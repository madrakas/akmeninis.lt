import { useEffect, useState } from 'react';
const URL = 'http://akmeninis.lt';

export default function AboutSubSection( { data, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr} ) {

    const [about, setAbout] = useState(data);
    const [aboutDescription, setAboutDescription] = useState(data.description);

    //If save button is clicked in SubSection
    useEffect(() => {
        if (saveData) {
            saveAboutDetails();
            setSaveData(null);
        }
    }, [saveData]);

    //If reset button is clicked in SubSection
    useEffect(() => {
        if (resetData) {
            setAboutDescription(about.description);
            setResetData(null);
        }
    }, [resetData]);

    //Update hero description
    const saveAboutDetails = async () => {
        
        //use axios to update hero description
        await axios.put(URL + '/admin/about', {
            id: about.id,
            description: aboutDescription
        })
            .then(response => {
                setAbout(
                    {
                        id: about.id,
                        description: aboutDescription
                    }
                );
                setFormErr('');
                setFormStatus(response.data.message ? response.data.message : '');
            })
            .catch(error => {
                setFormErr(error.response.data.message);
            });
    };

    return (
        <>
            <input type="hidden"  value={about.id}></input>
            <input type="text" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                onChange={ (e) => {setAboutDescription(e.target.value)} }
                value={aboutDescription}>

            </input>
        </>
    );
}