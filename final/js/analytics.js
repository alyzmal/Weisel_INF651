import { computeTagCounts, renderTags, getCurrentWeekEntries, getCurrentMonthEntries, getCurrentYearMonthlyAverages } from "./helpers.js";
import { drawLineChart } from "./charts.js";

function updateWeek() {
    const entries = getCurrentWeekEntries();
    const sunday = new Date();
    sunday.setDate(sunday.getDate() - sunday.getDay());

    drawLineChart("week-line-chart", entries, {
        padLength: 7,
        startDate: sunday,
        xLabelsFn: (e, i) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i]
    });

    renderTags(computeTagCounts(entries), document.querySelector("#week-tags ul"));
}

function updateMonth() {
    const entries = getCurrentMonthEntries();
    const firstOfMonth = new Date();
    firstOfMonth.setDate(1);

    drawLineChart("month-line-chart", entries, {
        padLength: 31,
        startDate: firstOfMonth,
        xLabelsFn: (e, i) => (i + 1)
    });

    renderTags(computeTagCounts(entries), document.querySelector("#month-tags ul"));
}

function updateYear() {
    const monthly = getCurrentYearMonthlyAverages();

    drawLineChart("year-line-chart", monthly, {
        padLength: 12,
        startDate: new Date(new Date().getFullYear(), 0, 1),
        xLabelsFn: (e, i) => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]
    });

    renderTags(computeTagCounts(monthly), document.querySelector("#year-tags ul"));
}

document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const views = document.querySelectorAll(".analytics-view");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.view;

            views.forEach(v => v.hidden = true);
            document.getElementById(`${target}-view`).hidden = false;

            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            if (target === "week") updateWeek();
            if (target === "month") updateMonth();
            if (target === "year") updateYear();
        });
    });
});
