// =============================================================
// Used Activity 16 as a starting point
// =============================================================
// Wait to attach the handlers until the DOM is fully loaded.
$(function() {

  // event handler for when a "devour it" button is clicked
  $(".devBurger").on("click", function(event) {

    // get the id set with the button
    var id = $(this).data("id");

    // set a variable to update the devoured information to true
    var updDevour = {
      devoured: true
    };

    // Send the PUT request to the controller
    $.ajax("/" + id, {
      type: "PUT",
      data: updDevour
    }).then(
      function() {
        
        // Reload the page to get the updated list
        location.assign("/");
      }

    );

  });

  // event handler for the submission of the form with the click of the submit button
  $(".create-form").on("submit", function(event) {

    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // set a variable to value a new burger
    var newBurger = {
      burger_name: $("#burger").val().trim()
    };

    // Send the POST request to the controller
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        
        // Reload the page to get the updated list
        location.reload();
      }

    );
    
  });

});
