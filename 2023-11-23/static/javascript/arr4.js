const moviename = ["서울의봄", "프레디의피자가게", "사채소년", 
"헝거게임", "더와일드", "더마블스", "30일", "나폴레옹", "빅슬립"];

const grade = [8.7, 7.3, 7.3, 6.7, 8.2, 3.9, 6.9, 9.6, 9.0];

const nation = ["한국", "미국", "한국", "미국", "미국", "미국", "한국",
"영국", "한국"];

// 영화 제목을 검색하여 평점(grade)과 국가(nation)를 출력하세요.

function movie(){
    var movie = $("#movie").val(); 
    var idx = moviename.indexOf(movie);
    if(idx == -1)
        $("#result").text("상영하지 않는 영화입니다.");
    else
        $("#result").text(`평점: ${grade[idx]}, 국가: ${nation[idx]}`);
}

                         
// $(function(){
//     $("#movie").keyup(function(key){
//         if( event.keyCode == 13 )
//             movie_search();
//     })
// }); 


// function movie_search(){
//     var movie = $("#movie").val(); 
//     //배열에서 데이터 존재 유무 확인
//     var idx = moviename.indexOf(movie); //indexOf의 결과가 -1이라면 배열에 없는 데이터
//     if(idx == -1)
//         $("#result").text("상영하지 않는 영화입니다.");
//     else
//         $("#result").text(`평점: ${grade[idx]}, 국가: ${nation[idx]}`);
// }

