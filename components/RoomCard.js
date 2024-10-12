import Link from 'next/link';

export default function RoomCard({ room }) {
    return (
        <div className="border border-gray-200 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">{room.name}</h2>
            <p className="text-gray-600">Capacity: {room.capacity} people</p>
            <Link href={`/rooms/${room.id}`}>
                <a className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    View Room
                </a>
            </Link>
        </div>
    );
}
