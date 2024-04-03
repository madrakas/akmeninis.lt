const URL = 'http://akmeninis.lt';

export default function HeroBody( { content, saveForm, resetForm, formErr, formStatus } ) {
    return (
        <>
            {/* Error mesage bar */}
            {formErr && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3" role="alert">
                <span className="block sm:inline">{formErr}</span>
            </div>}
            {/* Status bar */}
            {formStatus && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-3" role="alert">
                <span className="block sm:inline">{formStatus}</span>
            </div>}

            {/* Data edit form */}
            <div className="mt-6">
                { content }
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                        className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={(e) => {resetForm(e)}}
                    >
                        Atšaukti
                    </button>
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={(e) => {saveForm(e)}}
                    >
                        Išsaugoti
                    </button>
                </div>
            </div>
        </>
    );
}