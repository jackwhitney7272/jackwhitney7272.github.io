/*
    Group members: Jack Whitney
    File Name: script.js
    Date: 2026-05-12
    Purpose: Adds simple interactivity to the Bootstrap Student Clubs website.
*/

function campusMessage() {
    var result = document.getElementById("campus-result");
    if (result) {
        result.innerText = "Try one new club meeting this month. It is one of the easiest ways to meet people on campus.";
    }
}

function clubSearch() {
    var search = document.getElementById("clubSearchInput");
    var result = document.getElementById("search-result");
    if (!search || !result) {
        return;
    }
    var value = search.value.trim();
    if (value === "") {
        result.innerText = "Please enter a club name or keyword to search.";
    } else {
        result.innerText = "Searching for clubs related to: " + value;
    }
}

function eventReminder() {
    var result = document.getElementById("event-result");
    if (result) {
        result.innerText = "Reminder: check the event calendar each week for new meetings, performances, and student activities.";
    }
}

function requestMessage() {
    var result = document.getElementById("request-result");
    if (result) {
        result.innerText = "Thank you. Your club or event request has been received.";
    }
}

function contactMessage() {
    var result = document.getElementById("contact-result");
    if (result) {
        result.innerText = "Thank you. A member of the Student Clubs team will contact you soon.";
    }
}
