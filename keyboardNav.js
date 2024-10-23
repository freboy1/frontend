document.addEventListener('keydown', (event) => {
    const navItems = document.querySelectorAll('.nav-link'); // Select all navigation links
    let currentIndex = Array.from(navItems).findIndex(item => document.activeElement === item);

    switch (event.key) {
        case 'ArrowRight':
        // Move to next item
            const nextIndex = (currentIndex + 1) % navItems.length; // Loop back to the first item
            navItems[nextIndex].focus(); // Set focus on the next item
            break
        case 'ArrowLeft':
        // Move to previous item
        const prevIndex = (currentIndex - 1 + navItems.length) % navItems.length; // Loop back to the last item
        navItems[prevIndex].focus(); // Set focus on the previous item
    }
});