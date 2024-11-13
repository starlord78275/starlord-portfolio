document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        // Get the image source from the data-image attribute
        const imgSrc = this.getAttribute('data-image');
        const projectImg = document.getElementById('project-img');
        
        // Set the image source and apply opacity for fade-in effect
        projectImg.style.opacity = 0; // Start with opacity 0 for smooth fade
        setTimeout(() => {
            projectImg.src = imgSrc;
            projectImg.style.opacity = 1; // Fade-in effect
        }, 100); // Adjust timing as needed for smoother effect
    });

    item.addEventListener('click', function() {
        // Create URL-friendly project name for navigation
        const projectName = this.textContent.trim().toLowerCase().replace(/ /g, '-');
        window.location.href = `${projectName}.html`; // Redirect to individual project page
    });
});
