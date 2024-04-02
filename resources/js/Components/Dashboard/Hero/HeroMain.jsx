import HeroBody from './HeroBody.jsx';
import { useState } from 'react';


export default function HeroMain() {

    const [showBody, setShowBody] = useState(false);    



    const toggleShowBody = () => {
        setShowBody((previousState) => !previousState);
    };

    return (
        <div className="py-12" onClick={() => { toggleShowBody() }}>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900" data-hero-head>Pagrindinis moto</div>
                        
                    <HeroBody showBody={showBody} />
                </div>
            </div>
        </div>
    );
}
