import { useEffect, useState } from 'react';
import SubSection from '../SubSection';


export default function FaqSection({ data, content }) {

    const maxFaqPriority = Object.keys(data).length;
    
    
    const initialFaqOrder = () => {
        const result = [];
        data.sort((a, b) => a.priority - b.priority);
        for (let i = 0; i < data.length; i++) {
            result.push([
                data[i].id,
                data[i].priority
            ]);
        }
        console.log(result);
        return result;
    }
    const [faqOrder, setFaqOrder] = useState(initialFaqOrder());

    const saveFaqOrder= () => {
        console.log(faqOrder);
        //use axios to update faq order
        axios.put('/admin/faqorder', {
            faqOrder: faqOrder
        })
         
    }

    const reorderFaq = (id, priority) => {
        const tmpData = [...data];

        const oldIndex = tmpData.findIndex(d => d.priority === priority);
        const oldID = tmpData[oldIndex].id;
    

        const newIndex = tmpData.findIndex(d => d.id === id);
        const oldPriority = tmpData[newIndex].priority;
    
        console.log('Old ID: ', oldID);    
        console.log('Old priority: ', oldPriority);
        

        tmpData.map((d, i) => {
            if (d.id === id) {
                tmpData[i].priority = priority;
            } else if (d.id === oldID) {
                tmpData[i].priority = oldPriority;
            }
        });

        console.log('New data: ', tmpData);

        tmpData.sort((a, b) => a.priority - b.priority);
        const newFaqOrder = [];

        for (let i = 0; i < tmpData.length; i++) {
            newFaqOrder.push([
                tmpData[i].id,
                tmpData[i].priority
            ]);
        }

        console.log('New order: ', newFaqOrder);

        setFaqOrder(newFaqOrder);
        setFaq(orderedFaq(tmpData));
    }

    const orderedFaq= (dataX) => {
        const result = [];
        dataX.sort((a, b) => a.priority - b.priority);


        for (let i = 0; i < dataX.length; i++) {
            // subsections array
            result.push(
                <SubSection key={dataX[i].id} content={content} data={dataX[i]} maxFaqPriority={maxFaqPriority} reorderFaq={reorderFaq} saveFaqOrder={saveFaqOrder}/>
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