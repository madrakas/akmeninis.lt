import SubSectionLayout from '@/Layouts/Dashboard/SubSectionLayout';
import HeroSubSection from './Hero/HeroSubsection';
import AboutSubSection from './About/AboutSubsection';
import { useState } from 'react';

export default function SubSection( { content, data, oldData, setOldData } ) {
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

    if (content === 'hero'){
        subContent = <HeroSubSection data={data} saveData={saveData} setSaveData={setSaveData} resetData={resetData} setResetData={setResetData} setFormStatus={setFormStatus} setFormErr={setFormErr}/>;
    } else if(content === 'about'){
        subContent = <AboutSubSection data={data} saveData={saveData} setSaveData={setSaveData} resetData={resetData} setResetData={setResetData} setFormStatus={setFormStatus} setFormErr={setFormErr}/>;
    }

    return (
        // Subsection layout
        <SubSectionLayout 
            content={ subContent } 
            formErr={formErr}
            formStatus={formStatus}
            saveForm={saveForm}
            resetForm={resetForm}
        />
    );
}