const darkModeToggle = document.getElementById('darkModeToggle');

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerHTML = (document.body.classList.contains('dark-mode')) ? '☀️' : '🌙';
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? true : false);
});
