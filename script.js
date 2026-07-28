const menuBtn   = document.getElementById("menu-btn");
const menu      = document.getElementById("menu");
const header    = document.getElementById("header");
const pages     = document.querySelectorAll(".page");
const menuLinks = document.querySelectorAll(".menu-link");
const themeBtn  = document.getElementById("theme-btn");

/* ===== MENU ===== */
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
});

/* ===== NAVIGATION ===== */
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const target = link.dataset.page;

        // Change de page
        pages.forEach(page => page.classList.remove("active"));
        document.getElementById(target).classList.add("active");

        // Header compact ou grand
        if (target === "home") {
            header.classList.remove("compact");
        } else {
            header.classList.add("compact");
        }

        // Ferme le menu
        menu.classList.remove("open");

        // Remonte en haut
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

/* ===== THÈME ===== */
function applySystemTheme() {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        themeBtn.textContent = "☀️";
    } else {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        themeBtn.textContent = "🌙";
    }
}

applySystemTheme();

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", applySystemTheme);

themeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        themeBtn.textContent = "🌙";
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        themeBtn.textContent = "☀️";
    }
});

/* ===== VISIONNEUSE ===== */
const viewer    = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const arts      = document.querySelectorAll(".art:not(.video)");

arts.forEach(img => {
    img.addEventListener("click", () => {
        viewerImg.src = img.src;
        viewer.style.display = "flex";
    });
});

viewer.addEventListener("click", () => {
    viewer.style.display = "none";
});
