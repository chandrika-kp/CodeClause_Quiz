// displaying the first block of question
document.getElementsByClassName('container')[0].style.display = "block";

// DEFINING THE NEXT FUNCTION
function next(id) {
  document.getElementsByClassName('container')[id - 1].style.display = "none";
  document.getElementsByClassName('container')[id].style.display = "block";
}



//getting final result
function result() {
  alert("Succesfully Submitted");
  var x = document.getElementById("hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }


}

let score = 0;

function result1() {

  if (document.getElementById('correct1').checked) {
    score++;
  }
  if (document.getElementById('correct2').checked) {
    score++;
  }
  if (document.getElementById('correct3').checked) {
    score++;
  }
  // alert("your score is: " + score);

  document.getElementById('result').innerHTML = "Your final score is " + score +"/3";

}



function result2() {
  var result_display = getElementById('result');
  result_display.innerHTML = result_display.innerHTML + score;



}



function loginButton() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  console.log(username, password)
  if (username.value === "chandu" && password.value === "1234") {
    document.getElementById("adminLogin").style.display = "none"
    document.getElementById("mainPanel").style.display = "flex"
    username.value = null
    password.value = null
    appendAllQuestions()
  }
  else {
    alert("✨!!Username or Password Invalid!!✨");
    username.value = null
    password.value = null
  }
}

function adminPanel() {
  document.getElementById("mainBody").style.display = "none"
  document.getElementById("startBtn").style.display = "none"
  document.getElementById("adminBtn").style.display = "none"
  document.getElementById("adminLogin").style.display = "flex"


}

