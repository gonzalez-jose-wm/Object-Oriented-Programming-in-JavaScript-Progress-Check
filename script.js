//Computer constructor and is the parent class of all Computer types
var Computer = function(brand, price, hardDrive, ram, cpu) {
    //Properties
    this.brand = brand;
    this.price = price;
    this.hardDrive = hardDrive;
    this.ram = ram;
    this.cpu = cpu;
};

// Encapsulates the method to display any Computer to show a generic information example
Computer.prototype.displayComputer = function() {
    document.getElementById("brandGeneric").innerHTML = this.brand;
    document.getElementById("priceGeneric").innerHTML = "$ " + this.price.toFixed(2);
    document.getElementById("hardDriveGeneric").innerHTML = this.hardDrive;
    document.getElementById("ramGeneric").innerHTML = this.ram;
    document.getElementById("cpuGeneric").innerHTML = this.cpu;
};

// define a constructor for a subclass of Computer and adds a new property/properties
function Apple(brand, price, hardDrive, ram, cpu, gpu) {
    // Wil call the parent constructor and will set the inherited properties for the subclass
    Computer.call(this, brand, price, hardDrive, ram, cpu);
    // Sets the subclass new specific properties
    this.gpu = gpu;
}

// Creates the subclass prototype that inherits from the parent prototype by cloning it
Apple.prototype = Object.create(Computer.prototype);

// Will set the constructor property of the new prototype to point to the subclass constructor
Apple.prototype.constructor = Apple;

// The new subclass prototype will override the parent displayComputer method for a Apple
Apple.prototype.displayComputer = function() {
    document.getElementById("brandApple").innerHTML = this.brand;
    document.getElementById("priceApple").innerHTML = "$ " + this.price.toFixed(2);
    document.getElementById("hardDriveApple").innerHTML = this.hardDrive;
    document.getElementById("ramApple").innerHTML = this.ram;
    document.getElementById("cpuApple").innerHTML = this.cpu;
    document.getElementById("gpuApple").innerHTML = this.gpu;
};


//Subclass of Computer
function Microsoft(brand, price, hardDrive, ram, cpu, gpu, color) {
    Computer.call(this, brand, price, hardDrive, ram, cpu);

    this.gpu = gpu;
    this.color = color;
}

Microsoft.prototype = Object.create(Computer.prototype);
Microsoft.prototype.constructor = Microsoft;

Microsoft.prototype.displayComputer = function() {

    document.getElementById("brandMicrosoft").innerHTML = this.brand;
    document.getElementById("priceMicrosoft").innerHTML = "$ " + this.price.toFixed(2);
    document.getElementById("hardDriveMicrosoft").innerHTML = this.hardDrive;
    document.getElementById("ramMicrosoft").innerHTML = this.ram;
    document.getElementById("cpuMicrosoft").innerHTML = this.cpu;
    document.getElementById("gpuMicrosoft").innerHTML = this.gpu;
    document.getElementById("colorMicrosoft").innerHTML = this.color;
};


//Subclass of Computer
function Asus(brand, price, hardDrive, ram, cpu, gpu, monitor) {
    Computer.call(this, brand, price, hardDrive, ram, cpu);

    this.gpu = gpu;
    this.monitor = monitor;
}

Asus.prototype = Object.create(Computer.prototype);
Asus.prototype.constructor = Asus;

Asus.prototype.displayComputer = function() {
    document.getElementById("brandAsus").innerHTML = this.brand;
    document.getElementById("priceAsus").innerHTML = "$ " + this.price.toFixed(2);
    document.getElementById("hardDriveAsus").innerHTML = this.hardDrive;
    document.getElementById("ramAsus").innerHTML = this.ram;
    document.getElementById("cpuAsus").innerHTML = this.cpu;
    document.getElementById("gpuAsus").innerHTML = this.gpu;
    document.getElementById("monitorAsus").innerHTML = this.monitor;
};


//Subclass of Computer
function BuyPower(brand, price, hardDrive, ram, cpu, gpu, color, monitor, mouse, keyboard) {
    Computer.call(this, brand, price, hardDrive, ram, cpu);

    this.gpu = gpu;
    this.color = color;
    this.monitor = monitor;
    this.mouse = mouse;
    this.keyboard = keyboard;
}

BuyPower.prototype = Object.create(Computer.prototype);
BuyPower.prototype.constructor = BuyPower;

BuyPower.prototype.displayComputer = function() {
    document.getElementById("brandBuyPower").innerHTML = this.brand;
    document.getElementById("priceBuyPower").innerHTML = "$ " + this.price.toFixed(2);
    document.getElementById("hardDriveBuyPower").innerHTML = this.hardDrive;
    document.getElementById("ramBuyPower").innerHTML = this.ram;
    document.getElementById("cpuBuyPower").innerHTML = this.cpu;
    document.getElementById("gpuBuyPower").innerHTML = this.gpu;
    document.getElementById("colorBuyPower").innerHTML = this.color;
    document.getElementById("mouseBuyPower").innerHTML = this.mouse;
    document.getElementById("keyboardBuyPower").innerHTML = this.keyboard;
    document.getElementById("monitorBuyPower").innerHTML = this.monitor;
};

//Function to instantiate the existing code to run/override
function main() {

    var computer1 = new Computer("Generic Brand", 0, "Storage Space", "Some RAM", "Some CPU thing");
    computer1.displayComputer();

    var apple1 = new Apple("Apple - Macbook Pro", 2000, "512gb", "1600 MHz type", "Intel Core i7", "NVIDIA GeForce GT 330M");
    apple1.displayComputer();

    var microsoft1 = new Microsoft("HP - Pavilion", 750, "1TB", "8GB Memory", "Intel Core i5", "Intel HD", "Silver");
    microsoft1.displayComputer();

    var asus1 = new Asus("Asus - ROG", 5000, "1TB + 2x512GB Solid State Drive", "16GB Memory", "Intel Core i7", "Double NVIDIA GeForce GTX 1080", "No monitor");
    asus1.displayComputer();

    var buypower1 = new BuyPower("iBUYPOWER - Desktop", 600, "2TB", "16GB Memory", "AMD FX 6300", "NVIDIA GeForce GT 730 graphics", "Black/Red", "No monitor", "A black mouse", "A red keyboard");
    buypower1.displayComputer();
}
