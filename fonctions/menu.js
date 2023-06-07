menuOnResize();
document.addEventListener('resize', menuOnResize);

function menuOnResize() {
    let screenWidth = screen.width;

    if (screenWidth < 800) {
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('menu-icon').addEventListener('click', displayMenu);
    }
}


function displayMenu() {
    let mainMenu = document.getElementById('main-menu');

    if (mainMenu.style.display === 'none') {
        mainMenu.style.display = 'block';
    } else {
        mainMenu.style.display = 'none';
    }
}
