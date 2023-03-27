'use strict'
// 1行目に記載している 'use strict' は削除しないでください
console.log("hello, world");

//映し出す写真のライブラリ
const picArray = [
  ["picture/selfIntroduction.png", ""],
  ["picture/ipsum.png", "Ipsum"],
  ["picture/RAV4_2nd.png", "RAV4"],
  ["picture/RAV4_3rd.png", "RAV4"],
  ["picture/Vanguard.png", "Vanguard"],
  ["picture/wish_2nd.png", "Wish"],
  ["picture/wish_2nd_MC.png", "Wish"],
  ["picture/hilux.png", "Hilux(IMV)"],
  ["picture/IS.png", "IS"],
  ["picture/NX_1st.png", "NX"],
  ["picture/NX_2nd.png", "NX"]
];

const picArray2 = [
  ["picture/thai.png","タイ"],
  ["picture/Iguazu_Fall.png","イグアスの滝"],
  ["picture/glacier.png","ペリートモレノ"]
];

//ハイライトするpタグを取得
const pTagline = document.getElementsByTagName("p");

//numの番号の車両の写真をメイン画面へ反映
let num = 0;

function changePic() {
  resetHighlightedLine();
  document.getElementById("start").textContent = "Next";

  if (num < picArray.length - 1) {
    num++;
  } else {
    num = 0;
  }

  document.getElementById("pic_window").src = picArray[num][0];
  pTagline[0].innerHTML = picArray[num][1];

  if (num > 0 && num < 7) {
    pTagline[1].style.backgroundColor = "coral";
  } else if (num === 7) {
    pTagline[2].style.backgroundColor = "coral";
  } else if (num > 7 && num < 10) {
    pTagline[3].style.backgroundColor = "coral";
  } else if (num === 10) {
    pTagline[4].style.backgroundColor = "coral";
  } else {
    document.getElementById("start").textContent = "Start";
  }
}

//自己紹介写真へ戻す
function resetPic() {
  num = 0;
  document.getElementById("pic_window").src = picArray[num][0];
  document.getElementById("start").textContent = "Start";
  pTagline[0].innerHTML = picArray[num][1];
  resetHighlightedLine(pTagline);
}

//ハイライト線を消す
function resetHighlightedLine() {
  for (let i = 0; i < pTagline.length; i++) {
    pTagline[i].style.backgroundColor = null;
  }
}

//Startボタンを押すと車両の写真を変更
const slidePicture = document.getElementById("start");
slidePicture.addEventListener("click", changePic);

//Resetボタンを押すと自己紹介写真へ戻す
const slideReset = document.getElementById("reset");
slideReset.addEventListener("click", resetPic);


//マウスポインタを乗せると思いでの写真を表示
let timerID="";
let counter = 0;
const photo = document.getElementById("hilux")

photo.addEventListener("mouseover", ()=>timerID=setInterval(showPic, 2000));
photo.addEventListener("mouseleave", returnPic);

//スライドショー表示用の写真
function showPic() {
  if (counter === picArray2.length) {
    counter = 0;
  }
  document.getElementById("pic_window").src = picArray2[counter][0];
  pTagline[0].innerHTML = picArray2[counter][1];
  counter++
}

function returnPic() {
  clearInterval(timerID);
  document.getElementById("pic_window").src = picArray[num][0];
  pTagline[0].innerHTML = picArray[num][1];
}
