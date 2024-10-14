// components/RoomDetails.js
import { useRouter } from 'next/navigation';

export default function RoomDetails({ room }) {
    const router = useRouter();

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{room.name}</h1>
            <p className="text-gray-600 text-lg mb-4">Capacity: {room.capacity} people</p>

            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                    {room.description || "This room is perfect for meetings, presentations, and team collaborations. Equipped with all the necessary amenities to facilitate a productive session."}
                </p>
            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Amenities</h2>
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
    );
}
