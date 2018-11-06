"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var StarFighter = /** @class */ (function (_super) {
    __extends(StarFighter, _super);
    function StarFighter(model, propulsor, laserCannos, qtyLaserCannos, launchers) {
        var _this = _super.call(this, propulsor, model) || this;
        _this.laserCannos = laserCannos;
        _this.qtyLaserCannos = qtyLaserCannos;
        _this.launchers = launchers;
        return _this;
    }
    StarFighter.prototype.shoot = function (weapon) {
        console.log(this.model + " is shooting " + this[weapon]);
    };
    StarFighter.prototype.shootLasers = function () {
        this.shoot('laserCannos');
    };
    return StarFighter;
}(base_ships_1.Spacecraft));
//milleniun falcon
var MillenniunFalcon = /** @class */ (function (_super) {
    __extends(MillenniunFalcon, _super);
    function MillenniunFalcon() {
        var _this = _super.call(this, 'Millenniun Falcon', 'Isu-Sim SSP05 hyperdrive', "CEC AG-2G quad laser cannons", 2, "Arakyd ST2 concussion missile tubes") || this;
        _this.cargoContainers = 4;
        _this.hiddenContainers = 4;
        return _this;
    }
    MillenniunFalcon.prototype.tryJumpHyperSpace = function () {
        var chanceTojump = Math.random();
        if (chanceTojump >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
            return true;
        }
        else {
            console.log('Failed!');
            return false;
        }
    };
    MillenniunFalcon.prototype.jumpIntoHyperSpace = function () {
        var falconJumped = false;
        var timesTried = 0;
        do {
            falconJumped = this.tryJumpHyperSpace();
            timesTried++;
            if (timesTried > 100) {
                console.log("Repeair falcon hiperDrive");
                break;
            }
        } while (!falconJumped);
    };
    return MillenniunFalcon;
}(StarFighter));
exports.MillenniunFalcon = MillenniunFalcon;
//X-wing fighter
var XWing = /** @class */ (function (_super) {
    __extends(XWing, _super);
    function XWing() {
        return _super.call(this, "X-wing", "hyperdrive", "Proton cannons", 4, "Torpedos") || this;
    }
    return XWing;
}(StarFighter));
exports.XWing = XWing;
