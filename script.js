function clickMenu() {
    let nav = document.getElementById('nav_links');
    let burgerIcon = document.getElementById('burger');
    let closeIcon = document.getElementById('close');

    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        burgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}