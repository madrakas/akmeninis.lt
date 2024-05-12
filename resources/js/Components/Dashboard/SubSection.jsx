import SubSectionLayout from '@/Layouts/Dashboard/SubSectionLayout';
import HeroSubSection from './Hero/HeroSubsection';
import AboutSubSection from './About/AboutSubsection';
import FaqSubsection from './Faq/FaqSubsection';
import FaqSubsectionAdd  from './Faq/FaqSubsectionAdd';
import CategorySubSection from './Category/CategorySubSection';
import ContactSubsection from './Contact/ContactSubsection';
import { useState } from 'react';

export default function SubSection( { content, data, setData, maxFaqPriority, reorderFaq, saveFaqOrder, deleteFaq, maxCatPriority, reorderCat, saveCatOrder, deleteCat } ) {
    const [formErr, setFormErr] = useState('');
    const [formStatus, setFormStatus] = useState('');
    const [saveData, setSaveData] = useState(null);
    const [resetData, setResetData] = useState(null);
                    
    const saveForm = (e) => {
        e.preventDefault();
        setSaveData(1);
    }
    
    const resetForm = (e) => {
        e.preventDefault();
        setResetData(1);
        setFormErr('');
        setFormStatus('');
    }
    
    let subContent= null;
    let deleteForm = null;

    if (content === 'hero'){
        subContent = <HeroSubSection data={data} saveData={saveData} setSaveData={setSaveData} resetData={resetData} setResetData={setResetData} setFormStatus={setFormStatus} setFormErr={setFormErr}/>;
    } else if(content === 'about'){
        subContent = <AboutSubSection data={data} saveData={saveData} setSaveData={setSaveData} resetData={resetData} setResetData={setResetData} setFormStatus={setFormStatus} setFormErr={setFormErr}/>;
    } else if (content === 'contact'){
        subContent = <ContactSubsection data={data} saveData={saveData} setSaveData={setSaveData} resetData={resetData} setResetData={setResetData} setFormStatus={setFormStatus} setFormErr={setFormErr}/>;
    } else if (content === 'faq'){
        subContent = <FaqSubsection data={data} saveData={saveData} setSaveData={setSaveData} resetData={resetData} setResetData={setResetData} setFormStatus={setFormStatus} setFormErr={setFormErr} maxFaqPriority={maxFaqPriority} reorderFaq={reorderFaq} saveFaqOrder={saveFaqOrder} deleteFaq={deleteFaq}/>
        deleteForm = (e) => {
            e.preventDefault();
            deleteFaq(data.id);
            setResetData(1);
            setFormErr('');
            setFormStatus('');
            console.log('Subsection executing deleteForm with id: ' + data.id);
        }
    } else if (content === 'newFaq'){
        subContent  = <FaqSubsectionAdd 
                            data={data} 
                            resetData={resetData}
                            setData={setData} 
                            saveData={saveData} 
                            setSaveData={setSaveData} 
                            setResetData={setResetData} 
                            setFormStatus={setFormStatus} 
                            setFormErr={setFormErr}
                        />
    } else if (content === 'cat'){
        subContent = <CategorySubSection 
                            data={data} 
                            saveData={saveData} 
                            setSaveData={setSaveData} 
                            resetData={resetData} 
                            setResetData={setResetData} 
                            setFormStatus={setFormStatus} 
                            setFormErr={setFormErr} 
                            maxCatPriority={maxCatPriority} 
                            reorderCat={reorderCat} 
                            saveCatOrder={saveCatOrder} 
                            deleteCat={deleteCat}
                        />;
        deleteForm = (e) => {
            e.preventDefault();
            deleteFaq(data.id);
            setResetData(1);
            setFormErr('');
            setFormStatus('');
            console.log('Subsection executing deleteForm with id: ' + data.id);
        }
    }
    
    return (
        // Subsection layout
        <SubSectionLayout 
            content={ subContent } 
            formErr={formErr}
            formStatus={formStatus}
            saveForm={saveForm}
            resetForm={resetForm}
            deleteForm={deleteForm}
        />
    );
}