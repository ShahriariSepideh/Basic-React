import React, { useRef } from 'react';

const InputButton = () => {
    // روش اول: استفاده از useRef (روش React)
    const inputRef = useRef(null);

    const handleClickWithRef = () => {
        console.log('Method 1 (useRef):', inputRef.current.value);
    };

    // روش دوم: استفاده از getElementById (روش DOM )
    const handleClickWithGetElementById = () => {
        const inputValue = document.getElementById('method2-input').value;
        console.log('Method 2 (getElementById):', inputValue);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Exercise 2: Input to Console
                </h2>

                {/* روش اول: useRef */}
                <div className="mb-6 p-4 border border-blue-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Method 1: useRef</h3>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Enter something with useRef..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                    />
                    <button
                        onClick={handleClickWithRef}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                        Show in Console (useRef)
                    </button>
                </div>

                {/* روش دوم: getElementById */}
                <div className="p-4 border border-green-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-600 mb-2">Method 2: getElementById</h3>
                    <input
                        id="method2-input"
                        type="text"
                        placeholder="Enter something with getElementById..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
                    />
                    <button
                        onClick={handleClickWithGetElementById}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                        Show in Console (getElementById)
                    </button>
                </div>

                <p className="mt-4 text-sm text-gray-500 text-center">
                    Open console (F12) to see the values
                </p>
            </div>
        </div>
    );
};

export default InputButton;