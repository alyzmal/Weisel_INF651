import { scaleY, buildPath } from "./helpers.js"

export function drawLineChart(wrapperId, entries, options = {}) {
    const wrapper = document.getElementById(wrapperId);
    wrapper.innerHTML = ""; // clear old chart

    const width = wrapper.clientWidth;
    const height = 300;
    const padding = 35;

    const padLength = options.padLength || entries.length;
    const xLabelsFn = options.xLabelsFn || ((e,i) => e.date || i+1);

    // Determine axis/text color based on theme
    const isDark = document.body.classList.contains("dark-mode");
    const axisColor = isDark ? "#eee" : "#333";
    const labelColor = axisColor;

    // Build full array with padding if necessary
    const fullEntries = [];
    for (let i = 0; i < padLength; i++) {
        fullEntries.push(entries[i] || { mood: null, energy: null });
    }

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    // ---- Axes ----
    const axisX = document.createElementNS(svg.namespaceURI, "line");
    axisX.setAttribute("x1", padding);
    axisX.setAttribute("x2", width - padding);
    axisX.setAttribute("y1", height - padding);
    axisX.setAttribute("y2", height - padding);
    axisX.setAttribute("stroke", axisColor);
    axisX.setAttribute("stroke-width", "1");
    svg.appendChild(axisX);


    // ---- Points ----
    const xStep = (width - (2 * padding)) / (padLength - 1);

    const moodPoints = fullEntries.map((e, i) => ({
        x: padding + i * xStep,
        y: e.mood !== null ? scaleY(e.mood, height, padding) : null
    }));

    const energyPoints = fullEntries.map((e, i) => ({
        x: padding + i * xStep,
        y: e.energy !== null ? scaleY(e.energy, height, padding) : null
    }));

    // ---- Draw lines ----
    function drawPath(points, color) {
        const validPoints = points.filter(p => p.y !== null);
        if (validPoints.length === 0) return;
        const path = document.createElementNS(svg.namespaceURI, "path");
        path.setAttribute("d", buildPath(validPoints));
        path.setAttribute("stroke", color);
        path.setAttribute("stroke-width", "3");
        path.setAttribute("fill", "none");
        svg.appendChild(path);
        // dots
        validPoints.forEach(pt => {
            const c = document.createElementNS(svg.namespaceURI, "circle");
            c.setAttribute("cx", pt.x);
            c.setAttribute("cy", pt.y);
            c.setAttribute("r", 3);
            c.setAttribute("fill", color);
            svg.appendChild(c);
        });
    }

    drawPath(moodPoints, "#6c63ff");
    drawPath(energyPoints, "#ff6b6b");

    // ---- X-axis labels ----
    fullEntries.forEach((e, i) => {
        const label = xLabelsFn(e, i);
        if (label === null) return;
        const text = document.createElementNS(svg.namespaceURI, "text");
        text.setAttribute("x", padding + i * xStep);
        text.setAttribute("y", height - padding + 15);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "10");
        text.setAttribute("stroke", labelColor);
        text.textContent = label;
        svg.appendChild(text);
    });

    // ---- Optional: Y-axis labels (1–5) ----
    for (let v = 1; v <= 5; v++) {
        const y = scaleY(v, height, padding);
        const text = document.createElementNS(svg.namespaceURI, "text");
        text.setAttribute("x", padding - 5);
        text.setAttribute("y", y + 4); // tweak for vertical alignment
        text.setAttribute("text-anchor", "end");
        text.setAttribute("font-size", "10");
        text.setAttribute("stroke", labelColor);
        text.textContent = v;
        svg.appendChild(text);

        // optional grid line
        const line = document.createElementNS(svg.namespaceURI, "line");
        line.setAttribute("x1", padding);
        line.setAttribute("x2", width - padding);
        line.setAttribute("y1", y);
        line.setAttribute("y2", y);
        line.setAttribute("stroke", axisColor);
        line.setAttribute("stroke-width", "1");
        svg.appendChild(line);
    }

    wrapper.appendChild(svg);
}

