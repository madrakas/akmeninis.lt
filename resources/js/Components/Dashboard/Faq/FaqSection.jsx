import { useEffect, useState } from 'react';
import SubSection from '../SubSection';
import Modal from '@/Components/Modal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';





export default function FaqSection({ data, content }) {

    const maxFaqPriority = Object.keys(data).length;
    const [visibleConfirm, setVisibleConfirm] = useState(false);
    
    const closeModal = () => {
        setVisibleConfirm(false);
        // reset();
    };
    
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

    const deleteFaq = (id) => {

        

        // Prompt user for confirmation with modal

        setVisibleConfirm(true);




        // const tmpData = [...data];
        // const index = tmpData.findIndex(d => d.id === id);
        // tmpData.splice(index, 1);
        // tmpData.sort((a, b) => a.priority - b.priority);
        // setFaq(orderedFaq(tmpData));
    }

    const orderedFaq= (dataX) => {
        const result = [];
        dataX.sort((a, b) => a.priority - b.priority);


        for (let i = 0; i < dataX.length; i++) {
            // subsections array

            result.push(
                <SubSection key={dataX[i].id} content={content} data={dataX[i]} maxFaqPriority={maxFaqPriority} reorderFaq={reorderFaq} saveFaqOrder={saveFaqOrder} deleteFaq={deleteFaq}/>
            );
        }
        return result;
        
    }
    
    const [faq, setFaq] = useState(orderedFaq(data));

    return (
        <>
            <Modal show={visibleConfirm} onClose={() => closeModal()}>
                <form  className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Dėmesio!
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Ar tikrai norite ištrinti šį klausimą?
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Ne</SecondaryButton>

                        <DangerButton className="ms-3" onClick={
                            (e) => {
                                e.preventDefault();
                                // deleteFaq(data[0].id);
                                closeModal();
                            }
                        }>
                            Trinti klausimą
                        </DangerButton>
                    </div>

                </form>
            </Modal>
          {faq}
        </>
    );
}