"use strict";

class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    areaCircle() {
        return Math.PI * Math.pow(this._radius, 2);
    }

    calculationLength() {
        return 2 * Math.PI * this._radius;
    }
}
const circle = new Circle(5);

console.log(circle.radius);

circle.radius = 7;
console.log(circle.diameter); 

console.log(circle.areaCircle());

console.log(circle.calculationLength()); 


