import { useEffect, useState } from 'react';
const URL = 'http://akmeninis.lt';

export default function ContactSubSection( { data, saveData, setSaveData, resetData, setResetData, setFormStatus, setFormErr} ) {
    
    const [contact, setContact] = useState(data);
    const [contactPhone, setContactPhone] = useState(data.phone);
    const [contactEmail, setContactEmail] = useState(data.email);
    const [contactAddress, setContactAddress] = useState(data.address);
    const [workTime, setWorkTime] = useState(data.worktime);

    //If save button is clicked in SubSection
    useEffect(() => {
        if (saveData) {
            saveContactDetails();
            setSaveData(null);
        }
    }, [saveData]);

    //If reset button is clicked in SubSection
    useEffect(() => {
        if (resetData) {
            setContactPhone(contact.phone);
            setContactEmail(contact.email);
            setContactAddress(contact.address);
            setWorkTime(contact.worktime);
            setResetData(null);
        }
    }, [resetData]);

    const saveContactDetails = async () => {

        //use axios to update hero description
        await axios.put(URL + '/admin/contact', {
            id: contact.id,
            phone: contactPhone,
            email: contactEmail,
            address: contactAddress,
            worktime: workTime
        })
            .then(response => {
                setFormErr('');
                setFormStatus(response.data.message ? response.data.message : '');
                setContact(
                    {
                        id: contact.id,
                        phone: contactPhone,
                        email: contactEmail,
                        address: contactAddress,
                        worktime: workTime
                    }
                );
            })
            .catch(error => {
                console.log('Error: ' + error);
                setFormStatus('');
                setFormErr(error.response.data.message);
            });
    }

    return (
        <>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono Nr.</label>
                <input type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    onChange={ (e) => {setContactPhone(e.target.value)} }
                    value={contactPhone}>
                </input>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">El. paštas</label>
                <input type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    onChange={ (e) => {setContactEmail(e.target.value)} }
                    value={contactEmail}>
                </input>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresas</label>
                <input type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    onChange={ (e) => {setContactAddress(e.target.value)} }
                    value={contactAddress}>
                </input>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Darbo laikas</label>
                <textarea rows="5" cols="50" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    onChange={ (e) => {setWorkTime(e.target.value)} }
                    value={workTime}>
                </textarea>
            </div>
        </>
    );
}