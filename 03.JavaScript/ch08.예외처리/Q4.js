// 4. 다음 배열에서 제조사(manufacturer)와 모델명(model)을 분리해서
//    별도의 배열을 각각 만드세요.

const cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino'];

const model = cars.splice(1, 2);  
console.log(model, cars);