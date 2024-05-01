//DarkMode
const darkModeSwitch = document.getElementById('dark-mode-switch');

const body = document.body;
const labels = document.querySelectorAll('.dark');
const logo = document.getElementById('logo');
const sidebarMenu = document.getElementById('sidebarMenu')

let darkMode = false;

darkModeSwitch.addEventListener('change', () => {
    darkMode = !darkMode;
    if (darkMode) {
        body.classList.toggle('dark-mode');
        labels.forEach(div => div.classList.add('dark-mode-labels'));
        logo.src = 'assets/images/alarado-icon-homepage-dark.svg';
        sidebarMenu.src = 'assets/images/menu-ligth.svg'
    } else {
        body.classList.toggle('dark-mode');
        labels.forEach(div => div.classList.remove('dark-mode-labels'));
        logo.src = 'assets/images/alarado-icon-homepage.svg';
        sidebarMenu.src = 'assets/images/menu-dark.svg'
    }
});


//Sidebar
document.getElementById('toggleBtn').addEventListener('click', () => {
    document.getElementById('sidebar').style.width = '300px';
});

document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('sidebar').style.width = '0';
});
