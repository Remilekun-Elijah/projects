console.log('hi')
// function placeANOrder(orderNumber){

// 	console.log('customer order:', orderNumber);

// 	coockAndDeliverFood(function(){ console.log('deliver food order', orderNumber);
// 	})

// }

// function coockAndDeliverFood(callback){
// 	setTimeout(callback, 5000);
// }

// // users request
// placeANOrder(1);
// placeANOrder(2);
// placeANOrder(3);
// placeANOrder(4);

// new line
// var elijah = {
// 	favFood: 'rice',
// 	favMovie: 'jet li'
// }
// var me = elijah;
// me.favFood = 'beans';
// console.log(me.favFood);

// new 
// var me = {
// 	printFirstName: function(){
// 	console.log("my name is Elijah");
// 	console.log(this === me)
// 	}
// };
// me.printFirstName();

// // shit is global
// function doNothing(){
// 	console.log("\nI am nothing");
// 	console.log( this === global)
// }
// doNothing();

// new

function user() {
	this.name = '';
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer) {
		targetPlayer.life += 1;
		console.log(this.name + ' gave 1 life to ' + targetPlayer.name)
	}
}

// new user instance && name
var lekan = new user();
var banks = new user();
lekan.name = "lekan";
banks.name = "banks";

//given lifes && amount of life
lekan.giveLife(banks);
console.log("lekan: " + lekan.life);
console.log("banks: " + banks.life);

user.prototype.uppercut = function uppercut(targetPlayer) {
	targetPlayer.life -= 3;
	console.log(this.name + ' just uppercutted ' + targetPlayer.name)
}
lekan.uppercut(banks);
console.log("lekan: " + lekan.life);
console.log("banks: " + banks.life);

user.prototype
