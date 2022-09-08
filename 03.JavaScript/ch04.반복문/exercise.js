// 숫자를 입력으로 받아 예를 들어 7을 입력하면 
//     *
//    ***
//   *****
//  *******
//   *****
//    ***
//     *
// 를 출력하는 웹 프로그램을 작성

// 문제 1
function ex01() {
    const num = parseInt(document.getElementById('num').value);
    const half = parseInt(num/2);
    let diamond = '';
    for (let i=1; i <= half+1; i++) {
        let stars = '';
        for (let k=1; k <= half+1-i; k++)
            stars += ' ';
        for (let k=1; k <= 2*i-1; k++)
            stars += '*';
        diamond += stars + '\n';
    }
    for (let i=half; i>=1; i--) {
        let stars = '';
        for (let k=1; k <= half+1-i; k++)
            stars += ' ';
        for (let k=1; k <= 2*i-1; k++)
            stars += '*';
        diamond += stars + '\n';
    }
    document.getElementById('pre').innerText = diamond;
}

const num = 7;
const half = parseInt(num/2);
let diamond = '';
for (let i=1; i <= half+1; i++) {
    let stars = '';
    for (let k=1; k <= half+1-i; k++)
        stars += ' ';
    for (let k=1; k <= 2*i-1; k++)
        stars += '*';
    diamond += stars + '\n';
}
for (let i=half; i>=1; i--) {
    let stars = '';
    for (let k=1; k <= half+1-i; k++)
        stars += ' ';
    for (let k=1; k <= 2*i-1; k++)
        stars += '*';
    diamond += stars + '\n';
}
console.log(diamond);