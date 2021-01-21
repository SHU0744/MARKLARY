const jsHamburger = document.getElementById("js-hamburger");

const body = document.body;

const spHeaderMenu = document.getElementById("js-global-menu");
const spTop = document.getElementById("firstTop");


const navClick = document.querySelectorAll('#navA');



//クリック
navClick.forEach((item) => {
  item.addEventListener('click', () => {
    jsHamburger.setAttribute("aria-expanded", "false");
    spHeaderMenu.style.visibility = "hidden";
    spTop.style.visibility = "visible";
    spHeaderMenu.setAttribute("area-hidden", "true");
  });
});








//クリックはaddEventListenerでイベント登録しました。
jsHamburger.addEventListener("click", function () {
  body.classList.toggle("is-drawerActive");
  //thisはクリックした要素、getAttributeは属性の値を取得する
  if (this.getAttribute("aria-expanded") == "false") {
    //setAttributeは属性に値をセットする
    this.setAttribute("aria-expanded", "true");
    //visibilityの値を表示する
    spHeaderMenu.style.visibility = "visible";
    spTop.style.visibility = "hidden";
    spHeaderMenu.setAttribute("area-hidden", "false");
  } else {
    this.setAttribute("aria-expanded", "false");
    spHeaderMenu.style.visibility = "hidden";
    spTop.style.visibility = "visible";
    spHeaderMenu.setAttribute("area-hidden", "true");
  }
});


let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 100) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});




//フォームバリデーション
//送信ボタン取得
const $submit = document.querySelector('.submit');

// emailの正規表現
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//メール
const $mail = document.getElementById('mail');
// console.log($mail);
//メールアラート
const $alertEmail = document.getElementById('alertEmail');
// console.log($alertEmail);

// パスワード
//半角英字と半角数字それぞれ1文字以上含む8文字以上20文字以下
const passRegex = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,20}$/i;

const $pass = document.getElementById('pass');
// console.log($pass);
const $passRe = document.getElementById('passRe');
// console.log($passRe);

// パスワードアラート
const $alertPass = document.getElementById('alertPass');
// console.log($alertPass);


const $checkbox = document.getElementById('checkbox');


$checkbox.addEventListener('click', () => {

  if ($pass.type === "password") {
    $pass.type = "text";
    $passRe.type = "text";
  } else if ($pass.type === "text") {
    $pass.type = "password";
    $passRe.type = "password";
  }

})

let count = 0;

$submit.addEventListener('click', () => {

  //メール
  if (emailRegex.test($mail.value)) {
    $alertEmail.classList.remove('show');
    count++;
  } else {
    $alertEmail.classList.add('show');
    count = 0;
  }

  $checkbox.checked = false;

  $pass.type = "password";
  $passRe.type = "password";

  if (passRegex.test($pass.value) && passRegex.test($passRe.value)) {


    if ($pass.value === $passRe.value) {
      $alertPass.classList.remove('show');
      count++;

    } else {
      $alertPass.classList.add('show');
      count = 0;
    }

  } else {
    $alertPass.classList.add('show');
    count = 0;
  }

  if (count === 2) {
    $submit.type = "submit";
  } else {
    count = 0;
  }

})
