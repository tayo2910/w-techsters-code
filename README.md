
# Design Patterns 
### Introduction
#### Design patterns are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

#### Classification of Patterns
* Creational Patterns
* Structural Patterns
* Behavioural Patterns

### Creational Design Patterns
#### Are focused towards how to instantiate an object or group of related objects.
* Factory Method
* Abstract Method
* Builder
* Prototype
* Singleton

### Factory Method
#### Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

### Abstract Factory
#### Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

### Builder
#### Separate the construction of a complex object from its representation so that the same construction process can create different representations.

```

```

### Structural Design Patterns
#### Structural patterns are concerned with how classes and objects are composed to form larger structures. Structural class patterns use inheritance to compose interfaces or implementations. 
* Adapter
* Bridge
* Composite
* Decorator
* Facade
* Flyweight
* Proxy

### Adapter
#### Adapter Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces. 

### Bridge
#### Decouple an abstraction from its implementation so that the two can vary independently.

### Composite
#### Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly. 

### Behavioral Design Patterns
#### Behavioral patterns are concerned with algorithms and the assignment of responsibilities between objects. Behavioral patterns describe not just patterns of objects or classes but also the patterns of communication between them. 
* Chain of Responsibility
* Command
* Iterator
* Mediator
* Memento
* Observer
* State
* Strategy
* Template Method
* Visitor

### Chain of Responsibility
####  Chain of Responsibility lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

### Command
#### Command turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

### Iterator
#### Iterator provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. 