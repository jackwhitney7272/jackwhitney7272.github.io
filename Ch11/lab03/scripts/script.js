/*
    Group members: Jack Whitney
    File Name: script.js
    Date: 2026-05-07
    Lab 3 Changes: External JavaScript file for hamburger menu and extra interactivity.
*/

// Hamburger menu function
function hamburger() {
    var navLinks = document.getElementById("nav-links");
    var menuIcon = document.getElementById("icon");

    if (!navLinks || !menuIcon) {
        return;
    }

    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
        menuIcon.style.color = "#fff";
    } else {
        navLinks.style.display = "block";
        menuIcon.style.color = "#ffcc00";
    }
}

// Function to display a countdown-to-the-weekend message on the home page
function weekendMessage() {
    var enjoy = document.getElementById("enjoy");

    if (!enjoy) {
        return;
    }

    var today = new Date().getDay(); // Sunday = 0, Saturday = 6

    if (today === 0) {
        enjoy.innerText = "Happy Sunday!";
    } else if (today === 5) {
        enjoy.innerText = "The weekend is almost here!";
    } else if (today === 6) {
        enjoy.innerText = "Happy Saturday!";
    } else {
        var daysLeft = 6 - today;
        enjoy.innerText = "There are " + daysLeft + " workdays till the weekend!";
    }
}

// Function to display a club spotlight reminder
function spotlightMessage() {
    var result = document.getElementById("spotlight-result");

    if (result) {
        result.innerText = "Check back next month for a new featured student club.";
    }
}

// Function to display a club search response
function clubSearch() {
    var search = document.getElementById("cDesc");
    var result = document.getElementById("search-result");

    if (!search || !result) {
        return;
    }

    if (search.value.trim() === "") {
        result.innerText = "Please enter a club name or keyword to search.";
    } else {
        result.innerText = "Searching for clubs related to: " + search.value.trim();
    }
}

// Function to display an event reminder
function eventReminder() {
    var result = document.getElementById("event-result");

    if (result) {
        result.innerText = "Reminder: check the calendar each week for new club meetings and campus events.";
    }
}

// Function to display a request form response
function requestMessage() {
    var result = document.getElementById("request-result");

    if (result) {
        result.innerText = "Thank you. Your request has been received by the Student Clubs website team.";
    }
}


// Function to display a contact form response
function contactMessage() {
    var result = document.getElementById("contact-result");

    if (result) {
        result.innerText = "Thank you. A member of the student clubs team will contact you soon.";
    }
}
