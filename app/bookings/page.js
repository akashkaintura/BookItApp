import BookingList from '../../components/BookingList';

export default function BookingsPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">All Bookings</h1>
            <BookingList />
        </div>
    );
}
