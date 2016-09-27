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
    $('#start-chat-btn').click(validateForm);
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
        nameRequiredText.show();
    }
    else {
        nameInput.removeClass('invalid');
        $('#nameRequiredText').hide();
    }
    if (phoneInput.val().length == 0) {
        phoneInput.addClass('invalid');
        phoneRequiredText.show();
    }
    else if (!phoneInput.val().match(phoneRegex)) {
        phoneInput.addClass('invalid');
        phoneRequiredText.hide();
        phoneInvalidText.show();
    }
    else {
        phoneInput.removeClass('invalid');
        phoneRequiredText.hide();
        phoneInvalidText.hide();
    }
    if (!(nameInput.hasClass('invalid') || phoneInput.hasClass('invalid'))) {
        alert("succes");
    }
}