const question_list = [
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


const question_img = [
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
    '<div class ="container">'
        + `<h1 class="question_num">${i + 1}.この地名はなんて読む？</h1>`
        + `<img src="${question_img[i]}" alt="">`
        + `<ul id="question_lists_${i}" class="question_lists">`
        +   `<li class="list" id="answerList_${i}_0" onclick="check(${i},0,0)">${question_list[i][0]}</li>`
        +   `<li class="list" id="answerList_${i}_1" onclick="check(${i},1,0)">${question_list[i][1]}</li>`
        +   `<li class="list" id="answerList_${i}_2" onclick="check(${i},2,0)">${question_list[i][2]}</li>`
        + '</ul>'
        + `<div class="answer_list" id="answerBox_${i}_0"><p class="correct_underline">正解！</p><p class="answer_display">正解は「${question_list[i][0]}」です！</p></div>`
        + `<div class="answer_list" id="answerBox_${i}"><p class="incorrect_underline">不正解！</p><p class="answer_display">正解は「${question_list[i][0]}」です！</p></div>`
    +'</div>';
    document.write(classes + "</br>");
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

const check = function(question_number, selection_number, answer_number){
        const click_number = document.getElementById("answerList_" + question_number + "_" + selection_number);//選択肢liのidを取得
        const always_answer_number = document.getElementById("answerList_" + question_number + "_0");//選択肢の答えを記憶
        const click_invalidation = document.getElementById("question_lists_ " + question_number);//選択肢のulのidを取得
        const correct_answerBox = document.getElementById("answerBox_" + question_number + "_" + selection_number);//正解のanswerBoxのidを取得 
        const incorrect_answerBox = document.getElementById("answerBox_" + question_number);//不正解のanswerBoxのidを取得

    if(selection_number === answer_number){
        click_number.classList.add("correct_selection"); // 選択肢の背景青くする、文字白くする
        correct_answerBox.style.display = "block";// answerBoxを表示
        click_invalidation.style.pointerEvents = "none";// 他のボタン押せなくする
    }else{
        click_number.classList.add("incorrect_selection");// 選択肢の背景赤くする、文字白くする
        always_answer_number.classList.add("correct_selection");// 正解の選択肢の背景を青くする、文字白くする
        incorrect_answerBox.style.display = "block";// answerBoxを表示
        click_invalidation.style.pointerEvents = "none";// 他のボタン押せなくする
    }
}