// Wait to attach the handlers until the DOM is fully loaded.
$(document).ready(function() {

  // declare variables to be used to gather customer specifics
  var customerSelect = $("#customer");
  var CustomerId;

  // declare a variable for the current url so that tasks can return to the same location
  var currentURL = window.location.href;

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
        location.reload();

      }

    );

  });

  // event handler for the submission of the form with the click of the submit button
  $(".create-form").on("submit", function(event) {

    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // set a variable to value a new burger
    var newBurger = {
      burger_name: $("#burger").val().trim(),
      CustomerId: $("#customer").val()
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

// =============================================================
// Used Activity 14 as a starting point (changed authors to customers and posts to burgers)
// =============================================================
  // Getting the customers, and their burgers
  getCustomers();

  // A function to get customers and then render our list of customers
  function getCustomers() {
    $.get("/api/customers", renderCustomerList);
  };

  // Function to either render a list of customers, or if there are none, direct the user to the page
  // to create a new customer first
  function renderCustomerList(data) {

    CustomerId = parseInt(currentURL.substring(currentURL.length - 1)) || 0 ;

    if (!data.length) {
      window.location.href = "/customer";
    };

    $(".hidden").removeClass("hidden");

    // create an array to populate the customer select list 
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createCustomerRow(data[i]));
    };

    customerSelect.empty();
    customerSelect.append(rowsToAdd);
    customerSelect.val(CustomerId);

  };

  // Creates the customer options in the dropdown
  function createCustomerRow(customer) {
    var listOption = $("<option>");
    listOption.attr("value", customer.id);
    listOption.text(customer.cust_name);
    return listOption;
  };
// =============================================================

});
