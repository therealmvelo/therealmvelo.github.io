function openTab(evt, tabName) {
    var i, tabContent, tabLinks;

    // Hide all tab contents
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove "active" class from all tab buttons
    tabLinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the selected tab and mark the button as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Automatically open the first tab on page load
document.querySelector(".tablink").click();
