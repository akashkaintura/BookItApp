
import { useState } from 'react';

export default function AddRoomForm({ onRoomAdded }) {
    const [roomName, setRoomName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [message, setMessage] = useState('');

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
            setMessage('Room added successfully!');
            onRoomAdded(data.data);
            setRoomName('');
            setCapacity('');
        } else {
            setMessage('Failed to add room.');
        }
    };

    return (
        <form onSubmit={addRoom} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add a New Room</h2>
            <input
                type="text"
                placeholder="Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
            />
            <input
                type="number"
                placeholder="Capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Add Room
            </button>
            {message && <p className="text-green-500 mt-2">{message}</p>}
        </form>
    );
}
