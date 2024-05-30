document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('hp').value;
    const checkin = document.getElementById('checkin').value;
    const nights = parseInt(document.getElementById('malam').value);
    const roomType = document.getElementById('room').value;
    const bedType = document.getElementById('bed').value;
    const paymentMethod = document.getElementById('payment').value;

    const roomPrices = {
        standard: 500000,
        deluxe: 750000,
        suite: 1000000
    };

    const bedPrices = {
        single: 0,
        double: 100000
    };

    const roomPrice = roomPrices[roomType];
    const bedPrice = bedPrices[bedType];
    const totalPrice = (roomPrice + bedPrice) * nights;

    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkinDate);
    checkoutDate.setDate(checkinDate.getDate() + nights);

    const bookingId = 'BK' + Date.now();
    const bookingDate = new Date().toLocaleDateString();
    const bookingTime = new Date().toLocaleTimeString();

    const summary = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>No. HP:</strong> ${phone}</p>
        <p><strong>Check-in:</strong> ${checkin}</p>
        <p><strong>Check-out:</strong> ${checkoutDate.toISOString().split('T')[0]}</p>
        <p><strong>Lama:</strong> ${nights} malam</p>
        <p><strong>Tipe Kamar:</strong> ${roomType.charAt(0).toUpperCase() + roomType.slice(1)}</p>
        <p><strong>Tipe Kasur:</strong> ${bedType.charAt(0).toUpperCase() + bedType.slice(1)}</p>
        <p><strong>Metode Pembayaran:</strong> ${paymentMethod}</p>
        <p><strong>Total Bayar:</strong> Rp. ${totalPrice}</p>
    `;
    
    document.getElementById('summary').innerHTML = summary;

    alert(`Booking ID: ${bookingId}\nBooking Date: ${bookingDate}\nBooking Time: ${bookingTime}\nName: ${name}\nPhone Number: ${phone}\nCheck-in Date: ${checkin}\nCheck-out Date: ${checkoutDate.toISOString().split('T')[0]}\nTotal Price: Rp. ${totalPrice}`);
});
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('bookingForm').reset();
    document.getElementById('summary').innerHTML = '';
});