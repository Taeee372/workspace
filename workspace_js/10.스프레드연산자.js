//Spread 연산자
// - 배열, 객체에 저장된 여러 데이터를 개별로 흩뿌려주는 문법
const arr1 = [1, 2, 3];
const arr2 = [5, 8, arr1]; // [5, 8, [1,2,3]] 데이터 3개 들어있는 상태
const arr3 = [5, 8, ...arr1]; // [5, 8, 1, 2, 3] 데이터 5개 들어있는 상태


//객체의 key는 중복될 수 없음
//key가 중복이면 가장 마지막에 들어온 데이터만 저장!
const student = {
  name : 'kim',
  korScore : 80, 
  engScore : 90,
  korScore : 100
};

console.log(student); //name : kim, engScore : 90, korScore : 100

const newScore = {
  korScore : 70,
  engScore : 60
};

const student1 = {
  name : 'kim',
  engScore : 90,
  korScore : 100,
  ...newScore 
  //engScore와 korScore의 키가 중복되니 
  //마지막에 온 newScore에 들어있는 engScore와 korScore의 값으로 변경됨
};
console.log(student1);
