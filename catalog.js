
    function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').textContent = now.toLocaleString();
    }
    setInterval(updateDateTime, 1000); // Update every second
    updateDateTime(); // Initial call

