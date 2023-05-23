const totalBalance = document.querySelector('.balance-amount')
const incomeAmount = document.querySelector('.income-amount')
const expenseAmount = document.querySelector('.expense-amount')
const titleField = document.getElementById('title-field')
const amountField = document.getElementById('amount-field')
const incomeRadio = document.getElementById('is-income')
const expenseRadio = document.getElementById('is-expense')
const addTransactionBtn = document.getElementById('add-transaction')
const transactionsGroup = document.querySelector('.transactions-group')

addTransactionBtn.addEventListener('click', (e) => {
    e.preventDefault()
    renderTransactionHistory()
})

let incomeTotalAmount = 0;
let expenseTotalAmount = 0;

const renderTransactionHistory = () => {

    if (titleField.value && amountField.value) {
        const titleFieldValue = titleField.value
        const amountFieldValue = amountField.value

        const transactionTitle = document.createElement('span')
        transactionTitle.classList.add('transaction-title')
        transactionTitle.textContent = titleFieldValue

        const transactionAmount = document.createElement('span')
        transactionAmount.classList.add('transaction-amount')
        transactionAmount.textContent = `$ ${amountFieldValue}.00`

        const transaction = document.createElement('div')
        transaction.classList.add('transaction')

        if (incomeRadio.checked) {
            transaction.classList.add('incoming')
            incomeTotalAmount += parseInt(amountFieldValue)
        } else if (expenseRadio.checked) {
            transaction.classList.add('expensing')
            expenseTotalAmount += parseInt(amountFieldValue)
        }

        incomeAmount.textContent = `$ ${incomeTotalAmount}.00`
        expenseAmount.textContent = `$ ${expenseTotalAmount}.00`

        titleField.value = ''
        amountField.value = ''

        const totalAmount = incomeTotalAmount - expenseTotalAmount
        totalBalance.textContent = `$ ${totalAmount}.00`
        transaction.append(transactionTitle, transactionAmount)

        transactionsGroup.append(transaction)
    }
}

