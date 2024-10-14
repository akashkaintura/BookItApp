"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RoomDetails({ params }) {
    const { id } = params;
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track error state
    const router = useRouter();

    useEffect(() => {
        if (id) {
            fetch(`/api/rooms/${id}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Failed to fetch room details");
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data.success) {
                        setRoom(data.data);
                    } else {
                        setError("Room not found");
                    }
                })
                .catch((err) => {
                    console.error("Error fetching room:", err);
                    setError("Failed to load room details.");
                })
                .finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) return <p className="text-center py-10">Loading room details...</p>;

    if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full mx-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{room.name}</h1>
                <p className="text-gray-600 text-lg mb-4">Capacity: {room.capacity} people</p>
                <div className="mb-4 text-gray-700 leading-relaxed">
                    <p>{room.description || "This room is perfect for meetings, presentations, and team collaborations. Equipped with all the necessary amenities to facilitate a productive session."}</p>
                </div>
                <div className="mb-6">
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                        <li>Wi-Fi Access</li>
                        <li>Projector & Screen</li>
                        <li>Whiteboard & Markers</li>
                        <li>Comfortable Seating</li>
                        <li>AC & Ventilation</li>
                    </ul>
                </div>
                <button
                    onClick={() => router.push('/rooms')}
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Back to Room List
                </button>
            </div>
        </div>
    );
}
