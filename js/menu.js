function menuToggle() {
    var menu = document.getElementById("mobile-menu");
    menu.style.display = ((menu.style.display == 'none'||menu.style.display == '') ? 'inline' : 'none');
    var box = document.getElementById("box").childNodes;
    for(var i=1;i < box.length; i=i+2) {
        if(box[i] != menu) {
            box[i].style.display = ((box[i].style.display == ''||box[i].style.display == 'inline') ? 'none' : 'inline')
        }
    }

}