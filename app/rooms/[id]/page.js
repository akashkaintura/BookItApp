import BookingForm from '../../../components/BookingForm';

export default function RoomDetails({ params }) {
    const { id } = params;
    const room = { id, name: 'Conference Room A', capacity: 12, description: 'A spacious room ideal for large meetings.' };

    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold">{room.name}</h1>
            <p className="text-gray-600 mb-4">Capacity: {room.capacity} people</p>
            <p className="text-gray-700">{room.description}</p>
            <BookingForm room={room} />
        </div>
    );
}
