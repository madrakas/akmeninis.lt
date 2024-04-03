
import SectionLayout from '@/Layouts/Dashboard/SectionLayout';
import SubSection from '@/Components/Dashboard/SubSection';
import { useState } from 'react';

export default function Section( { title, data, content  } ) {
    return (
        <SectionLayout title={title}  subsection={<SubSection data={data} content={content} />}/>
    );
}