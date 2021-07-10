const correctBox = document.getElementById("correctBox");
const incorrectBox = document.getElementById("incorrectBox");
const incorrectBox2 = document.getElementById("incorrectBox2");

// 不正解押したら、背景青にする
correctBox.addEventListener("click", function () {
  correctBox.style.background = "#287dff";
});
// 不正解押したら、文字白にする
correctBox.addEventListener("click", function () {
  correctBox.style.color = "#FFFFFF";
});

// 一つ目の不正解
// 不正解押したら、背景赤にする（正解の選択肢の背景青にする）
incorrectBox.addEventListener("click", function () {
  incorrectBox.style.background = "#FF5028";
  correctBox.style.background = "#287dff";
});
// 不正解押したら、文字白にする
incorrectBox.addEventListener("click", function () {
  incorrectBox.style.color = "#FFFFFF";
  correctBox.style.color = "#FFFFFF";
});

// 二つ目の不正解
// 不正解押したら、背景赤にする（正解の選択肢の背景青にする）
incorrectBox2.addEventListener("click", function () {
  incorrectBox2.style.background = "#FF5028";
  correctBox.style.background = "#287dff";
});
// 不正解押したら、文字白にする
incorrectBox2.addEventListener("click", function () {
  incorrectBox2.style.color = "#FFFFFF";
  correctBox.style.color = "#FFFFFF";
});

// 答え：正解ボックス非表示
// document.getElementById("answerBox").style.display = "none";
// 答え：不正解ボックス非表示
document.getElementById("answerBox2").style.display = "none";

// 正解をクリックしたら答えを表示
function clickBtnCorrect() {
  const answerBox = document.getElementById("answerBox");
  const incorrectBox = document.getElementById("incorrectBox");
  answerBox.style.display = "block";
  correctBox.classList.add("cannotclick");
  incorrectBox.classList.add("cannotclick");
  incorrectBox2.classList.add("cannotclick");
}

// 不正解をクリックしたら答えを表示
function clickBtnIncorrect() {
  const answerBox2 = document.getElementById("answerBox2");
  const correctBox = document.getElementById("correctBox");
  answerBox2.style.display = "block";
  correctBox.classList.add("cannotclick");
  incorrectBox.classList.add("cannotclick");
  incorrectBox2.classList.add("cannotclick");
}


