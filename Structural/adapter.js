/*
Adapter Convert the interface of a class into another interface clients expect. 
Adapter lets classes work together that couldn't otherwise because of incompatible 
interfaces. 

The AmericanSocket class represents the Adaptee, which has a method insertFlatPin for inserting a flat pin into an American socket.
The EuropeanSocket class represents the Target, which has a method insertRoundPin for inserting a round pin into a European socket.
The Adapter class adapts the AmericanSocket to the EuropeanSocket interface by implementing the insertRoundPin method, 
which internally calls insertFlatPin method of AmericanSocket.
In the usage section, we create an instance of AmericanSocket, then pass it to the Adapter constructor to create an adapter. 
We then use the adapter to insert a round pin into the European socket.
This implementation demonstrates how the Adapter pattern allows objects with incompatible interfaces to work together by 
providing a wrapper (adapter) that converts the interface of one class into another interface that a client expects
 */

//Adaptee
class AmericanSocket {
    insertFlatPin(){
        return "Inserted flat pin into American socket";
    }
}

// Target
class EuropeanSocket {
    insertRoundPin(){
        return "Inserted round pin into European socket";
    }
}

// Adapter
class Adapter {
    constructor(americanSocket) {
        this.americanSocket = americanSocket;
    }

    insertRoundPin(){
        return this.americanSocket.insertFlatPin() + "(using adapter to convert)"; 
    }
}

// Usage
const americanSocket = new AmericanSocket();
const adapter = new Adapter(americanSocket);
console.log("Trying to insert round pin into European socket:", adapter.insertRoundPin());