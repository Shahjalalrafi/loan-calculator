document.getElementById('loan-form').addEventListener('submit', calculateResults)

function calculateResults(e) {
    e.preventDefault()
    let amount = document.getElementById('amount')
    let interest = document.getElementById('interest')
    let years = document.getElementById('years')
    let monthlyPayment = document.getElementById('monthly-payment')
    let totalPayment = document.getElementById('total-payment')
    let totalInterest = document.getElementById('total-interest')

   const principle = parseFloat(amount.value)
   const calculatedInterest = parseFloat(interest.value)/100/12
   const calculatedYears = parseFloat(years.value)*12;

   const x = Math.pow(1 + calculatedInterest, calculatedYears)
   const monthly = (principle * x *calculatedInterest)/(x-1)

   if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalInterest.value = (monthly * calculatedYears).toFixed(2)
        totalPayment.value = ((monthly * calculatedYears)- principle).toFixed(2)
   }else {
       console.log('please check the value')
   }
}
