// Receiver
class Light {
    turnOn() {
        console.log('Light is on');
    }

    turnOff() {
        console.log('Light is off');
    }
}

// Command interface
class Command {
    execute() {}
}

// Concrete Commands
class TurnOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

class TurnOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }
}

// Invoker
class RemoteControl {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    pressButton() {
        this.commands.forEach(command => command.execute());
    }
}

// Usage
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remoteControl = new RemoteControl();
remoteControl.addCommand(turnOnCommand);
remoteControl.addCommand(turnOffCommand);

remoteControl.pressButton();
remoteControl.pressButton();
