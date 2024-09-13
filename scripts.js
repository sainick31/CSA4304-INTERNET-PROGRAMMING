function navigateToNextPage() {
    // Prevent form submission
    event.preventDefault();
    
    // Get form data
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
  
    // Save data to localStorage
    localStorage.setItem('from', from);
    localStorage.setItem('to', to);
    localStorage.setItem('date', date);
  
    // Redirect to next page
    window.location.href = 'next-page.html';
  }
  