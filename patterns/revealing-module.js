/**
 * This pattern is an upgrade from the module pattern
 * its advantage includes a clearer and consistent
 * code and namespaced
 * the drawback would be that we are using namespaced
 * or the reference to a private function, so we unable
 * to override that private function when there need to
 * be a patch
 */

const BankAccount = (function () {
  const balance = {
    saving: 0,
    credit: 0,
    access: 0,
  };

  function transferBetweenAccount(amount, fromAccount, toAccount) {
    const validAccount = Object.keys(balance);
    if (
      validAccount.indexOf(fromAccount) !== -1 &&
      validAccount.indexOf(toAccount) !== -1 &&
      fromAccount !== toAccount
    ) {
      balance[fromAccount] -= amount;
      balance[toAccount] += amount;
    }
  }

  function putMoneyIn(amount) {
    balance.access += amount;
  }

  function showAccountValues() {
    return balance;
  }

  return {
    transfer: transferBetweenAccount,
    deposit: putMoneyIn,
    balance: showAccountValues,
  };
})();

console.log(BankAccount.balance());
BankAccount.deposit(500);
BankAccount.transfer(50, "access", "saving");
BankAccount.transfer(100, "access", "credit");
console.log(BankAccount.balance());
