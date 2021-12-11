//Pizza object business logic

function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}
Pizza.prototype.cost = function(){
  let total = 0;
  let toppingsAmount = this.toppings.length;
  total += toppingsAmount;
  switch(this.size){
    case 'small':
      total += 10;
      break;
    case 'medium':
      total += 13;
      break;
    case 'large':
      total += 15;
      break;
    case 'x-large':
      total += 18;
      break;
  }
  return total;
}

//business logic
function makePizza(toppings, size){
  const newPizza = new Pizza(toppings, size);
  return newPizza;
}

