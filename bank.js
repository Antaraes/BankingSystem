import SavingAccoount from './savingAccount'
import CheckingAccount from './checkingAccount'

class Bank{
    constructor(){
        this.accounts = []
    }
    openAccount(number,type,balance){
        if(type === "Savings"){
            this.accounts.push(new SavingAccoount(number,balance))
        }else if (type === 'Checking') {
            this.accounts.push(new CheckingAccount(number, balance));
        } else {
            return 'Invalid account type';
        }
    }
    closeAccount(number) {
        const index = this.accounts.findIndex(account => account.number === number);
        if (index === -1) {
            return 'Account not found';
        } else {
            const closedAccount = this.accounts.splice(index, 1);
            return `Account ${closedAccount.number} has been closed`;
        }
    }
    checkBalance(number) {
        const account = this.accounts.find(account => account.number === number);
        if (!account) {
            return 'Account not found';
        } else {
            return `Account balance: ${account.balance}`;
        }
    }
    deposit(number, amount) {
        const account = this.accounts.find(account => account.number === number);
        if (!account) {
            return 'Account not found';
        } else {
            account.deposit(amount);
            return `${amount} has been deposited to account ${number}`;
        }
    }
    withdraw(number, amount) {
        const account = this.accounts.find(account => account.number === number);
        if (!account) {
            return 'Account not found';
        } else {
            const result = account.withdraw(amount);
            if (result === 'Insufficient balance') {
                return result;
            } else {
                return `${amount} has been withdrawn from account ${number}`;
            }
        }
    }
    
}
module.exports = Bank;