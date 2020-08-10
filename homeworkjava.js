//Ex 1. Display the numbers from 1 to 20.

for(i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]){
    console.log(i)}
//Ex 2. Display in the console the odd numbers from 1 to 20

for(i=1; i<=20; i++){
    if(i%2!=0)
    console.log(i)
}
//Ex 3. Compute the sum of the elements of an array and display it in console

var array = [11,112,39,54,15]
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
}
console.log(sum)

//Ex 4. Compute the maximum of the elements of an array and display it in the console 
var list=[1,3,8,11,2,51,41,32]
var max= Math.max(...list);
console.log(max)


//Ex 5. Compute how many times a certain element appears in an array
var arr = [5, 5, 5, 2, 5, 5, 5, 9, 4];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[5])


