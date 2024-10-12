import { useState } from 'react';

export default function BookingForm({ room }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Booking submission logic can be added here
        alert(`Room booked successfully by ${name} on ${date} at ${time}`);
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
            <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Book Room
            </button>
        </form>
    );
}
