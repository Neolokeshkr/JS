const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

function sortInventory1(inventory) {
  sortedInv = inventory.reduce((acc, cur) => {
    if(!acc[cur.type]){
      acc[cur.type] = []
    }
    acc[cur.type].push(cur)

    return acc
  }, {})

  return sortedInv
}

console.log(sortInventory1(inventory))
// Get the following result
/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/

// Solving using reducer approach
// function sortInventory(inventory) {
    const sortedInventory = inventory.reduce((accumulator, currentItem) => {
        if(!accumulator[currentItem.type]){
            accumulator[currentItem.type] = [];
        }
        accumulator[currentItem.type].push(currentItem)
        // console.log(accumulator)
        // console.log(currentItem)

        return accumulator
    }, {})
// }

// console.log(sortedInventory)