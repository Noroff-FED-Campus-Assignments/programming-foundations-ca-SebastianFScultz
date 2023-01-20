var car = {
    brand: "Opel",
    colour: "Black",
    numberOfWheels: 4,
    speed: 172,
    on: false,
    gearbox: ["Nautral", "First", "Second", "Third"],
    ignition: function() {
        car.on = !car.on
    }
};