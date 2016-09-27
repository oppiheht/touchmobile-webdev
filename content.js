$(document).ready(function () {
    $("#content").load("menu.html", null, menuLoaded);
});

function menuLoaded() {
   $('#billing-payments').click(function() {
      $("#content").load("survey.html", null, surveyLoaded);
   });
}

function surveyLoaded() {
   
}