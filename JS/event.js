//상세 설명 보기 클릭 - 텍스트 보이기
function showText(){
    //var text = document.getElementById("desc");
    //text.style.display = "block";
      document.getElementById("desc").style.display = "block";  

    // var button = document.getElementById("btn");
    // button.style.display = "none";
      document.getElementById("btn").style.display = "none";
}

//상세 설명 닫기 클릭 - 텍스트 숨기기
function hideText(){
    var text = document.getElementById("desc");
    text.style.display = "none"; 

    var button = document.getElementById("btn");
    button.style.display = "block";
}