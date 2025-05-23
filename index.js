const all = document.getElementById("all");
const active = document.getElementById("active");
const inActive = document.getElementById("inactive");
const removeButton = document.getElementById("remove");
const cardContainer = document.getElementById("content");
const card = document.querySelectorAll(".card");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

const extensions = [
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
  ]

 //filter show extensions

function showExtensions (extensions) {
    cardContainer.innerHTML = ``;
    

    extensions.forEach((extension) => {
        const card = document.createElement("div");
        card.classList.add("card");


        let toggleIcon = "";
        if (extension.isActive) {
            toggleIcon = `<i class="fa-solid fa-toggle-on"></i>`;
        } else {
            toggleIcon = `<i class="fa-solid fa-toggle-off"></i>`;
        }

        card.innerHTML = `
            <div class="upper">
                <img src="${extension.logo}" alt="">
                <div>
                    <h2>${extension.name}</h2>
                    <P>${extension.description}</P>
                </div>
            </div>
            <div class="lower">
                <button id="remove">Remove</button> 
                ${toggleIcon}
            </div>              
        `;
        cardContainer.appendChild(card);
    });
}
showExtensions(extensions);

function clearTabStyles() {
    all.style.backgroundColor = "hsl(226, 11%, 37%)";
    active.style.backgroundColor = "hsl(226, 11%, 37%)";
    inActive.style.backgroundColor = "hsl(226, 11%, 37%)";
}

active.addEventListener('click', () => {
    clearTabStyles();
    const activeExtensions = extensions.filter((extension) => extension.isActive === true);
    showExtensions(activeExtensions);
    active.style.backgroundColor = "hsl(3, 77%, 44%)";
})


inActive.addEventListener('click', () => {
    clearTabStyles();
    const inActiveExtensions = extensions.filter((extension) => extension.isActive === false);
    showExtensions(inActiveExtensions);
    inActive.style.backgroundColor = "hsl(3, 77%, 44%)";
})

all.addEventListener('click', () => {
    clearTabStyles();
    showExtensions(extensions);
    all.style.backgroundColor = "hsl(3, 77%, 44%)";
})

sun.addEventListener('click', () => {
    document.body.style.backgroundColor = "#091540";
    sun.style.display = "none";
    moon.style.display = "block";
})
moon.addEventListener('click', () => {
    
    sun.style.display = "block";
    moon.style.display = "none";
});