// Checking

// 1. Start with $1,000
// 2. Create submit events for form
// 3. Post event for withdrawl and deposit
//   A. Create display and/or update function?
// 4. Initiate Withdrawl check conditions:
//   A. if withdrawl is greating checking and savings then alert invalidd....
//     B. if withdrawl > checking, then:
//       a. return checking balance to zero
//       b.  turn text red
//       c. and take difference from savings.
//   else....
// 5. update checking amount - withdrawl amount
// 6. deposit:  add deposit to checking and update
$(document).ready(function() {

  var c_amount = 1000.00

  var display = $("#left, p").text("$" + c_amount);

  $('#c-deposit').on('click', deposit)
  $('#c-withdraw').on('click', withdraw)

  function deposit(event) {
    c_amount = c_amount + parseInt($("#amount").val());
    display = $("#left, p").text("$" + c_amount);


    event.preventDefault();
  }
  function withdraw(event) {

    alert('make it rain!')
    event.preventDefault();
  }








})
// Savings

// 1. Start with $2,300
// 2. Create click events for form
// 3. Post event for withdrawl and deposit
//   A. Create display and/or update function?
// 4. Savings Check Conditions:
//   A. if withdrawl > savings, alert invalid....
//   B. else subtract withdrawl from savings
// 5. deposit:  add desposit to checking and update

