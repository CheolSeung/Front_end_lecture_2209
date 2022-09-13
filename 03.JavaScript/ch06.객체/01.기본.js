// 배열 - (파이썬) 리스트 생각
let fruits = ['사과', '배', '감'];

let arrayPersonInfo = ['제임스', 28, '남자'];

// 객체 - (파이썬) 딕셔너리 생각
let PersonInfo = {
    'name': '제임스', 'age': 28, 'gender': '남자'
};
console.log(PersonInfo['name']);

let maria = {name:'마리아', age:24, gender:'여자'};
console.log(maria.age);

// key 값을 변수(문자열)로 받는 경우
const key = 'age';
// maria.key - 에러
console.log(maria[key], maria['gen'+'der']);

// ES-6
const name = '홍길동';
const age = 25;
const gender = '남자';
const hong = {name:name, age:age, gender:gender};
const hongEs6 = {name,age,gender};
console.log(hong, hongEs6)