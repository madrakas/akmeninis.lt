import SubSectionLayout from '@/Layouts/Dashboard/SubSectionLayout';
import HeroSubSection from './Hero/HeroSubsection';
import AboutSubSection from './About/AboutSubsection';
import FaqSubsection from './Faq/FaqSubsection';
import FaqSubsectionAdd  from './Faq/FaqSubsectionAdd';
import { useState } from 'react';

export default function SubSection( { content, data, setData, maxFaqPriority, reorderFaq, saveFaqOrder, deleteFaq } ) {
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
        subContent  = <FaqSubsectionAdd data={data} setData={setData} saveData={saveData} setSaveData={setSaveData} resetData={resetData} setResetData={setResetData} setFormStatus={setFormStatus} setFormErr={setFormErr}></FaqSubsectionAdd>
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