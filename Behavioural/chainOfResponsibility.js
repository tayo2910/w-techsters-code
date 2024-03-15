 // Handler Interface
class Account {
    setNextHandler(account) {
        this.nextHandler = account
    }
    
    pay(amountToPay) {
        if (this.canPay(amountToPay)) {
            console.log(`Paid ${amountToPay} using ${this.name}`)
        } else if (this.nextHandler) {
            console.log(`Cannot pay using ${this.name}. Proceeding...`)
            this.nextHandler.pay(amountToPay)
        } else {
            console.log('None of the accounts have enough balance')
        }
    }
    
    canPay(amount) {
        return this.balance >= amount
    }
}

// Concrete Handlers
class Bank extends Account {
    constructor(balance) {
        super()
        this.name = 'bank'
        this.balance = balance
    }
}

class Paypal extends Account {
    constructor(balance) {
        super()        
        this.name = 'Paypal'
        this.balance = balance
    }
}

class Bitcoin extends Account {
    constructor(balance) {
        super()        
        this.name = 'bitcoin'
        this.balance = balance
    }
}

// Let's prepare a chain like below
//      bank.paypal.bitcoin
//
// First priority bank
//      If bank can't pay then paypal
//      If paypal can't pay then bitcoin

const bank = new Bank(100)          
const paypal = new Paypal(200)      
const bitcoin = new Bitcoin(300)    

bank.setNextHandler(paypal)
paypal.setNextHandler(bitcoin)

// Let's try to pay using the first priority i.e. bank
bank.pay(259)

