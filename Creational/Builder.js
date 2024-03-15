/*
webpage Interface:
constructor
getContent()
 */

class Burger {
    constructor(){
        this.size = "";
        this.toppings = [];
    }
}

// Builder
class BurgerBuilder {
    constructor(){
        this.burger = new Burger();
    }

    setSize(size) {
        this.burger.size = size;
        return this;
    }

    addTopping(topping) {
        this.burger.toppings.push(topping);
        return this;
    }

    build() {
        return this.burger;
    }
}

// Director
class BurgerDirector {
    contructor(builder) {
        this.builder = builder;
    }

    buildCheese(){
        return this.builder.setSize('Medium').addTopping('Tomato').addTopping('Cheese').build();
    }

    buildPepperoni() {
        return this.builder.setSize('Large').addTopping('Tomato').addTopping('Pepperoni').build();
    }
}

// Usage
const builder = new BurgerBuilder();
const director = new BurgerDirector(builder);

const cheese = director.buildCheese();
console.log('Cheese', cheese);

const pepperoni = director.buildPepperoni();
console.log('Pepperoni', pepperoni)