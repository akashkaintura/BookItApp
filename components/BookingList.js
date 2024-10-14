"use client";

import { useEffect, useState } from 'react';

export default function BookingList() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('/api/bookings')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setBookings(data.data);
                }
            });
    }, []);

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
            {bookings.length > 0 ? (
                <ul className="space-y-2">
                    {bookings.map((booking) => (
                        <li
                            key={booking.id}
                            className="bg-gray-100 p-4 rounded-lg shadow-md"
                        >
                            <p><strong>Name:</strong> {booking.name}</p>
                            <p><strong>Date:</strong> {booking.date}</p>
                            <p><strong>Time:</strong> {booking.time}</p>
                            <p><strong>Room ID:</strong> {booking.roomId}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No bookings available.</p>
            )}
        </div>
    );
}
