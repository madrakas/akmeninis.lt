
import SectionLayout from '@/Layouts/Dashboard/SectionLayout';
import SubSection from '@/Components/Dashboard/SubSection';
import FaqSection from './Faq/FaqSection';
import CategorySection from './Category/CategorySection';


export default function Section( { title, data, content  } ) {
    if (content === 'hero'|| content === 'about' || content === 'contact') {
        return (
            <SectionLayout title={title}  subsection={<SubSection data={data} content={content} />}/>
        );
    } else if (content === 'faq') {
        return (
            <SectionLayout title={title}  subsection={<FaqSection data={data} content={content} />}/>
        );
    } else if (content === 'categories') {
        return (
            <SectionLayout title={title}  subsection={<CategorySection data={data} />}/>
            
        );
    }
}