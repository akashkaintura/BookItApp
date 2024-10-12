export default function BookingList() {
    const bookings = [
        { id: 1, roomName: 'Conference Room A', date: '2024-10-15', time: '10:00 AM', bookedBy: 'Alice' },
        { id: 2, roomName: 'Meeting Room B', date: '2024-10-16', time: '2:00 PM', bookedBy: 'Bob' },
    ];

    return (
        <div>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id} className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm">
                        <p className="font-semibold">{booking.roomName}</p>
                        <p>Date: {booking.date} at {booking.time}</p>
                        <p>Booked By: {booking.bookedBy}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
