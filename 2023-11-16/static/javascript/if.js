// var num = 20;

// if(num>0){
//     console.log("양수다");
// }else{
//     console.log("음수다");
// }

// var birth = parseInt(prompt(" 생년월일(8자리) 입력 "));
// if(birth<=20041231){
//     console.log("성인이다");
// }else{
//     console.log("미성년자다");
// }


// var kor = parseInt(prompt(" 국어 점수 입력 "));
// var eng = parseInt(prompt(" 영어 점수 입력 "));
// var mat = parseInt(prompt(" 수학 점수 입력 "));
// avg= (kor+eng+mat)/3;
// if(avg>=65){
//     console.log("통과");
// }else{
//     console.log("낙제");
// }

//동전 앞면 뒷면 맞추기

//css 선택자 id-#, class -.

//브라우저에 html 태그가 모두 로딩(화면표시)되면 자바스크립트 코드를 실행시키는 방법

window.onload=function(){

    //가위 바위 보 게임 만들기
    // 1. 가위 2. 바위 3. 보
    var ans = Math.floor(Math.random()*3)+1;
    //var game= parseInt(prompt("1. 가위 2. 바위 3. 보"));

    var scis = document.getElementById("scissors");
    var rock = document.getElementById("rock");
    var paper = document.getElementById("paper");


    scis.addEventListener("click", function(){  //가위 클릭
        if( ans ==1 ){
            alert("비김");
        }else if( ans==3){
            alert("승");
        }else{
            alert("패");
        }
        ans = Math.floor(Math.random()*3)+1;
        scis.style.background="black";
        rock.style.background="white";
        paper.style.background="white";
    });
    rock.addEventListener("click", function(){  //바위 클릭
        if( ans ==2 ){
            alert("비김");
        }else if( ans==1){
            alert("승");
        }else{
            alert("패");
        }
        ans = Math.floor(Math.random()*3)+1;
        scis.style.background="white";
        rock.style.background="black";
        paper.style.background="white";
    });
    paper.addEventListener("click", function(){  //보 클릭
        if( ans ==3 ){
            alert("비김");
        }else if( ans==2){
            alert("승");
        }else{
            alert("패");
        }
        ans = Math.floor(Math.random()*3)+1;
        scis.style.background="white";
        rock.style.background="white";
        paper.style.background="black";
    });
    
    // if(ans==game){
    //     alert(" 비겼음 ");
    // }else if((ans==1 && game ==2) || (ans==2 && game ==3)|| (ans==3 && game ==1)){
    //     alert(" 이겼음 ");
    // }else{
    //     alert(" 졌음 ");
    // }

    // //세 개의 정수를 입력 받아 가장 작은 수 출력, 모두 같다면 같다 출력
    // var num1= parseInt(prompt("첫 번째 정수"));
    // var num2= parseInt(prompt("두 번째 정수"));
    // var num3= parseInt(prompt("세 번째 정수"));

    // if( num1==num2 && num1==num3 ){
    //     alert("모두 같은 숫자");
    // }else if( num1<num2 && num1<num3 ){
    //     alert("작은수: " + num1);
    // }else if( num2<num1 && num2<num3 ){
    //     alert("작은수: " + num2);
    // }else if( num3<num1 && num3<num2 ){
    //     alert("작은수: " + num3);
    // }

    // if(num1 < num2){
    //     if(num1<num3){
    //         alert("작은수: " +num1);
    //     }else{
    //         alert("작은수: " +num3);
    //     }
    // }else if(num2 < num3){
    //     alert("작은수: " +num2);
    // }else{
    //     alert("작은수: " +num3);
    // }
    



    // var coin = Math.floor(Math.random()*2)+1;

    // //javascript html 태그 선택방법
    // var front = document.getElementById("front");
    // var back = document.getElementById("back");

    // front.addEventListener("click", function(){
    //     if(coin==1){
    //     alert(" 정답 "); //alert는 알림창을 나타낸다.
    //     }else{
    //         alert("땡");
    //     }
    // });

    // back.addEventListener("click", function(){
    //     if(coin==2){
    //         alert(" 정답 "); //alert는 알림창을 나타낸다.
    //         }else{
    //             alert("땡");
    //         }
    // });
};
