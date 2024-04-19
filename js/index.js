// 必要な情報を取得
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.close');
const sec = document.querySelector('.sec');
const title = document.querySelector('.title');
const comment = document.querySelector('.comment');
const modal = document.querySelector('.modal');

// カウンターとタイマー設定
let counter = 0;
let timer;

// startを押したときの動作
start.addEventListener('click',function(){
  timer = setInterval(function(){
    counter++;
  },1000);
  toggle();
});

// stopを押したときの動作
stop.addEventListener('click',function(){
  clearInterval(timer);
  toggle();
  if(counter === 10){
    setTimeout(function(){
      modal.classList.remove('hidden');
      sec.textContent = `${counter}秒でした！`;
      title.innerHTML = '<span>Congratulations</span>10秒チャレンジ達成！おめでとう！！';
      comment.textContent = 'きっと良い1日になるよ！';
    },2000);  
  } else if(counter < 10){
    modal.classList.remove('hidden');
    sec.textContent = `${counter}秒でした！`;
    title.innerHTML = '10秒チャレンジ失敗';
    let mSec = 10 - counter;
    comment.textContent = `${mSec}秒早かった...`;
  } else {
    modal.classList.remove('hidden');
    sec.textContent = `${counter}秒でした！`;
    title.innerHTML = '10秒チャレンジ失敗';
    let pSec = counter - 10;
    comment.textContent = `${pSec}秒遅かった...`;
  }
});

// resetを押したときの動作
reset.addEventListener('click',function(){
  counter = 0;
  modal.classList.add('hidden');
  sec.textContent = '';
  title.innerHTML = '';
  comment.textContent = '';
});

// 片方のボタンを押したら、片方を押せなくする関数
function toggle(){
  if(start.disabled){
    start.disabled = false;
    stop.disabled = true;
  } else {
    start.disabled = true;
    stop.disabled = false;
  }
}


