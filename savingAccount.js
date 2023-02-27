import Account from './accout';

class SavingAccoount extends Account{
    constructor(number,balance){
        super(number,'Savings',balance)
    }
    getInterest(){
        return this.balance * (0.05/12);
    }
    generateStatement() {
        return `Account number: ${this.number}\nAccount type: ${this.type}\nCurrent balance: $${this.balance}\nInterest earned: $${this.getInterest()}`;
    }
}
module.exports = SavingAccoount;