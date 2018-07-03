var nav = [];
nav.push('home', 'lesson two', 'lesson three');
//var orderList = document.createElement('ol');
//orderList.appendChild();
console.clear();
console.log(nav);
nav.shift(0);
nav.unshift('home', 'lesson one');
console.log(nav);
var ul = document.createElement('ul');
var li = document.createElement('li');
var lis = document.createElement('li');
li.innerHTML = nav[0];
lis.innerHTML = nav[1];
ul.children;
//ul.appendChild();
console.log(ul);

// new line
var myMoney = 100;
var priceOfHmamer = 50;
console.log('my money is ' +
    myMoney);
console.log('price of the hammer is ' + priceOfHmamer)
if (myMoney > priceOfHmamer) {
    console.log('buy that hammer duddy')
} else {
    console.log('bros calm down, you no get enough cash')
}
console.table(nav);
var myBtn = document.getElementsByClassName('btn');
var p = document.getElementsByTagName('p').innerHTML = 'hello world';
console.log(p);

console.clear();
for (var x = 0; x <= 3; x++) {
    for (var y = 0; y < 3; y++) {
        var li = document.createElement('li');
        console.log(li);
    }
}
console.clear();
for (var y = 0; y < 3; y++) {
    var li = document.createElement('li').innerHTML += nav[0] + ' ';
    console.log(li + y);
}
console.log(li);
console.clear();


function isPrime(prime) {
    // prime number is a number dat cant be divided by 2 except 1 and itself
    for (var x = 2; x < prime; x++) {
        if (prime % /* this => % is 'remainder operator' it returns d reminder of its dividend value*/ x === 0) {
            console.log(prime + ' is divisible by ' + x);
            return false;
        }
    }
    return true;
}
console.log(isPrime(49));
console.clear();
var nav = [];
nav.push('home', 'lesson two', 'lesson three');

console.clear();
console.log(nav);
nav.shift(0);
nav.unshift('home', 'lesson one');
//console.log(myBtn);
console.log(nav);
//li = document.cloneNode(true);
ul += li + lis;
nav = `<li>  $nav{0}   </li>`;
//nav.addEventListener('click', add);

function add() {
    nav.innerHTML += '<li> go</li>';
    return String(nav);
};
console.log(add());
document.write(nav);
