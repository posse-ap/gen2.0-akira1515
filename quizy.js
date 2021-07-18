// if文にする
// シャッフルにする

let arr = [
['たかなわ'  ,'こうわ'      ,'たかわ'],
['かめいど'    ,'かめと'    ,'かめど'],
['こうじまち' ,'かゆまち'    ,'おかとまち'],
['おなりもん' ,'おかどもん'  ,'ごせいもん'],
['とどろき'   ,'たたら'     ,'たたりき'],
['しゃくじい' ,'いじい'     ,'せきこうい'],
['ぞうしき' ,'ざっしょく'    ,'ざっしき'],
['おかちまち' ,'ごしろちょう','みとちょう'],
['ししぼね'   ,'しこね'     ,'ろっこつ'],
['こぐれ'   ,'こばく'     ,'こしゃく'],
];

let img = [
  "https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png",
  "https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png",
  "https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png",
  "https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png",
];


for (let i = 0; i < 10; i++) {

  let classes =
    '<div class="container">' +
    '<h3> <span class="underline">' + (i + 1) +'.この地名はなんて読む？ </span> </h3>' +
    '<img class="picture" src=' + img[i] + '>' +
    '<p class="box" id="correctBox' + i + '" onclick="clickBtnCorrect(' + i +')" > ' + arr[i][0] + '</p>' +
    '<p class="box" id="incorrectBox1-' + i + '" onclick="clickBtnIncorrect(' + i +')"> ' + arr[i][1] + '</p>' +
    '<p class="box" id="incorrectBox2-' + i + '" onclick="clickBtnIncorrect2(' + i +')"> ' + arr[i][2] + '</p>' +
    '<p class="answer" id="answerBox' + i + '"> <span class="correct-line"> 正解！ </span> <br/> <span class="answer2"> 正解は「' + arr[i][0] + '」です！ </span> </p>' +
    '<p class="answer" id="answerBox2' + i + '"> <span class="incorrect-line"> 不正解！ </span> <br/> <span class="answer2"> 正解は「' + arr[i][0] + '」です！ </span> </p>' +
    "</div>";

  document.write(classes + "<br>");
}

const correctBox = document.getElementById("correctBox");

// 正解を押した時
var clickBtnCorrect = function (questionNumber){
  let correctBox = document.getElementById("correctBox" + questionNumber );
  let incorrectBox1 = document.getElementById("incorrectBox1-" + questionNumber);
  let incorrectBox2 = document.getElementById("incorrectBox2-" + questionNumber);

  //   正解押したら、背景青にする
  correctBox.style.backgroundColor = "#287dff";
  //   正解押したら、文字白にする
  correctBox.style.color = "#FFFFFF";

  const answerBox = document.getElementById("answerBox" + questionNumber );
  // 正解を表示する
  answerBox.style.display = "block";
  correctBox.classList.add("cannotclick");
  incorrectBox1.classList.add("cannotclick");
  incorrectBox2.classList.add("cannotclick");
};

// 一問目の不正解を押した時
var clickBtnIncorrect = function (questionNumber) {
  let incorrectBox1 = document.getElementById("incorrectBox1-" + questionNumber);
  let incorrectBox2 = document.getElementById("incorrectBox2-" + questionNumber);
  let correctBox = document.getElementById("correctBox" + questionNumber);
 
  //  一問目の不正解を赤にする
  incorrectBox1.style.backgroundColor = "#FF5028";
  correctBox.style.backgroundColor = "#287dff";
  // 不正解押したら、文字白にする
  incorrectBox1.style.color = "#FFFFFF";
  correctBox.style.color = "#FFFFFF";

  const answerBox2 = document.getElementById("answerBox2" + questionNumber);
  // 正解を表示する
  answerBox2.style.display = "block";
  correctBox.classList.add("cannotclick");
  incorrectBox1.classList.add("cannotclick");
  incorrectBox2.classList.add("cannotclick");
};

// 二問目の不正解を押した時 
var clickBtnIncorrect2 = function (questionNumber) {
  let incorrectBox1 = document.getElementById("incorrectBox1-" + questionNumber);
  let incorrectBox2 = document.getElementById("incorrectBox2-" + questionNumber);
  let correctBox = document.getElementById("correctBox" + questionNumber);
 
  // 二問目の不正解を赤にする
  incorrectBox2.style.backgroundColor = "#FF5028";
  correctBox.style.backgroundColor = "#287dff";
  // 不正解押したら、文字白にする
  incorrectBox2.style.color = "#FFFFFF";
  correctBox.style.color = "#FFFFFF";

  const answerBox2 = document.getElementById("answerBox2" + questionNumber);
  // 正解を表示する
  answerBox2.style.display = "block";
  correctBox.classList.add("cannotclick");
  incorrectBox1.classList.add("cannotclick");
  incorrectBox2.classList.add("cannotclick");
};


