// 텍스트 입력 삭제
(function() {
    // span 요소 노드 가져오기
    const spanEl = document.querySelector("main h2 span");
    // 화면에 표시할 문장 배열
    const txtArr = ['Web publisher', 'Front-End Developer', 'Back-End Developer'];
    // 배열의 인덱스 초깃값
    let index = 0;
    // 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
    let currentTxt = txtArr[index].split("");
    
    // 텍스트 입력 효과 (배열요소 한개씩 출력)
    function writeTxt() {
        spanEl.textContent += currentTxt.shift(); // 1
        if(currentTxt.length !== 0) { //2
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else { //3
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 2000);
        }
    }
    
    // 텍스트 삭제 효과
    function deleteTxt() {
        currentTxt.pop(); // 1
        spanEl.textContent = currentTxt.join(""); // 2
        if(currentTxt.length !== 0) {  // 3
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else {  // 4
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }
    
    writeTxt();
})();


// 스크롤시 헤더영역 이벤트
const headerEl = document.querySelector("header");
window.addEventListener("scroll", function() {
    requestAnimationFrame(scrollCheck);
});
function scrollCheck() {
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0) {
        headerEl.classList.add("active");
    } else {
        headerEl.classList.remove("active");
    }
}


// nav바 버튼 클릭시 이동 애니메이션 효과
const animationMove = function(selector) {
    const targetEl = document.querySelector(selector);  // selector 매개변수로 이동할 대상 요소 노드 가져오기
    const browserScrollY = window.pageYOffset;  // 현재 웹 브라우저의 스크롤 정보(y값)
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;  // 이동할 대상의 위치(y값)
    window.scrollTo({ top: targetScrollY, behavior: "smooth"});  // 스크롤 이동
};


// 스크롤 이벤트 연결하기
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i=0; i<scrollMoveEl.length; i++) {
    scrollMoveEl[i].addEventListener('click', function(e) {
        const target = this.dataset.target;
        animationMove(target);
    });
}
