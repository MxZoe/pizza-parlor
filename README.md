# Pizza Parlor

#### By _**Zoe Weinstein**_

#### A website that mimics a "make your own" pizza application

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript/jQuery

## Description

This website allows a user to select a size and toppings for a pizza and then calculates the cost of that pizza.

## Setup/Installation Requirements

* Go to mxzoe.github.io/language-selecter to use this project.
* You can also go to https://github.com/MxZoe/language-suggester to clone or download the project. Then you can navigate to the lang-selecter folder and open index.html to open the project as a local site.

## Known Bugs

* Could not the divider div to go all the way across the screen

## License

https://opensource.org/licenses/MIT

Copyright (c) 2021. Zoe Weinstein




___________________________________________________________________________________________________________________
Tests

Describe: makePizza()

Test: It should return a pizza object with two properties: toppings and size
Code: const newPizza = new Pizza(["pineapple", "pepperoni"], small)
Expected output: Pizza{["pineapple", "pepperoni"], small}


Describe cost()

Test: It should be a prototype of the Pizza object and return a total of 0.
Code: pizza.cost();
Expected output: 0;

Test: It should use the toppings property to add to the cost.
Code: pizza.cost();
Expected output: 2;

Test: It should use the size property to add to the cost.
Code: switch(this.size){
  case 'small'
    total += 10;
    break;
    ...
}
Expected output: 12;

calculate a cost based on size and number of toppings

