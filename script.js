/* =========================================
   SECOND USE — VERSION 1.5
   ========================================= */


/* ================= REUSE DATABASE ================= */

const reuseDatabase = {

    "glass bottle": [
        {
            icon: "🌱",
            title: "Mini Plant Holder",
            description: "Turn the bottle into a simple decorative plant holder.",
            difficulty: "Easy",
            time: "10 mins",
            score: 88
        },
        {
            icon: "🏺",
            title: "Decorative Vase",
            description: "Clean the bottle and use it as a simple flower vase.",
            difficulty: "Easy",
            time: "5 mins",
            score: 82
        },
        {
            icon: "💡",
            title: "Bottle Lamp",
            description: "Transform the bottle into a decorative light piece.",
            difficulty: "Medium",
            time: "30 mins",
            score: 91
        }
    ],

    "plastic bottle": [
        {
            icon: "🌱",
            title: "Hanging Planter",
            description: "Create a small hanging planter from the bottle.",
            difficulty: "Easy",
            time: "15 mins",
            score: 86
        },
        {
            icon: "🖊️",
            title: "Pen Holder",
            description: "Turn the bottle into a simple desk organizer.",
            difficulty: "Easy",
            time: "10 mins",
            score: 80
        },
        {
            icon: "🐦",
            title: "Bird Feeder",
            description: "Reuse the bottle as a simple bird-feeding container.",
            difficulty: "Medium",
            time: "20 mins",
            score: 89
        }
    ],

    "cardboard box": [
        {
            icon: "📦",
            title: "Storage Organizer",
            description: "Decorate the box and use it to organize small items.",
            difficulty: "Easy",
            time: "15 mins",
            score: 90
        },
        {
            icon: "📚",
            title: "Book Holder",
            description: "Reshape the cardboard into a file or book holder.",
            difficulty: "Easy",
            time: "20 mins",
            score: 84
        },
        {
            icon: "🗂️",
            title: "Desk Organizer",
            description: "Create compartments for stationery and small objects.",
            difficulty: "Medium",
            time: "25 mins",
            score: 87
        }
    ],

    "old t-shirt": [
        {
            icon: "👜",
            title: "Reusable Tote Bag",
            description: "Convert an old T-shirt into a reusable bag.",
            difficulty: "Easy",
            time: "20 mins",
            score: 94
        },
        {
            icon: "🧹",
            title: "Cleaning Cloth",
            description: "Cut the fabric into reusable cleaning cloths.",
            difficulty: "Very Easy",
            time: "5 mins",
            score: 85
        },
        {
            icon: "🪴",
            title: "Plant Holder",
            description: "Use strips of fabric to create a hanging plant holder.",
            difficulty: "Medium",
            time: "25 mins",
            score: 88
        }
    ],

    "glass jar": [
        {
            icon: "🌱",
            title: "Mini Plant Holder",
            description: "Use the jar as a small indoor plant container.",
            difficulty: "Easy",
            time: "10 mins",
            score: 86
        },
        {
            icon: "🖊️",
            title: "Pen Stand",
            description: "Decorate the jar and turn it into a stationery holder.",
            difficulty: "Easy",
            time: "5 mins",
            score: 83
        },
        {
            icon: "🏠",
            title: "Storage Container",
            description: "Store buttons, stationery or other small objects.",
            difficulty: "Very Easy",
            time: "5 mins",
            score: 89
        }
    ],

    "tin can": [
        {
            icon: "🖊️",
            title: "Pen Stand",
            description: "Clean and decorate the can as a stationery holder.",
            difficulty: "Easy",
            time: "15 mins",
            score: 82
        },
        {
            icon: "🌱",
            title: "Plant Pot",
            description: "Create a small planter from the empty can.",
            difficulty: "Easy",
            time: "15 mins",
            score: 88
        }
    ],

    "old cd": [
        {
            icon: "🪞",
            title: "Wall Decoration",
            description: "Use old CDs to create reflective wall art.",
            difficulty: "Easy",
            time: "20 mins",
            score: 79
        },
        {
            icon: "☕",
            title: "Coaster",
            description: "Decorate the CD and use it as a drink coaster.",
            difficulty: "Very Easy",
            time: "10 mins",
            score: 84
        }
    ],

    "shoe box": [
        {
            icon: "📦",
            title: "Storage Box",
            description: "Decorate the box and use it for organized storage.",
            difficulty: "Easy",
            time: "20 mins",
            score: 92
        },
        {
            icon: "🗂️",
            title: "Document Organizer",
            description: "Create compartments for papers and documents.",
            difficulty: "Medium",
            time: "30 mins",
            score: 88
        }
    ],

    "newspaper": [
        {
            icon: "🧺",
            title: "Paper Basket",
            description: "Fold or roll newspapers into a useful storage basket.",
            difficulty: "Medium",
            time: "30 mins",
            score: 90
        },
        {
            icon: "🎁",
            title: "Gift Wrapping",
            description: "Use newspaper as creative gift wrapping.",
            difficulty: "Very Easy",
            time: "5 mins",
            score: 81
        }
    ],

    "egg carton": [
        {
            icon: "🌱",
            title: "Seed Starter",
            description: "Use the sections to start small plants.",
            difficulty: "Easy",
            time: "10 mins",
            score: 93
        },
        {
            icon: "🎨",
            title: "Paint Palette",
            description: "Use the sections to hold small amounts of paint.",
            difficulty: "Very Easy",
            time: "2 mins",
            score: 80
        }
    ],

    "coconut shell": [
        {
            icon: "🌱",
            title: "Plant Pot",
            description: "Use the shell as a natural small planter.",
            difficulty: "Medium",
            time: "20 mins",
            score: 94
        },
        {
            icon: "🥣",
            title: "Decorative Bowl",
            description: "Clean and polish the shell into a decorative bowl.",
            difficulty: "Medium",
            time: "30 mins",
            score: 90
        }
    ]
};


