let screenWidth = screen.width;

if(screenWidth < 800) {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('menu-icon').addEventListener('click', displayMenu);
} else {
    document.getElementById('main-menu').style.display = 'block';
    document.getElementById('menu-icon').style.display = 'none';
}


function displayMenu() {
    let mainMenu = document.getElementById('main-menu');

    if(mainMenu.style.display === 'none') {
        mainMenu.style.display = 'block';
    } else {
        mainMenu.style.display = 'none';
    }
}
