let item1 = parseFloat(document.getElementById("item-1").innerHTML);
let item2 = parseFloat(document.getElementById("item-2").innerHTML);
let item3 = parseFloat(document.getElementById("item-3").innerHTML);

let qtdItem1 = document.getElementById("form1");
let qtdItem2 = document.getElementById("form2");
let qtdItem3 = document.getElementById("form3");

let shipping = parseFloat(document.getElementById("shipping").innerHTML);
let tax = parseFloat(document.getElementById("tax").innerHTML);

let payment = document.getElementById('payment')

let subTotal = document.getElementById("subtotal-items");
let total = document.getElementById("total-items");

qtdItem1.onclick = () => {
  subTotalItems();
  total.innerHTML = totalItems();
};

qtdItem2.onclick = () => {
  subTotalItems();
  total.innerHTML = totalItems();
};

qtdItem3.onclick = () => {
  subTotalItems();
  total.innerHTML = totalItems();
};

payment.onclick = () => {
    subTotalItems();
    total.innerHTML = totalItems();
}

const subTotalItems = () => {
  subTotal.innerHTML = (
    item1 * qtdItem1.value +
    item2 * qtdItem2.value +
    item3 * qtdItem3.value
  ).toFixed(2);
  return (
    item1 * qtdItem1.value + item2 * qtdItem2.value + item3 * qtdItem3.value
  );
};

const totalItems = () => {
  let paymentOption = payment.options[payment.selectedIndex].text;
  switch (paymentOption) {
    case "Money":
        return subTotalItems < 200 ? ((subTotalItems() + shipping + tax) * 0.9).toFixed(2): ((subTotalItems() + shipping + tax) * 0.85).toFixed(2)
      
      break;
    case "Pix":
        return subTotalItems < 200 ? ((subTotalItems() + shipping + tax) * 0.95).toFixed(2): ((subTotalItems() + shipping + tax) * 0.90).toFixed(2)
      break;
    default:
      return (subTotalItems() + shipping + tax).toFixed(2);
  }
};
