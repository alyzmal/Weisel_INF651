/* Format and tag helpers */

// Get YYYY-MM-DD string
function fmt(date) {
    return date.toISOString().slice(0, 10);
}

// Load a single entry
function loadEntry(dateStr) {
    const data = localStorage.getItem(dateStr);
    return data ? JSON.parse(data) : null;
}

// Count tags across entries
function computeTagCounts(entries) {
    const counts = {};
    entries.forEach(e => {
        if (Array.isArray(e.tags)) {
            e.tags.forEach(t => counts[t] = (counts[t] || 0) + 1);
        }
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

// Render tag list into a UL
function renderTags(tagPairs, ulElement) {
    ulElement.innerHTML = "";
    if (tagPairs.length === 0) {
        ulElement.innerHTML = "<li>No tags yet.</li>";
        return;
    }

    tagPairs.forEach(([tag, count]) => {
        const li = document.createElement("li");
        li.textContent = `${tag} (${count})`;
        ulElement.appendChild(li);
    });
}

/* Date range helpers */

// Returns all entries for the current calendar week (Sunday → Saturday)
function getCurrentWeekEntries() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const sunday = new Date(now);
    sunday.setDate(now.getDate() - day);

    const entries = [];

    for (let i = 0; i < 7; i++) {
        const d = new Date(sunday);
        d.setDate(sunday.getDate() + i);
        const e = loadEntry(fmt(d));
        if (e) entries.push({ date: fmt(d), ...e });
    }
    return entries;
}

// Returns entries in the current calendar month
function getCurrentMonthEntries() {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();

    const entries = [];
    const cursor = new Date(y, m, 1);

    while (cursor.getMonth() === m) {
        const e = loadEntry(fmt(cursor));
        if (e) entries.push({ date: fmt(cursor), ...e });
        cursor.setDate(cursor.getDate() + 1);
    }

    return entries;
}

// Returns average mood/energy for each month of the current year
function getCurrentYearMonthlyAverages() {
    const now = new Date();
    const y = now.getFullYear();

    const months = Array.from({ length: 12 }, (_, i) => ({
        month: i,
        mood: [],
        energy: [],
        tags: []  // optional, if you want tag counts too
    }));

    for (let m = 0; m < 12; m++) {
        const cursor = new Date(y, m, 1);
        while (cursor.getMonth() === m) {
            const e = loadEntry(fmt(cursor));
            if (e) {
                months[m].mood.push(e.mood);
                months[m].energy.push(e.energy);
                months[m].tags.push(...(e.tags || []));
            }
            cursor.setDate(cursor.getDate() + 1);
        }
    }

    // Convert to single object per month, with averages
    return months.map(obj => ({
        mood: obj.mood.length ? obj.mood.reduce((a,b)=>a+b,0)/obj.mood.length : null,
        energy: obj.energy.length ? obj.energy.reduce((a,b)=>a+b,0)/obj.energy.length : null,
        tags: obj.tags
    }));
}

/* SVG helpers */

// Maps mood/energy range (1–5) to Y-position in the SVG
function scaleY(value, height, padding) {
    const usable = height - padding * 2;
    const pct = (value - 1) / 4;      // 1→0%, 5→100%
    return height - padding - pct * usable;
}

// Builds an SVG <path> from an array of {x, y} points.
function buildPath(points) {
    if (points.length === 0) return "";
    return points.map((p, i) =>
        (i === 0 ? "M" : "L") + ` ${p.x},${p.y}`
    ).join(" ");
}

export {
    fmt,
    loadEntry,
    computeTagCounts,
    renderTags,
    getCurrentWeekEntries,
    getCurrentMonthEntries,
    getCurrentYearMonthlyAverages,
    scaleY,
    buildPath,
};
