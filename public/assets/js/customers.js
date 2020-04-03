// Wait to attach the handlers until the DOM is fully loaded.
$(document).ready(function() {

  // event handler for the submission of the customer form with the click of the submit button
  $(".create-customer-form").on("submit", function(event) {

    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // set a variable to value a new burger
    var newCustomer = {
      cust_name: $("#customer").val().trim()
    };

    // Send the POST request to the controller
    $.ajax("/customer", {
      type: "POST",
      data: newCustomer
    }).then(
      function() {
        
        // Reload the page to get the updated list
        location.reload();

      }

    );
    
  });

  // event handler for the click of the delete customer link
  $(".delete-customer").on("click", function(event) {

    // initialize a variable with the Customer ID found in the table row attributes
    var id = $(this).parent("td").parent("tr").attr("value");
    console.log("ID:  " + id);

    // Send the Delete request to the controller with the id 
    $.ajax({
      url: "/customer/" + id,
      method: "DELETE"
    })
    .then(

      function() {
        
        // Reload the page to get the updated list
        location.reload();

      }

    );

  });

});
