// План:
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой

// Задание 4
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// Задание 5
// Переписать консольное приложение из предыдущего юнита на классы.

let devicesIncluded = [];
let devicesDisabled = [];

const Devices = function(name, power) {
    this.type = 'electric',
    this.name = name,
    this.power = power,
    this.getOnOff = function(OnOff){
        if (OnOff == true) {
            devicesDisabled.filter((value) => value == this);
            devicesIncluded.push(this);
        } else {
            devicesIncluded.filter((value) => value == this);
            devicesDisabled.push(this);
        }
    }
};

const lamp = new Devices("lamp", 50)
const computer = new Devices("computer", 500)
const toaster = new Devices("toaster", 600)
const laptop = new Devices("laptop", 400)

lamp.getOnOff(false)
computer.getOnOff(false)
toaster.getOnOff(true)
laptop.getOnOff(true)

let networkLoad = 0;

const calculateNetworkLoad = function(array) {
    let devicesIncludedName = [];
    for(let key of array) {
        networkLoad += key.power
        devicesIncludedName.push(key.name) 
    }
    console.log(`Потребляемая мощность: ${networkLoad} ватт`)
    console.log(`Подключенные к сети устройства: ${devicesIncludedName}`)
}

calculateNetworkLoad(devicesIncluded)