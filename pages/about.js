const yearSlider = document.getElementById('year-slider');
const yearDisplay = document.getElementById('display-year');
const description = document.getElementById('description');
const bars = document.querySelectorAll('.bar');

const yearDescriptions = {
    2018: "Started my journey in backend and front-end.\n" +
          "Worked on various freelance projects.",
    2019: "Joined a local freelancer group as a Junior backend Developer.\n" +
          "Explored new technologies and frameworks.\n" +
          "Worked on various projects for private companies.",
    2020: "Built my first full-stack web application in React, Node.js, and other frameworks.",
    2021: "Joined college for higher knowledge.",
    2022: "Built college projects using OpenCV.",
    2023: "Focused on building impactful digital products.",
    2024: "Focused on building impactful Networking and AI/ML."
};

yearSlider.addEventListener('input', (event) => {
    const selectedYear = event.target.value;

    // Update the active bars and text
    updateBars(selectedYear);
    yearDisplay.parentElement.classList.add('fade');

    setTimeout(() => {
        yearDisplay.textContent = selectedYear;
        description.innerHTML = yearDescriptions[selectedYear].replace(/\n/g, '<br>'); // Replace newlines with <br>
        yearDisplay.parentElement.classList.remove('fade');
    }, 150);
});

function updateBars(selectedYear) {
    bars.forEach((bar, index) => {
        const year = 2015 + index;
        if (year <= selectedYear) {
            bar.classList.add('active');
        } else {
            bar.classList.remove('active');
        }
    });
}
