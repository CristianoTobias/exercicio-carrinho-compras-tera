let item1 = parseFloat(document.getElementById('item-1').innerHTML)
let item2 = parseFloat(document.getElementById('item-2').innerHTML)
let item3 = parseFloat(document.getElementById('item-3').innerHTML)

let  qtdItem1 = document.getElementById('form1')
let  qtdItem2 = document.getElementById('form2')
let  qtdItem3 = document.getElementById('form3')

let subTotal =  document.getElementById('subtotal-items')
let total =  document.getElementById('total-items')


qtdItem1.onclick = () => {
    console.log(subTotal)
   subTotal.innerHTML = subTotalItems()
   total.innerHTML = subTotalItems()
   

}

qtdItem2.onclick = () => {
    subTotal.innerHTML = subTotalItems()
    total.innerHTML = subTotalItems()

}

qtdItem3.onclick = () => {
    subTotal.innerHTML = subTotalItems()
    total.innerHTML = subTotalItems()

}

const subTotalItems = () => {
   return (item1 * qtdItem1.value) + (item2 * qtdItem2.value) + (item3 * qtdItem3.value)
   
}