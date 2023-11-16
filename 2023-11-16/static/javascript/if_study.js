// 브라우저에 html 태그가 모두 로드(화면표시) 되면 실행되는 스크립트 코드
//
window.onload=function(){

    //주사위 게임 만들기
    //컴퓨터와 주사위 게임을 한다.
    //각자 주사위 두개씩 던진다. 주사위 합이 큰쪽이 이긴다.
    //단, 두 주사위값이 같은 숫자가 나온쪽이 이긴다.
    //둘 다 같은숫자가 나온다면 합이 큰 쪽이 이긴다.

    var com1 = Math.floor(Math.random()*6)+1;
    var user1 = Math.floor(Math.random()*6)+1;
    var com2 = Math.floor(Math.random()*6)+1;
    var user2 = Math.floor(Math.random()*6)+1;
    
    var user = user1+user2;
    var com =  com1+com2;

    if( user > com ){
        alert("승");
    }else if( user<com){
        alert("패");
    }else{
        alert("비김");
    }

    var user = document.getElementById("주사위");


    // addEventListener("click", function(){  //가위 클릭
    //     if( user == dice ){
    //         alert("비김");
    //     }else if( user<dice){
    //         alert("승");
    //     }else{
    //         alert("패");
    //     }
    // });
}

// 과제
// 주차비 정산
// apple 주차장의 주차요금 표
// 기본 주차비 -1000원, 기본 시간 -30분
// (30분 이내 주차시 1000원, 5분 주차해도 1000원, 39분까지 1000원)
// 10분당 100원씩 추가 (40분 주차시 1100원, 54분 주차시 1200원)

// 2시간 이상 주차시 기본요긍 변경
// 기본요금 - 1500원
// 4시간 이상 주차시 기본요금 변경
// 기본요금 - 2500원
// 8시간 이상 주차시 요금은 무조건 10000원
// (10시간, 12시간 9시간 43분 모두다 10000원)

// (2시간 1분 주차시 1500원, 2시간 34분 주차시 1800원)
// 주차시간을 분단위로 입력하여 주차요금이 얼마인지 출력하시오.