var Account = function(name, amount){
  this.depositName = name;
  this.depositAmount = amount;
}
//
// Account.prototype.makeAccount = function() {
//
// }

Account.prototype.changeBalance = function(depositAmount, add, sub){
  if(add) {
    return depositAmount = depositAmount + add;
  } else if(sub) {
    return depositAmount = depositAmount - sub;
  } else {
    alert("Please enter an amount");
  }
}


// User Interface
$(document).ready(function(){
  var newAccount;
  var initialDeposit;

  $("form.bank").submit(function(event){
    event.preventDefault();
    var name = $("#enterName").val();console.log(name);
    initialDeposit = parseInt($("input#initialDeposit").val());
    newAccount = new Account(name, initialDeposit);

    $("p#currentBalance").append(initialDeposit);
  });

  $("form.deposit").submit(function(event){
    event.preventDefault();
    var addToAccount = parseInt($("input#depositAmount").val());
    var subFromAccount = parseInt($("input#withdrawalAmount").val());

    newAccount.changeBalance(initialDeposit, addToAccount, subFromAccount);
    console.log(initialDeposit);

    $("p#currentBalance").text(newAccount.depositAmount);

  });
});
