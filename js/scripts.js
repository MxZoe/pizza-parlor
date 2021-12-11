//Pizza object business logic

function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}


//business logic
function makePizza(toppings, size){
  const newPizza = new Pizza(toppings, size);
  return newPizza;
}

console.log(makePizza(["Pineapple","pepperoni"], small))