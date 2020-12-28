function showMobileMenu() {
    var mobile_menu = document.getElementsByClassName("nav-icon");

    if (mobile_menu[0].style.display != "none") {
        mobile_menu[0].style.display = "none";
        mobile_menu[1].style.display = "inline";
    }
    else {
        mobile_menu[0].style.display = "inline";
        mobile_menu[1].style.display = "none";
    }
}