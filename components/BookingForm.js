"use client";

import { useState } from 'react';

export default function BookingForm({ room }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                room: room._id,
                name,
                date,
                time,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    alert('Booking created successfully!');
                    setName('');
                    setDate('');
                    setTime('');
                }
            });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Time</label>
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark">
                Book Room
            </button>
        </form>
    );
}