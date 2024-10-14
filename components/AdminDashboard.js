"use client";

import { useState, useEffect } from 'react';
import RoomCard from './RoomCard';
import AddRoomForm from './AddRoomForm';

export default function AdminDashboard() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('/api/rooms')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setRooms(data.data);
                }
            });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <AddRoomForm onRoomAdded={(newRoom) => setRooms([...rooms, newRoom])} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </div>
    );
}
