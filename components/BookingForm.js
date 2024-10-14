"use client";

import { useState } from 'react';

export default function BookingForm({ roomId, onBookingComplete }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const bookRoom = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ roomId, name, date, time }),
        });

        const data = await response.json();

        if (data.success) {
            setMessage('Room booked successfully!');
            onBookingComplete(data.data);
            setName('');
            setDate('');
            setTime('');
        } else {
            setMessage('Failed to book room.');
        }
    };

    return (
        <form onSubmit={bookRoom} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Book Room</h2>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Book Room
            </button>
            {message && <p className="text-green-500 mt-2">{message}</p>}
        </form>
    );
}
