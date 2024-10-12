export default function BookingsPage() {
    const bookings = [
        { id: 1, roomName: 'Conference Room A', date: '2024-10-15', time: '10:00 AM' },
        { id: 2, roomName: 'Meeting Room B', date: '2024-10-16', time: '2:00 PM' },
    ];

    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-6">Your Bookings</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id} className="mb-4">
                        <p className="font-semibold">{booking.roomName}</p>
                        <p>{booking.date} at {booking.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
