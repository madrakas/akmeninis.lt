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
        
        return result;
    }
    const [faqOrder, setFaqOrder] = useState(initialFaqOrder());

    const saveFaqOrder= () => {
        
        const orders = [];
        Object.keys(data).forEach(key => {
            orders.push([data[key].id, data[key].priority]);
        });

        //use axios to update faq order
        axios.put('/admin/faqorder', {
            faqOrder: JSON.stringify(orders)
        })
    }

    const reorderFaq = (id, priority) => {
        const tmpData = [...data];

        const oldIndex = tmpData.findIndex(d => d.priority === priority);
        const oldID = tmpData[oldIndex].id;
        const newIndex = tmpData.findIndex(d => d.id === id);
        const oldPriority = tmpData[newIndex].priority;

        tmpData.map((d, i) => {
            if (d.id === id) {
                tmpData[i].priority = priority;
            } else if (d.id === oldID) {
                tmpData[i].priority = oldPriority;
            }
        });

        tmpData.sort((a, b) => a.priority - b.priority);
        const newFaqOrder = [];

        for (let i = 0; i < tmpData.length; i++) {
            newFaqOrder.push([
                tmpData[i].id,
                tmpData[i].priority
            ]);
        }

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