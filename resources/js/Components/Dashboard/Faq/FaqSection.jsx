import { useEffect, useState } from 'react';
import SubSection from '../SubSection';


export default function FaqSection({ data, content }) {

    const maxFaqPriority = Object.keys(data).length;

    
    const reorderFaq = (id, priority) => {
        console.log('Reordering now', id, priority);
        data.map((d, i) => {
            if (d.id === id) {
                data[i].priority = priority;
            }

            console.log(data);

        })
    }

    useEffect(() => {
        setFaq(orderedFaq(data));
        console.log('FAQ section reloaded');

    }, [data]);


    const orderedFaq= (data) => {
        const result = [];

        for (let i = 0; i < data.length; i++) {
            // subsections array
            result.push(
                <SubSection key={data[i].id} content={content} data={data[i]} maxFaqPriority={maxFaqPriority} reorderFaq={reorderFaq} />
            );
        }
        return result;
    }

    
    const [faq, setFaq] = useState(orderedFaq(data));
      

    return (
        <>
            {faq}
        </>
    );
}