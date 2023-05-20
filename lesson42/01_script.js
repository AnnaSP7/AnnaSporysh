"use strict";

class Circle {
    constructor(radius) {
        this.circleRadius = radius;
    }
    get radius() {
        return this.circleRadius;
    }

    set radius(value) {
        this.circleRadius = value;
    }

    get diameter() {
        return this.circleRadius * 2;
    }

    areaCircle() {
        return Math.PI * Math.pow(this.circleRadius, 2);
    }

    calculationLength() {
        return 2 * Math.PI * this.circleRadius;
    }
}
const circle = new Circle(5);

console.log(circle.radius);

circle.radius = 7;
console.log(circle.diameter); 

console.log(circle.areaCircle());

console.log(circle.calculationLength()); 


