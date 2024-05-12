
import axios from 'axios';
import { useEffect, useState } from 'react';
import SubSection from '../SubSection';
import Modal from '@/Components/Modal';
import InfoModal from '@/Components/Dashboard/InfoModal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';


export default function CategorySection( { data } ) {
    const maxCatPriority = Object.keys(data).length;
    const [visibleConfirm, setVisibleConfirm] = useState(false);
    const [deleteID, setDeleteID] = useState(false);
    const [newData, setNewData] = useState(data);
    const [modalPlaceholder, setModalPlaceholder] = useState('');

    useEffect(() => {
        setCats(orderedCats(newData));
    }, [newData])
    
    const initialCatOrder = () => {
        const result = [];
        newData.sort((a, b) => a.priority - b.priority);
        // console.log('newData:' + newData);
        for (let i = 0; i < newData.length; i++) {
            result.push([
                
                newData[i].id,
                newData[i].priority
            ]);
        }
        return result;
    }

    const [catOrder, setCatOrder] = useState(initialCatOrder());
    
    const saveCatOrder= () => {

        const orders = [];
        Object.keys(newData).forEach(key => { 
            orders.push([newData[key].id, newData[key].priority]);
        });
        
        //use axios to update cat order

        axios.put('/admin/catorder', {
            catOrder: JSON.stringify(orders)
        })
    }


    const reorderCat = (id, priority) => {
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
        const newCatOrder = [];

        for (let i = 0; i < tmpData.length; i++) {
            newCatOrder.push([
                tmpData[i].id,
                tmpData[i].priority
            ]);
        }

        setCatOrder(newCatOrder);
        setCats(orderedCats(tmpData));
    }  

    const deleteCat = (id) => {
        // Promt user for confirmation with modal
        setDeleteID(id);
        setVisibleConfirm(true);
    }

    const confirmDelete = (confirmed) => {
        // setVisibleConfirm(false);
        if (confirmed) {
            //delete with axios
            axios.delete('/admin/cat/' + deleteID)
                .then(response => {
                    const tempData = newData.filter(d => d.id !== deleteID);
                    setNewData(tempData);
                    setCats(orderedCats(tempData));
                    setDeleteID(null);
                    console.log('Deleted ID: ' + deleteID);
                    setModalPlaceholder(<InfoModal content={response.data.message} />);
                    
                })
                .catch(error => {
                    console.log(error);
                    setModalPlaceholder(<InfoModal content={error.response.data.message} />);
                });
                
            setVisibleConfirm(false);

        }else{
            console.log('cancelled');   
            setDeleteID(null);
            setVisibleConfirm(false);
        }
    }   

    const orderedCats = (dataX) => {
        const result = [];
        dataX.sort((a, b) => a.priority - b.priority);
        for (let i = 0; i < dataX.length; i++) {
            result.push(
                <SubSection key={dataX[i].id} content={'cat'} data={dataX[i]} maxCatPriority={maxCatPriority} reorderCat={reorderCat} saveCatOrder={saveCatOrder} deleteCat={deleteCat}/>
            );
        }
        // result.push(
        //     <SubSection key="newCat" content={'newCat'} data={newData} setData={setNewData} maxCatPriority={maxCatPriority} reorderCat={reorderCat}  />
        // );
        return result;
    }

    const [cat, setCat] = useState(orderedCats(newData));


    const initialCats = (catD) => {
        const cats = [];
        Object.keys(catD).forEach(key => {
            cats.push([
                catD[key].id,
                catD[key].priority
            ]);
        });
        // console.log(cats);
        return cats;
    }

    const [cats, setCats] = useState(orderedCats(data));
    
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
            {cats}
        </>
    );
}