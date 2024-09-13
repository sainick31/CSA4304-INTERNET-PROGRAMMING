function saveUserDetails() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const mobile = document.getElementById('mobile').value;
  
    // Save user details to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);
    localStorage.setItem('mobile', mobile);
  
    // Redirect to booking details page
    window.location.href = 'book.html';
  }
  