//구조분해할당 - 배열, 객체를 분해해서 일부분의 데이터를 다른 변수에 할당

//배열에서의 구조분해할당
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const arr1 = [1, 2, 3];
const [a1, b1, c1] = arr1;
console.log(a1); //1
console.log(b1); //2

const arr2 = [3, 5, 7];
const [a2, b2] = arr2; //a2 = 3, b2 = 5 / 다 안 넣어도 오류 안남

//undefined : 변수가 선언되지 않았거나, 변수의 초기값이 없을 때 (null과 별개)
const arr3 = [4, 1];
const [a3, b3, c3] = arr3; //변수의 갯수와 데이터의 갯수가 같지 않아도 오류는 안 남
console.log(c3);

let a4; //초기값이 할당되지 않은 경우
console.log(a4); //a4 = undefined

//---------------------------------------------------------------
//객체 구조분해할당
const student = {
  name : 'hong',
  age : 20, 
  score : 80
};

const myName = student.name;
const myAge = student.age;
const myScore = student.score;

//객체의 구조분해할당 문법 사용을 위해서는
//변수 이름을 반드시 객체의 key와 동일하게 선언해야 함. 
// ->객체는 순번이 존재하지 않기 때문에!!!
const {age, score, name} = student;
console.log(age); //20
console.log(score); //20

//이렇게 변수 이름을 key와 다르게 선언하면 undefined 나옴
//why? student 안에 age1... 이 존재하지 않으니까
const {age1, score1, name1} = student;


//매개변수로 크기가 3인 배열이 전달되면, 배열의 모든 요소의 합을 리턴하는 함수
function f1(arr){ //const arr = arr5;
  return arr[0] + arr[1] + arr[2];
}

const arr5 = [1, 3, 5];
f1(arr5); //9
f2(arr5); //9

function f2([a, b, c]){ //const [a, b, c] = arr5;
  return a + b + c;
}

const phone = {
  name : 's10',
  price : 1000,
  color : 'white'
};

//매개변수로 phone 객체가 전달되면, 해당 phone의 이름과 가격, 색상을 출력하는 함수
function f3(p){ //p = phone;
  console.log(p.name, p.price, p.color);
}
f3(phone);

function f4({name, price, color}){ //{name, price, color} = phone;
  console.log(name, price, color);
}
f4(phone);


