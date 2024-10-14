"use client";

import { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';

export default function HomePage() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/rooms?_=${new Date().getTime()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setRooms(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading rooms...</p>;

  if (rooms.length === 0) return <p>No rooms available.</p>;

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Available Meeting Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
