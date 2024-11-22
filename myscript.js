$(document).ready(function() {
  $(".show").click(function() {
    $(".paul").toggleClass("blurred"); // Toggle the "blurred" class on .paul
    $(".holder").toggleClass("change");
    
    var currentText = $(this).text(); // Get current button text
    $(this).text(currentText === "Show More" ? "Show Less" : "Show More");
  });
});
