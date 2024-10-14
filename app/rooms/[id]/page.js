"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function RoomDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [room, setRoom] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/rooms/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) setRoom(data.data);
                });
        }
    }, [id]);

    if (!room) return <p>Loading...</p>;

    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold">{room.name}</h1>
            <p className="text-gray-600 mb-4">Capacity: {room.capacity} people</p>
            <p className="text-gray-700">{room.description || "No description available."}</p>
        </div>
    );
}
