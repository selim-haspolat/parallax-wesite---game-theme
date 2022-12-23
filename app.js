var colorChange = document.querySelector(':root');

function set_dark() {
    colorChange.style.setProperty('--dark', 'white');
    colorChange.style.setProperty('--light', 'black');
    colorChange.style.setProperty('--lightGray', '#bebebe');
}
function set_light() {
    colorChange.style.setProperty('--dark', 'black');
    colorChange.style.setProperty('--light', '#f1f1f1');
    colorChange.style.setProperty('--lightGray', '#555');
}