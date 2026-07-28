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

/* ===== NAVIGATION AVEC GLISSEMENT ===== */
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const target = link.dataset.page;
        const nextPage = document.getElementById(target);
        const currentPage = document.querySelector(".page.active");

        // Si on clique sur la même page → on ferme juste le menu
        if (currentPage === nextPage) {
            menu.classList.remove("open");
            return;
        }

        // 1. On enlève l'ancienne page
        currentPage.classList.remove("active", "slide-in");

        // 2. On prépare la nouvelle page
        nextPage.classList.add("active");
        
        // 3. On force le navigateur à redémarrer l'animation
        nextPage.classList.remove("slide-in");
        void nextPage.offsetWidth; // astuce importante
        nextPage.classList.add("slide-in");

        // 4. Header compact ou grand
        if (target === "home") {
            header.classList.remove("compact");
        } else {
            header.classList.add("compact");
        }

        // 5. Ferme le menu + scroll en haut
        menu.classList.remove("open");
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
