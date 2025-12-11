// DOM elements
const openBtn = document.getElementById('openDailyReport');
const entryContent = document.getElementById('daily-entry');
const submitBtn = document.getElementById('submitDailyReport');

// Identify today's key
const todayKey = new Date().toISOString().slice(0,10); // 'YYYY-MM-DD'

// Initialize
if(localStorage.getItem(todayKey)) {
    // Entry exists for today: keep blurred & hide button
    entryContent.classList.add('blurred');
    openBtn.style.display = 'none';
} else {
    // Not yet entered: keep blurred but show button
    entryContent.classList.add('blurred');
}

// Begin entry
openBtn.addEventListener('click', () => {
    entryContent.classList.remove('blurred');
    entryContent.classList.add('active');
    openBtn.style.display = 'none';
});

// Submit entry
submitBtn.addEventListener('click', () => {
    const mood = document.getElementById('mood').value;
    const energy = document.getElementById('energy').value;
    const tags = Array.from(document.querySelectorAll('input[name="tags"]:checked')).map(el => el.value);
    const notes = document.getElementById('notes').value;

    const entryData = { mood, energy, tags, notes, date: todayKey };

    try {
        localStorage.setItem(todayKey, JSON.stringify(entryData));

        // Feedback: success
        const dailyReport = document.getElementById('daily-report');
        dailyReport.classList.remove('error');
        dailyReport.classList.add('success');

        // Re-blur content
        entryContent.classList.remove('active');
        entryContent.classList.add('blurred');

        setTimeout(() => dailyReport.classList.remove('success'), 2000);
    } catch(err) {
        const dailyReport = document.getElementById('daily-report');
        dailyReport.classList.remove('success');
        dailyReport.classList.add('error');

        setTimeout(() => dailyReport.classList.remove('error'), 3000);
    }
});

