"use strict";

class Marker {
    constructor(color, amountInk) {
        this.color = color;
        this.amountInk = amountInk;
    }

    write(text) {
        let lines = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== " " && this.amountInk > 0) {
                lines += text[i];
                this.amountInk -= 0.5;
            } else {
                lines += ' ';
            }
        }
        console.log(`[${this.color}] ${lines}`);
    }
}


class RefillableMarker extends Marker {
    refill() {
      this.amountInk = 100;
      console.log(`[${this.color}] Marker refilled.`);
    }
}

const marker = new Marker('blue', 50);
marker.write('Hello World!');

const refillableMarker = new RefillableMarker('green', 80);
refillableMarker.write('This is a refillable marker.');
refillableMarker.refill();
refillableMarker.write('This is a refillable marker.');