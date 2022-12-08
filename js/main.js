
// 방향키로 페이지 이동하는 것 막는 코드
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


let pageNum = 0;
// 현재 페이지를 나타내는 변수
let pageLeft;
// wrap의 css:left에 사용되는 변수
let rightProg = 0;
let leftProg = 0;
// 왼쪽, 오른쪽 키를 눌렀을 때 점점 증가, 특정 수가 되면 함수 실행
let LeftBool;
let rightBool;



$(document).keydown(function(event){    
    // keydown 키 누르면
    // keypress 값이 입력되면 (alt, ctrl, shift, esc 등 작동하지 않음)
    // keyup 키 떼면
    // key code list http://b1ix.net/170

    if($("#wrap").is(":animated") == false )
    // 이친구가 물건이드만. 나도 움직임이 멈춘 후 또 다음 것이 실행 되었으면 하여 묶어줬다.
    {
        if (event.keyCode == 90 || event.which == 90 ) {
            $('.remoteEffect').addClass('active');                
            console.log("T:qklf");
            LeftBool = true;
            if(leftProg == 10){
                prev();
                leftProg = 0;
            }            
        }
        // 왼쪽 방향키를 누르면 leftProg가 점점 증가, 10이 되면 이동하는 함수를 실행시키며 leftProg는 초기화
        else if ( event.keyCode == 88 || event.which == 88 ) {
            rightBool = true;
            if(rightProg == 10){
                next();
                rightProg = 0;
            }
        }
        // 오른쪽도 마찬가지.
    }    
});
if($("#wrap").is(":animated") == false){
    setInterval(
        leftFunc = function(){

            if(LeftBool == true){
                leftProg ++
                console.log(leftProg);
            }
        }
    ,100)
    setInterval(
        RightFunc = function(){
            if(rightBool == true){
                rightProg ++;
                console.log(rightProg);
        console.log(pageNum);

            }
        }
    ,100)
}

$(document).keyup(function(event){
    if ( event.keyCode == 90 || event.which == 90 ) {
        leftProg = 0;
        LeftBool = false;
    }else if ( event.keyCode == 88 || event.which == 88 ) {
        rightProg = 0;
        rightBool = false;
    }
});
// 오르다가 키를 때면 초기화

function prev(){                
    if($("#wrap").is(":animated") == false && pageNum < 0){
        console.log("왜 아무것도 안찍히냐");
        LeftBool = false;

        pageNum ++;
        // 페이지 번호가 오르며
        console.log(pageNum);

        pageLeft = pageNum * 1080;
        // left에 해당하는 변수를 곱해준다
        $("#wrap").animate(
            {                        
                "top": pageLeft +"px"
            },
            1000
        );                
    }
}
function next(){
    // console.log(pageNum);
    if($("#wrap").is(":animated") == false && pageNum >= -1 ){
        pageNum --;
        // 페이지 번호가 내려가며
        console.log(pageNum);

        pageLeft = pageNum * 1080;
        // left에 해당하는 변수를 곱해준다. 이거 그냥 위에서 한번만 선언해줘도 될래나.
        $("#wrap").animate(
            {
                "top": pageLeft +"px"
            },
            1000,
        );
    }
}
function home(){
    // console.log(pageNum);
    if($("#wrap").is(":animated") == false){
        pageNum = 0
        pageLeft = pageNum * 1080;
        $("#wrap").animate(
            {
                "top": pageLeft +"px"
            },
            1000,
        );
    }
}
// 로고 버튼을 누를 시 처음으로