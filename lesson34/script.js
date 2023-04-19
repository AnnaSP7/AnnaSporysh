"use striict";

     //1

let shoppingList = [
    { name: "Apple", quantity: 5, bought: true, price: 30 },
    { name: "Tengerin", quantity: 10, bought: false, price: 40 },
    { name: "Bread", quantity: 1, bought: true, price: 20 },
    { name: "Tea", quantity: 2, bought: false, price: 70 }
];


function showShoppingList(shoppingList) {
    shoppingList.sort((a, b) => a.bought - b.bought);
    for (let i = 0; i < shoppingList.length; i++) {
        const item = shoppingList[i];
        console.log(`${i + 1}. ${item.name}: ${item.quantity} шт., ${item.price} грн./шт. - ${item.bought ? 'Придбано' : 'Не придбано'}`);
    }
}

 function buyProduct(list, name) {
    const index = list.findIndex(item => item.name === name);
  
    if (index !== -1) {
      console.log(`Продукт "${name}" відзначено як придбаний.`);
    } else {
      console.log(`Продукт "${name}" не знайдено.`);
    }
  }

showShoppingList(shoppingList);
buyProduct(shoppingList, 'Apple');


    //2

let cloneShoppingList = {}
for (let key in shoppingList) {
  cloneShoppingList[key] = shoppingList[key];
}
console.log(cloneShoppingList);


function getTotal() {
  shoppingList.forEach(product => {
    product.total = product.quantity * product.price;
  });
}
getTotal();
console.log(shoppingList);


function addProduct(name, quantity, bought, price) {
  for (product of shoppingList) {
    if (product.name === name) {
      product.quantity += quantity;
      getTotal()
      return;
    } 
   
  };
  const newProduct = {
    name: name,
    quantity: quantity,
    bought: bought,
  price: price,
  }
  shoppingList.push(newProduct);
  getTotal()
}
addProduct("Bread", 1, true, 20);
console.log(shoppingList);


