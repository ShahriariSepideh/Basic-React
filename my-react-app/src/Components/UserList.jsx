import React, { Fragment } from 'react';
import UserCard from './UserCard';

const UserList = () => {
    const users = [
        { id: 1, name: 'sepi sh', age: 28, city: 'zanjan' },
        { id: 2, name: 'saeed sh', age: 32, city: 'tehran' },
        { id: 3, name: 'sepehr sh', age: 25, city: 'shiraz' },
        { id: 4, name: 'kamal sh', age: 35, city: 'mashhad' },
        { id: 5, name: 'ali sh', age: 29, city: 'tabriz' },
        { id: 6, name: 'zari sh', age: 27, city: 'karaj' }

    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                     User List
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map(user => (
                        <Fragment key={user.id}>
                            <UserCard user={user} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserList;