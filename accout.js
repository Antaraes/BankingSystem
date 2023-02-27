class Account{
    constructor(number,type,balance = 0){
        this.number = number;
        this.type = type;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        return this.balance;
    }
    withdrawal(amount){
        if(amount <= this.balance){
            this.balance -= amount
            return this.balance;
        }else{
            return "Not enough amount withdrawal"
        }
    }
    checkBalance(){
        return this.balance
    }
}
module.exports = Account;