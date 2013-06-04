// Checking

// 1. Start with $1,000
// 2. Create submit events for form
// 3. Post event for withdrawl and deposit
//   A. Create display and/or update function?
// 4. Initiate Withdrawl check conditions:
//   A. if withdrawl is greater checking and savings then alert invalidd....
        // if
//     B. if withdrawl > checking, then:
//       a. return checking balance to zero
//       b.  turn text red
//       c. and as savings amount = (checking_amt + savings_amt) - the form
//   else....
// 5. update checking amount - withdrawl amount
// 6. deposit:  add deposit to checking and update

$(document).ready(function() {

  var c_amount = 1000.00
  var c_display = $("#left").text("$" + c_amount);

  var s_amount = 2300.00
  var s_display = $("#right").text("$" + s_amount);

  $("#c-deposit").on("click", checkingDeposit)
  $("#c-withdraw").on("click", checkingWithdraw)

  $("#s-deposit").on("click", savingsDeposit)
  $("#s-withdraw").on("click", savingsWithdraw)

// Deposit on Checking
  function checkingDeposit() {
    var c_form = parseInt($(".c-amount").val()) //set var to the form value

    c_amount = c_amount + c_form //redefine the checking amount
    c_display = $("#left").text("$" + c_amount).removeClass("warning")//.css("color", "black"); //set the display to the dollar sign string value and chain the css method to a default of black
    $(".c-amount").val(""); //this resets the form back to an empty string

    event.preventDefault();
  }

// Withdraw on Checking
  function checkingWithdraw() {

    var c_form = (parseInt($(".c-amount").val())); // sets the var of the form inside this function

    if (c_form > (c_amount + s_amount)) { //if statements from psuedocode above
      alert("You don't have enough money to make this withdrawl");
    } 
    else if (c_form >= c_amount) {
      $("#left").addClass("warning")//.css("color", "red"); // had to rework the logic on this else statement, moving the 0.00 amount to the bottom so that if the amount was zero but nothing was taken from savings, then the text would still be red.
      c_display = $("#left").text("$" + c_amount);

      s_amount = (c_amount + s_amount - c_form);
      s_display = $("#right").text("$" + s_amount);
      c_amount = 0.00
    } 
    else {
      c_amount = c_amount - c_form;
    }

    display = $("#left").text("$" + c_amount);

    event.preventDefault();
  }

  // Deposit on Savings
  function savingsDeposit() {
    var s_form = parseInt($(".s-amount").val())
    s_amount += s_form
    s_display = $("#right").text("$" + s_amount).removeClass("warning")//.css("color", "black");
    $(".s-amount").val("");

    event.preventDefault();
  }

// Withdraw on Savings
  function savingsWithdraw() {

    var s_form = (parseInt($(".s-amount").val()));

    if (s_form > s_amount) {
      alert("You don't have enough money to make this withdrawl");
      $(".s-amount").val("");

    } 
    else {
      s_amount = s_amount - s_form;
      if (s_amount == 0.00) {
        $("#right").addClass("warning")//.css("color", "red");
        s_display = $("#right").text("$" + s_amount);
      } 
      else {
        $("#right").removeClass("warning")//.css("color", "black");
        s_display = $("#right").text("$" + s_amount);
      }
    }

    display = $("#right").text("$" + s_amount);

    event.preventDefault();
  }

});
// Savings

// 1. Start with $2,300
// 2. Create click events for form
// 3. Post event for withdrawl and deposit
//   A. Create display and/or update function?
// 4. Savings Check Conditions:
//   A. if withdrawl > savings, alert invalid....
//   B. else subtract withdrawl from savings
// 5. deposit:  add desposit to checking and update
