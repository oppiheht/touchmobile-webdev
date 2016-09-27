$(document).ready(function () {
    $("#content").load("menu.html", null, menuLoaded);
});

function menuLoaded() {
    $('#billing-payments').click(function () {
        $("#content").load("survey.html", null, surveyLoaded);
    });
}

function surveyLoaded() {
    $('.error-text').hide();
    $('#boughtInCaliDiv').hide();
    $('#start-chat-btn').click(validateForm);
    $('#state').change(stateSelectionChanged);
}

function stateSelectionChanged(event) {
    if (event.currentTarget.value == 'CA') {
        $('#boughtInCaliDiv').show();
    }
    else {
        $('#boughtInCaliDiv').hide();
    }
}

function validateForm() {
    var nameInput = $('#name');
    var nameRequiredText = $('#nameRequiredText');
    var phoneInput = $('#phone');
    var phoneRequiredText = $('#phoneRequiredText');
    var phoneInvalidText = $('#phoneInvalidText');
    var phoneRegex = /\d{3}-\d{3}-\d{4}/
    if (nameInput.val().length == 0) {
        nameInput.addClass('invalid');
        nameInput.change(function() {nameInput.removeClass('invalid')})
        nameRequiredText.show();
    }
    else {
        nameInput.removeClass('invalid');
        $('#nameRequiredText').hide();
    }
    if (phoneInput.val().length == 0) {
        phoneInput.addClass('invalid');
        phoneInput.change(function() {phoneInput.removeClass('invalid')})
        phoneRequiredText.show();
    }
    else if (!phoneInput.val().match(phoneRegex)) {
        phoneInput.addClass('invalid');
        phoneInput.change(function() {phoneInput.removeClass('invalid')})
        phoneRequiredText.hide();
        phoneInvalidText.show();
    }
    else {
        phoneInput.removeClass('invalid');
        phoneRequiredText.hide();
        phoneInvalidText.hide();
    }
    if (!(nameInput.hasClass('invalid') || phoneInput.hasClass('invalid'))) {
        startChat();
    }
}

function startChat() {
    $("#content").load("chat.html");
}