/* ================= SMART SEARCH ALIASES ================= */

const aliases = {

    "bottle": [
        "glass bottle",
        "plastic bottle"
    ],

    "jar": [
        "glass jar"
    ],

    "box": [
        "cardboard box",
        "shoe box"
    ],

    "cardboard": [
        "cardboard box"
    ],

    "shirt": [
        "old t-shirt"
    ],

    "tshirt": [
        "old t-shirt"
    ],

    "t-shirt": [
        "old t-shirt"
    ],

    "can": [
        "tin can"
    ],

    "cd": [
        "old cd"
    ],

    "paper": [
        "newspaper"
    ],

    "newspaper": [
        "newspaper"
    ],

    "egg": [
        "egg carton"
    ],

    "coconut": [
        "coconut shell"
    ]
};


/* ================= STATE ================= */

let items =
    JSON.parse(
        localStorage.getItem("secondUseItems")
    ) || [];

let favorites =
    JSON.parse(
        localStorage.getItem("secondUseFavorites")
    ) || [];

let currentIdeas = [];

let currentFilter = "all";


/* ================= DOM READY ================= */

document.addEventListener("DOMContentLoaded", () => {

    displayItems();

    updateImpact();

    setupTheme();

    setupRevealAnimations();

    document
        .getElementById("itemForm")
        .addEventListener("submit", addItem);

});


/* ================= SEARCH ================= */

function handleSearchKey(event) {

    if (event.key === "Enter") {
        searchIdeas();
    }

}


function findMatchingKeys(input) {

    input = input
        .toLowerCase()
        .trim();


    const exact =
        Object.keys(reuseDatabase)
            .filter(key => key === input);


    if (exact.length) {
        return exact;
    }


    if (aliases[input]) {
        return aliases[input];
    }


    return Object.keys(reuseDatabase)
        .filter(key =>
            key.includes(input) ||
            input.includes(key)
        );

}


