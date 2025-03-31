function clickMenu() {
    let menu = document.getElementById('nav');
    let nav = document.getElementById('nav_links')
    let burgerIcon = document.getElementById('burger');
    let closeIcon = document.getElementById('close');
    
    menu.classList.toggle('open');
    nav.classList.toggle('open');

    if (menu.classList.contains('open')) {
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        burgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}