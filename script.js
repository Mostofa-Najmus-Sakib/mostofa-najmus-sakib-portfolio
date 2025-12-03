// DARK / LIGHT THEME
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme",
        document.body.classList.contains("dark-theme") ? "dark" : "light");
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

// LOAD GITHUB PROJECTS
fetch("https://api.github.com/users/Mostofa-Najmus-Sakib/repos")
    .then(res => res.json())
    .then(data => {
        const grid = document.getElementById("project-grid");
        data.slice(0, 6).forEach(repo => {
            grid.innerHTML += `
                <div class="project-card">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available."}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
                </div>
            `;
        });
    });
