import { useEffect, useState } from 'react';
import SubSection from '../SubSection';
import Modal from '@/Components/Modal';
import InfoModal from '@/Components/Dashboard/InfoModal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';


export default function FaqSection({ data, content }) {
    const maxFaqPriority = Object.keys(data).length;
    const [visibleConfirm, setVisibleConfirm] = useState(false);
    const [deleteID, setDeleteID] = useState(false);
    const [newData, setNewData] = useState(data);
    const [modalPlaceholder, setModalPlaceholder] = useState('');

    useEffect(() => {
        setFaq(orderedFaq(newData));
    }, [newData])
    
  

    const saveFaqOrder= () => {
        const orders = [];
        Object.keys(newData).forEach(key => {
            orders.push([newData[key].id, newData[key].priority]);
        });

        //use axios to update faq order
        axios.put('/admin/faqorder', {
            faqOrder: JSON.stringify(orders)
        })
    }

    const reorderFaq = (id, priority) => {
        const tmpData = [...newData];
        let oldIndex = tmpData.findIndex(d => d.priority === priority);
        if (oldIndex === -1) { 
            // fix missing indexes
            tmpData.sort((a, b) => a.priority - b.priority);
            for (let i = 0; i < tmpData.length; i++) {
                tmpData[i].priority = i + 1;
            }
            oldIndex = tmpData.findIndex(d => d.priority === priority);
        }
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

        setFaq(orderedFaq(tmpData));
        console.log(tmpData);
    }

    const deleteFaq = (id) => {
        // Prompt user for confirmation with modal 
        setDeleteID(id);
        setVisibleConfirm(true);
        
    }

    const confirmDelete = (confirmed) => {
        // setVisibleConfirm(false);
        if (confirmed) {
            //delete with axios
            axios.delete('/admin/faq/' + deleteID)
                .then(response => {
                    const tempData = newData.filter(d => d.id !== deleteID);
                    setNewData(tempData);
                    setFaq(orderedFaq(tempData));
                    setDeleteID(null);
                    setModalPlaceholder(<InfoModal content={response.data.message} />);
                })
                .catch(error => {
                    console.log(error);
                    setModalPlaceholder(<InfoModal content={error.response.data.message} />);
                });
                
            setVisibleConfirm(false);

        }else{
            // console.log('cancelled');
            setDeleteID(null);
            setVisibleConfirm(false);
        }
        // reset();
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
        result.push(
            <SubSection key="newFaq" content={'newFaq'} data={newData} setData={setNewData} maxFaqPriority={maxFaqPriority} reorderFaq={reorderFaq}  />
        );
        return result;
    }
    
    const [faq, setFaq] = useState(orderedFaq(data));

    return (
        <>
            <Modal show={visibleConfirm} >
                <form  className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Dėmesio!
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Ar tikrai norite ištrinti šį klausimą?
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={(e) => {
                            e.preventDefault(); 
                            confirmDelete(false);
                            } 
                        }>Ne</SecondaryButton>

                        <DangerButton className="ms-3" onClick={
                            (e) => {
                                e.preventDefault();
                                confirmDelete(true);
                            }
                        }>
                            Trinti klausimą
                        </DangerButton>
                    </div>

                </form>
            </Modal>
            {modalPlaceholder}
          {faq}
        </>
    );
}