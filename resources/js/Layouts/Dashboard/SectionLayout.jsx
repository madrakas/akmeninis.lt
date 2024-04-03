import { useState } from 'react';

export default function Section( { title, subsection } ) {

    const [showBody, setShowBody] = useState(false);    

    const toggleShowBody = () => {
        setShowBody((previousState) => !previousState);
    };

    const stopProp = (e) => {
        e.stopPropagation();
    };

    return (
        <div id="hero-container" className="py-2" onClick={() => { toggleShowBody() }}>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900" data-hero-head><h2>{ title } </h2></div>
                    <div className="px-6 text-gray-900" data-hero-container style={{ display: showBody ? 'block' : 'none' }} onClick={(e) => {stopProp(e)}}>
                        { subsection }
                    </div>
                </div>
            </div>
        </div>
    );
}