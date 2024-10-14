"use client";

import { useEffect, useState } from 'react';
import RoomCard from '../../components/RoomCard';

export default function RoomsPage() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('/api/rooms')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setRooms(data.data);
            });
    }, []);

    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-6 text-primary">All Meeting Rooms</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </div>
    );
}
