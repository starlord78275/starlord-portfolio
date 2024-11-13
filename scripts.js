document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero-section');
    const videoSection = document.getElementById('video-section');

    // Function to hide the hero section and show the video section after a delay
    setTimeout(() => {
        heroSection.classList.add('hidden');
        setTimeout(() => {
            videoSection.classList.add('visible');
        }, 1000); // Wait for the fade-out transition before showing the video
    }, 3000); // Adjust the delay (3000ms = 3s) as needed before hiding the hero section
});



