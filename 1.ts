console.log('strt typscript!');

class cars {
    public name: string;
    public distanceGone: number;
    // public randomNumberToMove: number;
    constructor(name: string, distanceGone: number) {
        this.name = name;
        this.distanceGone = distanceGone;
    }
}

const map: number = 300;

const main = (carsArr, numMpaDistanc: number) => {
    let indexStep = 0;
    while (chekFinalPlay(carsArr, numMpaDistanc)) {
        console.log(`step ${indexStep} :`);
        printMaps(numMpaDistanc, carsArr);
        for (let i = 0; i < carsArr.length; i++) {
            let randomNum: number = randomNumberToMoveFunc()
            carsArr[i]["distanceGone"] = carsArr[i]["distanceGone"] + randomNum;
            for (let i = 0; i < carsArr.length; i++) {
                for (let j = 0; j < carsArr.length; j++) {
                    if (j !== i) {
                        if (carsArr[i]["distanceGone"] === carsArr[j]["distanceGone"]) {
                            carsArr[i]["distanceGone"] = 0;
                            console.log(`${carsArr[j]["name"]} : atack to ${carsArr[i]["name"]}`);
                        }
                    }
                }
            }
            console.log(`name car : ${carsArr[i]["name"]} distance for move : ${randomNum} distance gone : ${carsArr[i]["distanceGone"]}`);
        }
        indexStep++;
    }
}

const randomNumberToMoveFunc = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const printMaps = (numMpaDistanc: number, cars) => {
    const mapShow: Array<string> = []
    for (let i = 0; i <= numMpaDistanc; i++) {
        mapShow.push('*');
    }
    for (let i = 0; i < cars.length; i++) {
        let index = cars[i]["distanceGone"];
        mapShow[index] = cars[i]["name"];

    }
    const mapShowText : string = mapShow.slice(1).join("");
    console.log(mapShowText);
    return mapShowText;
}

const chekFinalPlay = (arr, numMpaDistanc: number) => {
    let oprator: boolean = true;
    for (let i = 0; i < arr.length; i++) {
        if (numMpaDistanc < arr[i]["distanceGone"]) {
            console.log(`winner is ${arr[i]["name"]}`);
            return oprator = false;
        }
    }
    return true
}

const carsArr: Array<{ name: string, distanceGone: number }> = [];
const car1 = new cars('a', 0)
const car2 = new cars('b', 0)
const car3 = new cars('c', 0)
carsArr.push(car1)
carsArr.push(car2)
carsArr.push(car3)

main(carsArr, map)




