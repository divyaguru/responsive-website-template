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