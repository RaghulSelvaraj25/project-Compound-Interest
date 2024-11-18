document.getElementById("calculate").addEventListener("click", function (){
const Principal = document.getElementById("principal").value
const Rate = document.getElementById("rate").value/100
const Time = document.getElementById("period").value
const Total = Principal * (1+Rate) ** Time
document.getElementById("total").innerHTML =`${Total.toFixed(2).replace(",",".")}`
})