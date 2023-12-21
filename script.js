const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select the table
  var table = document.querySelector('table');

  // Function to calculate and display the total price
  function calculateTotal() {
    // Select all elements with class "price"
    var pricesElements = document.querySelectorAll('.price');

    // Initialize total price
    var totalPrice = 0;

    // Loop through each price element and add it to the total
    pricesElements.forEach(function (priceElement) {
      totalPrice += parseFloat(priceElement.textContent);
    });

    // Create a new row for total
    var totalRow = document.createElement('tr');

    // Create a cell for the item name (in this case, it can be "Total")
    var itemNameCell = document.createElement('td');
    itemNameCell.textContent = 'Total';
    totalRow.appendChild(itemNameCell);

    // Create a cell for the total price
    var totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = totalPrice.toFixed(2); // Display total with 2 decimal places
    totalRow.appendChild(totalPriceCell);

    // Append the total row to the table
    table.appendChild(totalRow);
  }

  // Check if a total row already exists and remove it
  // var existingTotalRow = document.querySelector('table tr:last-child');
  // if (existingTotalRow) {
  //   existingTotalRow.remove();
  // }

  // Call the calculateTotal function
  calculateTotal();
};

getSumBtn.addEventListener("click", getSum);
