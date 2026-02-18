import React from 'react';
import ProductList from './Components/ProductList/ProductList';
import InputButton from './Components/InputButton';
import UserList from './Components/UserList';
import './App.css';

function App() {
    return (
        <div className="bg-gray-50">
            <div className="space-y-8 p-4">
                <section className="border-b pb-8">
                    <h1 className="text-2xl font-bold mb-4">Exercise 1: Product List</h1>
                    <ProductList />
                </section>

                <section className="border-b pb-8">
                    <h1 className="text-2xl font-bold mb-4">Exercise 2: Input to Console</h1>
                    <InputButton />
                </section>

                <section>
                    <h1 className="text-2xl font-bold mb-4">Exercise 3: User List</h1>
                    <UserList />
                </section>
            </div>
        </div>
    );
}

export default App;