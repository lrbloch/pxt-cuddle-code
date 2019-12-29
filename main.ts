/**
 * CuddleCode Utilities
 */
//% color="#3ab69e" weight=100 icon="\uf1b0" block="Cuddle Code"
namespace cuddleCode{

    //% block
    export function legsSenseTouch() {
        legsSensedTouch = 0
        if (getAve(legPin1) > defaultLeg1 + legThreshold1 || getAve(legPin2) > defaultLeg2 + legThreshold2) {
            legsSensedTouch = 1
        }
    }

    //% block
    export function beatHeart (numTimes: number) {
        for (let index = 0; index < numTimes; index++) {
            pins.digitalWritePin(DigitalPin.P7, 1)
            basic.pause(300)
            pins.digitalWritePin(DigitalPin.P7, 0)
            basic.pause(300)
            pins.digitalWritePin(DigitalPin.P7, 1)
            basic.pause(300)
            pins.digitalWritePin(DigitalPin.P7, 0)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P7, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P7, 0)
            basic.pause(300)
        }
    }

    function initEyes () {
        defaultLight1 = getAve(eyePin1)
        defaultLight2 = getAve(eyePin2)
    }
    
    function initArms () {
        defaultArm1 = getAve(armPin1)
        defaultArm2 = getAve(armPin2)
    }
    function initLegs () {
        defaultLeg1 = getAve(legPin1)
        defaultLeg2 = getAve(legPin2)
    }

    //% block
    export function mouthSing () {
        pins.analogSetPitchPin(AnalogPin.P16)
        music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }

    //% block 
    export function lightHeart(numSecs: number) {
        pins.digitalWritePin(DigitalPin.P7, 1)
        basic.pause(numSecs * 1000)
        pins.digitalWritePin(DigitalPin.P7, 0)
    }

    function eyeSenseLight () {
        eyesSensedDark = 0
        if (getAve(eyePin1) < defaultLight1 - lightThreshold1 || getAve(eyePin2) < defaultLight2 - lightThreshold2) {
            eyesSensedDark = 1
        }
    }
    function armsSenseTouch () {
        armsSensedTouch = 0
        if (getAve(armPin1) > defaultArm1 + armThreshold1 || getAve(armPin2) < defaultArm2 - armThreshold2) {
            armsSensedTouch = 1
        }
    }
    let armsSensedTouch = 0
    let eyesSensedDark = 0
    let legsSensedTouch = 0
    let legThreshold2 = 0
    let legThreshold1 = 0
    let armThreshold2 = 0
    let armThreshold1 = 0
    let lightThreshold2 = 0
    let lightThreshold1 = 0
    let defaultLeg2 = 0
    let defaultLeg1 = 0
    let defaultArm2 = 0
    let defaultArm1 = 0
    let defaultLight2 = 0
    let defaultLight1 = 0
    function getAve(sensorPin: AnalogPin) {
        let ave = 0
        for (let j = 0; j < 10; j++) {
            ave += pins.analogReadPin(sensorPin)
            basic.pause(10)
        }
        ave = ave / 10
        return ave
    }
    let heartPin = DigitalPin.P7;
    let eyePin1 = AnalogPin.P0;
    let eyePin2 = AnalogPin.P10;
    let armPin1 = AnalogPin.P1;
    let armPin2 = AnalogPin.P2;
    let legPin1 = AnalogPin.P3;
    let legPin2 = AnalogPin.P4;
    let mouthPin = AnalogPin.P16;
    lightThreshold1 = 15
    lightThreshold2 = 20
    armThreshold1 = 70
    armThreshold2 = 10
    legThreshold1 = 30
    legThreshold2 = 150
    led.enable(false)
    initArms()
    initLegs()
    initEyes()
}
