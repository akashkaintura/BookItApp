"use client";

import Link from 'next/link';

export default function RoomCard({ room }) {
    return (
        <div className="border border-gray-200 rounded-xl p-6 shadow-lg bg-white transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-primary mb-2">{room.name}</h2>
            <p className="text-secondaryText">Capacity: {room.capacity} people</p>
            <Link href={`/rooms/${room.id}`} className="inline-block mt-4 px-6 py-2 bg-accent text-white rounded-full hover:bg-blue-600 transition-colors">
                View Room
            </Link>
        </div>
    );
}
