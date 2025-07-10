//-초급-
//1. 인사 함수 만들기
//이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 반환하는 함수를 작성하세요
function test1(name){
  return `안녕하세요, ${name}님!`;
}


//2. 두 수의 합 계산하기
// 두 개의 숫자를 매개변수로 받아서 그 합을 반환하는 함수를 작성하세요
function test2(a, b){
  return a + b;
}


//3. 짝수 홀수 판별하기
//숫자를 매개변수로 받아서 짝수면 "짝수", 홀수면 "홀수"를 반환하는 함수를 작성하세요.
const test3 = function(num){
  return num % 2 === 0 ? '짝수' : '홀수';
}


//-중급-
//4. 배열의 최댓값 찾기
//숫자 배열을 매개변수로 받아서 가장 큰 값을 반환하는 함수를 작성하세요. (Math.max 사용 금지)
const test4 = function(arr){
  let max = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}


//5. 문자열 뒤집기
//문자열을 매개변수로 받아서 뒤집은 문자열을 반환하는 함수를 작성하세요.
//hint! 문자열도 배열이다.
const test5 = str => {
  let result = '';
  for(let i = str.length - 1; i > -1 ; i--){
    result = result + str[i]
  } 
  return result;
}
console.log(test5('java'));

//const str = 'java';
//const a = '';
//a = a + str[3];// '' + 'a' => 'a'
//a = a + str[2];// 'a' + 'v' => 'av'

//6. 팩토리얼 계산하기
//양의 정수를 매개변수로 받아서 팩토리얼을 계산하는 함수를 작성하세요.
const test6 = num => {
  let result = 1;
  for(let i = num; i > 0; i--){
    result = result * i;
  }
  return result;
}
console.log(test6(5));


//-고급-
//7. 배열 중복 제거하기
//배열을 매개변수로 받아서 중복된 요소를 제거한 새로운 배열을 반환하는 함수를 작성하세요.
const test7 = (arr) => { //arr = [3, 2, 1, 3, 5]
  const result = [];
  for(let i = 0; i < arr.length; i++){ //배열의 크기만큼 반복!
    const cnt = 0; //중복 데이터 갯수
    for(let j = 0; j < i; j++){ //배열 각 요소의 중복검사를 반복!
      if(arr[i] === arr[j]){
        cnt++;
      }
    } 

    if(cnt === 0){
      result.push(arr[i]);
    }

  }
}