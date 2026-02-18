import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{user.name}</h3>
            <div className="space-y-1 text-gray-600">
                <p>Age: {user.age}</p>
                <p>City: {user.city}</p>
            </div>
        </div>
    );
};

export default UserCard;