function searchIdeas() {

    const input =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();


    const container =
        document.getElementById(
            "ideasContainer"
        );


    const message =
        document.getElementById(
            "searchMessage"
        );


    container.innerHTML = "";

    currentIdeas = [];


    if (!input) {

        message.textContent =
            "Please enter an item to find reuse ideas.";

        return;
    }


    const matchedKeys =
        findMatchingKeys(input);


    if (!matchedKeys.length) {

        message.textContent =
            `No ideas found for "${input}". Try bottle, jar, box or t-shirt.`;

        return;
    }


    matchedKeys.forEach(key => {

        reuseDatabase[key]
            .forEach(idea => {

                currentIdeas.push({
                    ...idea,
                    item: key
                });

            });

    });


    renderIdeas();


    message.textContent =
        `${currentIdeas.length} second-life ideas found.`;

}


function renderIdeas() {

    const container =
        document.getElementById(
            "ideasContainer"
        );


    container.innerHTML = "";


    let ideas =
        [...currentIdeas];


    if (currentFilter !== "all") {

        ideas =
            ideas.filter(
                idea =>
                    idea.difficulty === currentFilter
            );

    }


    if (!ideas.length) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No ideas in this filter.</h3>
                <p>Try another difficulty level.</p>
            </div>
        `;

        return;
    }


    ideas.forEach((idea, index) => {

        const isFavorite =
            favorites.some(
                fav =>
                    fav.item === idea.item &&
                    fav.title === idea.title
            );


        const card =
            document.createElement("div");


        card.className =
            "idea-card";


        card.style.animationDelay =
            `${index * 0.06}s`;


        card.innerHTML = `

            <button
                class="favorite-btn"
                onclick='toggleFavorite(${JSON.stringify(
                    idea
                )})'
                aria-label="Favorite"
            >
                ${isFavorite ? "❤️" : "♡"}
            </button>

            <div class="idea-icon">
                ${idea.icon}
            </div>

            <h3>
                ${escapeHTML(idea.title)}
            </h3>

            <p>
                ${escapeHTML(idea.description)}
            </p>

            <div class="idea-meta">
                <span>
                    ${idea.difficulty}
                </span>

                <span>
                    ${idea.time}
                </span>
            </div>

            <div class="item-score">

                <div class="score-label">

                    <span>
                        Second-Life Score
                    </span>

                    <strong>
                        ${idea.score}/100
                    </strong>

                </div>

                <div class="score-bar">

                    <div
                        class="score-bar-fill"
                        style="width:${idea.score}%"
                    ></div>

                </div>

            </div>
        `;


        container.appendChild(card);

    });

}


/* ================= FILTER ================= */

function filterIdeas(filter, button) {

    currentFilter = filter;


    document
        .querySelectorAll(".filter-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    button.classList.add("active");


    renderIdeas();

}


function showFavorites() {

    currentFilter = "favorites";


    document
        .querySelectorAll(".filter-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    const container =
        document.getElementById(
            "ideasContainer"
        );


    container.innerHTML = "";


    if (!favorites.length) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No favorites yet ❤️</h3>
                <p>
                    Click the heart on an idea to save it.
                </p>
            </div>
        `;

        return;
    }


    favorites.forEach((idea, index) => {

        const card =
            document.createElement("div");


        card.className =
            "idea-card";


        card.style.animationDelay =
            `${index * 0.06}s`;


        card.innerHTML = `

            <button
                class="favorite-btn"
                onclick='toggleFavorite(${JSON.stringify(
                    idea
                )})'
            >
                ❤️
            </button>

            <div class="idea-icon">
                ${idea.icon}
            </div>

            <h3>
                ${escapeHTML(idea.title)}
            </h3>

            <p>
                ${escapeHTML(idea.description)}
            </p>

            <div class="idea-meta">
                <span>
                    ${idea.difficulty}
                </span>

                <span>
                    ${idea.time}
                </span>
            </div>

            <div class="item-score">

                <div class="score-label">
                    <span>
                        Second-Life Score
                    </span>

                    <strong>
                        ${idea.score}/100
                    </strong>
                </div>

                <div class="score-bar">
                    <div
                        class="score-bar-fill"
                        style="width:${idea.score}%"
                    ></div>
                </div>

            </div>
        `;


        container.appendChild(card);

    });

}


