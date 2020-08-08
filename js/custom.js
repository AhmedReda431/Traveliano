function openService(event, service) {
    var i, tabLinks, tabContent;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "")
    }
    document.getElementById(service).style.display = "block";
    event.currentTarget.className += " active";
}
