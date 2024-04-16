import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import { useState } from 'react';

export default function InfoModal({ content }) {
    const [show, setShow] = useState(true);

    return (
        <Modal show={show}>
            <div className="p-6">
                <div className="text-lg">
                    {content}
                </div>

                <div className="mt-6 flex justify-end">
                    <SecondaryButton onClick={() => {setShow(false)}}>OK</SecondaryButton>
                </div>
            </div>
        </Modal>
    );
}