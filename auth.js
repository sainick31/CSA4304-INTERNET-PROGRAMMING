function login(event) {
  event.preventDefault(); // Prevent form from submitting by default

  // Get email and password from the form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple client-side validation
  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate a login request (replace with actual authentication logic)
  const isValidLogin = authenticateUser(email, password);

  if (isValidLogin) {
    alert('Login successful!');
    // Redirect or proceed to the application
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password.');
  }
}

function authenticateUser(email, password) {
  // Simulate checking credentials
  // Replace this with actual server authentication call (e.g., via fetch/axios to an API)
  
  const mockEmail = "user@example.com";  // Replace with actual user data
  const mockPassword = "password123";    // Replace with actual user data
  
  return email === mockEmail && password === mockPassword;
}
