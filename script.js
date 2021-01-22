function toggleSideBar() {
    var sidebar = document.getElementById("sidebarID");
    var displaySidebarCssText = "display: flex; flex-direction: column; text-align: center; width: 100%;";
    var hideSidebarCssText = "display: none;";

    if (sidebar.style.cssText == hideSidebarCssText) {
        sidebar.style.cssText = displaySidebarCssText;
    } else if (sidebar.style.cssText == displaySidebarCssText) {
        sidebar.style.cssText = hideSidebarCssText;
    } else {
        sidebar.style.cssText = displaySidebarCssText;
    }
}

window.addEventListener("resize", function () {
    var sidebar = document.getElementById("sidebarID");
    if (screen.width > 700) {
        sidebar.style.cssText =
            "--var(sidenav-style)"
    } else {
        sidebar.style.cssText =
            "display: none;\n" +
            "text-align: left"
    }
})

var footer = document.getElementsByClassName('footer');

var remainingHeight = screen.height - document.body.scrollHeight;
console.log(screen.height);
console.log(document.body.scrollHeight);
if (remainingHeight > 0) {
    footer[0].style.marginTop = remainingHeight + "px";
} else {
    //...
}