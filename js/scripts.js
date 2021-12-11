//Pizza object business logic

function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}
Pizza.prototype.cost = function(){
  let total = 0;
  return total;
}

//business logic
function makePizza(toppings, size){
  const newPizza = new Pizza(toppings, size);
  return newPizza;
}

console.log(makePizza(["Pineapple","pepperoni"], small))