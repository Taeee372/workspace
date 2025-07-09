
const array1 = [1, [1, 2], [1, [5, 6], 3]];
console.log(array1[2][1][0]);

function test(){
  alert(1);
}

function test1(num1, num2){
  alert((num1 + num2) % 2 === 0 ? 1 : 2);
}

function test2(arr1, arr2){
  let sum1 = 0;
  for(let e of arr1){
    sum1 = sum1 + e;
  }
  let sum2 = 0;
  for(let e of arr2){
    sum2 = sum2 + e;
  }
  alert(sum1 - sum2);
}

function test3(a){
const arr = [3, 5.5, [1, 2, 4]]; 
alert(arr[2][2]);
}

