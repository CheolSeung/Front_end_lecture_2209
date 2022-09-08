// Timeout 설정
setTimeout(function() {
    console.log('Timeout 발생(3초후)');
}, 3000);

// 시간 간격(interval) - 주기적으로 실행
const si = setInterval(() => {
    console.log(new Date());
}, 1000);

setTimeout(() => {
    clearInterval(si);
}, 5000);