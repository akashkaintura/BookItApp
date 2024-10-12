import RoomCard from '../components/RoomCard';

export default function HomePage() {
  const rooms = [
    { id: 1, name: 'Conference Room A', capacity: 12 },
    { id: 2, name: 'Meeting Room B', capacity: 6 },
    { id: 3, name: 'Workshop Room C', capacity: 15 },
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Available Meeting Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
