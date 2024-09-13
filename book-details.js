function getBookingDetails() {
  return {
    from: localStorage.getItem('from'),
    to: localStorage.getItem('to'),
    date: localStorage.getItem('date'),
    busName: localStorage.getItem('busName'),
    startTime: localStorage.getItem('startTime'),
    endTime: localStorage.getItem('endTime'),
    price: localStorage.getItem('price') + 'rs',
    seats: JSON.parse(localStorage.getItem('selectedSeats')).join(', '),
    name: localStorage.getItem('name'),
    age: localStorage.getItem('age'),
    gender: localStorage.getItem('gender'),
    mobile: localStorage.getItem('mobile')
  };
}

function displayBookingDetails() {
  const details = getBookingDetails();
  const bookingDetailsDiv = document.getElementById('bookingDetails');
  bookingDetailsDiv.innerHTML = `
    <p><strong>From:</strong> ${details.from}</p>
    <p><strong>To:</strong> ${details.to}</p>
    <p><strong>Date:</strong> ${details.date}</p>
    <p><strong>Bus Name:</strong> ${details.busName}</p>
    <p><strong>Time:</strong> ${details.startTime} - ${details.endTime}</p>
    <p><strong>Price:</strong> ${details.price}</p>
    <p><strong>Seats:</strong> ${details.seats}</p>
    <p><strong>Name:</strong> ${details.name}</p>
    <p><strong>Age:</strong> ${details.age}</p>
    <p><strong>Gender:</strong> ${details.gender}</p>
    <p><strong>Mobile:</strong> ${details.mobile}</p>
  `;
}

// Display the booking details on page load
window.onload = displayBookingDetails;
