"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor, model) {
        this.propulsor = propulsor;
        this.model = model;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log(this.model + " is entering in hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
