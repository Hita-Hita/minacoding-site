// CSVファイルを読み込む関数
function loadCSV(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open('GET', '../assets/csv/theme-data-ja.csv', true);
    xhr.send();
}

// CSVデータを解析してHTMLに挿入する関数
function insertthemeData(csvData) {
    var lines = csvData.split('\n');
    var container = document.getElementById('theme-gallery');

    for (var i = 1; i < lines.length; i++) {
        var data = lines[i].split(',');
        var date = data[0];
        var theme = data[1];
        var description = data[2];

        var themeBox = document.createElement('div');
        themeBox.className = 'theme-box';
        themeBox.innerHTML = `
      <div class="date-txt">${date}</div>
      <p class="theme-txt">${theme}</p>
      <p class="theme-description">${description}</p>
    `;

        container.appendChild(themeBox);
    }
}

// CSVファイルを読み込んでデータを挿入する
loadCSV(function (csvData) {
    insertthemeData(csvData);
});