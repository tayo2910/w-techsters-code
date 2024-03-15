// Door Interface
//getDescription()

class WoodenDoor {
    getDescription(){
        console.log("I am a wooden door")
    }
}

class IronDoor {
    getDescription(){
        console.log("I am a iron door")
    }
}

//DoorFittingExpert interface
//getDescription()
class Welder {
    getDescription(){
        console.log("I can only fit iron doors")
    }
}

class Carpenter {
    getDescription(){
        console.log("I can only fit wooden doors")
    }
}

/* 
DoorFactory Interface
makeDoor()
makeFittingExpert()*/ 
class WoodenDoorFactory {
    makeDoor(){
        return new WoodenDoor()
    }

    makeFittingExpert() {
        return new Carpenter()
    }
}

// Iron door factory toget iron door and the relevant fitting expert
class IronDoorFactory {
    makeDoor(){
        return new IronDoor()
    }
    makeFittingExpert(){
        return new Welder() 
    }
}

// implementation
woodenFactory = new WoodenDoorFactory()

door = woodenFactory.makeDoor()
expert = woodenFactory.makeFittingExpert()

door.getDescription() 
expert.getDescription()

ironFactory = new IronDoorFactory()

door = ironFactory.makeDoor()
expert = ironFactory.makeFittingExpert()

door.getDescription()
expert.getDescription()








