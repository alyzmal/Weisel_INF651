# Psychronic

### A lightweight, browser-based mood & energy journaling app

Psychronic is a fully client-side emotion journaling tool that lets you track your daily mood, energy, and contextual tags, then visualize your emotional trends over time. All data is stored securely in your browser—no login, no backend, no external dependencies.

## 🚀 Getting Started

Simply open the app in your browser.
There is no installation, no setup, and no account required.

All data is saved automatically to `localStorage`.

## 📝 Making a Daily Entry

The “Daily Entry” tab is where you record each day’s state.

### 1. Set Your Mood

Use the **mood slider** (1-5 scale) to rate your overall emotional state for the day.

### 2. Set Your Energy

Use the **energy slider** (1-5 scale) to describe how energized, drained, or neutral you felt.

### 3. Add Tags

Select any number of **tags** that influenced your day.
Examples include: Work, Social, Creative, Stress, Rest, Focus, etc.

Tags help fuel the analytics views.

### 4. Optional Notes

You can add a **free-form text note** to capture anything important or unique about the day.

### 5. Save

Press **Save Entry**.
You can only save **one entry per calendar day**, so be mindful.

Entries persist automatically in your browser.

## 📊 Viewing Your Analytics

The “Analytics” section shows three different time-based summaries using line charts and tag breakdowns.

**Week View**

- Shows your **mood and energy** for the current week (Sunday → Saturday).

- Highlights your **top tags of the week**.

- Useful for short-term emotional fluctuations and recent patterns.

**Month View**

- Displays every day of the current month.

- Mood and energy trends appear as two lines on the same chart.

- Includes your **most frequent monthly tags**.

- Missing days appear blank but are included for visual spacing.

**Year View**

- Shows **monthly averages** for mood and energy.

- Reveals high-level trends such as seasonal changes or long-term shifts.

- Also displays your **most-used tags of the year**.

All charts are dynamically generated using SVG and respond to light/dark mode.

## 🌗 Dark Mode

Use the toggle in the header to switch between **light** and **dark** themes.
Charts redraw automatically to match the selected mode.

Your theme preference is saved and restored on your next visit.

## 💾 Data Storage

Psychronic is fully client-side. All entries, notes, tags, and preferences are stored in your browser’s `localStorage`.

- **Your data never leaves your device.**

- Clearing browser storage will erase your journal.

- No backend or internet connection is needed.

## 📱 Mobile Use

The app is responsive and works on mobile browsers.
For the best mobile experience:

- Use a modern browser (Chrome, Safari, Firefox).

- Rotate to landscape for the analytics charts if needed.
