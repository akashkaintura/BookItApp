"use client";

import Link from 'next/link';

export default function RoomCard({ room }) {
    return (
        <div className="border border-gray-200 rounded-lg p-4 shadow-md bg-white">
            <h2 className="text-xl font-semibold text-primary">{room.name}</h2>
            <p className="text-gray-600">Capacity: {room.capacity} people</p>
            <Link href={`/rooms/${room.id}`} className="inline-block mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark">
                View Room
            </Link>
        </div>
    );
}