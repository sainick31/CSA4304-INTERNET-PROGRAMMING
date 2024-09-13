document.addEventListener('DOMContentLoaded', () => {
  const seatsContainer = document.getElementById('seatsContainer');
  
  for (let row = 1; row < 10; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'seat-row';

    const rowLetter = String.fromCharCode(64 + row); // Convert row number to letter (A, B, C, ...)

    for (let col = 1; col <= 4; col++) {
      const seatNumber = `${rowLetter}${col}`;
      const seat = document.createElement('button');
      seat.className = 'seat';
      seat.textContent = seatNumber;
      seat.onclick = () => toggleSeatSelection(seat);

      // Add seat to the row
      rowDiv.appendChild(seat);

      // Add a spacer between the two columns
      if (col === 2) {
        const spacer = document.createElement('div');
        spacer.className = 'seat-spacer';
        rowDiv.appendChild(spacer);
      }
    }
    // Add row to the container
    seatsContainer.appendChild(rowDiv);
  }
});
a
function toggleSeatSelection(seat) {
  seat.classList.toggle('selected');
}

function confirmSeats() {
  const selectedSeats = [];
  document.querySelectorAll('.seat.selected').forEach(seat => {
    selectedSeats.push(seat.textContent);
  });

  if (selectedSeats.length > 0) {
    // Save selected seats to localStorage
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    // Redirect to user details page
    window.location.href = 'user-details.html';
  } else {
    alert('Please select at least one seat.');
  }
}
