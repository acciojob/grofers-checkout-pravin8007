const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  var table = document.querySelector('table');
  function calculateTotal() {
    var pricesElements = document.querySelectorAll('.price');

    var totalPrice = 0;

    pricesElements.forEach(function (priceElement) {
      totalPrice += parseFloat(priceElement.textContent);
    });

    var totalRow = document.createElement('tr');

    
    var itemNameCell = document.createElement('td');
    itemNameCell.textContent = 'Total';
    totalRow.appendChild(itemNameCell);

   
    var totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = totalPrice.toFixed(2); // Display total with 2 decimal places
    totalRow.appendChild(totalPriceCell);

   
    table.appendChild(totalRow);
  }

  // Check if a total row already exists and remove it
  var existingTotalRow = document.querySelector('table tr:last-child');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

 
  calculateTotal();
};

getSumBtn.addEventListener("click", getSum);
