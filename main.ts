/**
 * @author Miles Aube
 * @version 1.0.0
 * @date 2025-12-04
 * @fileoverview Calculates cost and checks if a nuts/bolts/washer order is valid.
 */

// constants
const BOLT_COST: number = 0.10;
const NUT_COST: number = 0.05;
const WASHER_COST: number = 0.03;

// variables
let boltString: string = "";
let nutString: string = "";
let washerString: string = "";

let bolts: number = 0;
let nuts: number = 0;
let washers: number = 0;
let totalCost: number = 0;

// input
boltString = prompt("Enter number of bolts: ") || "0";
nutString = prompt("Enter number of nuts: ") || "0";
washerString = prompt("Enter number of washers: ") || "0";

bolts = parseInt(boltString);
nuts = parseInt(nutString);
washers = parseInt(washerString);

// processing
totalCost = (bolts * BOLT_COST) + (nuts * NUT_COST) + (washers * WASHER_COST);

// output order check
if (bolts > nuts) {
  console.log("Check the Order - not enough nuts for the bolts you purchased.");
} else if (washers < bolts * 2) {
  console.log("Check the Order - not enough washers for the bolts you purchased.");
} else {
  console.log("Order is OK.");
}

// output total cost
console.log("Total cost: $" + totalCost.toFixed(2));
console.log("\nDone.");