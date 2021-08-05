var number_1;
var number_2;
var player1=localStorage.getItem("player1")
var player2=localStorage.getItem("player2")
function send(){
    number_1= document.getElementById("number1").value;
    number_2= document.getElementById("number2").value;
    actual_answer= parseInt(number_1) * parseInt(number_2);
    question_number= "<h4>" + number_1 +"X"+number_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn="player1";
answer_turn="player2"
var score1=0;
var score2=0
document.getElementById("player1name").innerHTML=player1+":";
document.getElementById("player2name").innerHTML=player2+":";
document.getElementById("player1score").innerHTML=score1;
document.getElementById("player2score").innerHTML=score2;
document.getElementById("question").innerHTML= "Question Turn -" + player1;
document.getElementById("answer").innerHTML= " Answer Turn -" + player2;
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if (answer_turn == "player1"){
            score1= score1 +1;
            document.getElementById("player1score").innerHTML= score1;
        }
        else{
            score2= score2 +1;
            document.getElementById("player2score").innerHTML= score2;
        }
    }
    if (question_turn == "player1"){
        question_turn= "player2";
        answer_turn="player1"
        document.getElementById("question").innerHTML= "Question Turn -" + player2;
        document.getElementById("answer").innerHTML= " Answer Turn -" + player1;
    }
    else{
        question_turn= "player1";
        answer_turn="player2"
        document.getElementById("question").innerHTML= "Question Turn -" + player1;
        document.getElementById("answer").innerHTML= " Answer Turn -" + player2;
    }
}