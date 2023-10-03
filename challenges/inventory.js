//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
//Update the current existing inventory item quantities (in arr1). 
//If an item cannot be found, add the new item and quantity into the inventory array. 
//The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
  // Helper function to update inventory
  function  i updateItemQuantity(inventory, newItem) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i][1] === newItem[1]) {
        // Item already exists, update quantity
        inventory[i][0] += newItem[0];
        return;
      }
    }

    // Item doesn't exist, add it to inventory
    inventory.push(newItem);
  }

  // Update quantities for existing items or add new items
  for (const newItem of arr2) {
    updateItemQuantity(arr1, newItem);
  }

  // Sort the inventory in alphabetical order by item name
  arr1.sort((a, b) => a[1].localeCompare(b[1]));

  return arr1;
}

arr1 = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
]
  
arr2 = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
]

console.log(updateInventory(arr1, arr2));
