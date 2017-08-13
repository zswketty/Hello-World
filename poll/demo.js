 var $box = document.getElementById('box');
 var $sum = document.getElementById('sum');
 var $process = document.getElementById('process');
 var sum = 0,
     process = '',
     num1 = '',
     num2 = '',
     temp = '',
     statu = false;
 $box.onclick = function(e) {
     var event = window.event || e;
     var ele = event.srcElement || event.target;
     var _className = ele.className;
     if (_className == 'd_num') {
         var num = ele.getAttribute('data-num'); //点击的按钮对应的值
         var NotNum = isNaN(num);
         if (!NotNum || num == '.') { //点击了数字
             if (!statu) { //还没点击过符号
                 if (num1 == '0') {
                     num1 = '';
                 }
                 num1 += num;
                 process = num1;
             } else { //已经点击过符号
                 if (num2 == '0') {
                     num2 = '';
                 }
                 num2 += num;
                 process = num1 + temp + num2;
             }
             $process.value = process;
         } else { //点击了符号
             if (num1 == '') { //非法操作
                 return false;
             }
             if (num == 'C') { //归零
                 num1 = '';
                 num2 = '';
                 process = '';
                 temp = '';
                 sum = '';
                 $process.value = '0';
                 $sum.value = '0';
                 statu = false;
                 return false;
             }
             if (num == '<-') { //退档
                 if (sum != '') {
                     return false;
                 }
                 if (num2 == '') {;
                     num1 = num1.substring(0, num1.length - 1);
                     if (num1 == '') {
                         num1 = '0';
                     }
                     process = num1;
                     $process.value = process;
                 } else {
                     num2 = num2.substring(0, num2.length - 1);
                     if (num2 == '') {
                         num2 = '0';
                     }
                     process = num1 + temp + num2;
                     $process.value = process;
                 }
                 return false;
             }
             if (num2 != '') { //a&b
                 if (num == '=') { //元操作到此结束
                     $process.value = process;
                 } else {
                     $process.value = process + num;
                 }
                 switch (temp) { //元操作继续
                     case '+':
                         sum = parseFloat(num1) + parseFloat(num2);
                         $sum.value = sum;
                         $process.value = process;
                         num1 = sum + '';
                         num2 = '';
                         break;
                     case '-':
                         sum = parseFloat(num1) - parseFloat(num2);
                         $sum.value = sum;
                         $process.value = process;
                         num1 = sum + '';
                         num2 = '';
                         break;
                     case '*':
                         sum = parseFloat(num1) * parseFloat(num2);
                         $sum.value = sum;
                         $process.value = process;
                         num1 = sum + '';
                         num2 = '';
                         break;
                     case '/':
                         sum = parseFloat(num1) / parseFloat(num2);
                         $sum.value = sum;
                         $process.value = process;
                         num1 = sum + '';
                         num2 = '';
                         break;
                     case '%':
                         sum = parseFloat(num1) % parseFloat(num2);
                         $sum.value = sum;
                         $process.value = process;
                         num1 = sum + '';
                         num2 = '';
                         break;
                 }
             } else { //a&？
                 if (num == '=') {
                     return false;
                 }
                 $process.value = process + num;
                 process = '';
             }
             if (num == '=') {
                 sum = '';
                 statu = false;
                 return false;
             }
             temp = num; //记录操作符
             statu = true; //已经触发操作状态
         }
     }
 };