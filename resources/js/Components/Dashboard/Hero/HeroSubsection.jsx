import { useEffect, useState } from 'react';
const URL = 'http://akmeninis.lt';


export default function HeroSubSection( { data, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr} ) {

    const [hero, setHero] = useState(data);
    const [heroDescription, setHeroDescription] = useState(data.description);

    //If save button is clicked in SubSection
    useEffect(() => {
        if (saveData) {
            saveHeroDetails();
            setSaveData(null);
        }
    }, [saveData]);

    //If reset button is clicked in SubSection
    useEffect(() => {
        if (resetData) {
            setHeroDescription(hero.description);
            setResetData(null);
        }
    }, [resetData]);

    //Update hero description
    const saveHeroDetails = async () => {
        
        //use axios to update hero description
        await axios.put(URL + '/admin/hero', {
            id: hero.id,
            description: heroDescription
        })
            .then(response => {
                setHero(
                    {
                        id: hero.id,
                        description: heroDescription
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
            <input type="hidden"  value={hero.id}></input>
            <input type="text" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                onChange={ (e) => {setHeroDescription(e.target.value)} }
                value={heroDescription}>

            </input>
        </>
    );
}