var btn1 = document.getElementsByTagName('button')[0];
var btn2 = document.getElementsByTagName('button')[1];
var p = document.getElementById('resShow');

function printText() {
    p.textContent = "这是延迟显示的结果！";
}

// 接收延时函数
var timeout;

btn1.onclick = function() {
    // 执行延时函数
    timeout = setTimeout(function() {
        printText();
    }, 2000);
}

btn2.onclick = function() {
    // 取消延时函数
    clearTimeout(timeout);
}