// 今日の日付を取得
const today = new Date();
const todayDate = today.getDate();
const todayMonth = today.getMonth() + 1; // getMonth()は0から始まるため、1を加算

// date-txtクラスの要素を全て取得
const dateTxtElements = document.querySelectorAll('.date-txt');

// 各要素をループ処理
dateTxtElements.forEach(element => {
    // 要素のテキストから日付部分を抽出
    const dateText = element.textContent;
    const date = parseInt(dateText.split(' ')[1]);

    // 今日の日付と一致する場合、かつ月が6月の場合に背景色を変更
    if (date === todayDate && todayMonth === 6) {
        element.style.backgroundColor = '#1c6888';
    }
});