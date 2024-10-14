"use client";

import { useState } from 'react';

export default function AdminPage() {
    const [roomName, setRoomName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // success or error

    const addRoom = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/rooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: roomName, capacity: parseInt(capacity) }),
        });

        const data = await response.json();

        if (data.success) {
            setMessageType('success');
            setMessage('Room added successfully!');
            setRoomName('');
            setCapacity('');
        } else {
            setMessageType('error');
            setMessage(`Failed to add room: ${data.message}`);
        }

        // Clear the message after a few seconds
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 3000);
    };

    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-6 text-primary">Admin Dashboard</h1>

            <form onSubmit={addRoom} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-semibold mb-4">Add a New Room</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomName">
                        Room Name
                    </label>
                    <input
                        id="roomName"
                        type="text"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter room name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capacity">
                        Capacity
                    </label>
                    <input
                        id="capacity"
                        type="number"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter room capacity"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Room
                </button>
                {message && (
                    <p
                        className={`mt-4 font-semibold ${messageType === 'success' ? 'text-green-500' : 'text-red-500'
                            }`}
                    >
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
