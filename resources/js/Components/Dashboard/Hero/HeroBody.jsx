import { useState } from 'react';

const URL = 'http://akmeninis.lt';

export default function HeroBody( { showBody, hero } ) {


    const [heroDescription, setHeroDescription ] = useState(hero.description);
    const [formErr, setFormErr] = useState('');
    const [formStatus, setFomrStatus] = useState('');

    const stopProp = (e) => {
        e.stopPropagation();
    };

    //Update hero description
    const updateHeroDescription = async (e) => {
        e.preventDefault();
        console.log('Saving in progress');
        //use axios to update hero description
        await axios.put(URL + '/admin/hero', {
            id: hero.id,
            description: heroDescription
        })
            .then(response => {
                hero = response.data;
                setHeroDescription(hero.description);
                setFomrStatus(response.data.message ? response.data.message : '');
                // console.log(response.data);
            })
            .catch(error => {
                setFormErr(error.response.data.message);
            });
    }

    //Get hero data from  Hero model
    
    return (
        <div className="p-6 text-gray-900" data-hero-container style={{ display: showBody ? 'block' : 'none' }} onClick={(e) => {stopProp(e)}}>
            {/* Error mesage bar */}
            {formErr && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3" role="alert">
                <span className="block sm:inline">{formErr}</span>
            </div>}

            {formStatus && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-3" role="alert">
                <span className="block sm:inline">{formStatus}</span>
            </div>}


            {/* Hero edit form */}
            <div className="mt-6">
                <input type="hidden"  value={hero.id}></input>
                <input type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        onChange={ (e) => {setHeroDescription(e.target.value)} }
                        value={heroDescription}></input>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                        className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {setHeroDescription(hero.description);
                                        setFormErr('');
                                        setFomrStatus('');
                        } }
                    >
                        Atšaukti
                    </button>
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={(e) => {updateHeroDescription(e);
                                        setFormErr('');
                                        setFomrStatus('');}}
                    >
                        Išsaugoti
                    </button>
                </div>
                
            </div>

            
        </div>
    );
}