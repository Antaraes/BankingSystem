import Account  from "./accout";

class CheckingAccount extends Account{
    constructor(number,balance){
        super(number,'Checking',balance)
    }
    generateStatement() {
        return `Account number: ${this.number}\nAccount type: ${this.type}\nCurrent balance: $${this.balance}`;
    }
}
module.exports = CheckingAccount