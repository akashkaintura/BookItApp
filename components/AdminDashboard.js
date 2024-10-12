import { useState } from 'react';
import BookingList from './BookingList';

export default function AdminDashboard() {
    const [rooms, setRooms] = useState([
        { id: 1, name: 'Conference Room A', capacity: 12 },
        { id: 2, name: 'Meeting Room B', capacity: 6 },
    ]);

    const [roomName, setRoomName] = useState('');
    const [capacity, setCapacity] = useState('');

    const addRoom = () => {
        const newRoom = { id: rooms.length + 1, name: roomName, capacity: parseInt(capacity) };
        setRooms([...rooms, newRoom]);
        setRoomName('');
        setCapacity('');
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Manage Rooms</h2>
            <div className="mb-6">
                <input
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="Room Name"
                    className="mr-2 px-3 py-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    placeholder="Capacity"
                    className="mr-2 px-3 py-2 border border-gray-300 rounded"
                />
                <button onClick={addRoom} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Add Room
                </button>
            </div>
            <ul className="mb-6">
                {rooms.map((room) => (
                    <li key={room.id} className="mb-2">
                        <span className="font-semibold">{room.name}</span> - Capacity: {room.capacity}
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">View All Bookings</h2>
            <BookingList />
        </div>
    );
}
