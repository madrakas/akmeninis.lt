
import SectionLayout from '@/Layouts/Dashboard/SectionLayout';
import SubSection from '@/Components/Dashboard/SubSection';
import FaqSection from './Faq/FaqSection';


export default function Section( { title, data, content  } ) {
    if (content === 'hero'|| content === 'about') {
        return (
            <SectionLayout title={title}  subsection={<SubSection data={data} content={content} />}/>
        );
    } else if (content === 'faq') {
        return (
            <SectionLayout title={title}  subsection={<FaqSection data={data} content={content} />}/>
        );
    }
}