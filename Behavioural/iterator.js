// Iterator interface
class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    hasNext() {}
    next() {}
}

// Concrete Iterator
class ArrayIterator extends Iterator {
    constructor(collection) {
        super(collection);
    }

    hasNext() {
        return this.index < this.collection.length;
    }

    next() {
        return this.collection[this.index++];
    }
}

// Aggregate interface
class Aggregate {
    createIterator() {}
}

// Concrete Aggregate
class ArrayCollection extends Aggregate {
    constructor() {
        super();
        this.collection = [];
    }

    addItem(item) {
        this.collection.push(item);
    }

    createIterator() {
        return new ArrayIterator(this.collection);
    }
}

// Usage
const collection = new ArrayCollection();
collection.addItem('Item 1');
collection.addItem('Item 2');
collection.addItem('Item 3');

const iterator = collection.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
