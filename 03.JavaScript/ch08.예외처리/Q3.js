// 3. random number로 10보다 크고 100보다 작은 두개의 정수가 주어집니다.
//    두 숫자의 공약수를 세트 형태로 구하도록 프로그램을 작성하세요.

const num1 = Math.floor(Math.random() * 89) + 11;
const num2 = Math.floor(Math.random() * 89) + 11;
function divisors(num1, num2) {
    const set = new Set();
    for(let i=2; i<=Math.min(num1,num2); i++)
        if(num1 % i === 0 && num2 % i === 0){
            set.add(i);
        }
    return console.log(set);
}
console.log(num1,num2);
console.log(divisors(num1, num2));