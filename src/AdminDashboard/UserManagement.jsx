import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
const UserManagement = () => {
    const axiosSecure = useAxiosSecure()
    const [users, setUsers] = useState([])

    useEffect(() => {
         axiosSecure.get('/users')
            .then(response => {
                console.log('response:', response.data)
                setUsers(response.data)
                // console.log('setUsers:', setUsers)
            })
            .catch(error => {
                console.error('Error fetching users:', error)
            })
     }
    ,[axiosSecure])
    console.log('users:', users)
    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <h1 className="text-3xl font-bold mb-6">User Management</h1>
            <div className="flex items-center space-x-4 mb-4">
                <input
                    type="search"
                    placeholder="Search by name"
                    className="flex-grow px-4 py-2 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    Refresh
                </button>
            </div>
            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 border border-gray-300">Name</th>
                        <th className="px-4 py-2 border border-gray-300">Email</th>
                        <th className="px-4 py-2 border border-gray-300">Phone Number</th>
                        <th className="px-4 py-2 border border-gray-300">Status</th>
                        <th className="px-4 py-2 border border-gray-300">Actions</th>
                    </tr>
                </thead>
              { users.map((user,idx) =>  <tbody key={idx}>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">{user.userInfo?.name}</td>
                        {/* {console.log(user.userInfo)} */}
                        <td className="px-4 py-2 border border-gray-300">{user.userInfo?.email}</td>
                        <td className="px-4 py-2 border border-gray-300">{user.userInfo?.number}</td>
                        <td className="px-4 py-2 border border-gray-300">{user.userInfo?.status}</td>
                        <td className="px-4 py-2 border border-gray-300">
                            <div className="flex space-x-2">
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
                                >
                                    Activate
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                                >
                                    Block
                                </button>
                            </div>
                        </td>
                    </tr>
                  
                </tbody>)}
            </table>
        </div>
    );
};

export default UserManagement;
