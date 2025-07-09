function hello(){
  console.log('hello');
}

//매개변수로 받은 두 정수의 합을 출력
function printSum(a, b){
  console.log(a + b);
}

//매개변수로 받은 두 정수의 곱을 리턴
function getMulti(a, b){
  return a * b;
}

//1부터 매개변수로 받은 정수까지의 수 중 
//3의 배수의 갯수를 리턴하는 함수를 선언
function getCnt(a){
  let cnt = 0;
  for(let i = 1; i < a + 1; i++){
    if (i % 3 === 0){
      cnt++;
    }
  }
  return cnt;
}

//매개변수로 정수만 들어있는 배열이 전달되면
//해당 배열에서 짝수만을 갖는 새로운 배열을 리턴하는 함수
/* function getEvenArray(arr){
  let cnt = 0;
  for(let i = 0; i < arr.length; i++){
    if(i % 2 === 0){
      cnt++;
    }
  }

  let newArr = [];
  let index = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      newArr[index] = arr[i];
      index++;
    }  
  }
  return newArr;
}
  이렇게까지 할 필요 없슴*/ 

//함께 풀이
function getEvenArray(arr){ //arr = [1,2,3,4,5] => [2,4]
  const resultArr = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){ //문자열도 같은지 비교는 ===로 함
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}



console.log('자바스크립트 실행');

hello();
printSum(2, 3);
const result = getMulti(2, 3);
console.log(result);

const a = getEvenArray([1,2,3,4,5]); //[]배열 바로 넣으면 된다
console.log(a);

console.log('자바스크립트 끝~');