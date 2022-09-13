let number = 273.1;
let num = Number(273.1);
console.log(num === number);  // 두가지 방법이 동일

// 기본(primitive) 자료형 - 숫자, 문자열, 불

// 객체 자료형
let obj = new Number(273.1);
console.log(typeof(number), typeof(num), typeof(obj));   // number, number, object

let pi = Math.PI;
console.log(pi);
console.log(pi.toExponential()); // 지수형태 
console.log(pi.toFixed(2));      // 소숫점 이하 자리수
console.log(pi.toPrecision(6));  // 유효숫자

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);  // 2의53승 - 1, -2의 53승
console.log(Math.pow(2, 53) - 1);