const selection = [
['たかなわ'   ,'こうわ'      ,'たかわ'],
['かめいど'   ,'かめと'      ,'かめど'],
['こうじまち' ,'かゆまち'     ,'おかとまち'],
['おなりもん' ,'おかどもん'   ,'ごせいもん'],
['とどろき'   ,'たたら'      ,'たたりき'],
['しゃくじい' ,'いじい'       ,'せきこうい'],
['ぞうしき'   ,'ざっしょく'   ,'ざっしき'],
['おかちまち' ,'ごしろちょう'  ,'みとちょう'],
['ししぼね'   ,'しこね'      ,'ろっこつ'],
['こぐれ'    ,'こばく'       ,'こしゃく'],
];

const img = [
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
    '<div class="container">' 
      + `<h3> <span class="underline">${i+1}.この地名はなんて読む？ </span> </h3>` 
      + `<img class="picture" src=${img[i]}>` 
      + `<ul id="answerLists_${i}" style="display: flex;flex-direction: column">`
      +   `<li class="box" id="answerList_${i}_0" onclick="check(${i},0,0)"> ${selection[i][0]}</li>` 
      +   `<li class="box" id="answerList_${i}_1" onclick="check(${i},1,0)"> ${selection[i][1]}</li>` 
      +   `<li class="box" id="answerList_${i}_2" onclick="check(${i},2,0)"> ${selection[i][2]}</li>` 
      + '</ul>'
      + `<p class="answerBox" id="answerBox_${i}_0"> <span class="correct-line"> 正解！ </span> <br/> <span class="answerBox2"> 正解は「${selection[i][0]}」です！ </span> </p>` 
      + `<p class="answerBox" id="answerBox_${i}"> <span class="incorrect-line"> 不正解！ </span> <br/> <span class="answerBox2"> 正解は「${selection[i][0]}」です！ </span> </p>` 
    + "</div>";
  document.write(classes + "<br>");
}

// シャッフル
const list_items = document.querySelectorAll("li");  
function rand(){
    // 配列をランダムにソート（Fisher-Yates shuffle）
    for (var i = list_items.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = [i];
        [i] = [r];
        [r] = tmp;
    }
    return tmp;
}
Array.from(list_items).forEach(elm =>{ elm.style.order = rand()});

const check = function(questionNumber, selectionNumber, answerNumber){
  const clickNumber = document.getElementById("answerList_" + questionNumber + "_" + selectionNumber);    //クリックしたliのidを取得
  const alwaysAnswerNumber = document.getElementById("answerList_" + questionNumber + "_0");              //選択肢の答えを記憶
  const click_invalidation = document.getElementById("answerLists_" + questionNumber);                    //クリックしたulのidを取得
  const correctAnswerBox = document.getElementById("answerBox_" + questionNumber + "_" + selectionNumber);//正解を押した時のanswerBoxのidを取得
  const incorrectAnswerBox = document.getElementById("answerBox_" + questionNumber);                      //不正解を押した時のanswerBoxのidを取得

  if(selectionNumber === answerNumber){
    clickNumber.classList.add("correctSelection");          //正解の選択肢の色を青にする
    correctAnswerBox.style.display = "block";               //正解のanswerBoxを表示
    click_invalidation.style.pointerEvents="none";          //クリック不可
  }else{
    clickNumber.classList.add("incorrectSelection");        //不正解の選択肢を赤にする
    alwaysAnswerNumber.classList.add("correctSelection");   //正解の選択肢の色を青にする
    incorrectAnswerBox.style.display = "block";             //不正解のanswerBoxを表示
    click_invalidation.style.pointerEvents="none";          //クリック不可
  }
}