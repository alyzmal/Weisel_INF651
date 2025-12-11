// -----------------------------------------------------------------------------
// SEED DATA LOADER
// Creates a bunch of fake daily entries to test Week/Month/Year charts
// -----------------------------------------------------------------------------

function seedTestData() {

    const tags = [
        "Sleep Issues",
        "Stress",
        "Social Anxiety",
        "Workload",
        "Exercise",
        "Creative Burst"
    ];

    const today = new Date();

    // Generate 90 days of entries
    for (let i = 0; i < 90; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i);

        const key = date.toISOString().slice(0, 10);

        // Skip a random 20% so it looks more "human"
        if (Math.random() < 0.2) continue;

        const entry = {
            date: key,
            mood: Math.floor(Math.random() * 5) + 1,    // 1–5
            energy: Math.floor(Math.random() * 5) + 1,  // 1–5
            tags: tags.filter(() => Math.random() < 0.3), // 0–2ish random tags
            notes: "Auto-generated test entry"
        };

        localStorage.setItem(key, JSON.stringify(entry));
    }

    console.log("Seed data loaded: 90 days of fake entries created.");
};

seedTestData();
