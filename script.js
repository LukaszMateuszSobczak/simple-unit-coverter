'use strict';

const inputEl = document.querySelector('#input-el');
const convertBtn = document.querySelector('#convert-btn');
let userInput = 0;

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const calcLength = (input) => {
    const metersToFeet = (input * 3.281).toFixed(3);
    const feetToMeters = (input / 3.281).toFixed(3);
    return `${input} meters = ${metersToFeet} feet | ${input} feet = ${feetToMeters} meters`;
};

const calcVolume = (input) => {
    const litersToGallons = (input * 0.264).toFixed(3);
    const gallonsToLiters = (input / 0.264).toFixed(3);
    return `${input} liters = ${litersToGallons} gallons | ${input} gallons = ${gallonsToLiters} liters`;
};

const calcMass = (input) => {
    const kilosToPounds = (input * 2.204).toFixed(3);
    const poundsToKilos = (input / 2.204).toFixed(3);
    return `${input} kilos = ${kilosToPounds} pounds | ${input} pounds = ${poundsToKilos} kilos`;
};

const lengthBox = document.querySelector('#box-length');
const volumeBox = document.querySelector('#box-volume');
const massBox = document.querySelector('#box-mass');

const renderResult = (destinationEl, input, whatToCalc) => {
    const element = destinationEl.querySelector('.box-result');
    if (element) {
        element.remove();
    }
    const pEl = document.createElement('p');
    pEl.textContent = whatToCalc(input);
    pEl.classList.add('box-result');
    destinationEl.append(pEl);
};

convertBtn.addEventListener('click', () => {
    userInput = Number(inputEl.value);
    renderResult(lengthBox, userInput, calcLength);
    renderResult(volumeBox, userInput, calcVolume);
    renderResult(massBox, userInput, calcMass);
});
