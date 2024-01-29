document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll(".container div");

    panels.forEach((panel, index) => {
        panel.addEventListener("click", function () {
            // Remove 'active' class from all panels
            panels.forEach((p) => p.classList.remove("active"));

            // Add 'active' class to the clicked panel
            panel.classList.add("active");

            // Update opacity of corresponding h3 elements
            const h3Elements = document.querySelectorAll(".container h3");
            h3Elements.forEach((h3, h3Index) => {
                h3.style.opacity = h3Index === index ? 1 : 0;
            });
        });
    });
});
