document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const searchQuery = document.getElementById('searchInput').value;
    if (searchQuery.trim() !== '') {
        // Redirect to Google with the search query
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
});