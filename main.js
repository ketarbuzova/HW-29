let sumOne = 0.1 + 0.2;
alert(`Correct sum 0.1+0.2 is ${+sumOne.toFixed(2)}`);

let sumTwo = 1 + 2;
alert(`Correct sum 1+2 is ${+sumTwo}`);

let storage = prompt("Enter flash drive size in Gb:");
const currentFiles = 0.82;
let yourStorage = Number(storage);
let filesFit = (storage / currentFiles).toFixed();
console.log(typeof storage);
console.log(typeof yourStorage);
console.log(storage / currentFiles);
alert(`${filesFit} file(s) fit on flash drive`);

var rez = prompt("Enter any number");
alert(rez.split("").reverse().join(""));

/*let money = prompt("Enter how money do you have:");
const chocolatePrice = 30;
let yourWallet = Number(money);
let canBuy = (yourWallet / chocolatePrice).toFixed();
let change = ((yourWallet - canBuy).toFixed(2));
console.log(typeof money);
console.log(typeof yourWallet);
console.log(yourWallet / chocolatePrice);
alert(`${filesFit} chocolate(s) you can buy and chanche will be ${change}`);*/