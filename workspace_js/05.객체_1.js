//객체 : 배열과 같이 다수의 데이터를 저장할 수 있는 자료형

//객체에 저장된 데이터는 순번이 존재하지 않는다!!!!!!!!!! (배열은 순번 존재)

//객체의 데이터는 key값으로 관리된다.
//배열 : [] , 객체 : {}

const student1 = {}; //빈 객체
const student2 = {name : '홍길동', age : 20} 

//name : key, '홍길동; : value
//key가 라벨지, 라벨지에 접근 ->라벨지에 접근하면 그곳에 들어있는 데이터가 나온다

//홍길동이라는 문자열 데이터에 접근하고 싶어
// -> key가 name인 데이터에 접근하겠습니다.

//객체의 각 데이터에 접근하는 법
console.log(student2.name);
console.log(student2.age);
console.log(student2)

//객체의 각 데이터를 수정하는 법
student2.name = '이순신';
console.log(student2.name);
console.log(student2);

//객체에 새로운 데이터를 추가하는 법
student2.addr = '울산시';
console.log(student2);

const phone = {
  modalName : 's10', 
  price : 1000,
  color : 'white'
};

//phone 객체의 모델명을 's20'으로 변경하세요
phone.modalName = 's20';

////////////////////////////////////////////

const students = [
  {
    name : 'kim',
    korScore : 80,
    engScore : 70
  },
  {
    name : 'lee',
    korScore : 100,
    engScore : 100
  }, 
  {
    name : 'park',
    korScore : 90,
    engScore : 80
  }
];

//1.  students 배열에 저장된 학생 중 1번째 학생의 모든 정보 출력
console.log(students[1]);

//2. students 배열에 저장된 학생 중 2번째 학생의 국어 점수 출력
console.log(students[2].korScore);

//3. students 배열에 저장된 모든 학생의 이름을 출력
for(let i = 0; i < students.length; i++){
 console.log(students[i].name)
}

//4. students 배열에 저장된 학생 중 이름이 'park'인 학생의 국어점수와 영어점수를 출력
for(let i = 0; i < students.length; i++){
  if(students[i].name === 'park'){
    console.log(`국어점수 : ${students[i].korScore}, 영어점수 : ${students[i].engScore}`)
  }
}

//5. students 배열에 저장된 학생들의 국어점수의 합을 출력
let sum = 0;
for(let i = 0; i < students.length; i++){
  sum = sum + students[i].korScore
}
console.log(sum);

//6. students 배열에 저장된 학생들의 수학점수를 요소로 갖는 배열을 생성하고,
//   해당 배열을 출력
const korAll = [];
for(let i = 0; i < students.length; i++){
  
  korAll.push(students[i].korScore);
}
console.log(korAll)


//7. 국어와 영어점수의 총합이 가장 높은 학생의 이름을 출력
let totalScore = 0;
let max = 0;
let maxName = '';
for(let i = 0; i < students.length; i++){
  totalScore = students[i].korScore + students[i].engScore;
   if(totalScore > max){
      max = totalScore;
      maxName = students[i].name;
    }
   }
    console.log(maxName);

//8. 모든 학생에 총점 데이터를 추가해보세요. 총점의 key는 totalScore로 지정하고,
//   총점의 value는 국어와 영어점수의 합으로 지정한다.
for(let i = 0; i  < students.length; i++){
  students[i].totalScore = students[i].korScore + students[i].engScore
  console.log(students[i].totalScore)
}
