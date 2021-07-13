function toggleFunc(x) {
    let obj = document.getElementsByClassName('nav-element');
    for(let i=0;i<obj.length;i++) if(i!=x) obj[i].classList.remove('active');
    obj[x].classList.toggle('active');
}

function showHamburger() {
    let obj = document.getElementsByTagName('nav')[0];
    obj.classList.toggle('show');
}