/* ================= FAVORITES ================= */

function toggleFavorite(idea) {

    const exists =
        favorites.findIndex(
            fav =>
                fav.item === idea.item &&
                fav.title === idea.title
        );


    if (exists !== -1) {

        favorites.splice(exists, 1);

        showToast(
            "Removed from favorites"
        );

    } else {

        favorites.push(idea);

        showToast(
            "Saved to favorites ❤️"
        );

    }


    localStorage.setItem(
        "secondUseFavorites",
        JSON.stringify(favorites)
    );


    if (currentFilter === "favorites") {

        showFavorites();

    } else {

        renderIdeas();

    }


    updateImpact();

}


/* ================= ADD ITEM ================= */

function addItem(event) {

    event.preventDefault();


    const name =
        document
            .getElementById("itemName")
            .value
            .trim();


    const category =
        document
            .getElementById("category")
            .value;


    const condition =
        document
            .getElementById("condition")
            .value;


    const quantity =
        Number(
            document
                .getElementById("quantity")
                .value
        );


    const description =
        document
            .getElementById("description")
            .value
            .trim();


    const score =
        calculateItemScore(
            category,
            condition
        );


    const newItem = {

        id: Date.now(),

        name,

        category,

        condition,

        quantity,

        description,

        score,

        status: "Added"

    };


    items.push(newItem);


    saveItems();

    displayItems();

    updateImpact();


    event.target.reset();


    document
        .getElementById("quantity")
        .value = 1;


    showToast(
        "Item added successfully ♻️"
    );


    document
        .getElementById("items")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= ITEM SCORE ================= */

function calculateItemScore(
    category,
    condition
) {

    let score = 60;


    const categoryBonus = {

        Glass: 15,
        Plastic: 8,
        Paper: 10,
        Metal: 15,
        Textile: 18,
        Wood: 18,
        Other: 5

    };


    const conditionBonus = {

        Good: 18,
        Usable: 12,
        Damaged: 4

    };


    score +=
        categoryBonus[category] || 0;


    score +=
        conditionBonus[condition] || 0;


    return Math.min(
        score,
        100
    );

}


/* ================= DISPLAY ITEMS ================= */

function displayItems() {

    const container =
        document.getElementById(
            "itemsContainer"
        );


    container.innerHTML = "";


    if (!items.length) {

        container.innerHTML = `
            <div class="empty-state">

                <h3>
                    No items yet 🌱
                </h3>

                <p>
                    Add something you want
                    to give a second life.
                </p>

            </div>
        `;

        return;
    }


    items.forEach(item => {

        const card =
            document.createElement("div");


        card.className =
            "item-card";


        card.innerHTML = `

            <h3>
                ${escapeHTML(item.name)}
            </h3>

            <p class="item-info">

                ${escapeHTML(item.category)}
                •
                ${escapeHTML(item.condition)}
                •
                Qty: ${item.quantity}

                ${
                    item.description
                        ? `<br>${escapeHTML(
                            item.description
                        )}`
                        : ""
                }

            </p>


            <span class="status">

                ${
                    item.status === "Reused"
                        ? "✓ Reused"
                        : "Waiting for second life"
                }

            </span>


            <div class="item-score">

                <div class="score-label">

                    <span>
                        Second-Life Score
                    </span>

                    <strong>
                        ${item.score}/100
                    </strong>

                </div>


                <div class="score-bar">

                    <div
                        class="score-bar-fill"
                        style="width:${item.score}%"
                    ></div>

                </div>

            </div>


            <div class="item-actions">

                ${
                    item.status !== "Reused"
                    ?
                    `
                    <button
                        class="small-btn"
                        onclick="markReused(${item.id})"
                    >
                        ✓ Mark Reused
                    </button>
                    `
                    :
                    ""
                }


                <button
                    class="small-btn"
                    onclick="viewIdeas('${escapeHTML(
                        item.name
                    )}')"
                >
                    🔎 Ideas
                </button>


                <button
                    class="small-btn"
                    onclick="deleteItem(${item.id})"
                >
                    Delete
                </button>

            </div>
        `;


        container.appendChild(card);

    });

}


/* ================= MARK REUSED ================= */

function markReused(id) {

    const item =
        items.find(
            item => item.id === id
        );


    if (!item) return;


    item.status = "Reused";


    saveItems();

    displayItems();

    updateImpact();


    showToast(
        "Amazing! You gave it a second life 🌱"
    );

}


/* ================= DELETE ================= */

function deleteItem(id) {

    const confirmed =
        confirm(
            "Remove this item from My Items?"
        );


    if (!confirmed) return;


    items =
        items.filter(
            item => item.id !== id
        );


    saveItems();

    displayItems();

    updateImpact();


    showToast(
        "Item removed"
    );

}


/* ================= VIEW IDEAS ================= */

function viewIdeas(itemName) {

    document
        .getElementById("searchInput")
        .value = itemName;


    currentFilter = "all";


    document
        .querySelectorAll(".filter-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    document
        .querySelector(".filter-btn")
        .classList.add("active");


    document
        .getElementById("find")
        .scrollIntoView({
            behavior: "smooth"
        });


    searchIdeas();

}


/* ================= IMPACT ================= */

function updateImpact() {

    const reused =
        items.filter(
            item => item.status === "Reused"
        ).length;


    const total =
        items.length;


    const favoriteTotal =
        favorites.length;


    document
        .getElementById("reusedCount")
        .textContent = reused;


    document
        .getElementById("favoriteCount")
        .textContent =
        favoriteTotal;


    document
        .getElementById("totalItemsCount")
        .textContent =
        total;


    document
        .getElementById("secondLifeCount")
        .textContent =
        reused;


    let progress = 0;


    if (total > 0) {

        progress =
            Math.round(
                (reused / total) * 100
            );

    }


    document
        .getElementById("progressFill")
        .style.width =
        `${progress}%`;


    document
        .getElementById("progressText")
        .textContent =
        `${progress}%`;


    const insight =
        document.getElementById(
            "impactInsight"
        );


    if (total === 0) {

        insight.textContent =
            "🌱 Start by adding your first item.";

    } else if (reused === total) {

        insight.textContent =
            "🏆 Amazing! Every item you've tracked has found a second life.";

    } else if (reused > 0) {

        insight.textContent =
            `🌿 You've already given ${reused} item${reused > 1 ? "s" : ""} a second life. Keep going!`;

    } else {

        insight.textContent =
            `♻️ You have ${total} item${total > 1 ? "s" : ""} waiting for a second life.`;

    }

}


/* ================= LOCAL STORAGE ================= */

function saveItems() {

    localStorage.setItem(
        "secondUseItems",
        JSON.stringify(items)
    );

}


/* ================= DARK MODE ================= */

function setupTheme() {

    const savedTheme =
        localStorage.getItem(
            "secondUseTheme"
        );


    const toggle =
        document.getElementById(
            "themeToggle"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark"
        );

        toggle.textContent = "☀️";

    }


    toggle.addEventListener(
        "click",
        toggleTheme
    );

}


function toggleTheme() {

    document.body.classList.toggle(
        "dark"
    );


    const dark =
        document.body.classList.contains(
            "dark"
        );


    localStorage.setItem(
        "secondUseTheme",
        dark ? "dark" : "light"
    );


    document
        .getElementById(
            "themeToggle"
        )
        .textContent =
        dark ? "☀️" : "🌙";

}


/* ================= SCROLL ================= */

function scrollToAddItem() {

    document
        .getElementById("add")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= TOAST ================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* ================= REVEAL ANIMATION ================= */

function setupRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        element =>
            observer.observe(element)
    );

}


/* ================= HTML SAFETY ================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}