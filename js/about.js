document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.getElementById("hero-section");
    const travelDiaries = document.getElementById("travel-diaries");

    // Trigger transition after 3 seconds
    setTimeout(() => {
        heroSection.classList.add("hidden"); // Hide hero section
        travelDiaries.classList.remove("hidden"); // Show travel diaries
    }, 3000);
});
