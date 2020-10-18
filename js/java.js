function myFunction() {
    var x = document.getElementsByClassName('navigation')[0];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


var y = document.getElementById('my_nav');
var sticky = y.offsetTop;

function sti() {
    if (window.pageYOffset > sticky) {
        y.classList.add('sticky');
    } else {
        y.classList.remove('sticky');
    }
}